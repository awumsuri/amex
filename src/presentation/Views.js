import React from 'react'

export const CharacterList = (props) => (
    <div className="content">   
        <header className="character-select">Choose A Character</header>
        <ul class="list-group">           
            {
                props.characters && 
                props.characters.map(
                    character => (
                        <li 
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