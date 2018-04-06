import React, { Component } from 'react';
import { connect } from 'react-redux'
//import * as actionTypes from '../../store/actions/actions'
import { increment, decrement, add, subtract, store, remResult } from '../../store/actions/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
              //this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
              this.props.onIncrementCounter()
              break;
            case 'dec':
              //this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
              this.props.onDecrementCounter()
              break;
            case 'add':
              //this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
              this.props.onAddCounter(value)
              break;
            case 'sub':
              //this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
              this.props.onSubtractCounter(value)
              break;
            default:
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler('inc')} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler('dec')}  />
                <CounterControl label="Add 10" clicked={() => this.counterChangedHandler('add', 10)}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
                <hr />
                {/* pass the reducer slice for counter so reducer slice result can use it */}
                <button onClick={() => this.props.onStoreCounter(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map( res => (
                    <li key={res.id}
                      onClick={() => this.props.onRemoveStoredResult(res.id)}
                      >{res.value}</li>
                  ))}

                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: (val) => dispatch(add(val)),
    onSubtractCounter: (val) => dispatch(subtract(val)),
    onStoreCounter: (val) => dispatch(store(val)),
    onRemoveStoredResult: (val) => dispatch(remResult(val))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// if we don't need state ...
//export default connect(null, mapDispatchToProps)(Counter);
