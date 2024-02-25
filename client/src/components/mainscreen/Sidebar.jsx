import React, {useState} from 'react'
import styled from 'styled-components';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BarChartIcon from '@mui/icons-material/BarChart';

const SidebarContainer = styled.div`
    width: ${props => (props.open ? "200px" : "50px")};
    height: 100vh;
    background-color: #1e2025;
    transition: width 0.5s;
    position: fixed;
    z-index: 99999;
    top: 4rem;
    left: 0;
`;

const SidebarItemContainer = styled.div`
    margin-top: 2rem;
`;

const SidebarItem = styled.div`
    color: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: ${props => (props.open ? 'start' : 'center')};
    gap: ${props => (props.open ? '1rem' : '0')};
    cursor: pointer;
    
    &:hover{
        background: #333;
        transition: all .5s;
    }
`;

const ItemText = styled.span`
    display: ${props => (props.open ? 'inline' : 'none')};
    margin-left: 5px;
`;


const Sidebar = ({handleSidebarToggle, open}) => {
    
    
    return (
        <SidebarContainer open={open}>

            <SidebarItemContainer>
                <SidebarItem >
                    <DashboardIcon />
                    <ItemText open={open}>Dashboard</ItemText>
                </SidebarItem>
                
                <SidebarItem>
                    <ShoppingBasketIcon />
                    <ItemText open={open}>Products</ItemText>
                </SidebarItem>

                <SidebarItem>
                    <BarChartIcon />
                    <ItemText open={open}>Sales</ItemText>
                </SidebarItem>

                
            </SidebarItemContainer>
            
        </SidebarContainer>      
    )
}

export default Sidebar