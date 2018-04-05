import React, { Component } from 'react'
import orderAxios from '../../axios-orders'
//import {} from 'react-router-dom'
import Button from '../../Components/UI/Button'
import Spinner from '../../Components/UI/Spinner'
import Input from '../../Components/UI/Form/Input'
import styles from '../../Components/Styles/ContactData.css'

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        }
      },
      street: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street Address'
        }
      },
      zipcode: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Zip Code'
        }
      },
      country: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        }
      },
      email: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email Address'
        }
      },
      deliveryMethod: {
        elementType: 'select',
        value: '',
        elementConfig: {
          options: [
            {value: 'bicycle', display: 'Bicycle'},
            {value: 'car', display: 'Car'},
            {value: 'tank', display: 'Tank'},
            {value: 'drone', display: 'Drone'},
            {value: 'hovercraft', display: 'Hovercraft'},
          ]
        }
      }
    },
    fetching: false
  }

  orderHandler = (event) => {
    event.preventDefault()

    this.setState({fetching: true})
    let order = ''
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
    const formElements = []
    for( let key in this.state.orderForm ) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = (
      <form>
        {
          formElements.map( formElement => (
            <Input key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
            />
          ))
        }
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
