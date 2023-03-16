import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance}m do centro</span>
        <span className="siTaxiOp">Café da manhã incluso</span>
        <span className="siSubtitle">subtitulo lorem</span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Cancelamento grátis </span>
        <span className="siCancelOpSubtitle">
          Você pode cancelar mais tarde, então garanta esse ótimo preço hoje!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excelente</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">R${item.cheapestPrice}</span>
          <span className="siTaxOp">Incluso taxas</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton">Ver disponibilidade</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
