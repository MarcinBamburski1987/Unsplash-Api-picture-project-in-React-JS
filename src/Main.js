import { Route, Routes } from "react-router-dom";
import Article from "./components/Article";
import HomePage from "./pages/homePage";
import Collections from "./pages/collections";
import SingleSection from "./components/SingleSection";
import Picture from "./pages/picture";

function Main() {

    const TITLE = 'Main content!';
    return (
        <>
            <section>
                <h2>{TITLE}</h2>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/singleSection/:id" element={<SingleSection />} />
                    <Route path="/sectionCollections" element={<Collections />} />
                    <Route path="/defaultArticle" element={<Article />} />
                    <Route path="/firstArticle" element={<Article id="firstArticle" title="first article" />} />
                    <Route path="/secondArticle" element={<Article id="secondArticle" title="second article" />} />
                    <Route path="/photo/:id" element={<Picture />} />
                </Routes>
            </section>
        </>
    )
}

export default Main;