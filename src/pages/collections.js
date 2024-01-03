import { useEffect, useState } from 'react';
import {getData} from '../api/api';
import { Link } from 'react-router-dom';

function Collections() {

    const [collecions, setCollections] = useState([]);

    useEffect(() => {
        getData('/collections', 'page=7')
            .then((data) => {
                console.log('collections data: ', data);
                setCollections(data);
            })
    }, [])

    return (
        <>
            <h3>List of sections</h3>
            <div className="boxContainer">
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