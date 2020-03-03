import React, {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      price: 0,
      url: '',
      edit: false
    }
  }
  componentDidMount = () => {
    const {id} = this.props.match.params;
    console.log(this.props);
    if (id) {
      axios.get(`/api/product/${id}`).then(results => {
        const {name, price, url} = results.data[0]
        console.log(results.data)
        this.setState({id, name, price, url, edit: true})
      })
    }
  }
  componentDidUpdate = (prevProp) => {
    const {id} = this.props.match.params;
    if(!id && this.props !== prevProp) {
      this.setState({id: '', name: '', price: '', url: '', edit: false})
    }
  }
  componentDidUpdate = (prevProps) => {
    const {id} = this.props
    if (id && prevProps.id === id) {
      axios.get(`/api/product/${id}`).then(results => {
        const {name, price, url} = results.data[0]
        this.setState({name: name, price: price, url: url, edit: true})
      })
    }
  }
  handleChange = ({name, value}) => {
    this.setState({[name]: value})
  }
  addProduct = () => {
    const {name, price, url} = this.state;
    axios.post(`/api/product`,{name, price, url}).then(results => {
      this.clearInputs()
      this.props.history.push('/')
    }).catch(err => console.log(err))
  }
  editProduct = () => {
    const {id, name, price, url} = this.state;

    axios.put(`/api/product/${id}`, {name, price, url}).then(results => {
      this.clearInputs()
      this.props.history.push('/')
    })
  }
  clearInputs = () => {
    this.props.history.push('/')
    this.setState({name: '', price: 0, url: '', edit: false})
  }

  render() {
    const {edit, name, price, url} = this.state;

    return (
      <section id='refinery'>
        <section id='form-page'>
          <div id='center-parent'>
              <img  id='product-image' src={url} alt=""/>
              <h2> Update Product Image: </h2>
                <input id='center' name="url" value={url} placeholder="Upload Image" onChange={(e) => this.handleChange(e.target)} />
              <h2> Update Product Title: </h2>
                <input id='center' name="name" value={name} placeholder="Enter Name" onChange={(e) =>this.handleChange(e.target)} />
              <h2> Update Product Price: </h2>
                <input id='center' name="price" value={price} placeholder="Enter Price" onChange={(e) =>this.handleChange(e.target)} />
            
            <div id='refinery-btns' >
              {edit ? <button id='edit' className="form-button" onClick = {() => this.editProduct()}> Save Changes </button> : <button className="form-button" id='edit' onClick = {() => this.addProduct()}> Add Printable to Shop </button>}

              <button id='edit' onClick = {() => {this.clearInputs()}}> Cancel </button>
              
            </div>
          </div>
        </section>
      </section>
    )
  }
}
export default withRouter(Form)