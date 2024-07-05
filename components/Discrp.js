import { Fetcher } from '@/lib/api';
import React, { useEffect, useState } from 'react'

const Discrp = ({ links }) => {
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        async function getLinks() {
            if (data.length > 0) {
                setActiveLink(data[0].id); // Set the first link as active by default
            }
        }
        getLinks();
    }, []);

    return (
        <div>
            <ul>
                {links && links.data.map((link) => {
                    <li key={link.id}>
                        <button onClick={() => setActiveLink(link.id)}>
                            {link.title}
                        </button>
                    </li>
                })}
            </ul>
            <div>
                {links.map((link) =>
                    link.id === activeLink ? (
                        <div key={link.id}>
                            <h2>{link.attributes.title}</h2>
                            <p>{link.attributes.description}</p>
                            {/* <img src={link.attributes.media} alt={link.title} /> */}
                        </div>
                    ) : null
                )}
            </div>
        </div>
    );
};


export default Discrp