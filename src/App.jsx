import { useState } from "react";
import "./App.scss";
import data from "./data/data.json";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import ExtCard from "./components/ExtCard/ExtCard";

function App() {
  return (
    <div className="app">
      <ThemeToggle />
      <div className="app__header">
        <h1 className="app__title">Extensions List</h1>

        <div className="app__filters">
          <button
            type="button"
            className="app__filters-button app__filters-button--selected"
          >
            All
          </button>
          <button type="button" className="app__filters-button">
            Active
          </button>
          <button type="button" className="app__filters-button">
            Inactive
          </button>
        </div>
      </div>

      <div className="app__cards">
        {data.map((app) => {
          return (
            <ExtCard
              logo={app.logo}
              name={app.name}
              description={app.description}
              isActive={app.isActive}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
