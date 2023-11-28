import { Container , Row, Col } from 'react-bootstrap'
import { FaUser }               from "react-icons/fa"
import { IoMdPin }              from "react-icons/io"
import './ListingPage.css'

const ListingPage = () => {
    const eventsArray = [
        {
            id: 0,
            name: '123',
            description: '1234',
            startDate: '12-11-2023',
            endDate: '27-11-2023',
            location: 'Home',
            isCompleted: false,
            authorName: 'abc'
        },
        {
            id: 1,
            name: '123456',
            description: '1',
            startDate: '12-11-2023',
            endDate: '27-11-2023',
            location: 'K',
            isCompleted: false,
            authorName: 'def'
        },  
    ]

    const toggleIsCompleted = (id) => {
        const currentEventClassList = document.getElementById(`${id}`).classList
        eventsArray[id].isCompleted = !eventsArray[id].isCompleted

        if  (currentEventClassList.contains('strikethrough')) currentEventClassList.remove('strikethrough')
        else currentEventClassList.add('strikethrough')
    }

    return (
        <main>
            <h2 className="text-center mt-4">Events List</h2>
            <div>
                {eventsArray.map((thisEvent) => (
                    <div className="event p-2 m-1" key={thisEvent.id} id={thisEvent.id}>
                        <Container>
                            <Row>
                                <Col lg={1} className='text-center'>
                                    <input type="checkbox" onChange={()=>toggleIsCompleted(thisEvent.id)} name="isCompleted" />
                                </Col>
                                <Col lg={7}>
                                    <Row><h4>{thisEvent.name}</h4></Row>
                                    <Row><h6>Description: {thisEvent.description}</h6></Row>
                                    <Row><h6><FaUser/> {thisEvent.authorName}</h6></Row>
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
        </main>
    )
}

export default ListingPage