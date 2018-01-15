import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

const SideBar = (props) => (
    <Drawer
        docked={false}
        width={250}
        open={props.isDrawerOpen}
        onRequestChange={props.drawerToggle}
    >
    </Drawer>
)


export default SideBar