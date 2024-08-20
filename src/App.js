// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Hello from "./components/Hello"
// import Insta from "./components/Insta";
// import Todolist from "./components/Todolist";
// import Local from "./components/Local";
// import Data from "./components/Data";
import Counter from "./components/Counter"; 
import { Countercontext } from "./Context/CounterContext";
function App() {
               const vij = 'vijay' ;    
  return (
    <div className="App">
      {/* <Header/>
      <Hello/>
      <Footer/> 
      <Fun/> 
       <Todolist/>
       <localStorage/> 
       <Local/>*/}
       {/* <Nexcomp name="vijay"
       dept="cse"
       location="tirpur"
       regno= {456}/>
        <Data/> */}
        <Countercontext.Provider value={{vij}}>
          <Counter/>
        </Countercontext.Provider>
       

          </div>
  );
}                                                                      

export default App;
