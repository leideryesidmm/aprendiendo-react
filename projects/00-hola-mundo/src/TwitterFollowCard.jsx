import { useState } from "react";

export function TwitterFollowCard({formatUserName,username='unknown',name}){
    const [isFollowing, setIsFollowing] =useState(false)
    
    const username2=formatUserName(username)
    const text =isFollowing?'Siguiendo':'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button' 
    
    const handleClick = ()=>{
        setIsFollowing(!isFollowing)
    }

        return(
        
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" 
                    alt="Imagen avatar perfil" 
                    src={`https://unavatar.io/github/${username}`}>
                </img>
                <div className="tw-followCard-info">
                    <strong className="tw-followCard-info-userName">{name}</strong>
                    <span>{username2}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow"> Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}