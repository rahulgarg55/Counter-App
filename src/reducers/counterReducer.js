import { INCREMENT, DECREMENT } from "../actions/counterActions";

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) =>{
    switch(action.type){
        case INCREMENT:
            console.log(action);
            return {...state, count: state.count+1};
            case DECREMENT:
                console.log(action);
                return {...state, count: state.count-1};
                default:
                    return state;
    }
};
export default counterReducer;