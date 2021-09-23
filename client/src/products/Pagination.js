import React from "react";

export const Pagination = ({ ItemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / ItemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a onClick={() => paginate(number)} href="!#">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
      );
    </div>
  );
};

export default Pagination;
