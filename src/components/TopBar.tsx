import React, { ReactElement, useContext } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Image from 'next/image'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
import MoonIcon from '@material-ui/icons/Brightness2Outlined'
import CodeIcon from '@material-ui/icons/Code'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { Theme, withStyles, createStyles } from '@material-ui/core/styles'
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
//import { ToggleThemeContext } from '../theme'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import { Tooltip } from '@material-ui/core'
import style from '../../styles/TopBar.module.css'
import { NAME_AND_DOMAIN } from '../types/constants.ts'
import { author_name } from '../types/constants'

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: -3,
      top: 4,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }),
)(Badge);

export const TopBar = (): ReactElement => {
  const trigger = useScrollTrigger()
  //const { toggleTheme, isDark } = useContext(ToggleThemeContext)

  return (
    <AppBar className={trigger ? style.hide : style.show} position="sticky">
      <Toolbar className={style.toolbar}>
        <Link href="/">
          <a>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={100}
              width={100}
              alt={author_name}
            />
          </a>
        </Link>
        <div className={style.toolbarContent}>
          <Link href="/">
            <Button variant="text" color="inherit">
              <CodeIcon />&nbsp;
              {NAME_AND_DOMAIN}
            </Button>
          </Link>
        </div>
        <div className={style.toolbarContent}>
          <Link href="/about">
            <Button variant="text" color="inherit">
              About
            </Button>
          </Link>
        </div>
        <div className={style.toolbarRight}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="error">
              <ShoppingCartIcon  fontSize="large" />
            </StyledBadge>
          </IconButton>
        </div>
        {/*
        <div className={classes.toolbarRight}>
          <Tooltip title="Toggle Theme">
            <Button variant="text" color="inherit" onClick={toggleTheme}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </Button>
          </Tooltip>
        </div>
        */}
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
