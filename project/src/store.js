import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',  //state의 값
  initialState : 'kim'  //state의 value
})

export default configureStore({
  reducer: {
    user : user.reducer
  }
})