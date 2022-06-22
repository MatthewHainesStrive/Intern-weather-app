import React, { useRef, useState } from "react";
import styles from "../Styling/searchBar.module.css";

export default function SearchBar({ updateCity }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      updateCity(inputRef.current.value);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchTerm}
          placeholder="Choose a city"
          ref={inputRef}
        />
        <button
          type="submit"
          className={styles.searchButton}
          onClick={handleClick}
        >
          <i className={"fa fa-search"}></i>
        </button>
      </div>
    </div>
  );
}

interface SearchBarProps {
  updateCity: (city: string) => any;
}
