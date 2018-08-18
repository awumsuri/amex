import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

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
                                className={props.isFetching ? "disabled" : "list-group-item list-group-item-action".concat((props.activeKey === index) ? " active" : "")}
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

export const CharacterInfo = (props) => (
    <div className="results">
        <header className="character-heading-result">{props.character.name}</header>
        <BootstrapTable data={props.movies} hover>
            <TableHeaderColumn isKey dataField="title" width="240">Title</TableHeaderColumn>
            <TableHeaderColumn dataField="release_date">Release Date</TableHeaderColumn>
        </BootstrapTable>
    </div>
)