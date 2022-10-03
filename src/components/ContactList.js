import React,{useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import "./App.css"

const ContactList = (props) => {
  console.log(props);
  const inputEl= useRef("");
  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
      
    );
  });

  const getSearchTerm = () =>{
    props.searchKeyword(inputEl.current.value);
  };

  return (
    <div class="main">
    <h2 className="list-heading">Contact List <br></br>
    <Link to="/add">
      <button className="ui button blue right"> Add Contact</button>
    </Link>
    </h2>
    <div className="ui search">
      <div className="ui icon input">
        <input 
        ref={inputEl}
        type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm}/>
        <i className="search icon"></i> 
      </div>
    </div>
    <div className="ui celled list">{renderContactList.length>0?renderContactList:"No Contacts avilable"}</div>
    </div>
  );
};

export default ContactList;
