import BlogIcon from '@mui/icons-material/Notes'
import HotspotIcon from '@mui/icons-material/BorderStyle'
import { BLOG, HOTSPOT_EDITOR } from './routes';

export const sidebarMenu = [
    {
        name: 'Blog',
        destination: BLOG,
        icon: BlogIcon,
    },
    {
        name: 'Hotspot Editor',
        destination: HOTSPOT_EDITOR,
        icon: HotspotIcon,
    },
]
