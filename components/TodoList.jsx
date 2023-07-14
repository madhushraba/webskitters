


import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, editTodo, deleteTodo } from '../store/todoSlice';

const TodoList = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleToggle = id => {
    dispatch(toggleTodo(id));
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleSave = (id, text) => {
    if (text.trim() === '') {
      return;
    }
    dispatch(editTodo({
      id,
      text,
    }));
    setEditingId(null);
    setEditedText('');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedText('');
  };

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  return (
    <ul className='ul'>
      {todos.map(todo => (
        <li key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={e => setEditedText(e.target.value)}
              />
              <button className='btnpink' onClick={() => handleSave(todo.id, editedText)}>Save</button>
              <button className='btndel' onClick={handleCancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              {/* <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              /> */}
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button className='btnpink' onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
              <button className='btndel' onClick={() => handleDelete(todo.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
