import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./Home/HomeView";
import GlobalStyle from "./theme/globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <HomeView /> } /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;