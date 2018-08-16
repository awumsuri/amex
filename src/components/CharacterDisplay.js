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
        error: undefined
    }

    handleCharacterSelect = (event) => {
        const url = event.target.attributes[1].value
        this.props.fetchCharacter(url)
    }

    render() {
        const { app } = this.props

        return (
            <div className="content">
                <CharacterList 
                    { ...this.state } 
                    onClick={this.handleCharacterSelect} 
                    characters={Characters.characters}
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