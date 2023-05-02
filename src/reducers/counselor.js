import { POST } from "../actions";
import dummyData from "./dummyData";

const counselor = (state = dummyData, action) => {
  switch (action.type) {
    case POST:
      const newList = {
        id: state.counselorList.length + 1,
        title: action.payload.title,
        content: action.payload.content,
      };
      return {
        ...state,
        counselorList: [newList, ...state.counselorList],
      };
    default:
      return state;
  }
};

export default counselor;
