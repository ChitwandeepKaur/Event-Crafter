import './Sidebar.css'
import { BsListCheck } from "react-icons/bs"
import { IoIosAdd }    from "react-icons/io"

const Sidebar = ({ appState, changeAppState }) => {

    let listTab = 'mb-3 ', createEventTab
    if(appState === 'ListingPage') listTab += 'selectedTab'
    else  createEventTab = 'selectedTab'
    
    return (
        <aside>
            <ul className='mt-5'>
                <li onClick={()=>{changeAppState('ListingPage')}} className={listTab}>
                    <BsListCheck size={25} className='listIcon'/>
                    List
                </li>
                <li onClick={()=>{changeAppState('CreateAnEventPage')}} className={createEventTab}>
                    <IoIosAdd size={40} />
                    Create an Event
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar