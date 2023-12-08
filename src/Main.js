import { Route, Routes } from "react-router-dom";
import Article from "./Article";
import HomePage from "./pages/index"
import Collections from "./pages/collections";
import SingleSection from "./pages/singleSection";
import Picture from "./pages/picture";

function Main() {

    const title = 'Main!';
    return (
        <>
            <section>
                <h2>{title}</h2>

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