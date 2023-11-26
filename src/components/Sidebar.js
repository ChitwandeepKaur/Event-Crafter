import './Sidebar.css'
import { BsListCheck } from "react-icons/bs";

import { IoIosAdd } from "react-icons/io";

const Sidebar = ({appState, changeAppState}) => {

    return (
        <aside>
            <h1>Event Crafter</h1>
            <ul>
                <li onClick={()=>{changeAppState('ListingPage')}}> <BsListCheck size={25}/> List</li>
                <li onClick={()=>{changeAppState('CreateAnEventPage')}}> <IoIosAdd size={40}/> Create an Event</li>
            </ul>
        </aside>
    )
}
export default Sidebar