import React, { Suspense } from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Players from "./components/players/Players";
import type { IPlayer } from "./types";

const playersPromise = async (): Promise<IPlayer[]> => {
  const response = await fetch("/players.json");
  const data = await response.json();
  return data;
};

const App = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Suspense fallback={<div>Loading players...</div>}>
        <Players playersPromise={playersPromise()} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
