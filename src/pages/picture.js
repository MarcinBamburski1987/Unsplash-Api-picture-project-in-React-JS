import { useEffect, useState } from "react"
import fetcherUnsplash from "../api/fetcher"
import { useParams } from "react-router-dom"

function Picture() {

    const [pic, setPic] = useState([])

    const { id } = useParams();

    useEffect(() => {
        fetcherUnsplash(`/photos/${id}/`).then(
            (data) => {
                setPic(data);
                console.log('picture data: ', data);
            }
        )
    }, [id])

    return (
        <>
            <section>
                <div className="picContainer">
                    <h3>{pic?.alt_description}</h3>
                    <button onClick={() => {
                        window.location.href = `https://unsplash.com/oauth/authorize?client_id=pBrra5j4cmbN_0nnyUra2v3SHVxBwGu_fmWKSTR5p-4&redirect_uri=http://localhost:3000/&response_type=code&scope=public+read_user+write_likes`
                    }}>login in</button>
                    <button onClick={() => {
                        
                    }}>get param</button>
                    <p>likes: <i>{pic?.likes || 'no data'}</i> <br />
                        downloads: <i>{pic?.downloads || 'no data'}</i> <br />
                        country: <i>{pic?.location?.country || 'no data'}</i></p>
                    <img src={pic?.urls?.regular} alt={pic?.alt_description} />
                </div>
            </section>
        </>
    )
}

export default Picture