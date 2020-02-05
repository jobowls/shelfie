import React from 'react'
import {Link} from 'react-router-dom'

function Product(props) {
    const {product, deleteProduct} = props;
    const {id, name, price, url} = product;

    return (
        <section id="product-container">
            <div id="product-data" >
                <div id="product-info">
                    <div id="showfloor" >
                        <p> {name} </p>
                        <img id="prphoto" src={url} alt="" />
                        <p> ${price} </p>
                        <div id="product-butts">
                            <Link to={`/form/${id}`}> <button className="buttons" id="ebuttons" > Edit </button> </Link>
                            <button className="buttons" id="dbuttons" onClick={() => deleteProduct(id)}> Delete </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Product;