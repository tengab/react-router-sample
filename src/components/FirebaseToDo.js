import React from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/delete';
import {database} from '../firebase'

const styles = {
    margin: 20,
    padding: 20,
    textAlign: 'center'
}
const Task = (props) => (

    <ListItem
        primaryText={props.taskName}
        rightIcon={
            <ActionInfo onClick={() => props.deleteTask(props.taskId)}/>}
    />
)


class FirebaseToDo extends React.Component {

    state = {
        tasks: null,
        newTaskName: ''
    }

    componentWillMount() {
        database.ref('/data')
            .on('value', (snapshot) => {
                const tasksArray = Object.entries(snapshot.val() || {})
                    .map(([key, value]) => {
                        value.key = key
                        return value
                    })
                console.log(Object.entries(snapshot.val() || {}))
                console.log(tasksArray)

                this.setState({
                    tasks: tasksArray
                })
            })
    }

    deleteTask = (taskId) => (
        database.ref(`/data/${taskId}`).remove()
    )

    changeField = (event, value) => {
        this.setState({
            newTaskName: value
        })


    }
    addTask = () => {
        if(!this.state.newTaskName){
            alert('nie mozna zapsac pustego taska')
            return
        }
        database.ref('/data')
            .push({
                name: this.state.newTaskName
            })
        this.setState({
            newTaskName:''
        })
    }

    render() {
        return (
            <Paper style={styles}>
                <TextField
                    value={this.state.newTaskName}
                    onChange={this.changeField}
                    hintText={'Nowe zadanie'}
                    fullWidth={true}
                />
                <RaisedButton
                    onClick={this.addTask}
                    label={"Dodaj!"}
                    primary={true}
                    fullWidth={true}
                />
                <List style={{textAlign: 'left'}}>
                    {
                        this.state.tasks
                        &&
                        this.state.tasks.map((el) => (
                            <Task
                                key={el.key}
                                taskName={el.name}
                                taskId={el.key}
                                deleteTask={this.deleteTask}
                            />
                        ))
                    }
                </List>
            </Paper>
        )
    }
}

export default FirebaseToDo
