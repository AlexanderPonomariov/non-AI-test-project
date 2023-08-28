import useValidation from "./useValidadion";

function App() {
  const [onInputChange, inputValue, isValid] = useValidation();

  return (
    <>
      <label>
        Input with validation<br/>
        <input value={inputValue} onChange={onInputChange}/>
      </label>
      {
        !isValid
        && <p style={{color: "red"}}>String isn't meet requirements</p>
      }
    </>
  );
}

export default App;
