import React from "react";
import NavBar from "../components/NavBar";
import CardMusica from "../components/CardMusica";

function MinhasMusicas() {
    return(
        <>
            
            <NavBar />
            <div className="container">  
                <div className="filter">    
                    <button className="btn-green right">Adicionar</button>
                </div>            
            </div>
            <div className="container">
                
                
                
                <div className="music-boxes">
                    
                    <CardMusica 
                    nome="Lovely Day"
                    genero="Pop"
                    ano="1977"
                     />

                    <CardMusica 
                    nome="Banana Pancakes"
                    genero="Surf-Rock"
                    ano="2005"
                     />

                    <CardMusica 
                    nome="Put it on the line"
                    genero="Pop"
                    ano="2019"
                     />

                </div>

            </div>

        </>
    )
}


export default MinhasMusicas;