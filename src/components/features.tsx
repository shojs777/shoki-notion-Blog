import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import IcecreamIcon from '@mui/icons-material/Icecream'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import SchoolIcon from '@mui/icons-material/School'
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import GitHubIcon from '@mui/icons-material/GitHub'
import CodeIcon from '@mui/icons-material/Code'
import JavascriptIcon from '@mui/icons-material/Javascript'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'
import StorageIcon from '@mui/icons-material/Storage'
import TerminalIcon from '@mui/icons-material/Terminal'
import MapIcon from '@mui/icons-material/Map'
import { autocompleteClasses } from '@mui/material'

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

const career = [
  {
    text: '大学卒業',
    icon: SchoolIcon,
  },
  {
    text: 'プログラミングスクール卒業',
    icon: LaptopChromebookIcon,
  },
  {
    text: '業務委託で実務経験中',
    icon: WorkHistoryIcon,
  },
]

const skills = [
  {
    text: 'Git/GitHub/GitLab',
    icon: GitHubIcon,
  },
  {
    text: 'HTML/CSS',
    icon: CodeIcon,
  },
  {
    text: 'JavaScript',
    icon: JavascriptIcon,
  },
  {
    text: 'React',
    icon: IntegrationInstructionsIcon,
  },
  {
    text: 'Next.js',
    icon: IntegrationInstructionsIcon,
  },
  {
    text: 'TypeScript',
    icon: IntegrationInstructionsIcon,
  },
  {
    text: 'Firebase',
    icon: StorageIcon,
  },
  {
    text: 'Svelte.js',
    icon: IntegrationInstructionsIcon,
  },
  {
    text: 'Prisma',
    icon: MapIcon,
  },
  {
    text: 'VScode,MacOS',
    icon: TerminalIcon,
  },
]

export const Hobby = () => (
  <div className="features">
    {hobby.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        <Icon height={24} width={24} />
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)
export const Career = () => (
  <div className="features">
    {career.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        <Icon height={24} width={24} />
        <h4 style={{ width: 'auto', wordBreak: 'break-all' }}>{text}</h4>
      </div>
    ))}
  </div>
)
export const Skills = () => (
  <div className="features">
    {skills.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        <Icon height={24} width={24} />
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)
