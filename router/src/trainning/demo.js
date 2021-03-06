import { createStore } from "redux";

var initialState  = {
    status : false,
    sort : {
        by : 'name',
        value : 1
    }
}

var myReducer = (state = initialState,action) => {
    if(action.type === "TOGGLE_STATUS"){
        state.status = !state.status;
        return state;
    }
    if(action.type === 'SORT'){
        var { by , value } = action.sort; // by = action.sort.by
        var { status } = state; // status = state.status

        
        return {
            status : status,
            sort : {
                by : by,
                value : value
            }
        };
    }
    return state;
}

const store = createStore(myReducer);
console.log('Default : ',store.getState());
// Thực hiện công việc thay đổi status

var action = { type : 'TOGGLE_STATUS' };
store.dispatch(action);
console.log('TOGGLE_STATUS : ',store.getState());
// Thực hiện công việc sắp xếp tên từ Z-A

var sortAction = {
    type : 'SORT',
    sort : {
        by : 'name',
        value : -1
    }
}
store.dispatch(sortAction);
console.log('SORT : ',store.getState());