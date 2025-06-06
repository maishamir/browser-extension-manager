import { useState } from "react";
import "./App.scss";
import data from "./data/data.json";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import ExtCard from "./components/ExtCard/ExtCard";
import useLocalStorage from "use-local-storage";

function App() {

  const preference = window.matchMedia(("prefers-color-scheme: dark)".matches))
  
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const [selectedFilter, setSelectedFilter] = useState('All') 
  const [items, setItems] = useState(data)

  function handleDelete(e) {
    const remainingExtensions = items.filter(item => item.name !== e.target.id)
    setItems(remainingExtensions)
  }

  function handleToggle(name) {
    const updated = items.map(item => item.name === name ? { ...item, isActive: !item.isActive } : item);
    setItems(updated);
  }


  const visibleItems = items.filter(item => {
    if (selectedFilter === "Inactive") return !item.isActive;
    if (selectedFilter === "Active") return item.isActive;
    return true
  })

  return (
    <div className="app" data-theme = {isDark ? 'dark' : 'light'}>
      <ThemeToggle isChecked={isDark} handleChange={() => setIsDark(prev => !prev)}/>
      <div className="app__header">
      
        <h1 className="app__title">Extensions List</h1>

        <div className="app__filters">
          <button onClick={() => setSelectedFilter('All')}
            type="button"
            className={`app__filters-button ${selectedFilter === 'All' ? 'app__filters-button--selected' : ""}`}
          >
            All
          </button>
          <button type="button" className={`app__filters-button ${selectedFilter === 'Active' ? 'app__filters-button--selected' : ""}`} onClick={() => setSelectedFilter("Active")}>
            Active
          </button>
          <button type="button" className={`app__filters-button ${selectedFilter === 'Inactive' ? 'app__filters-button--selected' : ""}`} onClick={() => setSelectedFilter("Inactive")}>
            Inactive
          </button>
        </div>
      </div>

      <div className="app__cards">
        {visibleItems.map((app) => {
          return (
            <ExtCard
              logo={app.logo}
              name={app.name}
              description={app.description}
              isActive={app.isActive}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
