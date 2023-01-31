import NavBarstyles from "./NavBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={NavBarstyles.searchBar}>
      <input type="search" />
      <button onClick={props.onSearch}>Agregar</button>
    </div>
  );
}
