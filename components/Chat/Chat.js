import React from "react";
import "./Chat.css";
import { FaRegHeart } from "react-icons/fa";
import userlist from "../Data/users.js";

const Chat = ({ messages, setMessages }) => {
  /* function for liked the button */
  const handleLikeClick = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].liked = !updatedMessages[index].liked;
    setMessages(updatedMessages);
  };

  /* function for increment the count */
  const handleLikeIncrement = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likeCount += 1;
    setMessages(updatedMessages);
  };

  return (
    <div className="chat-container">
      {messages.map((message, index) => (
        <div className="chat-message" key={index}>
          <img
            src={
              userlist[index]
                ? require(`../../Asset/image/${userlist[index].image}`)
                : "fallback.png"
            }
            alt={message.name}
            className="profile-pic"
          />
          <div className="message-content">
            <span className="user-name">{message.name}</span>
            <p>{message.message}</p>
            <p className="date">{message.date}</p>

            {message.liked ? (
              <div
                className="liked heart"
                onClick={() => handleLikeClick(index)}
              >
                <FaRegHeart color="black" size="30" />
              </div>
            ) : (
              <div
                className="unliked heart"
                onClick={() => handleLikeClick(index)}
              >
                <FaRegHeart color="black" size="30" />
              </div>
            )}

            <button
              className="button count"
              onClick={() => handleLikeIncrement(index)}
            >
              +{message.likeCount}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
