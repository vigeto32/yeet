import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AudioContext } from "../context/AudioContext"; 
import "./Home.css";
import playButton from "../Components/Assets/Play Button.png";
import settingsButton from "../Components/Assets/Settings Button.png";
import quitButton from "../Components/Assets/Quit Button.png";

export default function Home() {
  const { audioRef } = useContext(AudioContext); // ✅ Use Context

  return (
    <div className="menu-container">
      <h1 className="game-title">CODIGO</h1>

      <div className="menu-buttons">
        <NavLink to="/selection" className="menu-button">
          <img src={playButton} alt="Play" />
        </NavLink>

        <NavLink to="/settings" className="menu-button">
          <img src={settingsButton} alt="Settings" />
        </NavLink>

        <NavLink to="/quit" className="menu-button">
          <img src={quitButton} alt="Quit" />
        </NavLink>
      </div>

      <div className="menu-top-right">
        <NavLink to="/profile" className="menu-link">Profile & Cards</NavLink>
        <NavLink to="/leaderBoards" className="menu-link">Leader Boards</NavLink>
        <NavLink to="/login" className="menu-link">Sign In</NavLink>
      </div>
    </div>
  );
}
