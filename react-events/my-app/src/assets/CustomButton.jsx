// CustomButton.jsx
function CustomButton(props) {
  function handleClick() {
    props.onCustomClick(props.text);
  }

  return (
    <button onClick={handleClick} style={{ color: props.color }}>
      {props.text}
    </button>
  );
}

export default CustomButton;
