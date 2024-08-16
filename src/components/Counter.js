import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../actions/counterActions';

const Counter = () => {
    const count = useSelector(state => state.count); //useSelector hook is used to access the data store in Redux store.
   //means it lets us select or pick out specific data from central state so that we can use them in componeont.
    console.log(count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick = {() => dispatch(increment())}>Increment</button>
            <button onClick = {() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};
export default Counter;