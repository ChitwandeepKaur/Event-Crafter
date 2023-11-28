import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState }             from 'react'
import { Container , Row, Col } from 'react-bootstrap'
import Sidebar     from './components/Sidebar.js'
import ListingPage from "./components/ListingPage.js"
import CreateEvent from "./components/CreateEvent.js"


function App () {

  const [ appState, changeAppState ] = useState('ListingPage')

  return (
    <div>
      <Container>
        <Row>
          <Col className='mainHeading'><h1>Event Crafter</h1></Col>
        </Row>
        <Row>
          <Col lg={3}>
            <Sidebar appState= {appState} changeAppState = {changeAppState}/>
          </Col>
          <Col lg={9} className='mainCol'>
            { appState === 'ListingPage' ? <ListingPage/> : <CreateEvent/> }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App