import {createSlice} from '@reduxjs/toolkit';

const initialSate={
  count:0
}
let counterSlice=createSlice({
  name:"counter",
  initialState:initialSate,
  reducers:{
    increment:function(state,action){
      state.count=state.count+1
    },
    decrement:function(state,action){
      if(state.count>0){
      state.count=state.count-1
      }
    },
    byincre:function(state,action){
      state.count=state.count+action.payload
    },
    clearAll:function(state,action){
      state.count=0
    }
  }
})

export const {increment,decrement,byincre,clearAll}=counterSlice.actions;
export default counterSlice.reducer;