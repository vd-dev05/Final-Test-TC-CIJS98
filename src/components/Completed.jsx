import { MdOutlineDelete } from "react-icons/md";
const Completed = (props) => {

    const completedTodo = props.todo.filter(item => !item.active
    );
    const handleDeleteAll = () => {
        props.setTodo(props.todo.filter(item => item.active))
    }
    const handleDelete = (id) => {
        props.setTodo(props.todo.filter(item => item.id !== id));
    }
    return (
        <div>
            <div className="my-5">
                {completedTodo
                    ?
                    <div>
                        {completedTodo.map((item) => (
                            <div key={item.id} className="flex gap-2 justify-between items-center ">
                                <div className="flex   justify-between w-full">
                                    <div className="flex gap-2 ">

                                        <input
                                            checked={!item.active}
                                            type="checkbox"
                                            className="accent-[#0283f2] w-4 h-5 cursor-pointer" />

                                        <p className={`text-center -translate-y-[2px] font-mono ${!item.active && item.id && 'line-through'}`} >
                                            {item.msg}
                                        </p>

                                    </div>
                                    <MdOutlineDelete
                                    className="cursor-pointer"
                                    onClick={() => handleDelete(item.id)}
                                    ></MdOutlineDelete>
                                </div>
                            </div>


                        ))}

                    </div>
                    : null}

                    {completedTodo.length > 0  ?
                    <div className="w-full relative my-5 ">

                        <button 
                        onClick={handleDeleteAll}
                        className="flex w-[100px] h-[30px] bg-red-400  absolute right-0 rounded-md items-center justify-center text-white text-xs"> <MdOutlineDelete/> delete all</button>
                    </div>
                    :<p>No Compeletd todos</p>}
            </div>
        </div>
    );
}

export default Completed;