import React from 'react'
import {Link} from 'react-router-dom'

function Product(props){
    const {product, deleteProduct, addToCart, editProduct} = props;
    const {id, name, price, url} = props.product;
    return (
        <section>
            <div id='dash-container' >
                <div id='title'>
                    <h2> {name} </h2>
                    <h3 id='price'> ${price} </h3>
                </div>
                <div >
                    <img id='product-image' src={url} alt="" />
                        {/* <button id="a2c" onClick={() => addToCart(id)} > Add to Cart </button> */}
                    <div id='form-btn-container'>
                            <button id='form-btn' onClick={() => addToCart(id)}> Add to Cart </button>
                        <Link to={`/form/${id}`} >
                            <button id='form-btn' onClick={() => editProduct(id)}> Edit </button> 
                        </Link>
                            <button id='form-btn' onClick={() => deleteProduct(id)}> Delete </button>
                    </div>
                </div>
            </div>            
        </section>
    )
}
export default Product