import React , {useState} from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [InputText , setInputText] = useState("");
  /* You will need a function to handle a key pressed on the first input and update the state*/
  const inputChange = (Event) => {
    setInputText(Event.target.value);
  };
  return (
    <main>
      <h1>Upper Case Converter</h1>

      <label>Enter any text !</label>
      <input 
        type="text"
        value={InputText}
        onChange={inputChange}
      />

      <p>
        <label>Here is the text in upper case</label>

        {/* This input will need to display the text entered in lower case */}
        <input 
          type="text"
          value={InputText.toUpperCase()}
          disabled />
      </p>
    </main>
  );
}

export default App;
