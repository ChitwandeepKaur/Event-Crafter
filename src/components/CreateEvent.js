import { useState } from "react"
import ReactDatePicker from "react-datepicker"
const CreateEvent = () => {
    const [eventName, changeEventName] = useState('')
    const [eventDesc, changeEventDesc] = useState('')
    const [startDate, changeStartDate] = useState()
    const [endDate, changeEndDate] = useState()
    const [eventLocation, changeEventLocation] = useState('')


    const handleSubmitForm = (e) => {
        console.log("Submit")
        e.preventDefault()
    }
    return(
        <form>
        Create Event
        <label>Event Name</label>
        <input type="text" value={eventName} onChange={(e)=>changeEventName(e.target.value)}/>

        <label> Event Description </label>
        <input type="text" value={eventDesc} onChange={(e)=>changeEventDesc(e.target.value)}/>
        <label> Start Date </label>
        <ReactDatePicker selectsStart
        selected={startDate}
        onChange={date => changeStartDate(date)}
        startDate={startDate}/>
        <label> End Date </label>

        <ReactDatePicker selectsEnd
        selected={endDate}
        onChange={date => changeEndDate(date)}
        endDate={endDate}
        startDate={startDate}
        minDate={startDate}/>
        <label> Event Location </label>
        <input type="text" value={eventLocation} onChange={(e)=>changeEventLocation(e.target.value)}/>
        <button onClick={(e)=> handleSubmitForm(e)}>Create New Event</button>
        </form>
    )
}

export default CreateEvent