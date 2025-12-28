import React from "react";
import Header from "./components/Header";
import Forms from "./components/Forms";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-[#006989]">
      <Header />
      <Forms />
    </div>
  );
};

export default App;
