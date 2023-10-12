import React, { useEffect, useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Home = () => {
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([])
    useEffect(() => {
        axios.get('/product')
            .then(res => {
                setProducts(res.data?.products);
            })
    }, []);

    useEffect(() => {
        axios.get('/product/brands')
            .then(res => {
                setBrands(res.data?.brands);
            })
    }, []);

    const handleChangeBrand = async (e) => {
        try{
            const data = await axios.get(`/product/brands/${e.target.value}`);
            setProducts(data.data?.products);
        }
        catch(err){

        }
    }

    const handleSearch = async (e) => {
        try{
            const data = await axios.get(`/product?search=${e.target.value}`);
            setProducts(data.data?.products);
        }
        catch(err){

        }
    }
    return (
        <div>
            <div style={{ height: "60px" }} className='d-flex justify-content-center align-items-center'>
                <h1 style={{ fontSize: "25px" }}>Front-end Web Development with React</h1>
            </div>
            <div style={{ height: "40px", backgroundColor: "purple" }}>
                <div className='container'>
                    <button style={{ backgroundColor: "orange", color: "white" }} className='btn'>Home</button>
                </div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <div style={{ width: "800px", margin: "0 auto" }}>
                    <div className='row'>
                        <div className='col-4'>
                            <div>
                                <h4>Filter by brand</h4>
                            </div>
                            {brands?.map(item => 
                            <div key={item?._id}>
                                <input onChange={e => {
                                    handleChangeBrand(e)
                                }} type='radio' name='brand' id={item?._id} value={item.id}/>
                                <label htmlFor={item?._id}>{item?.name}</label>
                            </div>)}
                        </div>
                        <div className='col-8'>
                            <div style={{ height: "60px" }} className='d-flex justify-content-center align-items-center'>
                                <h1 style={{ fontSize: "25px" }}>List of products</h1>
                            </div>
                            <div style={{ height: "60px" }} className='d-flex justify-content-center align-items-center'>
                                <input onChange={(e) => {
                                    handleSearch(e);
                                }} style={{ width: "70%" }} type='text' placeholder='Enter title to search...' />
                            </div>
                            <div style={{ margin: "10px 0" }} className='d-flex justify-content-end'>
                                <Link to='/product/add' style={{ color: "blue" }} className='btn'>Create product</Link>
                            </div>
                            <table style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }} className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Discount (%)</th>
                                        <th scope="col">Brand</th>
                                        <th scope="col">Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products?.map(item =>
                                        <tr key={item?._id}>
                                            <th scope="row"> {item?.id}</th>
                                            <td>{item?.title}</td>
                                            <td>{item?.description}</td>
                                            <td>{item?.price}</td>
                                            <td>{item?.discountPercentage}</td>
                                            <td>{item?.brand?.name}</td>
                                            <td>{item?.category?.name}</td>
                                        </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home