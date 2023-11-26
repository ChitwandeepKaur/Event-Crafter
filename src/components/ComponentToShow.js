import ListingPage from "./ListingPage"
import CreateEvent from "./CreateEvent"

const ComponentToShow = (props) => {
    return props.appState === 'ListingPage'? <ListingPage/>:<CreateEvent/>
}

export default ComponentToShow