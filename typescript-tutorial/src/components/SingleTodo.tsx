import { Todo } from "../model"
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './styles.css'
type Props = {
  todo:Todo
  todos:Todo[]
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,setTodos,todos}:Props) => {
  return (
    <form className="todos_single">
      <span className="single_text">
        {todo.todo}
      </span>
      <div>
        <span className="icon">
          <AiFillEdit/>
        </span>
        <span className="icon">
          <AiFillDelete/>
        </span>
        <span className="icon">
          <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo