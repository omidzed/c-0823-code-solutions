import './App.css';
import CustomButton from './assets/CustomButton';

function App() {
  function handleCustomClick(text) {
    window.alert(text);
  }
  return (
    <>
      <CustomButton
        onCustomClick={handleCustomClick}
        text="hello"
        color="blue"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="there"
        color="red"
      />
      <CustomButton
        onCustomClick={handleCustomClick}
        text="world"
        color="green"
      />
    </>
  );
}

export default App;
