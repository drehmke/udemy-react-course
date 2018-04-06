import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions'
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
    onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    onAddCounter: (val) => dispatch({type: actionTypes.ADD, value: val}),
    onSubtractCounter: (val) => dispatch({type: actionTypes.SUBTRACT, value: val}),
    onStoreCounter: (res) => dispatch({type: actionTypes.STORE, result: res}),
    onRemoveStoredResult: (val) => dispatch({ type: actionTypes.REMRESULT, value: val})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// if we don't need state ...
//export default connect(null, mapDispatchToProps)(Counter);
