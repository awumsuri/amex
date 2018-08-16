import React, { PureComponent } from 'react'
import Characters from '../model/characters'
import { CharacterList, CharacterInfo } from '../presentation/Views'
import { connect } from 'react-redux'
import { fetchCharacter } from '../actions/actions'
import { Sentry } from 'react-activity'

let activeKey = -1;

class CharacterDisplay extends PureComponent {

    state = {        
        character: undefined,
        isFetching: false,
        error: undefined 
    }

    handleCharacterSelect = (event) => {
        const { attributes } = event.target
        const url = attributes['data-url'].value
        activeKey = parseInt(attributes['data-indexname'].value, 10)        
        this.props.fetchCharacter(url)
    }

    transformDate(characters) {
        characters.forEach(character => {
            character.created = new Date(character.created)
        });
    }

    render() {
        const { app } = this.props
        if (app.character) {
            this.transformDate(app.character)
        }

        return (
            <div className="content">
                <header className="star-wars-header">Star Wars</header>
                <CharacterList 
                    { ...this.state } 
                    onClick={this.handleCharacterSelect} 
                    characters={Characters.characters}
                    activeKey={activeKey}
                 />
                 {
                     app.isFetching && 
                     <Sentry />
                 }
                 {
                    app.error && 
                    <div>
                        <span className="error">{app.error.message}</span>
                    </div>
                 }
                 {
                     !app.error && !app.isFetching && app.character && 
                     <CharacterInfo movies={app.character}/>
                 }
            </div>
        )        
    }
}

const mapStateToProps = (state) => ({
        app: state
})

const mapDispatchToProps = {
    fetchCharacter
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDisplay)