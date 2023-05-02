import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { display } from "../actions";
import CounselList from "./CounselList";

const Counsel = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.counselor);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  console.log("ssss");

  const handleSubmit = (e) => {
    dispatch(display(title, content));
  };

  const 제목바꾸기 = (e) => {
    setTitle(e.target.value);
  };

  const 내용바꾸기 = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="CounselEditor">
      <h1>상담 일지</h1>
      <input onChange={제목바꾸기} name="title" type="text"></input>
      <div>
        <textarea onChange={내용바꾸기} name="content" type="text"></textarea>
      </div>

      <div>
        <button onClick={handleSubmit}>상담 저장하기</button>
      </div>
      <div>
        <h2>상담 내용</h2>
        <ul>
          {state.counselorList.map((item, index) => {
            return <CounselList key={index} counselorList={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};
export default Counsel;
