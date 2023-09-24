import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

import "./TodoItem.css";
function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed}   
      onComplete={props.onComplete}/>
      
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      {/* <span className="Icon Icon-delete"
       onClick={props.onDelete}>X</span> */}
       <DeleteIcon onDelete={props.onDelete}/>
    </li>
  );
}
export { TodoItem };
