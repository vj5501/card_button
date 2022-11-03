import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import csHead from "./Images/CSHead.jpg";

function App() {
  return (
    <div className="App">
      <Navbar title="ProjectTitle" />

      <h1 className="text-center text-danger text-capitalize my-5">
        Course Buttons Are Here !!!
      </h1>

      <div className="but">
        <Button btype="btn btn-primary" />
        <Button btype="btn btn-secondary" />
        <Button btype="btn btn-success" />
        <Button btype="btn btn-danger" />
        <Button btype="btn btn-warning" />
        <Button btype="btn btn-info" />
        <Button btype="btn btn-light" />
        <Button btype="btn btn-dark" />
        <Button btype="btn btn-link" />
      </div>

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
          name="Pratik Rathod"
          position="Publicity Head"
          linkedin="https://www.linkedin.com/in/vishnujadhav/"  
        />
        <Card
          img={csHead}
          name="Sachi Teke"
          position="Vice President"
          linkedin="https://www.linkedin.com/in/vishnujadhav/"
        />
      </div>
      <div className="div">
      <Card
          img={csHead}
          name="Vishnu Jadhav"
          position="CS Dept. Head"
          linkedin="https://www.linkedin.com/in/vishnujadhav/"
        />
        <Card
          img={csHead}
          name="Pratik Rathod"
          position="Publicity Head"
          linkedin="https://www.linkedin.com/in/vishnujadhav/"  
        />
        <Card
          img={csHead}
          name="Sachi Teke"
          position="Vice President"
          linkedin="https://www.linkedin.com/in/vishnujadhav/"
        />
      </div>
    </div>
  );
}

export default App;
