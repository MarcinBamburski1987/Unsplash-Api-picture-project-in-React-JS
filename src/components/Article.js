import alonzo from "../pic/alonzo.png";
import figure from "../pic/figure.png";
import dymek from "../pic/dymek.png"

function Article(props) {
    const ID = props.id;
    const TITLE = props.title;
    return (
        <article id={ID} title={TITLE}>
            <h3>{TITLE ?? "default title of article"}</h3>
            <img src={ID === "firstArticle" ? figure : ID ==="secondArticle" ? dymek : alonzo} alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        </article>
    )
}

export default Article