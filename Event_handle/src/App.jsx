
import './App.css'

function App() {

  function onclickhandle(){
    alert("did you click on the button")
  }
  function inPara(){
    alert("did you touch the para graph")
  }

  function inputText(e){
    console.log("the in put value is : " + e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault();
     alert("did you click on submit")
  }
  return (
    <div>
     <form onSubmit={handleSubmit}>
      {/* <input type="text" onChange={(e) => {inputText(e)}}/> */}
      <input type="text" onChange={inputText}/>
       <button type='submit'>submit</button>
     </form>


      {/* <p onMouseOver={inPara}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, soluta dolores omnis ipsum corporis laborum enim dicta maxime praesentium? Nam labore cum dolor.
      </p>
      <button onClick={onclickhandle}>
        click me
      </button> */}
    </div>
  )
}

export default App
