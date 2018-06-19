import React, { Component } from 'react'
import orderAxios from '../../axios-orders'
//import {} from 'react-router-dom'
import { connect } from 'react-redux'
import withErrorHandler from '../../Hoc/withErrorHandler'
import * as actionTypes from '../../Store/actions/index'
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
        },
        validation: {
          required: true,
          minLength: 3,
          errorMessage: 'Please enter a valid name.'
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street Address'
        },
        validation: {
          required: true,
          errorMessage: 'Please enter a valid street address.'
        },
        valid: false,
        touched: false
      },
      zipcode: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Zip Code'
        },
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          errorMessage: 'The zip code must be 5 characters long.'
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        validation: {
          required: true,
          errorMessage: 'Please enter a valid country.'
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        value: '',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email Address'
        },
        validation: {
          required: true,
          errorMessage: 'Please enter a valid email address.'
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        value: 'bicycle',
        elementConfig: {
          options: [
            {value: 'bicycle', display: 'Bicycle'},
            {value: 'car', display: 'Car'},
            {value: 'tank', display: 'Tank'},
            {value: 'drone', display: 'Drone'},
            {value: 'hovercraft', display: 'Hovercraft'},
          ]
        },
        valid: true, // this is needed for the formIsValid check
        validation: { // this is needed for validationCheck method
          required: false
        }
      }
    },
    formIsValid: false//,
    //fetching: false
  }

  orderHandler = (event) => {
    event.preventDefault()

    // this.setState({fetching: true})
    const formData = {}
    for ( let formElementId in this.state.orderForm ) {
      formData[formElementId] = this.state.orderForm[formElementId].value
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData,
      userId: this.props.userId
    }
    /* comment this out to see the spinner, if using firebase */
    /*
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
      */
      this.props.onOrderBurger(order, this.props.token)
  }

  validationCheck( value, rules ) {
    if( !rules ) {
      return true
    }
    let isValid = true
    // rule checks
    if( rules.required )  { isValid = value.trim() !== '' && isValid }
    if( rules.minLength ) { isValid = value.length >= rules.minLength && isValid }
    if( rules.maxLength ) { isValid = value.length <= rules.maxLength && isValid }
    // rule checks are done
    return isValid
  }

  inputChangedHandler = (event, inputId) => {
    const updatedOrderForm = {  ...this.state.orderForm }
    const updatedFormElement = { ...updatedOrderForm[inputId] }
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = this.validationCheck(updatedFormElement.value, updatedFormElement.validation)
    updatedFormElement.touched = true;
    updatedOrderForm[inputId] = updatedFormElement

    // check to see if the whole form is valid
    let formIsValid = true
    for( let inputId in updatedOrderForm ) {
      // if the element is true AND formIsValid true
      formIsValid = updatedOrderForm[inputId].valid && formIsValid
    }

    this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid})
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
      <form onSubmit={this.orderHandler}>
        {
          formElements.map( formElement => (
            <Input key={formElement.id}
              elementType={formElement.config.elementType}
              elementConfig={formElement.config.elementConfig}
              value={formElement.config.value}
              invalid={!formElement.config.valid}
              shouldValidate={formElement.config.validation}
              touched={formElement.config.touched}
              changed={(event) => this.inputChangedHandler(event, formElement.id)}
            />
          ))
        }
        <div className="actions">
          <Button btnType="success" disabled={!this.state.formIsValid}>Complete Order</Button>
        </div>
      </form>
    )
    if( this.props.fetching ) {
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


const mapStateToProps = state => {
  return {
    ings: state.burger.ingredients,
    price: state.burger.totalPrice,
    fetching: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onOrderBurger: (orderData, token) => dispatch(actionTypes.purchaseBurger(orderData, token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, orderAxios))
