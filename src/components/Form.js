import React from "react";
import memesData from "../memesData";
export default function Form(){

    
let url
    function refreshImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()  * memesArray.length )
        url= memesArray[randomNumber].url
        console.log(url)
    }


    return(
        <div className="form">
            <input type="text" placeholder="Arriba" className="form--text"/>
            <input type="text" placeholder="Abajo" className="form--text"/>
            <button className="form--button" onClick={refreshImage}>Get a new meme image</button>
            <img src={url}/>
        </div>
    )
}