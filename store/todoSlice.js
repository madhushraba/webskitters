import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
   
    updateTodo: (state, action) => {
        const { id, text } = action.payload;
        const todo = state.find((todo) => todo.id === id);
        if (todo) {
          todo.text = text;
        }
      },
      editTodo: (state, action) => {
        const { id, text } = action.payload;
        const todo = state.find(todo => todo.id === id);
        if (todo) {
          todo.text = text;
        }
      },
    deleteTodo: (state, action) => {
    return state.filter((todo) => todo.id !== action.payload);
       
    },
  },
});

export const { addTodo, updateTodo, deleteTodo,editTodo } = todoSlice.actions;
export default todoSlice.reducer;


