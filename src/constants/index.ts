import BlogIcon from '@mui/icons-material/Notes'
import HotspotIcon from '@mui/icons-material/BorderStyle'
import Person from '@mui/icons-material/Person'
import { BLOG, HOTSPOT_EDITOR, PROFILE } from './routes';

export const EN = 'en'
export const ES = 'es'
export const DEFAULT_LOCALE = EN

export const sidebarMenu = [
    {
        name: 'sidebar.menu.blog',
        destination: BLOG,
        icon: BlogIcon,
    },
    {
        name: 'sidebar.menu.hotspotEditor',
        destination: HOTSPOT_EDITOR,
        icon: HotspotIcon,
    },
]

export const statusbarMenu = [
    {
        name: 'statusbar.menu.profile',
        destination: PROFILE,
        icon: Person,
    }
]

export const langList = [
    EN,
    ES,
]
