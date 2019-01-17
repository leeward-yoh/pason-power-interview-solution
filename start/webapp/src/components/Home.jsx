import * as React from 'react'
import { Container, Header, Divider, Image, Segment } from 'semantic-ui-react'
import powerRangers from '../images/power-rangers-1024x674.jpg'

const Home = () => (
  <Segment padding="very" vertical basic>
    <Container text textAlign="center">
      <Header as="h3" style={{ fontSize: '1.8em' }}>You think you have what it takes to join the Rangers?</Header>
      <Image src={powerRangers} fluid />
      <Divider
        as="h4"
        className="header"
        horizontal
        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
      >
        It&#39;s morphin&#39; time!
      </Divider>
      <p style={{ fontSize: '1.33em' }}>
        Show us what you can do with this coding exercise.<br /><br />
        Good luck!
      </p>
    </Container>
  </Segment>
)

export default Home
