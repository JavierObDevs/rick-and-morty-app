import "./Dimension.css";

const Dimension = ({ location }) => {
  return (
    <article className="art_container">
      <h2 className="tittle_container">{location?.name}</h2>
      <ul className="ul_container">
        <li className="li_container li_uno">
          <span className="tittle_span">Type</span>
          <span className="content_span"> {location?.type}</span>
        </li>
        <li className="li_container li_dos">
          <span className="tittle_span">Dimension </span>
          <span className="content_span">{location?.dimension}</span>
        </li>
        <li className="li_container li_tres">
          <span className="tittle_span">Population</span>
          <span className="content_span"> {location?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default Dimension;
