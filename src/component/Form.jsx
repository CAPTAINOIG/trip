import React, { useState } from 'react'

const Form = () => {
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState("")
  const [data, setData] = useState([])
    // function handleSubmit (e) {
    //     e.preventDefault();

    //     if(!description) return

    //     const newItem = {description, quantity, packed:false, id: Date.now()}
    //     console.log(newItem);
    //     setDescription("")
    //     setQuantity("")
    //     {newItem.description}
    // }

    const add =()=>{
      let newValue = {quantity, description}
      // console.log(newValue);
      setData(newValue)
      console.log(data);
      setData([...data, newValue])
      setQuantity("")
      setDescription("")
    }

    const deleteItem=(index)=>{
        let rem = [...data]
        rem.splice(index, 1)
        setData(rem)
    }

  return (
    <>

    <div id='trip'>
    <h3 className='what'>What do you need for your 😍 trip?</h3>
    <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
    {Array.from({length: 20}, (_, i) => i + 1).map 
    (num => (
      <option value = {num} key={num}>{num}</option>)
      )}
      </select>
      <input type="text" placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={add}>ADD</button>
      </div>
  


  {
      data.map((item)=>(
        <div id='tripy'>
        {item.quantity}
        {item.description}
        <button onClick={()=> deleteItem(index)}>❌</button>
        </div>
      ))
  }
    </>
  )
}

export default Form