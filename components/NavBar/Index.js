import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NavMenu from './NavMenu'
import { links } from './links-json'
import Button from '@material-ui/core/es/Button/Button'
import Typography from '@material-ui/core/es/Typography/Typography'
import Logo from '../Layouts/Logo'
import NavigationDrawer from './NavigationDrawer'

const styles = {
  root: {
    flexGrow: 1,
    position: 'relative',
    zIndex: 999
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class Index extends React.Component {
  state = {
    leftDrawerOpen: true
  }

  toggleDrawer = open => {
    this.setState({ leftDrawerOpen: open })
  }

  render = () => {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon onClick={this.toggleDrawer.bind(this, true)} />
            </IconButton>
            {/*left*/}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <a href="/">
                <Logo width="88px" fill="#fff" />
              </a>
            </Typography>

            {/*Right*/}
            {links.map(link => {
              const { id, title, url, dropdown } = link
              return link.dropdown !== undefined ? (
                <NavMenu key={id} menu={[{ id, title, url }, ...dropdown]}>
                  {title}
                </NavMenu>
              ) : (
                <Button key={id} href={url} color="inherit">
                  {title}
                </Button>
              )
            })}
          </Toolbar>
        </AppBar>
        <NavigationDrawer
          toggleDrawer={this.toggleDrawer}
          leftDrawerOpen={this.state.leftDrawerOpen}
          links={links}
        />
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Index)