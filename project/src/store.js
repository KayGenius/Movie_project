import { configureStore,createSlice } from '@reduxjs/toolkit'

let user = createSlice({
        name:'user',
        initialState:{id:'kim',nick:'young'},
        reducers: {
                changeName(state){
                    state.id = 'jae2942'
                },
                changeNick(state){
                    return ('youngjae' + state.nick)
                }
        }

})
export let {changeName,changeNick} =user.actions


export default configureStore({
    reducer: {
            user : user.reducer,
           

     }
  })