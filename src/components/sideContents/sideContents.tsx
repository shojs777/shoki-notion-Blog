import Style from './sideContents.module.css'
export default function SideContents() {
  return (
    <div className={Style.container}>
      <div className={Style.firstContent}>
        {/* <div className={Style.card}>
          <div className={Style.content}>
            <div className={Style.front}>
              <h3 className={Style.title}>Hey</h3>
              <p className={Style.subtitle}>Hover me :)</p>
            </div>

            <div className={Style.back}>
              <p className={Style.description}>
                Cool description so you can read it too my friend
              </p>
            </div>
          </div>
        </div> */}
      </div>

      <div className={Style.secondContent}>
        <h2 className={Style.text}>経歴</h2>
        {/* <div className={Style.cardB}>
          <div className={Style.cardBinfo}>
            <p className={Style.cardBbio}>John Doe</p>
            <p className={Style.titleB}>Web Dev</p>
          </div>
          <div className={Style.subtitleB}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
