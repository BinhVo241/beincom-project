"use client";

import { Space, Timeline } from "antd";

export interface IMainContentValues {}

const MainContentPage: React.FC<IMainContentValues> = ({}) => {
  return (
    <div className="no-scrollbar h-[calc(100dvh-var(--global-header-height))] w-full overflow-y-auto">
      <div className="h-full space-y-6">
        <div className="h-px"></div>
        <div className="rounded-lg bg-white p-2">
          <Space direction="vertical">
            <div className="p-2 text-base font-semibold text-neutral-60">
              Welcome to Beincom (BIC)
            </div>
            <Timeline
              className=""
              items={[
                {
                  label: "Sample",
                },
                {
                  label: "Sample",
                },
              ]}
            ></Timeline>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default MainContentPage;
