import React from 'react';
import editLogo from '../assets/images/edit-icon.png';
import deleteLogo from '../assets/images/delete-icon.png';
import starSolidLogo from '../assets/images/star-solid.png';


function CardMusica(props){
    return(
        <>
            <div className="music-box">
                <div className="img-music"></div>
                <div className="music-data">
                    <div className="icons">
                        <img src={editLogo} alt="" className="edit"/>
                        <img src={deleteLogo} alt="" className="delete"/>
                        <img src={starSolidLogo} alt="" className="stars"/>
                    </div>
                    <div className="name">
                        <label> Nome:
                            <input className="input-music" type="text" value={props.nome}/>
                        </label>
                    </div>
                    <div className="genre">
                        <label> Genêro:
                            <input className="input-music" type="text" value={props.genero}/>
                        </label>
                    </div>
                    <div className="release">
                        <label> Lançamento:
                            <input className="input-music" type="text" value={props.ano}/>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}


export default CardMusica;