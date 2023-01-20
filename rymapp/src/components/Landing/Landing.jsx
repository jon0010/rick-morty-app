import { Link } from "react-router-dom";
import landingStyle from "./Landing.module.css";

const Landing = () => {
  return (
    <div>
      <h1 className={landingStyle.titulo}> rick y morty app</h1>
      <button>
        <Link to="/home"> CLICK </Link>
      </button>
    </div>
  );
};

export default Landing;
