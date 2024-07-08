import {useState } from 'react';

function AddColor () {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState('');
  const [index, setIndex] = useState(colors.length);
  const [newText, setNewText] = useState('');

  const handleAddColor = (e) => {
    e.preventDefault();
    // addColors(color);
    addColorAtIndex(color,index);
  };

  const addColors = (newColor) => {
    const updatedColors = [
      ...colors,
      newColor
    ];

    setColors(updatedColors);
    setColor('');
  };

  const addColorAtIndex = (newColor, indexToAdd) => {
    const updatedColors = [
      ...colors.slice(0, indexToAdd),
      newColor,
      ...colors.slice(indexToAdd)
    ];

    setColors(updatedColors);
  };

  const handleRemoveColor = (e) => {
    e.preventDefault();
    // removeColor(color);
    // console.log(colors.length);
    removeColorAtIndex(index);
  }

  const removeColor = (oldColor) => {
    const updatedColors = colors.filter((c) => {
      return c != oldColor
    });

    setColors(updatedColors);
  };

  const removeColorAtIndex = (indexToRemove) => {
    const updatedColors = colors.filter((c,index) => {
      return index !== indexToRemove;
    });

    setColors(updatedColors);
  };

  const handleChangeColor = (e) => {
    e.preventDefault();
    changeColor(color, newText);
  }

  const changeColor = (oldColor, newColor ) => {
    const updatedColors = colors.map((c)=>{
      if(c === oldColor){
        return newColor;
      }
      return c;
    });
    setColors(updatedColors);
  }

  const renderColors = colors.map((c,i) => {
    return (<li 
      key={i}
      style={{color: `${c}`}}>
      {c}
    </li>);
  });



  return (<div>
    <form>
      <label>Color</label>
      <input 
        id="color"
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}/>

      <label>Index</label>
      <input 
        type='number'
        id='index'
        name='index'
        value={index}
        max={colors.length}
        min={0}
        onChange={(e) => setIndex(e.target.value)}/>
      
      <label>New Text</label>
      <input 
        id='newtext'
        name='newText'
        value={newText}
        onChange={(e) => setNewText(e.target.value)}/>

      <button
        onClick={handleAddColor}>
        Add Color
      </button>
      <button
        onClick={handleRemoveColor}>
        Remove Color
      </button>
      <button
        onClick={handleChangeColor}>Change</button>

      <hr />
      <div>
        {renderColors}
      </div>
    </form>
  </div>);
}

export default AddColor;