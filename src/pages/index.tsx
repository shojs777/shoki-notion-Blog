import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import SideContents from '../components/sideContents'
import blogStyles from '../styles/blog.module.css'
import sharedStyles from '../styles/shared.module.css'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import { getBlogLink, postIsPublished } from '../lib/blog-helpers'
import { textBlock } from '../lib/notion/renderers'
import getNotionUsers from '../lib/notion/getNotionUsers'
import getBlogIndex from '../lib/notion/getBlogIndex'
import { Style } from '@mui/icons-material'
import dayjs from 'dayjs'

export async function getStaticProps({ preview }) {
  const postsTable = await getBlogIndex()
  console.log(postsTable)

  const authorsToGet: Set<string> = new Set()
  const posts: any[] = Object.keys(postsTable)
    .map((slug) => {
      const post = postsTable[slug]
      // remove draft posts in production
      if (!preview && !postIsPublished(post)) {
        return null
      }
      post.Authors = post.Authors || []
      for (const author of post.Authors) {
        authorsToGet.add(author)
      }
      return post
    })
    .filter(Boolean)

  const { users } = await getNotionUsers([...authorsToGet])

  posts.map((post) => {
    post.Authors = post.Authors.map((id) => users[id].full_name)
  })

  return {
    props: {
      preview: preview || false,
      posts,
    },
    revalidate: 10,
  }
}

const Index = ({ posts = [], preview }) => {
  return (
    <>
      <Header titlePre="Blog" />
      {preview && (
        <div className={blogStyles.previewAlertContainer}>
          <div className={blogStyles.previewAlert}>
            <b>Note:</b>
            {` `}Viewing in preview mode{' '}
            <Link href={`/api/clear-preview`}>
              <button className={blogStyles.escapePreview}>Exit Preview</button>
            </Link>
          </div>
        </div>
      )}
      <div className={blogStyles.container}>
        <div className={blogStyles.blogIndex}>
          <div className={blogStyles.search}>
            <h2 style={{ marginRight: '10px', color: '#00000' }}>Tags</h2>
            <ManageSearchIcon />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className={blogStyles.tagArea}></div>
          {posts.length === 0 && (
            <p className={blogStyles.noPosts}>There are no posts yet</p>
          )}
          {/* <div className={blogStyles.postContainer}> */}
          {console.log(posts)}
          {posts.map((post) => {
            return (
              <Link href="/blog/[slug]" as={getBlogLink(post.Slug)}>
                <div className={blogStyles.postPreview} key={post.Slug}>
                  {post.Date && (
                    <div className={blogStyles.date}>
                      {dayjs(post.Date).format('YYYY/MM/DD')}に投稿
                    </div>
                  )}
                  <div className={blogStyles.subContainer}>
                    {post.Icon ? (
                      <div className={blogStyles.icon}>{post.Icon}</div>
                    ) : (
                      <div className={blogStyles.noIcon}>
                        <ImageNotSupportedIcon />
                        <p>
                          No icon
                          {/* {(post.preview || []).map((block, idx) =>
                          textBlock(block, true, `${post.Slug}${idx}`)
                          )} */}
                        </p>
                      </div>
                    )}
                    <h3 className={blogStyles.titleContainer}>{post.Page}</h3>
                  </div>
                  <div className={blogStyles.cardTagArea}>tagArea</div>
                </div>
              </Link>
            )
          })}
          {/* </div> */}
        </div>
        <SideContents />
      </div>
      <Footer />
    </>
  )
}

export default Index
