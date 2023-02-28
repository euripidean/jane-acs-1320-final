import React from "react";
import Band from "../Band/Band";
import './BandList.css';
import data from '../../metal.json'
import { useState } from "react";

const BandList = () => {

    const [ search, setSearch ] = useState("");

    if (search != null) {
        const bands = data.filter((band) => {
           return band.band_name.toLowerCase().includes(search.toLowerCase());
        });



    return (
        <>
        <form className="search">
            <input type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div className="band-list">
            {bands.map((band, index) => {
                return <Band key={index} {...band} />
            })}
            { bands.length === 0 ? <p>No results found</p> : null }
        </div>
        </>
    );
}}

export default BandList;
