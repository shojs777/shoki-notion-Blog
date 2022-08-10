import Header from '../components/header'
import { Hobby, Career, Skills } from '../components/features'
import Styles from '../styles/profile.module.css'
import ExtLink from '../components/ext-link'
import Footer from '../components/footer'
import GitHubIcon from '@mui/icons-material/GitHub'

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
        <Hobby />
        <h3>career</h3>
        <Career />
        <h3>skills</h3>
        <Skills />
        <h3>portfolio</h3>
        <div className={Styles.portfolio}>
          <ExtLink href="https://github.com/shojs777/shoki-notion-Blog">
            <button className={Styles.button}>
              <div className={Styles.buttonContent}>
                <GitHubIcon height={32} style={{ marginRight: '10px' }} />
                <p>click me!</p>
              </div>
            </button>
          </ExtLink>
        </div>
      </div>
      <Footer />
    </>
  )
}
