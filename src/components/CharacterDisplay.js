import React, { PureComponent } from 'react'
import Characters from '../model/characters'
import { CharacterList, CharacterInfo } from '../presentation/Views'
import { connect } from 'react-redux'
import { fetchCharacter } from '../actions/actions'
import { Sentry } from 'react-activity'

class CharacterDisplay extends PureComponent {

    state = {
        data: {
            character: undefined
        },
        isFetching: false,
        error: undefined
    }

    handleCharacterSelect = (event) => {
        const { attributes } = event.target
        const url = attributes['data-url'].value
        this.activeKey = parseInt(attributes['data-indexname'].value, 10)
        this.props.fetchCharacter(url)
    }

    transformDate(films) {
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };

        films.forEach(film => {
            film.release_date = new Date(film.release_date).toLocaleDateString(undefined, options)
        });
    }

    render() {
        const { app } = this.props
        const { isFetching } = this.state

        if (app.data && app.data.associatedData) {
            this.transformDate(app.data.associatedData)
        }

        return (
            <div className="content">
                <header className="star-wars-header">Star Wars</header>
                <CharacterList 
                    onClick={this.handleCharacterSelect} 
                    characters={Characters.characters}
                    activeKey={this.activeKey}
                    isFetching={isFetching}
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
                     !app.error && !app.isFetching && app.data && 
                     <CharacterInfo movies={app.data.associatedData} character={app.data.characterData}/>
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