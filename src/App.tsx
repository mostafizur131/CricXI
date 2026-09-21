import { Suspense, useState } from "react";
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
  const [coin, setCoin] = useState(10000);

  return (
    <div>
      <NavBar coin={coin} />
      <Banner />
      <Suspense fallback={<div>Loading players...</div>}>
        <Players
          playersPromise={playersPromise()}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
