import { INCREMENT, DECREMENT, SET_NAME } from "../actions/counterActions";

const initialState = {
    count: 0,
    name:'Rahul Garg',
};

const counterReducer = (state = initialState, action) =>{
    switch(action.type){
        case INCREMENT:
            console.log(action);
            return {...state, count: state.count+1};
            case DECREMENT:
                console.log(action);
                return {...state, count: state.count-1};
                case SET_NAME:
                    return {...state, name:action.payload};
                default:
                    return state;
    }
};
export default counterReducer;