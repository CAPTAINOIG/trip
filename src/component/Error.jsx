function Logo () {
    <h1>🌴 Far Away 🎒</h1>
  }

  function Form () {
    <div className='add-form'>
      <h3>What do you need for your 😍 trip?</h3>
    </div>
  }

  function PackingList () {
    <div className='list'>LIST</div>
  }

  function Stats () {
    <footer>
     <em>👜 You have X items on your list, and you already packed X (X%)</em> 
    </footer>
  }
  import React, { useState } from 'react'

const Form = () => {
    const [description, setDescription] = useState([])
    const [quantity, setQuantity] = useState([])
    function handleSubmit (e) {
        e.preventDefault();

        if(!description) return

        const newItem = {description, quantity, packed:false, id: Date.now()}
        console.log(newItem);
        setDescription("")
        setQuantity("")
        {newItem.description}
    }


  return (
    <>
    <form className='add-form' onSubmit={ handleSubmit}>
    <h3>What do you need for your 😍 trip?</h3>
    <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map 
        (num => (
            <option value = {num} key={num}>{num}</option>)
        )}
    </select>
    <input type="text" placeholder='Item...' value={description} onChange={(e) => setDescription(e.target.value)} />
    <button>ADD</button>
  </form>


  {
   
  }
    </>
  )
}

export default Form