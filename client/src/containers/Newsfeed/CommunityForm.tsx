"use client";

import Icon from "@/components/Icon";
import { Button } from "antd";

export interface ILoginFormValues {
  email: string;
  password: string;
}

const CommunityForm: React.FC<{}> = ({}) => {
  return (
    <div className="flex max-h-inherit min-h-full flex-col rounded-xl bg-white px-2 py-4">
      <div className="flex flex-col flex-wrap gap-y-1 px-2">
        <Button
          icon={<Icon name="add_icon" />}
          style={{ border: "none" }}
          className="bg-purple-2 text-purple-50 hover:bg-purple-5"
        >
          Create community
        </Button>
        <span className="block text-xs font-medium text-neutral-40">
          <span>0/3</span> communities created
        </span>
      </div>
      <div className="px-2">
        <div className="bg-gray-5 shrink-0 my-2 h-px w-full my-2"></div>
      </div>
      <div className="flex items-center justify-between py-2 pl-2">
        <span className="text-base font-semibold text-neutral-60">
          Your pins
        </span>
        <Button
          style={{ border: "none" }}
          className="bg-inherit text-blue-50 hover:bg-inherit hover:text-blue-60"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default CommunityForm;
