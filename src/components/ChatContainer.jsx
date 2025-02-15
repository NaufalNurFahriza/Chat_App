import React, { useState } from "react";
import RoomList from "./RoomList";
import Message from "./Message";
import data from "../data.json";

const ChatContainer = () => {
  const [selectedRoom, setSelectedRoom] = useState(data.results[0]);

  const handleRoomSelect = (room) => {
    const newRoom = data.results.find((r) => r.room.id === room.id);
    if (newRoom) {
      setSelectedRoom(newRoom);
    }
  };

  return (
    <div className="chat-container">
      <div className="room-list-container">
        {data.results.map((room) => (
          <RoomList
            key={room.room.id}
            room={room.room}
            isSelected={selectedRoom.room.id === room.room.id}
            onSelect={handleRoomSelect}
          />
        ))}
      </div>
      <div className="message-container">
        <div className="message-header">
          <h2>{selectedRoom.room.name}</h2>
          <p>{selectedRoom.room.participant.length} participants</p>
        </div>
        <div className="messages-list">
          {selectedRoom.comments.map((message) => (
            <Message
              key={message.id}
              message={message}
              participants={selectedRoom.room.participant}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;