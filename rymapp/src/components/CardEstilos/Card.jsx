import CardStyles from "./card.module.css";

export default function Card({ name, species, gender, image, onClose }) {
  return (
    <div className={CardStyles.divContainer}>
      <button className={CardStyles.btn} onClick={onClose}>
        X
      </button>
      <h2 className={CardStyles.name}>{name}</h2>
      <h2 className={CardStyles.species}>Especie: {species}</h2>
      <h2 className={CardStyles.gender}>Género: {gender}</h2>
      <img className={CardStyles.cardImg} src={image} alt="img" />
    </div>
  );
}
