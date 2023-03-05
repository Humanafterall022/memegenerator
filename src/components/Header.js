import React from "react";
import troll from "D:/Aprender react/memegenerator/src/images/troll-face.png"
export default function Header(){
    return(
        
    <header className="header">
          <img src={troll} className="header--troll" alt="troll"/>
          <h1 className="header--tittle">Meme Generator</h1>
          <h3 className="header--text" >React</h3>
      </header>
    )
}