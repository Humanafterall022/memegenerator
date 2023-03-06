import React from "react";
import memesData from "../memesData";
export default function Form(){

    const [memeImage, setMemeImage]=React.useState({
        topText:"",
        bottomText:"",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages,setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }


    function handleChange(event){
        const {name,value} = event.target
        setMemeImage(prevMeme=>({
            ...prevMeme,
            [name] : value
        }))
    }

    return(
     <div>
        <div className="form">
            <input type="text" placeholder="Arriba" className="form--text" name="topText" value={memeImage.topText} onChange={handleChange}/>
            <input type="text" placeholder="Abajo" className="form--text"  name="bottomText" value={memeImage.bottomText} onChange={handleChange}/>
            <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
        </div>

        <div className="meme">
                <img src={memeImage.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
         </div>
    </div>
    )
}