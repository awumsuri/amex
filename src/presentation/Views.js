import React from 'react'

export const CharacterList = (props) => (
    <div>   
        <header className="character-select">Choose A Character</header>
        <ul className="list-group">           
            {
                props.characters && 
                props.characters.map(
                    (character, index) => (
                        <li 
                            key={index}
                            className="list-group-item list-group-item-action" 
                            data-url={character.url}
                            onClick={e => props.onClick(e)}
                        >{character.name}</li>
                    )
                )
            }
        </ul>
    </div>
)