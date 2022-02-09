import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Plofile" />
      <div className={sharedStyles.layout}>
        <img
          src="/plofile-img.png"
          height="85"
          width="250"
          alt="plofile-image"
        />
        <h1>shoki Blog</h1>
      </div>
    </>
  )
}
