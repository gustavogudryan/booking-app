import useFetch from "../../hooks/useFetch";
import "./featured.css";
import sp from "./img/sp.jpg";
import paris from "./img/paris.jpg";
import london from "./img/london.jpg";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=são paulo,paris,london"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src={sp} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>São Paulo</h1>
              <h2>{data[0]} propriedades</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img src={paris} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>Paris</h1>
              <h2>{data[1]} propriedades</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src={london} alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[2]} propriedades</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
