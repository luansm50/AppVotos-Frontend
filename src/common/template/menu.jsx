import React from "react";
import MenuItem from './menuItem';
import MenuTree from "./MenuTree";

export default props => (
    <ul className="sidebar-menu">
        <MenuTree label='Análises' icon='edit'>
            <MenuItem path='#analises'
                label='Nova Análise' icon='plus' />
        </MenuTree>

        <MenuTree label='Consultas' icon='search'>
            <MenuTree label='Referencias' icon='search'>
                <MenuItem path='#siglasTipos'
                    label='Siglas' icon='search' />
            </MenuTree>

        </MenuTree>

    </ul>
)