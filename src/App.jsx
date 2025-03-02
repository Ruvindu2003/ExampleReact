import StudentView from "./component/Student/StudentView"
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router,Routes,Route } from "react-router";
import Navbar from "./component/common/Navbar";
import AddStudent from "./component/Student/AddStudent";


function App(){
 
  return <div className="App">
    <h2>Well come For Student Mangement</h2>
   
   <Router>
    <Navbar></Navbar>
    <Routes>

    <Route exact path="/"element={<Home></Home>}>
 </Route>

 <Route  exact path="/View-student"element={<StudentView></StudentView>}></Route>




    </Routes>


   </Router>
  </div>

}

export default App 