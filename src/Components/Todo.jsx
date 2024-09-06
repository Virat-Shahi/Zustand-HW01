// import React, { useState } from 'react'
// import useStore from '../../store/Todo-store'

// const Todo = () => {
//     const [txt, setTxt] = useState('')


//     const { arr, addArr, delArr } = useStore((state) => ({
//         arr: state.arr,
//         addArr: state.addArr,
//         delArr: state.delArr
//     }))

//     const hdlchange = (e) => {
//         setTxt(e.target.value)
//     }

//     const hdlAdd = () => {
//         if (txt.trim()) {
//             addArr(txt)
//             setTxt('') // Clear input after adding
//         }
//     }

//     const hdlDel = (id) => {
//         delArr(id)
//     }

//     return (
//         <>
    
//             {/* Todo List */}
//             <div className='max-w-lg mx-auto mt-12 p-6'>
//                 <h1 className='text-2xl font-semibold mb-4 text-center text-gray-800'>To Do List</h1>

//                 <div className='flex mb-4'>
//                     <input 
//                         value={txt} 
//                         onChange={hdlchange}
//                         placeholder='Add a new task...'
//                         className='flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400'
//                     />
//                     <button 
//                         onClick={hdlAdd}
//                         className='bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400'>
//                         Add
//                     </button>
//                 </div>

//                 <ul className='space-y-2'>
//                     {arr.map((item) =>
//                         <li key={item.id} className='flex justify-between items-center p-2 border border-gray-200 rounded-md'>
//                             <span className='text-gray-700'>{item.title}</span>
//                             <button 
//                                 onClick={() => hdlDel(item.id)}
//                                 className='text-gray-500 hover:text-gray-700 focus:outline-none'>
//                                 Del
//                             </button>
//                         </li>
//                     )}
//                 </ul>
//             </div>
//         </>
//     )
// }

// export default Todo


// ADDED EDIT BUTTON IN THE Below Code
import React, { useState } from 'react';
import useStore from '../../store/Todo-store';
import TodoItem from './TodoItem';  // Import the new component

const Todo = () => {
    const [txt, setTxt] = useState('');
    const { arr, addArr } = useStore((state) => ({
        arr: state.arr,
        addArr: state.addArr,
    }));

    const hdlchange = (e) => setTxt(e.target.value);

    const hdlAdd = () => {
        if (txt.trim()) {
            addArr(txt);
            setTxt(''); // Clear input after adding
        }
    };

    return (
        <div className='max-w-lg mx-auto mt-12 p-6'>
            <h1 className='text-2xl font-semibold mb-4 text-center text-gray-800'>To Do List</h1>

            <div className='flex mb-4'>
                <input
                    value={txt}
                    onChange={hdlchange}
                    placeholder='Add a new task...'
                    className='flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400'
                />
                <button
                    onClick={hdlAdd}
                    className='bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400'>
                    Add
                </button>
            </div>

            <ul className='space-y-2'>
                {arr.map((item) => (
                    <TodoItem key={item.id} item={item} />  // Use the new component
                ))}
            </ul>
        </div>
    );
};

export default Todo;
