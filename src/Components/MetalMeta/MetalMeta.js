import React from "react";
import './MetalMeta.css';
import data from '../../metal.json'

const MetalMeta = () => {
    return (
        <section className="meta">
            <p>Metal Bands 🤘</p>
            <p>Number of bands: {data.length}</p>
        </section>
    );
}

export default MetalMeta;
