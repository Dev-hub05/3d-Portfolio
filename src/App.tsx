import { lazy, Suspense } from "react";
import "./App.css";

const MainContainer = lazy(() => import("./components/MainContainer"));
const CharacterModel = lazy(() => import("./components/Character"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense>
          <CharacterModel />
          <MainContainer />
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
