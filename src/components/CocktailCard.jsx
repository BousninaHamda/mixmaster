import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";

const CocktailCard = ({ image, name, id, glass, info }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;
