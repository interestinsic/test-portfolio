import Navbar from "./navbar";
import Footer from "./footer";


function Body(props){

    return(
    <div>
        <Navbar />
        <div>{props.children}</div>
        <Footer />
    </div>
        
    )
}


export default Body;