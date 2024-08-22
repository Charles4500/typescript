import './styles.css'

interface Props{
  todo:string
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleAdd:(e:React.FormEvent)=>void
}
const InputField = ({todo,setTodo,handleAdd}:Props) => {
 
  return (
    <form className="input" onSubmit={handleAdd}>
      <input placeholder="Enter task" className="input_box"
      value={todo}
      onChange={
        (e)=>setTodo(e.target.value)
      }
      />
      <button type="submit" className="btn">Add</button>
    </form>
  )
}

export default InputField