import fetcherUnsplash from '../api/fetcher';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function getPhotoData(id) {
    return fetcherUnsplash(`/photos/${id}/`);
}

function getNumbersOfMili(param) {
    let date = new Date(param);
    date = date.getTime();
    return date
}

function SingleSection() {

    let { id } = useParams();

    const [collection, setCollection] = useState([]);

    const [picData, setPicData] = useState({})

    let [flagLikes, setFlagLikes] = useState(false);

    let [flagDate, setFlagDate] = useState(false);

    useEffect(() => {
        fetcherUnsplash(`/collections/${id}/photos/`, `per_page=10`)
            .then((data) => {
                console.log(`singleSection-id: ${id}; singleSection data: `, data)
                setCollection(data)
            });
    }, [id])

    return (
        <>
            <h3>Single Picture Section id: {id}</h3>
            <button type='button' onClick={() => {
                if (flagLikes) {
                    collection?.sort((a, b) => a.likes - b.likes)
                    setFlagLikes(false)
                } else {
                    collection?.sort((a, b) => b.likes - a.likes)
                    setFlagLikes(true);
                }
            }
            }>sort by likes</button>

            <button type='button' onClick={() => {
                if (flagDate) {
                    collection?.sort((a, b) => getNumbersOfMili(a.created_at) - getNumbersOfMili(b.created_at))
                    setFlagDate(false)
                } else {
                    collection?.sort((a, b) => getNumbersOfMili(b.created_at) - getNumbersOfMili(a.created_at))
                    setFlagDate(true);
                }
            }
            }>sort by date</button >

            <div className={"articleContainer"}>
                {
                    collection?.map?.((item) => (
                        <div key={item?.id}>
                            <Link to={`/photo/${item?.id}`}>
                                <article>
                                    <h4>{item?.alt_description}</h4>
                                    <p>Created at: {item?.created_at}</p>
                                    <img className={"picMiniature"} onMouseEnter={(e) => {
                                        getPhotoData(item?.id).then(
                                            (data) => {
                                                console.log('pic data: ', data)
                                                setPicData(data);
                                            }
                                        )
                                    }}
                                        src={item?.urls?.small} width={100} alt={item?.alt_description || ''}
                                    />
                                    <p className="picMiniatureData">
                                        Likes: {picData?.likes} <br />
                                        Downloads: {picData?.downloads} <br />
                                        Country: {picData?.location?.country || 'no data'}
                                    </p>
                                </article>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default SingleSection;