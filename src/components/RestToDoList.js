import React from 'react'

const databaseUrl = 'https://ad-snadbox.firebaseio.com/JFDDL3/restToDo/tomek/'


class RestToDoList extends React.Component {
    state = {
        list: null,
        newTaskName: 'Wpisz nowy task',
        currentlyEditedTaskId: null,
        currentlyEditedTaskName: ''
    }

    getData() {
        fetch(databaseUrl + 'list/.json')
            .then(response => response.json())
            .then(parsedJSONData => {
                this.setState({
                    list: parsedJSONData,
                    newTaskName: '',
                    currentlyEditedTaskName: '',
                    currentlyEditedTaskId: null

                })
            })
    }


    deleteTask = (taskId) => {
        fetch(
            databaseUrl + 'list/' + taskId + '/.json',
            {method: 'DELETE'}
        )
            .then(() => this.getData())
            .catch(console.log)
    }

    componentWillMount() {
        this.getData()
    }

    handleInputChange = (event) => this.setState({
        newTaskName: event.target.value
    })

    handleButtonClick = () => {
        const newTaskObj = {name: this.state.newTaskName}

        fetch(
            databaseUrl + 'list/.json',
            {
                method: 'POST',
                body: JSON.stringify(newTaskObj)
            }
        )
            .then(() => {
                this.getData()
            })
            .catch((err) => alert('cos poszlo nie tak'))


    }

    handleTaskNameClick = (taskId, taskName) => {
        this.setState({
            currentlyEditedTaskId: taskId,
            currentlyEditedTaskName: taskName
        })
    }

    handleEditInputChange = (event) => this.setState({
        currentlyEditedTaskName: event.target.value
    })

    handleSaveButtonClick = () => {
        const newTaskObj = {name: this.state.currentlyEditedTaskName}

        fetch(
            databaseUrl + 'list/' + this.state.currentlyEditedTaskId + '/.json',
            {method: 'PATCH', body: JSON.stringify(newTaskObj)}
        )
            .then(() => this.getData())
    }

    render() {
        return (
            <div>
                <div>
                    <input type='text'
                           onChange={this.handleInputChange}
                           value={this.state.newTaskName}
                    />
                    <button onClick={this.handleButtonClick}>
                        Zapisz!
                    </button>
                </div>
                {
                    Object.entries(this.state.list || {})
                        .map(([key, task]) => (
                            <div key={key}>
                                <span onClick={() => this.handleTaskNameClick(key, task.name)}>
                                    {
                                        this.state.currentlyEditedTaskId === key ?
                                            <span>
                                            <input
                                                onChange={this.handleEditInputChange}
                                                value={this.state.currentlyEditedTaskName}
                                            />
                                               <button onClick={this.handleSaveButtonClick}>
                                                   zapisz zmiany
                                               </button>
                                               </span>
                                            :
                                            task.name
                                    }
                                    </span>
                                <button onClick={() => this.deleteTask(key)}>
                                    usun
                                </button>
                            </div>
                        ))
                }
            </div>
        )
    }
}


export default RestToDoList