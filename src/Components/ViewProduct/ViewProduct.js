import React, { useState, useEffect } from 'react';
import './ViewProduct.css';
import axios from 'axios';
import { Link } from 'react-router-dom';


const ViewProduct = () => {

    const [getData, setData] = useState([]);




    // GET API :
    const fetchData = () => {
        try {
            axios.get('/products/').then((res) => {
                setData(res.data);
            });
        } catch {
            alert('An error encountered while fetching the resources ');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    // DELETE API :

    const deleteHandle = (id) => {



        axios.delete(`/products/${id}`).then((res) => {
            alert('Product has been deleted from the list');
            fetchData();
        }).catch((err) => {
            alert('An error encountered while deleting the Product');
        });


    };


    return (

        <>
            <div className="viewProductSection">
                <h2 style={{ textAlign: 'center', color: 'grey' }}>MERN STACK CRUD APP</h2>
                <div className="createBtnContainer">
                    <Link className='createBtn' to={'/createProduct'}>Create Product</Link>
                </div>
                <div className="viewProduct">
                    {
                        getData.map((getValue) => {
                            return (

                                <div className="showData" key={getValue._id}>
                                    <div className='productTitle  view'> <h2>{getValue.title}</h2></div>
                                    <div className='productCategory view'>{getValue.category}</div>
                                    <div className='productThumbnail view'><img src={getValue.thumbnail} alt="thumbnail" /></div>
                                    <div className='productDescription view'>{getValue.description}</div>
                                    <div className='productRatings view'>☆ {getValue.ratings}</div>
                                    <div className='productPrice view'><h4>₹{getValue.price}</h4> </div>
                                    <div className="btns">
                                        <Link className='editBtn' to={`/editProduct/${getValue._id}`}>Edit</Link>
                                        <button className='delete' onClick={() => { deleteHandle(getValue._id) }}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default ViewProduct;
