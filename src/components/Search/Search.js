import React from "react";
import styles from "./Search.module.scss";

export default function Search({ setSearch, updatePageNumber, setStatus, info }) {
 const numbers = Array.from({length: 15}, (_, i) => i);
  return (
    <form className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-5`}>
      <input
        onChange={(e) => {
          updatePageNumber(1);
          setSearch(e.target.value);
        }}
        placeholder="Search for characters"
        className={styles.input}
        type="text"
      />
      <select class="form-select form-select-lg mb-1" aria-label="Default select example" style={{width: '150px'}} value={''} onChange={(e) => {
        setStatus(e.target.value);
      }}>
        <option selected>--Status--</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
      </select>
      <select class="form-select form-select-lg mb-1" aria-label="Default select example" style={{width: '150px'}} value={1} onChange={(e) => {
        updatePageNumber(e.target.value);
        }}>
        {numbers.map((number) => (
          <option value={number + 1}>{number + 1}</option>
        ))}
      </select>
    </form>
  );
};