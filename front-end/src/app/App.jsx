import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";   
function App() {
  return (
    <>
      <Header />
      {/* <main>
        <Routes>
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main> */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
