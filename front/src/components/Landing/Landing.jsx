import { Link } from "react-router-dom";
import landingStyle from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={landingStyle.container}>
      <div className={landingStyle.containerHeader}>
        <h1 className={landingStyle.titulo}> Rick y Morty</h1>
        <button className={landingStyle.btn}>
          <Link className={landingStyle.txtClick} to="/home">
            {" "}
            Hidden Dimension
          </Link>
          {/* <img width="60px" className={landingStyle.imagenPortal} href="../../img/portalprueba.png"  alt="portal" /> */}
        </button>
        <p className={landingStyle.text1}>This dimension was created by Jon Pereyra in HENRY. Inside you will access the definitive guide to the entire multiverse that revolves around the fugitive scientist Rick Sanchez. It is recalled that the reward for his capture amounted to 10,500,000 Shmeckles.The Federation.</p>
      </div>
    </div>
  );
};

export default Landing;
