import { NavLink } from "react-router-dom";

const TITLE = "Pictures React JS App";

function Header() {
  return (
    <>
      <header>
        <h1>{TITLE}</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/">home</NavLink>
            </li>
            <li>
              <NavLink to="/sectionCollections">pictures sections</NavLink>
            </li>
            <li>
              <NavLink to="/defaultArticle">default article</NavLink>
            </li>
            <li>
              <NavLink to="/firstArticle">first article</NavLink>
            </li>
            <li>
              <NavLink to="/secondArticle">second article</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
