import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice(
    {
        name: "user",
        initialState:[0],
        reducers:{
            addUser(state, action){
                state[0] = state[0]+1},
            removeUser(state, action){},
            clearAllUser(state, action){},
        },
    }
)



export {usersSlice};
export const {addUser} = usersSlice.actions;