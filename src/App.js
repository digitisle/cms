import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";

import "./App.css";

function App() {
  const [page, setPage] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch("/api/home");
      const json = await response.json();
      setPage(json);
      setLoaded(true);
    }
    if (!loaded) {
      fetchData();
    }
  }, [loaded]); // Or [] if effect doesn't need props or state

  return (
    loaded && (
      <div
        className="body"
        style={{ backgroundImage: `url(${page.image.url})` }}
      >
        <h1 className="heading">{page.title}</h1>
        <div className="grid">
          <p className="column">
            <Markdown>{page.column1}</Markdown>
          </p>
          <p className="column">
            <Markdown>{page.column2}</Markdown>
          </p>
        </div>
      </div>
    )
  );
}

export default App;
