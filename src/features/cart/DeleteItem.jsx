import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { deleteItems } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="small" onClick={() => dispatch(deleteItems(pizzaId))}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
