import { Link } from "react-router-dom";

const TITLE = 'Home Page'

function Header() {
  return (
    <>
      <header>
        <h1>{TITLE}</h1>
        <nav>
          <ul>
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/sectionCollections">Sections List</Link></li>
            <li><Link to="/defaultArticle">defaultArticle</Link></li>
            <li><Link to="/firstArticle">firstArticle</Link></li>
            <li><Link to="/secondArticle">secondArticle</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
