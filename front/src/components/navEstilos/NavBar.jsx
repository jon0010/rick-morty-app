import NavBarStyles from "./NavBar.module.css";
import SearchBar from "./SearchBar";

export default function NavBar(props) {
  return (
    <div>
      <nav className={NavBarStyles.container}>

        <ul className={NavBarStyles.navLista}>
        <SearchBar className={NavBarStyles.searchBar} onSearch={props} />
          <button className={NavBarStyles.btn}>Inicio</button>
          <button className={NavBarStyles.btn}>Explora</button>
          <button className={NavBarStyles.btn}>Personajes</button>
          <button className={NavBarStyles.btn}>About</button>
        </ul>
      </nav>
    </div>
  );
}
