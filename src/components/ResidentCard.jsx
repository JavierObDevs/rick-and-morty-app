import { useEffect } from "react";
import UseFetch from "../hooks/UseFetch";
import "../components/ResidentCard.css";

const ResidentCard = ({ url }) => {
  const [character, getCharacter] = UseFetch(url);

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <article className="container_card">
      <header className="container_header">
        <div className="container_status">
          <div className="circle_status"></div>
          <div className="text_status">{character?.status}</div>
        </div>
        <img src={character?.image} alt="Image Character" />
        <h2 className="character_tittle">{character?.name}</h2>
      </header>
      <hr />
      <ul className="container_info">
        <li className="list_info">
          <span className="tittle_info">Specie </span>
          <span className="text_info">{character?.species}</span>
        </li>
        <li className="list_info">
          <span className="tittle_info">Origin </span>
          <span className="text_info">{character?.origin.name}</span>
        </li>
        <li className="list_info">
          <span className="tittle_info">Episodes where appear </span>
          <span className="text_info">{character?.episode.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default ResidentCard;
