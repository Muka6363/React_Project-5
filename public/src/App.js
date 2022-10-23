import React from "react";
import Header from "./components/Header/Header";
import Container from "react-bootstrap/Container";

//? App componentinin function declaration ile tanimlanmasi
function App() {
  return (
    <div className="App">
      <Container className="bg-info mt-5 rounded-4 w-50">
        <Header />
      </Container>
    </div>
  );
}

export default App;
