import { createSlice } from '@reduxjs/toolkit'

//let nextTodoId = 0
const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
      username: 'eduardo',
      email: 'eduardo.paim@inf.ufrgs.br',
      registrationBlocks: []
  },
  reducers: {
    changeEmail: {
      reducer(state, action) {
        const { newEmail } = action.payload
        state.email = newEmail
      },
      prepare(newEmail) { // I think reducer/prepare are useless in this case
        return { payload: { newEmail } }
      }
    },
    addRegistrationBlock: {
      reducer(state,action) {
        const {newBlock} = action.payload;
        state.registrationBlocks.push(newBlock);
      },
      prepare(newBlock){
        return { payload: {newBlock} };
      }

    },
    removeRegistrationBlock: {
      reducer(state,action) {
        const {index} = action.payload;
        state.registrationBlocks.splice(index,1);
      },
      prepare(index){
        return { payload: {index} };
      }
    }

  }
})
export const { changeEmail, addRegistrationBlock, removeRegistrationBlock } = userSlice.actions;
export default userSlice.reducer;