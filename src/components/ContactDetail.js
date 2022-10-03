import React from "react";
import { Link } from "react-router-dom";
import photo from "../images/photo.jpeg";

const ContactDetail = (props) => {
    const {name,email,img}= props.location.state.contact;
  return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    
                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQHqRcQW5LqCvg/profile-displayphoto-shrink_800_800/0/1648473179072?e=1663200000&v=beta&t=N7BA7PG3q-gSaZNACUDjOnMvMI4VORlADWJlK60TjAE" alt=""/>
                        </div>
                        <div className="content">
                            <div className="header">{name}</div>
                            <div className="description"><a href={"mailto:"+email}>{email}</a></div>
                        </div>

            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button blue center">Back to contact list</button>
                </Link>
            </div>
        </div>
  );
};

export default ContactDetail; 
