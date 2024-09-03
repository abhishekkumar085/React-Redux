import { useDispatch } from 'react-redux';
import { removeTodoActionCreator } from '../redux/actions/todoActions';

export default function ({ text, isCompleted, id }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodoActionCreator(id));
  };
  return (
    <div>
      <input type="checkbox" checked={isCompleted} />
      <p>{text}</p>
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
