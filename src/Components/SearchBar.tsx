import React from "react";
import styles from "../Styling/searchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchTerm}
          placeholder="Choose a city"
        />
        <button type="submit" className={styles.searchButton}>
          <i className={"fa fa-search"}></i>
        </button>
      </div>
    </div>
  );
}
