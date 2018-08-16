import React, { PureComponent } from 'react'

class CharacterInfo extends PureComponent {
    componentWillUpdate() {
        this.props.created = new Date(this.props.created)
    }

    render() {
        return(
            <div className="results">
                <BootstrapTable data={this.props.movies} hover>
                    <TableHeaderColumn isKey dataField="title">Title</TableHeaderColumn>
                    <TableHeaderColumn dataField="created">Created</TableHeaderColumn>
                </BootstrapTable>

            </div>
        )
    }
}

export default CharacterInfo