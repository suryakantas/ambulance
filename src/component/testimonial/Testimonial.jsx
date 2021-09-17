import "./testimonial.scss"


export default function Testimonial() {
    return (
        <div className="testimonial">
            <h1>What people are saying about us</h1>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <img src="assets/img.jpg" className="left" alt="" />
                        <span className="right">
                            <h3>Sritam Salto</h3>
                            <h4>Some One</h4>
                        </span>
                    </div>
                    <div className="center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore quia incidunt sapiente voluptate inventore magnam minima commodi aspernatur iste error consectetur veniam amet, maiores alias ex odit voluptates dolores!</div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="assets/img.jpg" className="left" alt="" />
                        <span className="right">
                            <h3>Albert</h3>
                            <h4>Engineer</h4>
                        </span>
                    </div>
                    <div className="center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore quia incidunt sapiente voluptate inventore magnam minima commodi aspernatur iste error consectetur veniam amet, maiores alias ex odit voluptates dolores!</div>
                </div>
                <div className="card">
                    <div className="top">
                        <img src="assets/img.jpg" className="left" alt="" />
                        <span className="right">
                            <h3>Sritam Salto</h3>
                            <h4>CEO</h4>
                        </span>
                    </div>
                    <div className="center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tempore quia incidunt sapiente voluptate inventore magnam minima commodi aspernatur iste error consectetur veniam amet, maiores alias ex odit voluptates dolores!</div>
                </div>
            </div>
        </div>
    )
}
