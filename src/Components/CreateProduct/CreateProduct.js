import React, { useState } from 'react';
import './CreateProduct.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CreateProduct = () => {


    const [getProduct, setProduct] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        ratings: '',
        thumbnail: ''
    });

    const changeHandle = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setProduct({
            ...getProduct,
            [name]: value
        });
    };

    const submitHanlde = (e) => {
        e.preventDefault();

        // POST API :


        axios.post('/products/', getProduct).then((res) => {
            alert('Product has been added to your list ');
        }).catch((errLog) => {
            alert('An error occurred while adding the product' + errLog);
        });

        setProduct({
            title: '',
            description: '',
            category: '',
            price: '',
            ratings: '',
            thumbnail: ''
        })
    };



    return (

        <>
            <div className="container">

                <form action="" onSubmit={submitHanlde}>
                    <h1 style={{ marginTop: '3rem' }}>Add Product</h1>

                    <label htmlFor="">Product name: </label>
                    <input type="text" placeholder='Product Name' autoComplete='off' name='title' value={getProduct.title} onChange={changeHandle} required />

                    <label htmlFor="">Product Description: </label>
                    <input type="text" placeholder='About Product' autoComplete='off' name='description' value={getProduct.description} onChange={changeHandle} required />

                    <label htmlFor="">Category:</label>
                    <select name="category" id="category" required className='category' value={getProduct.category} onChange={changeHandle} >
                        <option value="">Choose...</option>
                        <option value="SmartPhone" >SmartPhone</option>
                        <option value="Laptop" >Laptop</option>
                    </select>


                    <label htmlFor="">Product Price: </label>
                    <input type="number" placeholder='Amount' autoComplete='off' name='price' value={getProduct.price} onChange={changeHandle} required />


                    <label htmlFor="">Product rating: </label>
                    <input type="number" placeholder='Product Rating' autoComplete='off' name='ratings' value={getProduct.ratings} onChange={changeHandle} required />

                    <label htmlFor="">Thumbnail link/src: </label>
                    <input type="text" placeholder='Image link / Src' autoComplete='off' name='thumbnail' value={getProduct.thumbnail} onChange={changeHandle} required />
                    <button type='submit' className='addBtn'>Add Product</button>

                    <Link to={'/'} className='backButton'>Back</Link>

                </form>
            </div>

        </>
    )
}

export default CreateProduct;
