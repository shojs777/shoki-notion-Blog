import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import IcecreamIcon from '@mui/icons-material/Icecream'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import MenuBookIcon from '@mui/icons-material/MenuBook'

const hobby = [
  {
    text: 'サッカー観戦＆プレイ',
    icon: SportsSoccerIcon,
  },
  {
    text: 'いろんなアイスを食べる',
    icon: IcecreamIcon,
  },
  {
    text: 'カラオケ',
    icon: LibraryMusicIcon,
  },
  {
    text: 'ドライブ',
    icon: DriveEtaIcon,
  },
  {
    text: 'カメラ',
    icon: PhotoCameraBackIcon,
  },
  {
    text: '仮想通貨',
    icon: CurrencyBitcoinIcon,
  },
  {
    text: '読書',
    icon: MenuBookIcon,
  },
]

export const Hobby = () => (
  <div className="features">
    {hobby.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {<Icon height={24} width={24} />}
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)
