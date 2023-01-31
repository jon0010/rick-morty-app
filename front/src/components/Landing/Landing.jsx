import { Link } from "react-router-dom";
import landingStyle from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={landingStyle.container}>
      <div className={landingStyle.containerHeader}>
        <h1 className={landingStyle.titulo}> Rick y Morty</h1>
        <button className={landingStyle.btn}>
          <Link to="/home"> click</Link>
          {/* <img width="60px" className={landingStyle.imagenPortal} href="../../img/portalprueba.png"  alt="portal" /> */}
        </button>
      </div>
    </div>
  );
};

export default Landing;
