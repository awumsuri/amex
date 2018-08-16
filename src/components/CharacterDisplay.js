import React, { PureComponent } from 'react'
import Characters from '../model/characters'
import { CharacterList } from '../presentation/Views'
import { connect } from 'react-redux'
import { fetchCharacter } from '../actions/actions'
import { Sentry } from 'react-activity'

class CharacterDisplay extends PureComponent {

    state = {        
        character: undefined,
        isFetching: false,
        error: undefined, 
        activeKey: undefined
    }

    handleCharacterSelect = (event) => {
        const { attributes } = event.target
        const url = attributes['data-url'].value
        this.activeKey = attributes['data-indexname'].value        
        this.props.fetchCharacter(url)
    }

    render() {
        const { app } = this.props

        return (
            <div className="content">
                <header className="star-wars-header">Star Wars Characters</header>
                <CharacterList 
                    { ...this.state } 
                    onClick={this.handleCharacterSelect} 
                    characters={Characters.characters}
                    activeKey={this.state.activeKey}
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