import React, { Component }from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actions from '../../../Store/actions/index'

class Logout extends Component {
    componentDidMount() {
        this.props.onLogout()

    }
    render () {
        if( !this.props.isAuthenticated ) {
            return <Redirect to="/auth" />
        }
        else {
            return(
                <p>Did not logout</p>
            )
        }
    }
}

const mapStateToProps = state => {
    return{
        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
