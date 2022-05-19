import {createAsyncThunk,createSlice} from '@reduxjs/toolkit';
import  axios from axios;


const initialSate={
  loading:false,
  users:[],
  errorMessage:null
}

// export const getUsers=createAsyncThunk('userList/getUsers',async () =>   {
//   let dataUrl=`https://jsonplaceholder.typicode.com/users`;
//   let response=await axios.get(dataUrl);
//   return response.data;
// });


const userListSlice=createSlice({
  name:"users",
  initialState:initialSate,

})

export default userListSlice.reducer;