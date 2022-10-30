import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

//? App componentinin function declaration ile tanimlanmasi
function App() {
  return (
    <div className="container">
      <Header />
      <Home />
    </div>
  );
}

export default App;
