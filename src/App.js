import React from 'react';
import CreateProduct from './Components/CreateProduct/CreateProduct'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditProduct from './Components/EditProduct.js/EditProduct';
import ViewProduct from './Components/ViewProduct/ViewProduct';

const App = () => {

    return (

        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ViewProduct />} />
                    <Route path='/editProduct/:id' element={<EditProduct />} />
                    <Route path='/createProduct' element={<CreateProduct />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
