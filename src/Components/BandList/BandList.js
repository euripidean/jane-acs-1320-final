import React from "react";
import Band from "../Band/Band";
import './BandList.css';
import data from '../../metal.json'

const BandList = () => {
    return (
        <main>
        <div className="band-list">
            {data.map((band) => {
                return <Band key={band.id} {...band} />
            })}
        </div>
        </main>
    );
}

export default BandList;
