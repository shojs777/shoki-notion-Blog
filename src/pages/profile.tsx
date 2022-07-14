import Header from '../components/header'
import Features from '../components/features'
import Styles from '../styles/profile.module.css'
import ExtLink from '../components/ext-link'
import Footer from '../components/footer'

export default function Profile() {
  return (
    <>
      <Header titlePre="Profile" />
      <div className={Styles.container}>
        <div className={Styles.avater}>
          <img
            src="/profile-img.png"
            height="85"
            width="250"
            alt="profile-image"
          />
        </div>
        <h1 className={Styles.name}>Shoki Nakashima</h1>
        <h3>hobby</h3>
        <Features />
        <h3>career</h3>
        <Features />
        <h3>skills</h3>
        <Features />
        <h3>portfolio</h3>
        <div className={Styles.portfolio}>
          <ExtLink href="https://vercel.com">Vercel</ExtLink>
        </div>
      </div>
      <Footer />
    </>
  )
}
