import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainScreen from './pages/mainscreen/MainScreen'; 
import ProductScreen from './pages/productscreen/ProductScreen';
import Layout from './Layout';

const AppRoutes = () => {
    const [sidebarOpen, setOpen] = useState(false)

    const handleSidebarToggle = () => {
        setOpen(!sidebarOpen)
    }
    
    console.log(sidebarOpen)
    
    return (
        <Router>
            <Layout handleSidebarToggle={handleSidebarToggle} sidebarOpen={sidebarOpen}>
                <Routes>
                    <Route exact path='/' Component={MainScreen} />
                    <Route path="/products" Component={ProductScreen} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default AppRoutes