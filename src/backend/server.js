import React, { useState } from "react";
import axios from "axios";
import MessagesDisplay from '../components/home/MessageDisplay'
import PostMessage from "../components/home/PostMessage";

//Config Postgres

//Fake Messages for intial testing
/*
const fakeMessages = [
  {
    user: Bob,
    msg: "test message 1",
  },
  {
    user: Derp,
    msg: "test message 2",
  }
]
*/

function App() {
  //Initialize States
  var [messages, setMessages] = useState([]);
  var [messagesLoaded, setMessagesLoaded] = React.useState(false);
  var [msgItems, setMsgItems] = useState({
    messeageTxt: "",
  });

  //Using an empty array sets it to trigger just on load
  React.useEffect(function() {

  }, []);

  //Dynamically Update States for the form
  function handleFormEdits(event) {
    const { name, value } = event.target;
    setMsgItems(prevState => ({ ...prevState, [name]: value }));
  }

  //Submit a new post
  function handleFormPost() {

    //Create an object to match the API
    let newMsg = {
      
    };

    //Insert into DB;
  }

  return (
    <div className="msgBoardC" style={{ width: "80%", margin: "40px auto" }}>
      <h1>Message Board</h1>
      <PostMessage
        msgItems={msgItems}
        handleFormEdits={handleFormEdits}
        handleFormPost={handleFormPost}
      />
      <MessagesDisplay messages={messages} messagesLoaded={messagesLoaded} />
    </div>
  );
}