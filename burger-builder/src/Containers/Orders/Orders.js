import React, { Component } from 'react'
import { connect } from 'react-redux'
import orderAxios from '../../axios-orders'
import withErrorHandler from '../../Hoc/withErrorHandler'
import * as actions from '../../Store/actions/index'
import OrderListItem from '../../Components/Order/OrderListItem'
//import Spinner from '../../Components/UI/Spinner'

class Orders extends Component {
  /*
  state = {
    orders: [],
    fetching: true
  }
  */
  /* --- Life Cycles ---- */
  componentDidMount() {
    /*
    orderAxios.get('/orders.json')
      .then( (response) => {
        const fetchedOrders = []
        for(let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key
          })
        }
        this.setState({fetching: false, orders: fetchedOrders})
      })
      .catch( (err) => {
        this.setState({fetching: false})
      })
      */
      this.props.onFetchOrders()
  }
  /* --- Methods -------- */

  /* --- Render --------- */
  render() {
    /*
    let showOrders = <Spinner />
    if( this.props.loading ) {
      showOrders = this.props.orders.map( order => (
          <OrderListItem
            key={order.id}
            price={+order.price}
            ingredients={order.ingredients}
          />
        ))
    }
    */
    return(
      <div>
        {this.props.orders.map( order => (
            <OrderListItem
              key={order.id}
              price={+order.price}
              ingredients={order.ingredients}
            />
          ))}
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders,
    loading: state.order.loading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, orderAxios))
