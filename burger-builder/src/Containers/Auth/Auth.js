import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Input from '../../Components/UI/Form/Input'
import Button from '../../Components/UI/Button'
import Spinner from '../../Components/UI/Spinner'
import styles from '../../Components/Styles/Auth.css'
import * as actions from '../../Store/actions/index'

class Auth extends Component {
    state = {
        isSignup: true,
        controls: {
            email: {
                elementType: 'input',
                value: '',
                valid: false,
                touched: false,
                elementConfig: { type: 'email', placeholder: 'Email Address' },
                validation: { required: true, isEmail: true }
            },
            password: {
                elementType: 'input',
                value: '',
                valid: false,
                touched: false,
                elementConfig: { type: 'password', placeholder: 'Password' },
                validation: { required: true, minLength: 6 }
            }
        }
    }

    componentDidMount() {
        if( !this.props.buildingBurger && this.props.authRedirectPath !== '/' ) {
            this.props.onAuthSetRedirectPath()
        }
    }

    validationCheck(value, rules) {
        if (!rules) { return true }
        let isValid = true

        if (rules.required) { isValid = value.trim() !== '' && isValid }
        if (rules.minLength) { isValid = value.length >= rules.minLength && isValid }
        if (rules.maxLength) { isValid = value.length <= rules.maxLength && isValid }
        return isValid
    }

    inputChangedHandler = (event, inputId) => {
        const updatedControls = {
            ...this.state.controls,
            [inputId]: {
                ...this.state.controls[inputId],
                value: event.target.value,
                valid: this.validationCheck(event.target.value, this.state.controls[inputId].validation),
                touched: true
            }
        }
        this.setState({ controls: updatedControls })
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.onAuth( this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup )
    }

    switchAuthModeHandler = (event) => {
        event.preventDefault()
        this.setState(prevState => {
            return {isSignup:  !prevState.isSignup}
        })
    }
    
    render() {
        const formElementsArray = [];
        for (let key in this.state.controls) {
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
            })
        }
        let form = formElementsArray.map(formElement => ( 
            <Input key = { formElement.id }
            elementType = { formElement.config.elementType }
            elementConfig = { formElement.config.elementConfig }
            value = { formElement.config.value }
            invalid = {!formElement.config.valid }
            shouldValidate = { formElement.config.validation }
            touched = { formElement.config.touched }
            changed = { (event) => this.inputChangedHandler(event, formElement.id) }
            />
        ))

        if( this.props.loading ) {
            form = <Spinner />
        }

        let errorMessage = null;
        if( this.props.error ) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            )
        }

        let authRedirect = null
        if( this.props.isAuthenticated ) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return ( 
            <div className={styles.auth}>
                {authRedirect}
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="success">{this.state.isSignup ? 'Create Account' : 'Login' }</Button>
                    <Button 
                        clicked={this.switchAuthModeHandler}
                        btnType="danger">Switch to {this.state.isSignup ? 'Sign In' : 'Sign Up' }</Button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burger.building,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onAuthSetRedirectPath: () => dispatch( actions.authSetRedirectPath('/'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)