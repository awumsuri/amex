import React, { PureComponent } from 'react'
import Characters from '../model/characters'
import { CharacterList } from '../presentation/Views'
import { connect } from 'react-redux'
import { fetchCharacter } from '../actions/actions'

class CharacterDisplay extends PureComponent {

    state = {
        character: undefined
    }

    handleCharacterSelect = (event) => {
        const url = event.target.attributes[1]
        fetchCharacter(url)
    }

    render() {
        return (
           <CharacterList { ...this.state } onClick={this.handleCharacterSelect} />
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