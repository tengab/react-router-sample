import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import SideBar from "./SideBar";

class App extends Component {
    state = {
        isDrawerOpen: false,

    }

    drawerToggle = () => {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen
        })
    }

    render() {
        console.log('Render App!', this.state)
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="My First App"
                        onLeftIconButtonClick={this.drawerToggle}
                    />
                    <SideBar
                    isDrawerOpen = {this.state.isDrawerOpen}
                    drawerToggle = {this.drawerToggle}
                    />

                    <Counter />

                    <DefaultPropsComponent/>
                    <DefaultPropsComponent name="Mateusz"/>
                    <DefaultPropsComponent name="Ola"/>
                    <DefaultPropsComponent name="Ala"/>
                    <DefaultPropsComponent/>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
