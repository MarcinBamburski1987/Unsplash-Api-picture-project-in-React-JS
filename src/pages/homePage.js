import { useState } from "react";
import { UNSPLASH_COMMON_HEADERS } from "../config";

function HomePage() {
  const [data, setData] = useState({});
  const [value, setValue] = useState("");

  function handleSearchPhotos(event) {
    event.preventDefault();
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${value}`, {
      headers: {
        ...UNSPLASH_COMMON_HEADERS,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }

  function clearInputField() {
    setValue("");
    setData({});
  }

  const listPictures = data?.results?.map((item) => (
    <div key={item?.id}>
      <article>
        <img src={item?.urls?.small} alt={item?.alt_description} />
      </article>
    </div>
  ));

  return (
    <>
      <h3>Home Page</h3>
      <div className="searchBox">
        <form onSubmit={handleSearchPhotos} method="get">
          <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />

          <button type="submit">search</button>
        </form>
        <button onClick={clearInputField}>clear</button>
      </div>
      <p>
        Search results for
        {value ? " " + value : "..."}
      </p>
      <div className="boxContainer">{listPictures}</div>
    </>
  );
}

export default HomePage;
