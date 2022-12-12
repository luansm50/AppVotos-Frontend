import React from 'react'

export default props => (
    <header className='main-header'>
        <a href='/#/' className='logo'>
            <span className='logo-mini'><b>Vote</b>A</span>
            <span className='logo-lg'>
                <i className='fa fa-sticky-note-o'></i>
                <b> Vote</b> Analysis
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className='sidebar-toggle' data-toggle='offcanvas'></a>
        </nav>
    </header>
)