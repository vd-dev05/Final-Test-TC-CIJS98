const AcTive = (props) => {
    
    const activeTodo = props.todo.filter(item => item.active);
    
    const handleClick = (id) => {
        props.setTodo(props.todo.map(item =>
            item.id === id ? { ...item, active: !item.active } : item
        ));
    };

    return (
        <div className="my-5">
             {activeTodo
          ?
          <div>
            {activeTodo.map((item) => (
              <div key={item.id} className="flex gap-2 justify-between items-center ">
                <div className="flex gap-2 ">
                  <div>
                    <input
                    checked={item.acTive}
                      onClick={() => handleClick(item.id)}
                      type="checkbox"
                      className="accent-[#0283f2] w-4 h-5 cursor-pointer" />
                  </div>
                  <p className={`text-center -translate-y-[2px] font-mono ${!item.active && 'line-through'}`} >
                    {item.msg}
                  </p>
                </div>
                
              

              </div>


            ))}

          </div>
          :  <p>No active todos</p>}
        </div>
    );
}

export default AcTive;