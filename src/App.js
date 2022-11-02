import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import csHead from "./Images/CSHead.jpg";

function App() {
  return (
    <div className="App">
      <Navbar title="ProjectTitle" />
      <Button />
      <h1 className="text-center text-danger text-capitalize my-5">
        Course Cards Are Here !!!
      </h1>
      <div className="div">
        <Card 
        img={csHead} 
        name="Vishnu Jadhav" 
        position="CS Dept. Head"
        linkedin="https://www.linkedin.com/in/vishnujadhav/"
         />
        <Card
          img={csHead}
          name="Vishnu Jadhav"
          position="CS Dept. Head"
          linkedin="https://www.linkedin.com/in/vishnujadhav/"
        />
        <Card
          img={csHead}
          name="Vishnu Jadhav"
          position="CS Dept. Head"
          linkedin="https://www.linkedin.com/in/vishnujadhav/"
        />
      </div>
    </div>
  );
}

export default App;
