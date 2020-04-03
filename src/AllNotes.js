import React from "react";
import { Link } from "react-router-dom";
const AllNotes = () => {
  let data = [1, 2, 3, 4, 5];
  return (
    <div className="container m-t-20">
      <h1 className="page-title">All Notes</h1>
      <div className="allnotes-page"></div>
    </div>
  );
};
export default AllNotes;
