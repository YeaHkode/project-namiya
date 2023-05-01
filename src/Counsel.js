import React, { useContext, useState } from "react";
import CounselContext from "./App";

const Counsel = () => {
  const { onCreate } = useContext(CounselContext);

  const [counsel, setCounsel] = useState({
    title: "",
    content: "",
  });

  const handleChangeState = (e) => {
    setCounsel({
      ...counsel,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = () => {};
  onCreate(counsel);
  alert("Counsel created");
  setCounsel({
    title: "",
    content: "",
  });

  return (
    <div className="CounselEditor">
      <h1>상담 일지</h1>
      <input onChange={handleChangeState} name="title" type="text"></input>

      <div>
        <textarea
          onChange={handleChangeState}
          name="content"
          type="text"
        ></textarea>
      </div>
      <div>{/* <button onClick={handleSubmit}>상담 저장하기</button> */}</div>
    </div>
  );
};

export default Counsel;
