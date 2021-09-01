import React, {useState}from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch'])

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

    // const handleAdd = () => {
    //     setCategories([...categories, 'One Piece']);
    //     // setCategories( cats => [...cats, 'One Piece']); //otra forma de hacerlo ya que recuerda que el set llama a una funcall
    // }
    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>
    
        <ol>
            {
                categories.map( category =>(
                    <GifGrid 
                    key= {category}
                    category={ category }/>
                ))

            
            }
        </ol>
        {/* <button onClick= {handleAdd}>Agregar</button> */}
        </>
    )
}
