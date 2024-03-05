import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Head from "./components/Head";

export interface SideBarContextType {
  isExpanded: boolean;
  setIsExpanded: Dispatch<SetStateAction<boolean>>;
}

const defaultContextValue: SideBarContextType = {
  isExpanded: true,
  setIsExpanded: () => {},
};
export const SideBarContext =
  createContext<SideBarContextType>(defaultContextValue);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <SideBarContext.Provider value={{ isExpanded, setIsExpanded }}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </SideBarContext.Provider>
  );
}

export default App;
