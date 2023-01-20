import styles from "./Cards.module.css";

const Cards = ({ id, name, gender, image }) => {
  return (
    <div className={styles.divContainer}>
      <h1>estas serian las cards</h1>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h2>{gender}</h2>
    </div>
  );
};


export default Cards;