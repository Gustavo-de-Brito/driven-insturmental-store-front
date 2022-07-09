import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";

import HomeView from "./Home/HomeView";
import GlobalStyle from "./theme/globalStyle";
import Login from "./Login";
import Cadastro from "./Cadastro";
import UserContext from "./UserContext";

function App() {
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState("");

  return (
    <>
      <UserContext.Provider value={{userData, setUserData, userName, setUserName}}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomeView /> } />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;