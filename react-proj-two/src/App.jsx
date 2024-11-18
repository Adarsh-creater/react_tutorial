import UserCard from "./component/userCard"
import './App.css'


function App() {
 

  return (
    <div className="container">
      <UserCard name = 'adarsh kymr' desc = 'description1' style = {{"border-radius":"15px"}}/>
      <UserCard name = 'yant yurt' desc = 'description1'  style = {{"border-radius":"15px"}}/>
      <UserCard name = 'jiotr yuot' desc = 'description1' style = {{"border-radius":"15px"}}/>
     
    </div>
  )
}

export default App
