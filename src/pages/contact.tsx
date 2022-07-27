import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import Footer from '../components/footer'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/shokyyy777',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/shojs777',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img
            src="/contact.png"
            alt="contact-img"
            // style={{ height: 30, width: 30, margin: 20 }}
          />
        </div>

        <h1 style={{ textAlign: 'center' }}>Contact</h1>

        <div className={contactStyles.name}>
          <Envelope style={{ height: 30, width: 30, margin: 20 }} />
          <div style={{ margin: 'auto' }}>shokinakashima2561@gmail.com</div>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <>
                <ExtLink key={link} href={link} aria-label={alt}>
                  <Comp height={32} />
                </ExtLink>
              </>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}
