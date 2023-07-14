import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text,
      }));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
      // className='inp'
      type="text"
        // placeholder="Add todo"
        // placeholder={`👋 Hello ${authUser.username}, What to do Today?`}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='btnadd' type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
