import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import CoinPage from "./Pages/CoinPage";
import { styled } from "@mui/material/styles";

const AppContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
}));

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
