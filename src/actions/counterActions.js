export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_NAME  = 'SET_NAME';   

//Action Creators
export const increment = () => ({
    type:INCREMENT
});

export const decrement = () => ({
    type:DECREMENT
})

export const setName = (name) => ({
    type:SET_NAME,
    payload: name 
})