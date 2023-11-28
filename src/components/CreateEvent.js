import { useState } from "react"
import ReactDatePicker from "react-datepicker"
const CreateEvent = () => {
    let eventDetails = {}
    const [eventName, changeEventName] = useState('')
    const [eventDesc, changeEventDesc] = useState('')
    const [startDate, changeStartDate] = useState()
    const [endDate, changeEndDate] = useState()
    const [eventLocation, changeEventLocation] = useState('')
    const [eventAuthor, changeEventAuthor] = useState('')



    const handleSubmitForm = (e) => {
        // eventDetails.id = eventsArray.length
        eventDetails.isCompleted = false
        eventDetails.name = eventName
        eventDetails.description = eventDesc
        eventDetails.startDate = startDate 
        eventDetails.endDate = endDate 
        eventDetails.location = eventLocation
        eventDetails.author = eventAuthor 

        //set eventDetails on reset thingy
        //api call
        console.log(eventDetails)
        e.preventDefault()
    }
    return(
        <form>
        Create Event
        <label>Event Name</label>
        <input type="text" value={eventName} onChange={(e)=>changeEventName(e.target.value)}/>

        <label> Event Description </label>
        <input type="text" value={eventDesc} onChange={(e)=>changeEventDesc(e.target.value)}/>
        <label> Author </label>
        <input type="text" value={eventAuthor} onChange={(e)=>changeEventDesc(e.target.value)}/>
        <label> Start Date </label>
        <ReactDatePicker selectsStart
        selected={startDate}
        onChange={date => changeStartDate(date)}
        startdate={startDate}/>
        <label> End Date </label>

        <ReactDatePicker selectsEnd
        selected={endDate}
        onChange={date => changeEndDate(date)}
        enddate={endDate}
        startdate={startDate}
        mindate={startDate}/>
        <label> Event Location </label>
        <input type="text" value={eventLocation} onChange={(e)=>changeEventLocation(e.target.value)}/>
        <button onClick={(e)=> handleSubmitForm(e)}>Create New Event</button>
        </form>
        //required and all other form validations
        //Reset button
    )
}

export default CreateEvent