import { useState } from "react";
import { difficulty } from "../js/difficulty";
import { setDiff, setInitialSkill } from "../js/script";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import './Selection.css';


const gogo = require('../Components/Assets/Summer3.png');
const pogo = require('../Components/Assets/Summer5.png');
const mogo = require('../Components/Assets/Summer7.png');

export default function Selection(){
    <div>
      <h1>Selection Page</h1>
      <Link to="/">Back to Home</Link>
    </div>
    const [ bossName, setBossName ] = useState(difficulty[0].bossName);
    const [ selectedDifficulty, setDifficulty ] = useState(difficulty[0].difficultyName);
    const [ bossHp, setBossHp ] = useState(difficulty[0].enemyHp);

    const select0 = () => {
        setBossName(difficulty[0].bossName);
        setDifficulty(difficulty[0].difficultyName);
        setBossHp(difficulty[0].enemyHp);
        setDiff(0);
        setInitialSkill();
    }
    const select1 = () => {
        setBossName(difficulty[1].bossName);
        setDifficulty(difficulty[1].difficultyName);
        setBossHp(difficulty[1].enemyHp);
        setDiff(1);
        setInitialSkill();
    }
    const select2 = () => {
        setBossName(difficulty[2].bossName);
        setDifficulty(difficulty[2].difficultyName);
        setBossHp(difficulty[2].enemyHp);
        setDiff(2);
        setInitialSkill();
    }

    return(
        
        <div className="container">
            <div className="selection-head">
                <NavLink to="/home" className="game-btn">Back</NavLink>               
                <h1>Selection</h1>
            </div>
            
            <div className="selection"> {/* parent / flex /row /space-evenly*/}

                <div className="difficultyCard" onClick={select0}>
                    <img src={gogo} alt="Difficulty" width={'200px'} />
                    <h4>{difficulty[0].difficultyName}</h4>
                </div>
    
                <div className="difficultyCard" onClick={select1}>
                    <img src={pogo} alt="Difficulty" width={'200px'} />
                    <h4>{difficulty[1].difficultyName}</h4>
                </div>

                <div className="difficultyCard" onClick={select2}>
                    <img src={mogo} alt="Difficulty" width={'200px'} />
                    <h4>{difficulty[2].difficultyName}</h4>
                </div>
            </div>
            <div className="selection-confirmation-section">
                <div className="selected-difficulty-banner">
                        <h4>Boss name: {bossName}</h4>
                        <p>Difficulty: {selectedDifficulty}</p>
                        <p>Boss HP: {bossHp}</p>
                </div>
                <div className="selection-btn ">
                <NavLink to='/game' className={'game-btn'}>Confirm</NavLink> {/* confirms selection and goes to the game page */}
                </div>
                
            </div>
        </div>
        );
        
}