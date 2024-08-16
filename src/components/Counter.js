import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, setName} from '../actions/counterActions';

const Counter = () => {
    const {count,name} = useSelector(state => state); //useSelector hook is used to access the data store in Redux store.
   //means it lets us select or pick out specific data from central state so that we can use them in componeont.
    console.log(count);
    const dispatch = useDispatch();
    const [inputName, setInputName] = useState('');

    const handleNameChange = (e)=>{
        setInputName(e.target.value);
    }
    const handleNameSubmit = (e) => {
        e.preventDefault();
        dispatch(setName(inputName));
        setInputName('');
    }
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <h1>Counter: {count}</h1>
            <button onClick = {() => dispatch(increment())}>Increment</button>
            <button onClick = {() => dispatch(decrement())}>Decrement</button>
           <form onSubmit = {handleNameSubmit}>
            <input 
            type = "text"
            value = {inputName}
            onChange = {handleNameChange}
            placeholder = "Enter your name"
            />
            <button type = "submit">Set Name</button>
           </form>
        </div>
    );
};
export default Counter;