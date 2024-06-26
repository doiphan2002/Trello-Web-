import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { Button, Tooltip } from '@mui/material'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import { capitalizeFirstLetter } from '~/utils/formatters'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }

}

function BoardBar({ board }) {

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLE}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable />
        </Tooltip>

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label="Automation"
          clickable />

        <Chip
          sx={MENU_STYLE}
          icon={<FilterListIcon />}
          label="Filters"
          clickable />

      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<LibraryAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >Invite</Button>
        <AvatarGroup
          max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
               />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>

          <Tooltip title="doiphandev">
            <Avatar alt="Remy Sharp"
              src='https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/416123341_3546985152210005_132999661123733663_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=v2z-1VrMkooQ7kNvgHmKutN&_nc_oc=Adg_gvHKMqXfYBi5cajHLuDjewI_jxR6fvFOa29C70wn6fF5XBxXWqMpZGhWW4S0McZIfZbSuQqIjsFjSills2cb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AYDIAOd-WrTYofA6klkWLMkdDSwKQN4HYl53K8ZrhHAsIA&oe=664A3EF5' />
          </Tooltip>
        </AvatarGroup>

      </Box>
    </Box>
  )
}

export default BoardBar
