import React, { Component } from 'react'
//import the components we will need
import PatronCard from './PatronCard'
import PatronManager from '../../modules/PatronManager'

class PatronList extends Component {
    //define what this component needs to render
    state = {
        patrons: [],
    }

componentDidMount(){
    console.log("PATRON LIST: ComponentDidMount");
    //getAll from PatronManager and hang on to that data; put it in state
    PatronManager.getAll()
    .then((patronsFromDataBase) => {
        this.setState({
            patrons: patronsFromDataBase
        })
    })
}

render(){
    console.log("PATRON LIST: Render");

    return(
        <div className="container-cards">
            {this.state.patrons.map(singlePatron => <PatronCard key={singlePatron.id} patronProp={singlePatron} />)}
        </div>
    )
}
}

export default PatronList
