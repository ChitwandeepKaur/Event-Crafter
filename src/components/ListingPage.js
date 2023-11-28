import { Container , Row, Col } from 'react-bootstrap'
import { FaUser }               from "react-icons/fa"
import { IoMdPin }              from "react-icons/io"
import './ListingPage.css'

const ListingPage = ({ eventsArray, changeEventsArray }) => {

    const toggleIsCompleted = (id) => {

        let newUpdatedEvent = eventsArray[id]
        newUpdatedEvent.isCompleted = !newUpdatedEvent.isCompleted
        eventsArray.splice(id, 1, newUpdatedEvent)
        changeEventsArray(eventsArray)
    }

    return (
        <main>
            <h2 className="text-center mt-4">Events List</h2>
            {eventsArray.length ? (
                <div>
                {eventsArray.map((thisEvent) => (
                    <div className="event p-2 m-1" key={thisEvent.id} id={thisEvent.id}>
                        <Container>
                            <Row>
                                <Col lg={1} className='text-center'>
                                    <input type="checkbox" defaultChecked={thisEvent.isCompleted} onChange={()=>toggleIsCompleted(thisEvent.id)} name="isCompleted"/>
                                </Col>
                                <Col lg={7}>
                                    <Row><h4>{thisEvent.name}</h4></Row>
                                    <Row><h6>Description: {thisEvent.description}</h6></Row>
                                    <Row><h6><FaUser/> {thisEvent.author}</h6></Row>
                                </Col>
                                <Col lg={4}>
                                    <Row>
                                        <span className='extraInfo'>{thisEvent.startDate} - {thisEvent.endDate}</span>
                                    </Row>
                                    <Row>
                                        <span><IoMdPin size={19}/> {thisEvent.location}</span>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                ))}
            </div>
            ): (<div className='p-4'><h4 className="text-center mt-5">No Events Created Yet!</h4></div>)}
        </main>
    )
}

export default ListingPage