import React from "react";
import "./Pagination.css";

const Pagination = ({ handlePaginationClick, totalPages, page }) => {
  return (
    <div className="Pagination">
      <button
        className="Pagination-button"
        onClick={() => {
          handlePaginationClick("back");
        }}
        disabled={page === 1}
      >
        &larr;
      </button>
      <span className="Pagination-info">
        page {page} of <b>{totalPages}</b>
      </span>
      <button
        className="Pagination-button"
        onClick={() => {
          handlePaginationClick("next");
        }}
        disabled={page === totalPages}
      >
        &rarr;
      </button>
    </div>
  );
};
export default Pagination;
