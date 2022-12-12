import React from "react";
import MenuItem from './menuItem';
import MenuTree from "./MenuTree";

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path="#" label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='#newAnalysis'
                label='Análises' icon='plus' />
            <MenuItem path='#newUser'
                label='Usuários' icon='user-plus' />
        </MenuTree>
    </ul>
)