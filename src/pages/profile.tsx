import Header from '../components/header'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'
import ExtLink from '../components/ext-link'

export default function Profile() {
  return (
    <>
      <Header titlePre="Profile" />
      <div className={sharedStyles.layout}>
        <img
          src="/profile-img.png"
          height="85"
          width="250"
          alt="profile-image"
        />
        <h1>shoki Nakashima</h1>
        <h3>hobby</h3>
        <Features />
        <h3>career</h3>
        <Features />
        <h3>skills</h3>
        <Features />
        <h3>portfolio</h3>
        <ExtLink href="https://vercel.com">Vercel</ExtLink>
      </div>
    </>
  )
}
