import React from 'react'
import {database} from '../firebase'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

class FirebaseComponent extends React.Component {
    state = {
        name: null,
        check: null
    }

    changeInput = (event) => {
        this.setState({name: event.target.value})
    }

    setButtonHandler = () => {
       let parsedData = null

        try{parsedData = JSON.parse(this.state.name)}
       catch(error){
           alert('zly JSON')
           return
       }
        database.ref('myData').set(parsedData)
            .then(() => this.setState({check: `zapisano: ${this.state.name}`})
            )
    }

    render() {
        return <div>
            <h1>Firebase</h1>
            <div>{this.state.check}
            </div>
            <div>
                <TextField
                    floatingLabelText="JSON to send"
                    multiLine={true}
                    fullWidth={true}
                    onChange={this.changeInput}
                />
                <br/>
            </div>

            <RaisedButton label="SET"
                          onClick={this.setButtonHandler}/>
        </div>
    }
}

export default FirebaseComponent