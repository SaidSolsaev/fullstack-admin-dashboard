import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
// import LoginIcon from '@mui/icons-material/Login';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #20232a;
    color: white;
    padding: 0 1rem;
    height: 4rem;
`;

const LeftSection = styled.div`
    display: flex;
    align-items: center;
`;

const RightSection = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 1rem;
`;

const NavItemsContainer = styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
`;


const LoginIcon = styled(AccountCircleIcon)`
    margin-left: auto;
    cursor: pointer;
`;

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;



const Navbar = ({handleSidebarToggle}) => {

    return (
        <NavbarContainer>
            <LeftSection>
                <MenuIcon onClick={handleSidebarToggle} style={{cursor: "pointer"}}/>
                <Logo>LOGO</Logo>
            </LeftSection>

            <RightSection>
                <NavItemsContainer>
                    
                    <UserContainer>
                        <LoginIcon onClick={() => alert('Gå til innloggingsside')} />
                        <p style={{marginLeft: "10px", marginRight: "10px"}}>asd</p>
                        <KeyboardArrowDownIcon />
                    </UserContainer>
                </NavItemsContainer>
            </RightSection>
            

            
        </NavbarContainer>
    );
};

export default Navbar;
