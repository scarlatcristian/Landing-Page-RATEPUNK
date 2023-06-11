import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import FooterStore from "./components/FooterStore";
import FooterContact from "./components/FooterContact";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <FooterStore />
      <FooterContact />
    </div>
  );
};

export default App;
