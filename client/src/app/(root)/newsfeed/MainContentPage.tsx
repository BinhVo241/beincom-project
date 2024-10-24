"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import FirstContent from "./FirstContent";
import FilterContent from "./FilterContent";
import Posts from "./Posts";

export interface IMainContentValues {}

const MainContentPage: React.FC<IMainContentValues> = ({}) => {
  const userName = useSelector((root: RootState) => root.auth.userInfo);
  return (
    <>
      <FirstContent
        name={`${userName?.lastName} ${userName?.firstName}`}
        description="Share new ideas with your community!"
      />
      <FilterContent />
      <Posts />
    </>
  );
};

export default MainContentPage;
