import React, { useState } from "react";
import Picker from "emoji-picker-react";
import "./Footer.css";

const Footer = ({ onSendMessage, userList }) => {
  const [text, setText] = useState("");
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [showUserList, setShowUserList] = useState(false);
  const [color, setColor] = useState("blue");

  // Function to handle emoji selection
  const handleEmojiSelect = (emojiObject) => {
    setChosenEmoji(emojiObject);
    if (emojiObject && emojiObject.emoji) {
      setText(text + emojiObject.emoji);
      setShowEmojiPicker(false);
    }
  };

  // Function to handle message change in the input field
  const handleMessageChange = (e) => {
    setText(e.target.value);
    if (e.target.value.endsWith("@")) {
      setShowUserList(true);
    } else {
      setShowUserList(false);
    }

    // Change text color to blue if input ends with "@" otherwise black
    if (e.target.value.endsWith("@")) {
      setColor("blue");
    } else if (!e.target.value.endsWith("@")) {
      setColor("black");
    }
  };

  // Function to handle send button click
  const handleSendClick = () => {
    if (text.trim() !== "") {
      setIsSending(true);
      onSendMessage(text);
      setText("");
      // Reset sending state after 2 seconds
      setTimeout(() => {
        setIsSending(false);
      }, 2000);
    }
  };

  // Function to handle user selection from the list
  const handleUserSelect = (user) => {
    setText(text + user.name);
    setColor("blue");
    setShowUserList(false);
  };

  return (
    <div className="footer-container">
      <div className="footer-input-container">
        <input
          type="text"
          value={text}
          onChange={handleMessageChange}
          placeholder="Type your message..."
          className="footer-input"
          style={{ color: color }}
        />
        <button
          className="send-button"
          onClick={handleSendClick}
          disabled={isSending}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
        <button
          className="emoji-button"
          onClick={() => setShowEmojiPicker(true)}
        >
          😊
        </button>
        {showEmojiPicker && (
          <Picker onEmojiClick={handleEmojiSelect} className="emoji-picker" />
        )}
        {showUserList && (
          <div className="userlist-container">
            <ul className="user-list">
              {userList.map((user) => (
                <li key={user.name} onClick={() => handleUserSelect(user)}>
                  {user.name}
                  <img
                    className="user-image"
                    src={
                      user.image
                        ? require(`../../Asset/image/${user.image}`)
                        : "fallback.png"
                    }
                    alt={user.name}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
