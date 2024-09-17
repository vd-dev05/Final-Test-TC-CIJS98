import { useState } from "react";
import { Link } from "react-router-dom";

const Top = (isOpen) => {
    
    const handleOpen = (id) => {
        isOpen.setState(id)

// console.log(isOpen.isOpen);
    }
    
    return (
        <div className="flex justify-center flex-col items-center">
            <h1 className="text-3xl font-bold">#todo</h1>

            <div className="flex w-full border-b-2  justify-evenly ">
                <Link to="" 
                onClick={() => handleOpen('all')}
                >
                    <div className="w-full h-full">
                        <div 
                        className={`translate-y-[4px]  w-[110px] text-center ${isOpen.isOpen == 'all' ? 'border-blue-500 border-b-[5px] translate-y-[4px]':""  }`}  >
                            <h2 className="text-sm">
                                All 
                            </h2>
                        </div>
                    </div>
                </Link>
                <Link to="active"
                onClick={() => handleOpen('active')}
                >
                    <div
                  className={` translate-y-[4px]  w-[110px] text-center ${isOpen.isOpen  == 'active' ? 'border-blue-500 border-b-[5px] translate-y-[4px] ':''  }`}  >
                        <div>
                            <h2  className="text-sm">
                                Active
                            </h2>
                        </div>
                    </div>
                </Link>
                <Link to="compeleted"
                onClick={() => handleOpen('compeleted')}
                >
                    <div className="border-b-2  w-full text-sm ">
                        <div
                    className={`translate-y-[4px] border-b-[5px] w-[110px] text-center ${isOpen.isOpen == 'compeleted' ? 'border-blue-500 border-b-[5px] translate-y-[4px] ':''  }`}  >
                            <h2>
                                Completed
                            </h2>
                        </div>
                    </div>
                </Link>


            </div>

        </div>
    );
}

export default Top;
