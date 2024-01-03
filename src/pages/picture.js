import { useEffect, useState } from "react"
import {getData} from "../api/api"
import { useParams } from "react-router-dom"

function Picture() {
    const [pic, setPic] = useState([])
    const { id } = useParams();

    useEffect(() => {
        getData(`/photos/${id}/`).then(
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