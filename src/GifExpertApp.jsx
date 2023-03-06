import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        //Si la categoría que le paso está dentro del array
        if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
        //setcategories( cat => [...cat, "One Piece"]);
      }


  return (
    <>
        {/* titulo  */}
        <h1>Prueba react gifs</h1>

        {/* input  */}
        <AddCategory 
        onNewCategory = {event => onAddCategory(event)}
        />
        {/* Listado de Gif  */}
       
            {
            categories.map(category => (
                <GifGrid key={category} category={category}/>
            ))
            }

        {/*<button onClick={onAddCategory}>Añadir</button>*/}
        
            {/* Gif item  */}
    
    </>
  )


 

}
