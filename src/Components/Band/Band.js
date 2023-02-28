import React from "react";
import './Band.css';
import Like from "../Like/Like";


const Band = (props) => {

    const { band_name, origin, fans, formed, split, style } = props;
    let updateFans = parseInt(fans)*1000;
    updateFans = updateFans.toLocaleString('en');

    let listStyle = style.split(",").map((item, index) => {
        return <li key={index}>{item}</li>
    });

    return (
        <div className="band">
            <h2>{band_name}</h2>
            <p className="band-info">Origin: {origin}</p>
            <p className="band-info">Fans: {updateFans}</p>
            <p className="band-info">Formed: {formed}</p>
            <p className="band-info">Split: {split}</p>
            <ul className="style-info">
                {listStyle}
            </ul>
        { split === "-" ? <Like /> : null }
        </div>
    );
}

export default Band;
