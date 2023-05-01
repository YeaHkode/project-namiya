import { useContext } from "react";
import CounselItem from "./CounselItem";
import CounselContext from "./App";

const CounselList = () => {
  const CounselList = useContext(CounselContext);

  return (
    <div className="CounselList">
      <h2>상담 리스트</h2>
      <div>
        {CounselList.map((it) => (
          <CounselItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

CounselList.defaultProps = {
  diaryList: [],
};
export default CounselList;
