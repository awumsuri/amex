import React from 'react'

export const CharacterList = (props) => (
    <div>   
        <header className="character-select">Choose A Character</header>
        <div>
            <ul className="list-group">           
                {
                    props.characters && 
                    props.characters.map(
                        (character, index) => {                        
                            return <li 
                                key={index}
                                data-indexname={index}                         
                                className={"list-group-item list-group-item-action".concat((props.activeKey === index) ? " active" : "")}
                                data-url={character.url}
                                onClick={e => props.onClick(e)}
                            >{character.name}</li>
                        }
                    )
                }
            </ul>
        </div>
    </div>
)