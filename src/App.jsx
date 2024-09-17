  import { useState } from "react"
  import Top from "./components/TopTodo"
  import { useLocation } from "react-router-dom";

  import AcTive from "./components/Active";
  import Completed from "./components/Completed";


  function App() {

    const [isOpen, setState] = useState('all')
    const [value, setValue] = useState()
    const [todo, setTodo] = useState([])
    const [nextId, setNextId] = useState(1);

    // router
    const location = useLocation();
    const isAll = location.pathname === '/';
    const isActive = location.pathname === '/active';
    const isCompeleted = location.pathname === '/compeleted';

    // const handleChange = () => {

    // }



    const handleSubmit = (e) => {
      e.preventDefault();
      // localStorage.setItem('item', value)
      if (!value.trim()) {
        return;
    }
      setTodo([...todo, { id: nextId, msg: value, active: true }])
      setValue('')
      setNextId(nextId + 1)
      // console.log(todo);


    }

    return (
      <div className="bg-gray-50 w-full h-full flex justify-center">

        <div className=" w-[700px] h-[900px] bg-white mt-20 px-5 ">
          <Top setState={setState} isOpen={isOpen}></Top>
          {(isAll || isActive) &&
            <form className="flex gap-x-5 my-5" onSubmit={handleSubmit} >
              <input
                className="w-full h-10 rounded-lg p-2 border-[1px] outline-none"
                type="text"
                placeholder="add details"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button
                type="submit"
                className="h-10 bg-[#0283f2] w-[100px] rounded-lg text-white font-bold"
              >Add</button>

            </form>
          }

          {/* {isAll && <All ></All>} */}
          {isActive && <AcTive todo={todo} setTodo={setTodo}></AcTive>}
          {isCompeleted && <Completed todo={todo}  setTodo={setTodo}></Completed>}
          {todo && isAll
            ?
            <div>
              {todo.map((item) => (
                <div key={item.id} className="flex gap-2 justify-between items-center ">
                  <div className="flex gap-2 ">
                    <div>
                      <input
                      checked={!item.active}
                        onClick={() =>
                          setTodo(todo.map(todo =>
                            todo.id === item.id ? { ...todo, active: !todo.active } : todo
                          ))}
                        type="checkbox"
                        className="accent-[#0283f2] w-4 h-5 cursor-pointer" />
                    </div>
                    <p className={`text-center -translate-y-[2px] font-mono ${!item.active && item.id && 'line-through'}`} >
                      {item.msg}
                    </p>
                  </div>
                  
                

                </div>


              ))}

            </div>
            : ''}
        </div>
      </div>
    )
  }

  export default App
