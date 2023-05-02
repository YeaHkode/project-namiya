import React from "react";

const CounselList = ({ counselorList }) => {
  return (
    <div>
      <div className="CounselList"></div>
      <div>
        <div>{counselorList.title}</div>
        <div>{counselorList.content}</div>
      </div>
    </div>
  );
};

export default CounselList;
