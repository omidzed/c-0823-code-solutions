import { useState } from 'react';

function ToggleButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((clicked) => !clicked);
  }

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isClicked ? 'white' : 'red',
        color: props.color,
      }}>
      {props.text ? 'Clicked' : 'Not Clicked'}
    </button>
  );
}

export default ToggleButton;
