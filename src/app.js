import "./styles/app.css";

import Header from "./Header/Header";
import NaviBar from "./NaviBar/NaviBar";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <Header />
      <NaviBar />
      <Main />
    </div>
  );
}

export default App;
