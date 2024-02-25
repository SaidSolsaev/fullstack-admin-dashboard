import React, {useState} from 'react'
import Navbar from '../../components/mainscreen/Navbar'
import Dashboard from '../../components/mainscreen/Dashboard'
import Sidebar from '../../components/mainscreen/Sidebar'
import styled from 'styled-components'
import ProductScreen from '../productscreen/ProductScreen'




const MainScreen = () => {
    const [sidebarOpen, setOpen] = useState(false)

    const handleSidebarToggle = () => {
        setOpen(!sidebarOpen)
    }

    console.log(sidebarOpen)

    return (
        <div>
            <Navbar handleSidebarToggle={handleSidebarToggle}/>
            <Sidebar handleSidebarToggle={handleSidebarToggle} open={sidebarOpen}/>
            
            {/* <Dashboard open={sidebarOpen} /> */}
            
            <ProductScreen open={sidebarOpen}/>

            
        </div>
    )
}

export default MainScreen