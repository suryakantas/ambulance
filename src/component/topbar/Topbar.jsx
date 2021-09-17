import "./topbar.scss"
// import {PhoneIcon} from '@material-ui/icons'

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                <a href="#home" className="logo">Ambulance</a>
                <div className="menuContainer">
                    <span>Home</span>
                </div>
                <div className="menuContainer">
                    <span>Service</span>
                </div>
                <div className="menuContainer">
                <span>Testimonial</span>
                </div>
                </div>
                <div className="right">
                    {/* <button>Contact Us <PhoneIcon className="icons"/></button> */}
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    )
}
