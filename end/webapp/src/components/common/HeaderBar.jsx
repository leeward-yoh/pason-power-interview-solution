import React from 'react'
import { Container, Image, Menu, Button } from 'semantic-ui-react'

const HeaderBar = () => (
  <div>
    <Menu fixed="top">
      <Container>
        <Menu.Item as="a" header>
          <Image
            size="mini"
            src="http://demo.pasonpowerint.com/static/logo.png"
            style={{ marginRight: '1.5em' }}
          />
        </Menu.Item>
        <Menu.Item as="a">Home</Menu.Item>

        <Menu.Item position="right">
          <Button as="a">Log in</Button>
          <Button as="a" primary style={{ marginLeft: '0.5em' }}>Sign Up</Button>
        </Menu.Item>
      </Container>
    </Menu>
  </div>
)

export default HeaderBar
