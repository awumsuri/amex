import React, { PureComponent } from 'react'
import Characters from '../model/characters'
import { CharacterList } from '../presentation/Views'
import { connect } from 'react-redux'
import StarWarsAPI from '../services/StarWarAPI'

class CharacterDisplay extends PureComponent {

    state = {
        characters: Characters.characters
    }

    handleCharacterSelect = (event) => {
        const url = event.target.attributes[1]
    }

    render() {
        return (
           <CharacterList { ...this.state } onClick={this.handleCharacterSelect} />
        )        
    }
}

const mapStateToProps = (state) => (
    {
        ...state
    }
)

const mapDispatchToProps = (dispatch) => dispatch

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDisplay)