import { useDispatch } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';

export default function ({ text, isCompleted, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <input type="checkbox" checked={isCompleted} />
      <p>{text}</p>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
