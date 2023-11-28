import { useState }            from "react"
import { Container, Row, Col } from "react-bootstrap"
import   ReactDatePicker       from "react-datepicker"
import './CreateEvent.css'
import moment from "moment"

const CreateEvent = ({ eventsArray, changeEventsArray }) => {
    let newEvent = {}
    const [eventName, changeEventName] = useState(''),
          [eventDesc, changeEventDesc] = useState(''),
          [startDate, changeStartDate] = useState(),
          [endDate, changeEndDate]     = useState(),
          [eventLocation, changeEventLocation] = useState(''),
          [eventAuthor, changeEventAuthor]     = useState('')

    const resetFilters = () => {
        changeEventName('')
        changeEventDesc('')
        changeStartDate()
        changeEndDate()
        changeEventAuthor('')
        changeEventLocation('')
    }

    const resetForm = (e) => {
        resetFilters()
        e.preventDefault()
    }

    const handleSubmitForm = (e) => {
        resetFilters()

        newEvent.id          = eventsArray.length
        newEvent.isCompleted = false
        newEvent.name        = eventName
        newEvent.description = eventDesc
        newEvent.startDate   = moment(startDate).format('DD/MM/YYYY') 
        newEvent.endDate     = moment(endDate).format('DD/MM/YYYY')  
        newEvent.location    = eventLocation
        newEvent.author      = eventAuthor 

        eventsArray.push(newEvent)
        changeEventsArray(eventsArray)
        alert('Event Created Successfullly')
        e.preventDefault()
    }

    return(
        <form className="form-group">
        <h2 className="text-center mt-4">Create New Event</h2>
        <Container>
            <Row className="formRow">
                <Col>
                    <input type="text" className="form-control" placeholder="Event Name" value={eventName} 
                           onChange={(e)=>changeEventName(e.target.value)} id="eventName"/>
                </Col>
                <Col>
                    <textarea rows={2} cols={30}  className="form-control" placeholder="Event Description" 
                              value={eventDesc} onChange={(e)=>changeEventDesc(e.target.value)}/>
                </Col>
            </Row>
            <Row className="formRow">
                <Col>
                    <ReactDatePicker selectsStart placeholderText="Select Start Date" className="form-control"
                        selected={startDate} onChange={date => changeStartDate(date)} startdate={startDate}/>
                </Col>
                <Col>
                    <ReactDatePicker selectsEnd placeholderText="Select End Date" className="form-control"
                    selected={endDate} onChange={date => changeEndDate(date)} enddate={endDate}
                    startdate={startDate} mindate={startDate}/> 
                </Col>   
            </Row>
            <Row className="formRow">
                <Col>
                    <input type="text" className="form-control" placeholder="Author" value={eventAuthor} 
                           onChange={(e)=>changeEventAuthor(e.target.value)}/>
                </Col>
                <Col>
                    <input type="text"  className="form-control" value={eventLocation} 
                           placeholder="Add Location" onChange={(e)=>changeEventLocation(e.target.value)}/>
                </Col>
            </Row>
            <button className="text-center btn btn-secondary" onClick={(e)=> handleSubmitForm(e)}>
                Create New Event
            </button>
            <button className="text-center btn btn-dark m-2" onClick={(e)=> resetForm(e)}>
                Reset
            </button>
        </Container>
        </form>
    )
}

export default CreateEvent