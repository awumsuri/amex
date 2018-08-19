import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
const liClass =  "list-group-item list-group-item-action"

export const CharacterList = (props) => (
    <div>   
        <header className="character-select">Choose A Character</header>
        <div>
            <ul className="list-group">           
                {
                    props.characters && 
                    props.characters.map(
                        (character, index) => (                        
                            <li 
                                key={index}
                                data-indexname={index}                         
                                className={liClass.concat((props.activeKey === index) ? " active" : "")}
                                data-url={character.url}
                                onClick={e => props.onClick(e)}
                            >
                            {character.name}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    </div>
)

export const CharacterInfo = (props) => {
    <div className="results">
        <header className="character-heading-result">
            {props.character.name}
        </header>
        <div className="detail">
            <span>Home: {props.character.homeworld.name} DOB: {props.character.birth_date}</span>
        </div>
        <BootstrapTable 
            data={props.movies} 
            hover
            tableStyle={ { border: '#157ffb 1px solid' } }
        >
            <TableHeaderColumn isKey dataField="title" width="50%">Title</TableHeaderColumn>
            <TableHeaderColumn dataField="release_date">Release Date</TableHeaderColumn>
        </BootstrapTable>
    </div>
}