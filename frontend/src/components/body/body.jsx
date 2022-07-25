import Mainbar from '../mainbar/mainbar';
import Sidebar from '../sidebar/sidebar';
import './body.css';


function Body() {
    return ( <div className="body">
        <Sidebar/>
     <Mainbar/>
    </div> );
}

export default Body;