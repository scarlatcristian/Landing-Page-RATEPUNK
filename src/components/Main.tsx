import React from "react";
import MainSectionForm from "./MainSectionForm";
import MainSectionSteps from "./MainSectionSteps";

const Main: React.FC = () => {
  return (
    <main className="main-section">
      <MainSectionForm />
      <MainSectionSteps />
    </main>
  );
};
export default Main;
