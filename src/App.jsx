import StudentView from "./component/Student/ViewStudent/StudentView"
import Home from "./Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router,Routes,Route } from "react-router";
import Navbar from "./component/common/Navbar";
import AddStudent from "./component/Student/AddStudent/AddStudent";
import Editstudent from "./component/Student/EditStudent/Editstudent";


function App(){
 
  return <div className="App">
   
   
   <Router>
    <Navbar></Navbar>
    <Routes>

    <Route exact path="/"element={<Home></Home>}></Route>
  <Route  exact path="/View-student"element={<StudentView></StudentView>}></Route>
  <Route exact path="/Add-student"element={<AddStudent></AddStudent>}></Route>
  <Route exact path="/Edit-student"element={<Editstudent></Editstudent>}></Route>

    </Routes>


   </Router>
  </div>

}

export default App 