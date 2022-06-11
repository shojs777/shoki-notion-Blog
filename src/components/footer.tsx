import CopyrightIcon from '@mui/icons-material/Copyright'
import dayjs from 'dayjs'
import Style from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={Style.text}>
      <CopyrightIcon sx={{ color: 'white', fontSize: 'small' }} />
      {' ' + dayjs(new Date()).format('YYYY') + ' ' + 'Shoki Nakashima'}
    </footer>
  )
}
