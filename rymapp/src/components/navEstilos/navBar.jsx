import navBarStyles from "./navBar.module.css";

export default function navBar(props) {
  return (
    <nav className={navBarStyles.div}>
      <div className={navBarStyles.searchBar}>
        <input
          onSearch={(characterID) => window.alert(characterID)}
          className={navBarStyles.input}
          type="search"
        />
        <button className={navBarStyles.button} onClick={props.onSearch}>
          Agregar
        </button>
      </div>
      <ul className={navBarStyles.ul}>
        <li className={navBarStyles.item1}>Home</li>
        <li className={navBarStyles.item2}>News</li>
        <li className={navBarStyles.item3}>Contact</li>
        <li className={navBarStyles.item4}>About</li>
      </ul>
    </nav>
  );
}
