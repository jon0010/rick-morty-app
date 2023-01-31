import NavBarStyles from "./NavBar.module.css";
import SearchBar from "./SearchBar";

export default function NavBar(props) {
  return (
    <div>
      <nav className={NavBarStyles.container}>
        <SearchBar onSearch={props} />

        <ul className={NavBarStyles.navLista}>
          <button className={NavBarStyles.btn}>Inicio</button>
          <button className={NavBarStyles.btn}>Explora</button>
          <button className={NavBarStyles.btn}>Personajes</button>
          <button className={NavBarStyles.btn}>About</button>
        </ul>
      </nav>
    </div>
  );
}
