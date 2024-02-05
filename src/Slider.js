import React, { useState } from "react";
import triangleNext from "./assets/icons8-triangle-64.png";
import trianglePrevious from "./assets/icons8-triangle-64-2.png";

const Slider = ({ items }) => {
  const [index, setIndex] = useState(0);

  const { poster, summary, title, release_date, directors, cover, pages } =
    items.length > 0 ? items[index] : {};

  const previousItem = () => {
    setIndex((index) => {
      index--;
      if (index < 0) {
        index = items.length - 1;
      }
      return index;
    });
  };

  const nextItem = () => {
    setIndex((index) => {
      index++;
      if (index > items.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  if (!items || items.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="BooksMoviesName">
      <div className="ReleaseDate">
        <p className="Release"> RELEASED IN: {release_date} </p>
        <button onClick={previousItem} className="Buttons">
          <img src={trianglePrevious} alt="buttonPrevious" />
        </button>

        <img
          src={poster || cover}
          className="CoverPoster"
          alt={poster ? "movie" : "book"}
        />

        <button onClick={nextItem} className="Buttons">
          <img src={triangleNext} alt="buttonNext" />
        </button>
      </div>
      <p className="Title">{title}</p>
      <p className="SummaryBookMovie"> {summary}</p>
      <p className="DirectorPage"> {directors ? `Director: ${directors}` : `Pages: ${pages}`}</p>
    </div>
  );
};

export default Slider;
