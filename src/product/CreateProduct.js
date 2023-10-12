import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CreateProduct = () => {
    const navigate = useNavigate();

    const [brands, setBrands] = useState([]);

    const titleRef = useRef();
    const priceRef = useRef();
    const discountRef = useRef();
    const ratingRef = useRef();
    const stockRef = useRef();
    const brandRef = useRef();
    const categoryRef = useRef();
    const descriptionRef = useRef();
    useEffect(() => {
        axios.get('/product/brands')
            .then(res => {
                setBrands(res.data?.brands);
            })
    }, []);
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get('/product/categories')
            .then(res => {
                setCategories(res.data?.categories);
            })
    }, []);

    const handleCreateNewProduct = async () => {
        const product = {
            title:titleRef.current.value,
            price:priceRef.current.value,
            discount:discountRef.current.value,
            rating:ratingRef.current.value,
            stock:stockRef.current.value,
            brand:brandRef.current.value,
            
        }
    }
    return (
        <div>
            <div style={{ height: "60px" }} className='d-flex justify-content-center align-items-center'>
                <h1 style={{ fontSize: "25px" }}>Front-end Web Development with React</h1>
            </div>
            <div style={{ height: "40px", backgroundColor: "purple" }}>
                <div className='container'>
                    <button onClick={() => {
                        navigate('/');
                    }} style={{ backgroundColor: "orange", color: "white" }} className='btn'>Home</button>
                </div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <div className='container'>
                    <div style={{ height: "60px" }} className='d-flex justify-content-center align-items-center'>
                        <h3 style={{ fontSize: "25px" }}>Create a new Product</h3>
                    </div>
                    <div style={{ width: "700px", margin: "0 auto" }}>
                        <div style={{ margin: "10px 0" }} class="row">
                            <div class="col-6">
                                <label for="inputEmail4">ID</label>
                                <input type="text" class="form-control" id="inputEmail4" placeholder="0" disabled />
                            </div>
                            <div class="col-6">
                                <label for="inputPassword4">Title <span style={{ color: "red" }}>*</span></label>
                                <input ref={titleRef} type="text" class="form-control" id="inputPassword4" placeholder="title" />
                                <div style={{ color: "red" }}>
                                    Please enter the title.
                                </div>
                            </div>
                        </div>
                        <div style={{ margin: "10px 0" }} class="row">
                            <div class="col-6">
                                <label for="inputEmail4">Price <span style={{ color: "red" }}>*</span></label>
                                <input ref={priceRef} type="number" defaultValue={0} class="form-control" id="inputEmail4" placeholder="0" />
                            </div>
                            <div class="col-6">
                                <label for="inputPassword4">Discount <span style={{ color: "red" }}>*</span></label>
                                <input ref={discountRef} type="number" defaultValue={0} class="form-control" id="inputPassword4" placeholder="0" />
                            </div>
                        </div>
                        <div style={{ margin: "10px 0" }} class="row">
                            <div class="col-6">
                                <label for="inputEmail4">Rating</label>
                                <input ref={ratingRef} type="number" class="form-control" id="inputEmail4" placeholder="0" defaultValue={0} />
                            </div>
                            <div class="col-6">
                                <label for="inputPassword4">Stock</label>
                                <input ref={stockRef} type="number" class="form-control" id="inputPassword4" placeholder="0" defaultValue={0} />
                            </div>
                        </div>
                        <div style={{ margin: "10px 0" }} class="row">
                            <div class="col-6">
                                <label className='col-12' for="inlineFormCustomSelectPref">Brand</label>
                                <select ref={brandRef} style={{ height: "40px", outline: "none", width: "100%" }} >
                                    {brands?.map(item => <option key={item?._id + 'b'} value={item?.id}>{item?.name}</option>)}
                                </select>
                            </div>
                            <div class="col-6">
                                <label className='col-12' for="inlineFormCustomSelectPref">Category</label>
                                <select ref={categoryRef} style={{ height: "40px", outline: "none", width: "100%" }} >
                                    {categories?.map(item =>  <option key={item?._id + "c"} value={item?.id}>{item?.name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div style={{ margin: "10px 0" }} class="row">
                            <div class="col-12">
                                <label for="inputPassword4">Description</label>
                                <textarea ref={descriptionRef} type="text" class="form-control" />
                            </div>
                        </div>
                        <div style={{ margin: "" }} className='d-flex justify-content-center'>
                            <button onClick={handleCreateNewProduct} type="submit" class="btn btn-primary">Add</button>
                            <button onClick={() => {
                                navigate('/');
                            }} style={{ marginLeft: "10px" }} type="submit" class="btn btn-danger">Back to Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CreateProduct