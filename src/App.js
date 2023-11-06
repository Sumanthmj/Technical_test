import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Card from "./components/Card/Card";
import Search from "./components/Search/Search";

function App() {

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");


  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      console.log(data);
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} setStatus={setStatus} info={info}/>
      <div className="container">
        <div className="row" style={{justifyContent: "center"}}>
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
