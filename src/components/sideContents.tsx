import Style from '../styles/sideContents.module.css'
export default function SideContents() {
  return (
    <div className={Style.container}>
      <div className={Style.firstContent}></div>

      <div className={Style.secondContent}>
        <h2 className={Style.text}>経歴</h2>
      </div>
    </div>
  )
}
