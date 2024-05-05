import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Chat from "./components/Chat/Chat";
import "./App.css";
import userList from "./components/Data/users";

const App = () => {
  const [messages, setMessages] = useState([]);

  // Function to handle sending a new message
  const onSendMessage = (newMessage) => {
    // Selecting a random user from the user list
    const randomUser = userList[Math.floor(Math.random() * userList.length)];

    // Creating a new message object
    const newMessageObject = {
      name: randomUser.name,
      image: randomUser.image,
      message: newMessage,
      likeCount: 0,
      date: new Date().toLocaleString(), // Adding timestamp
    };

    // Updating the messages state with the new message
    setMessages([...messages, newMessageObject]);
  };

  return (
    <div className="app-container">
      <Header className="header" />
      <div className="main-content">
        <Sidebar className="sidebar" />
        <Chat className="chat" messages={messages} setMessages={setMessages} />
      </div>
      <Footer
        className="footer"
        onSendMessage={onSendMessage}
        userList={userList}
      />
    </div>
  );
};

export default App;
