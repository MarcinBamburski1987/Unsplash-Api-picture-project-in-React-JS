import { useEffect, useState } from 'react';
import fetcherUnsplash from '../api/fetcher';
import { Link } from 'react-router-dom';

function Collections() {

    const [collecions, setCollections] = useState([]);

    useEffect(() => {
        fetcherUnsplash('/collections', 'page=7')
            .then((data) => {
                console.log('collection data: ', data);
                setCollections(data);
            })
    }, [])

    return (
        <>
            <h3>SECTION LIST</h3>
            <div className="articleContainer">
                {
                    collecions?.map?.(item => (
                        <div key={item?.id}>
                            <Link to={`/singleSection/${item?.id}/`}>
                                <article>
                                    <h4>{item?.title}</h4>
                                    <img src={item?.cover_photo?.urls?.small} alt={item?.cover_photo?.alt_description || ''} /><br />
                                </article>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Collections;