import { useState } from "react"


export const AddCategory = ( {onNewCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch')

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        const newValue = inputValue.trim();
        event.preventDefault();
        if(newValue<1)return;

        //setCategories( categories => [...categories, inputValue])
        onNewCategory(newValue);
        setInputValue("");


    }


  return (

    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>

  )
}
