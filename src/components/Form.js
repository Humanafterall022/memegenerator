import React from "react";
import memesData from "../memesData";
export default function Form(){

    const [memeImage, setMemeImage]=React.useState("")

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

   


    return(
        <div className="form">
            <input type="text" placeholder="Arriba" className="form--text"/>
            <input type="text" placeholder="Abajo" className="form--text"/>
            <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            
            <img src={memeImage} className="form--memeimage"/>
        </div>
    )
}