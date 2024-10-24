"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import FirstContent from "./FirstContent";
import FilterContent from "./FilterContent";
import Posts from "./Posts";

export interface IMainContentValues {
  searchSide?: boolean;
}

const MainContentPage: React.FC<IMainContentValues> = ({ searchSide }) => {
  const userName = useSelector((root: RootState) => root.auth.userInfo);
  return (
    <>
      {!searchSide && (
        <>
          <FirstContent
            name={`${userName?.lastName} ${userName?.firstName}`}
            description="Share new ideas with your community!"
          />
          <FilterContent />
        </>
      )}

      <Posts filter={searchSide} />
    </>
  );
};

export default MainContentPage;
