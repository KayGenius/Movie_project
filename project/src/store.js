import { configureStore, createSlice } from '@reduxjs/toolkit'

let moviedata = createSlice({
  name : 'data',  //state의 값
  initialState : [], //initial sstate의 value
  reducers:{
    setdata(state,action){
                let copy = [...state,action.payload]
            return(copy,console.log('이거뭐냐11',action.payload),console.log('state',state))
       

    }
  }
})
export let {setdata} = moviedata.actions


export default configureStore({
  reducer: {
    data : moviedata.reducer
  }
})