import React from "react";
import Games from "../games";
import GamesOverUnder from "../gamesOverUnder";
import { league1, league2, league3, league4 } from "./data";

const League = () => {
  return (
    <>
      <Games {...league1} />
      <Games {...league2} />
      <Games {...league3} />
      <Games {...league4} />
    </>
  );
};

export default League;
