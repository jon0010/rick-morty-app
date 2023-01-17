import navBarStyles from "./navBar.module.css";
import SearchBar from "./SearchBar";

export default function NavBar(props) {
  return (
    <div>
    <nav className={navBarStyles.container}>
   <SearchBar onSearch={props} />
      <ul className={navBarStyles.navLista}>
        <li >Home</li>
        <li >News</li>
        <li >Contact</li>
        <li >About</li>
      </ul>
    </nav>
    </div>
  );
}
