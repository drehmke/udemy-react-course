import React, { Component } from 'react'
import orderAxios from '../../axios-orders'
import withErrorHandler from '../../Hoc/withErrorHandler'
import OrderListItem from '../../Components/Order/OrderListItem'

class Orders extends Component {
  state = {
    orders: [],
    fetching: true
  }
  /* --- Life Cycles ---- */
  componentDidMount() {
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
  }
  /* --- Methods -------- */

  /* --- Render --------- */
  render() {
    return(
      <div>
        {this.state.orders.map( order => (
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

export default withErrorHandler(Orders, orderAxios)
