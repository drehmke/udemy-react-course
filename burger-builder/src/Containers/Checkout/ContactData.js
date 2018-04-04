import React, { Component } from 'react'
import orderAxios from '../../axios-orders'
//import {} from 'react-router-dom'
import Button from '../../Components/UI/Button'
import Spinner from '../../Components/UI/Spinner'
import styles from '../../Components/Styles/ContactData.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      postalCode: ''
    },
    fetching: false
  }

  orderHandler = (event) => {
    event.preventDefault()

    this.setState({fetching: true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Donna Ryan",
        address: {
          street: "123 AnyStreet",
          zipCode: '12345',
          country: 'USA'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'bicycle'
    }
    /* comment this out to see the spinner, if using firebase */
    orderAxios.post('/orders.json',order)
      .then( (response) => {
        // console.log(response)
        this.setState({fetching: false})
        this.props.history.push('/')
      })
      .catch( (err) => {
        // console.log(err)
        this.setState({fetching: false})
      })
  }

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email Address" />
        <input type="text" name="street" placeholder="Your Street Address" />
        <input type="text" name="city" placeholder="Your City" />
        <input type="text" name="postalCode" placeholder="Your Zip Code" />
        <div className="actions">
          <Button btnType="success" clicked={this.orderHandler}>Complete Order</Button>
        </div>
      </form>
    )
    if( this.state.fetching ) {
      form = <Spinner />
    }
    return(
      <div className={styles.contactData}>
        <h4>Enter Your Delivery Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
