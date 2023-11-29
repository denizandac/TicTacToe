import React, { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [userInfo, setUserInfo] = useState({
    PlayerName: name,
    PlayerSymbol: symbol,
  });
  const [isEditing, setIsEditing] = useState(false);
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing === false ? (
          <>
            <span className="player-name">{userInfo.PlayerName}</span>
            <span className="player-symbol">{userInfo.PlayerSymbol}</span>
          </>
        ) : (
          <>
            <input
              type="text"
              required
              value={userInfo.PlayerName}
              onChange={(e) =>
                setUserInfo({ ...userInfo, PlayerName: e.target.value })
              }
            />
            {/* <input
              type="text"
              required
              value={userInfo.PlayerSymbol}
              onChange={(e) =>
                setUserInfo({ ...userInfo, PlayerSymbol: e.target.value })
              }
            /> */}
          </>
        )}
      </span>
      <button onClick={() => setIsEditing((wasEditing) => !wasEditing)}>
        {(isEditing && "Save") || "Edit"}
      </button>
    </li>
  );
}
