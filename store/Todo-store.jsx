import React from 'react'
import { create } from "zustand";


const Todostore = (set) => ({

 arr: [
  {id:1 , title:"Brush"},
  {id:2 , title:"Shower"}
 ],

addArr:(newValue)=>set(state=>({
    arr:[...state.arr, {id:Date.now(),title:newValue}]
})),
delArr:(id)=>set(state=>({
    arr:state.arr.filter((el)=>el.id !== id)
})),
editArr: (id, newTitle) => set((state) => ({
    arr: state.arr.map((el) =>
        el.id === id ? { ...el, title: newTitle } : el
    )
}))
})


const useStore = create(Todostore)

export default useStore