import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";   
import { ToastContainer } from "react-toastify";
import CadastroPage from "../pages/CadastroPage";
import ListaAlunoPage from "../pages/ListaAlunoPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cadastro" element={<CadastroPage />} />
          <Route path="/alunos" element={<ListaAlunoPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
