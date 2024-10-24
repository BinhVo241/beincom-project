"use client";

import Icon from "@/components/Icon";
import { Avatar, Space } from "antd";
import { formatDistance } from "date-fns";
import React from "react";
import AudientsList from "./AudientsList";

export interface IPostItemProps {
  showFull?: boolean;
  avatar: any;
  title: string;
  verified?: boolean;
  createdAt?: any;
}

const HeaderPostContent: React.FC<IPostItemProps> = ({
  avatar,
  title,
  verified,
  createdAt,
  showFull,
}) => {
  return (
    <div className="flex w-full items-center overflow-hidden p-4">
      <div className="inline-flex items-center w-full">
        <Avatar src={avatar} className="h-12 w-12" />
        <span className="pl-3" />
        <div className="flex h-12 grow flex-col">
          <div className="flex w-full items-center">
            <div className="text-base font-semibold text-neutral-60 flex items-center gap-x-1">
              <div className="truncate cursor-pointer hover:underline bg-clip-text decoration-neutral-60 bg-gradient-purple-lining text-transparent">
                {title}
              </div>
              {verified && <Icon name="check_icon" />}
            </div>
            <div className="flex w-fit text-sm font-normal text-neutral-40">
              <Icon name="dot" style={{ padding: "0 4px" }} />
              <span className="cursor-default whitespace-nowrap">
                {formatDistance(new Date(), createdAt || new Date())}
              </span>
            </div>
          </div>

          <div className="inline-flex w-full overflow-hidden text-sm">
            <span className="whitespace-nowrap font-normal text-neutral-60">
              Posted to
            </span>
            <AudientsList showFull={showFull} group={[]} />
          </div>
        </div>
      </div>
      <Space
        className="gap-2 pl-2"
        align="center"
        style={{ cursor: "pointer" }}
      >
        <Icon name="three_dot" />
      </Space>
    </div>
  );
};

export default HeaderPostContent;
