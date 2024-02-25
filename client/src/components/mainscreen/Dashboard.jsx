import React from 'react'
import styled from 'styled-components';

const PageContent = styled.main`
    margin-left: ${props => (props.open ? '200px' : '50px')};
    transition: margin-left 0.5s;
    padding: 1rem;
`;

const Dashboard = ({open}) => {
    
    
    return (
        <PageContent open={open}>
            <div>Dashboard</div>
        </PageContent>
    )
}

export default Dashboard