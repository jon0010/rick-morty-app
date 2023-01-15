import Card from "./Card";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div>
      {characters.map(({ name, species, gender, image }, index) => {
        return (
          <Card
            keys={index}
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
