import Card from "../CardEstilos/Card";
import styles from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.divContainer}>
      {characters.map(({ name, species, gender, image }) => {
        return (
          <Card
            key={name}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => window.alert("*se cierra la tarjeta*")}
          />
        );
      })}
    </div>
  );
}
