import { Link } from "react-router-dom";

const TarjetaPersonaje = ({ id, name, image }) => {
  return (
    <div>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} />
      </Link>
      <h1>{name}</h1>
    </div>
  );
};

export default TarjetaPersonaje;
