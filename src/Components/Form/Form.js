import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


class Form extends Component {
    constructor() {
        super();

        this.state = {
            id: 0,
            url: '',
            name: '',
            price: 0,
            editing: false
        }

    }
    componentDidMount() {
        if(this.props.match.params.id) {
        console.log('this.props.match', this.props.match)
            axios.get(`/api/products/${this.props.match.params.id}`)
            .then(res => this.setState({id: res.data.id, url: res.data.url, name: res.data.name, price: res.data.price}))
        }
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }




    render() {
        const {editing, id, url, name, price} = this.state

        return(
            <div className="form-box">
                
                <p> Image URL: </p>
                <input name="url" onChange="e => this.handleChange(e)" placeholder='img url here' />
                <p> Product Name: </p>
                <input  />
                <p> Price: </p>
                <input  /> 
                {editing ? (
                <button  onClick={() => this.cancelEdit} > Cancel </button>
                ) : (
                <button onClick={() => this.addProduct(id, url, name, price)}> Add to Inventory </button>
            )
            } 

            </div>
        )
    }
}

export default withRouter(Form);