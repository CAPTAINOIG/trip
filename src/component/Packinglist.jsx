import React from 'react'

const Packinglist = ({initialItems}) => {
    // console.log(initialItems[0].id);
    
  return (
    <>
    
    <div className='list'>
    {
        initialItems.map((item)=>(
            <li key={item.id}>
            <span style={item.packed ? {textDecoration : "line-through"} : {} }>{item.quantity }
            { item.description}
            </span>
            <button>❌</button>
            </li>
            ))
        }
        </div>
       
    </>
  )
}

export default Packinglist