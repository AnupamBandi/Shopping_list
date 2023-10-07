
import { useState } from 'react';
import './App.css';

function App() {

  const [items,setItems]= useState([]);

  function onRemoveItem(itemToRemove){
    const newItems = items.filter((item)=>{
      return item!==itemToRemove
    });
    setItems(newItems)
  }

  function onSubmit(event){
    event.preventDefault();
    const form=event.target;
    const input = form.item
    const newItems=[...items,input.value]
    setItems(newItems);
    form.reset()
  }


  return (
    <div className="App">
      <h1>
        Project: Shopping List
      </h1>
      <div className='shopping-list'>
        <h2>Items to Buy</h2>
        <form onSubmit={onSubmit}>
          <input type='text' name='item' placeholder='Add a new item' required />
          <button>Add</button>
        </form>
        <ul>
          {items.map((item,index)=>(
            <Item onRemoveItem={onRemoveItem} key={item+index} item={item}/>

          ))}
        </ul>
      </div>

    </div>
  );
}

function Item({item,onRemoveItem}){
  return(
    <li>
      {item}
      <button className='delete' onClick={()=> onRemoveItem(item)}>
        Delete
      </button>
    </li>
  )
}



export default App;
