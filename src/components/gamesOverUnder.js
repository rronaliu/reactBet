import React from "react";
import "./games.css";
import Fulltime from "./fulltime/fulltime";

const gamesOverUnder = ({ title, games, fulltime }) => {
  var result = Object.keys(games).map((key) => [key, games[key]]);

  // console.log(result);

  return (
    <>
      <div className="header header-color">
        <div className="name">
          <div className="league fontTitle">{title}</div>
        </div>

        <div className="odds-1" style={{ fontWeight: 700 }}>
          1
        </div>
        <div className="odds-X" style={{ fontWeight: 700 }}>
          X
        </div>
        <div className="odds-2" style={{ fontWeight: 700 }}>
          2
        </div>
      </div>
      {/* table */}
      {result.map((result) => (
        <div className="header ">
          <div className="name p-2">
            <div className="league league-border">
              <div className="teams">
                <div className="team fontTeam">{result[1].team1}</div>
                <div className="team fontTeam">{result[1].team2}</div>
              </div>
              <div className="scores">
                <div className="score fontTitle">{result[1].score1}</div>
                <div className="score fontTitle">{result[1].score2}</div>
              </div>
            </div>
            <div className="minutes league league-border fontTeam">
              <div className="time">{result[1].time}</div>
              <div className="minute">
                {result[1].minute} <span>></span>
              </div>
            </div>
          </div>
          <div className="odds-1 odds-color">{result[1].over}</div>
          <div className="odds-X odds-color">{result[1].oddsX}</div>
          <div className="odds-2 odds-color">{result[1].under}</div>
        </div>
      ))}
    </>
  );
};

export default gamesOverUnder;
