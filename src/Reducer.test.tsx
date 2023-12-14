import {reducer, StateType} from "./Reducer";

test('reducer should change value to opposite',()=>{
    //data
const state:StateType={
    collapsed:false
}

    //action
const newState =  reducer(state, {type:'TOGGLE-COLLAPSED'})

    //expectation
    expect(newState.collapsed).toBe(true);
})