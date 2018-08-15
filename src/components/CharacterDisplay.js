import React, { PureComponent } from 'react'
import Characters from '../model/characters'
import { CharacterList } from '../presentation/Views'

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

export default CharacterDisplay