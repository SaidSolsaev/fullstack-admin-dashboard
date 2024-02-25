import React from 'react'
import Navbar from './components/mainscreen/Navbar'
import Sidebar from './components/mainscreen/Sidebar'
import styled from 'styled-components'

const MainContent = styled.div`
    margin-left: ${props => (props.open ? '200px' : '50px')};
    transition: margin-left 0.5s;
`;

const Layout = ({handleSidebarToggle, sidebarOpen, children}) => {
    
    return (
        <>
            <Navbar handleSidebarToggle={handleSidebarToggle}/>
            <Sidebar handleSidebarToggle={handleSidebarToggle} open={sidebarOpen}/>
            
            <MainContent open={sidebarOpen}>
                {children}
            </MainContent>
        </>
    )
}   

export default Layout