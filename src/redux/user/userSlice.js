import { createSlice } from '@reduxjs/toolkit'

//let nextTodoId = 0
const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
      username: 'eduardo',
      email: 'eduardo.paim@inf.ufrgs.br'
  },
  reducers: {
    changeEmail: {
      reducer(state, action) {
        const { email } = action.payload
        state.email = email
      },
      prepare(newEmail) {
        return { payload: { newEmail } }
      }
    }
  }
})
export const { changeEmail } = userSlice.actions;
export default userSlice.reducer;