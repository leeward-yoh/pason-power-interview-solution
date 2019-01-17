import * as React from 'react'
import { Container, Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'
import pasonLogo from '../images/logo.png'

class NavigationWrapper extends React.Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { children } = this.props
    const { visible } = this.state

    return (
      <div>
        <Menu fixed="top">
          <Container style={{ width: '100%' }}>
            <Menu.Item
              as="a"
              onClick={this.toggleVisibility}
              style={{ width: 260, padding: '.6em 1.14285714em' }}
              header
            >
              <Image
                size="tiny"
                src={pasonLogo}
                style={{ marginRight: 'auto', marginLeft: 'auto' }}
              />
            </Menu.Item>

            <Menu.Item position="right">
              <Button as="a">Log in</Button>
              <Button as="a" primary style={{ marginLeft: '0.5em' }}>Sign Up</Button>
            </Menu.Item>
          </Container>
        </Menu>
        <Sidebar.Pushable as={Segment} className="full-height below-nav">
          <Sidebar as={Menu} animation="slide along" visible={visible} vertical inverted>
            <Menu.Item
              as={NavLink}
              to="/"
              name="home"
            >
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/dash"
              name="Dashboard"
            >
              <Icon name="grid layout" />
              Dashboard
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher className="app-main">
            <Segment basic>
              {children}
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default withRouter(NavigationWrapper)
