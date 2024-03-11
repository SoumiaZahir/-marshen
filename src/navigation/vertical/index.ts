// ** Icon imports
import Login from 'mdi-material-ui/Login'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import { MdDashboard } from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { LiaClipboardListSolid } from "react-icons/lia";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineEuro } from "react-icons/md";


// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: MdDashboard,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'User Profil',
      icon: FaUserLarge,
      path: ' ',
      openInNewTab: true
    },
    {
      title: 'Agenda',
      icon: LiaClipboardListSolid,
      path: '',
      openInNewTab: true
    },
    {
      title: 'Points De Vente',
      icon: SiHomeassistantcommunitystore,
      path: '',
      openInNewTab: true
    },
    {
      title: 'Facing',
      icon: HiMiniClipboardDocumentList,
      path: '',
      openInNewTab: true
    },
    {
      title: 'Prix',
      icon: MdOutlineEuro,
      path: '',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
  ]
}

export default navigation
 // {
    //   title: 'Anonyme',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Anonyme',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
