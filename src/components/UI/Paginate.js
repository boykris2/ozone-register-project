import React from "react";

const Paginate = ({ recordsPerPage, totalRecords, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecords / recordsPerPage); i++) {
    pageNumbers.push(i);

    const lastPage = pageNumbers[pageNumbers.length - 1];

    console.log(pageNumbers, lastPage);
  }

  return <div></div>;
};

export default Paginate;
