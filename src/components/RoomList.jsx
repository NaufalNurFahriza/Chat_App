import React from "react";

const RoomList = ({ room, isSelected, onSelect }) => {
  return (
    <div 
      className={`room-item ${isSelected ? "active" : ""}`}
      onClick={() => onSelect(room)}
    >
      <div className="room-header">
        <img
          src={room.image_url}
          alt={room.name}
          className="room-image"
          loading="lazy"
        />
        <div className="room-details">
          <h3>{room.name}</h3>
          <p>{room.participant.length} participants</p>
        </div>
      </div>
    </div>
  );
};

export default RoomList;