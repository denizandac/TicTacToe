import React, { useState } from "react";

const capitalizeFirstLetter = (inputString) => {
  if (typeof inputString !== "string" || inputString.length === 0) {
    return inputString;
  }
  return (
    inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
  );
};

export default function Player({ name, symbol, isActive, onEdit }) {
  const [userInfo, setUserInfo] = useState({
    playerName: name,
    playerSymbol: symbol,
  });
  const [isEditing, setIsEditing] = useState(false);

  const EditHandler = () => {
    if (isEditing) {
      if (userInfo.playerName.length === 0) {
        alert("Please enter a name");
        return;
      }
      onEdit(userInfo);
    }
    setIsEditing((wasEditing) => !wasEditing);
  };

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing === false ? (
          <>
            <span className="player-name">{userInfo.playerName}</span>
            <span className="player-symbol">{userInfo.playerSymbol}</span>
          </>
        ) : (
          <>
            <input
              type="text"
              value={userInfo.playerName}
              maxLength={10}
              onChange={(e) => {
                setUserInfo({
                  ...userInfo,
                  playerName: capitalizeFirstLetter(e.target.value),
                });
              }}
            />
          </>
        )}
      </span>
      <button onClick={EditHandler}>{(isEditing && "Save") || "Edit"}</button>
    </li>
  );
}
