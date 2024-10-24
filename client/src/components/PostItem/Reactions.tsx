"use client";

import React from "react";
import Icon from "../Icon";
import Link from "next/link";
import { Button, Divider, Space } from "antd";
import { IPosts } from "@/lib/hooks/usePostsInfinity";

export interface IReactionsProps extends Pick<IPosts, "reactions"> {
  onClickComment: () => void;
}

export interface IReactionsHandle {}

const className = {
  button:
    "h-10 items-center justify-center rounded px-4 py-2 hover:bg-neutral-2 gap-x-2 text-sm font-medium text-neutral-40",
};

const Reactions: React.FC<IReactionsProps> = ({
  onClickComment,
  reactions,
}) => {
  return (
    <div className="box-border flex w-full max-w-full flex-col items-start justify-end px-4 pt-2">
      <div className="bg-color-neutrals-white w-full max-w-full flex-col items-start justify-start py-1 text-left text-sm">
        <div className="flex w-full max-w-full flex-row flex-wrap items-center justify-between ">
          <div className="font-sm box-border flex h-7 max-w-full flex-1 flex-row items-center justify-start py-0 pl-0 text-left text-neutral-40 ">
            {/* block -------------- */}
            <div className="flex items-center gap-1 px-2 hover:cursor-pointer">
              <div className="flex h-7 items-center">
                {["like_noanimate", "love_noanimate"].map((item: any, idx) => (
                  <div
                    key={idx}
                    className="flex h-7 w-7 flex-row items-center justify-center rounded-full border border-solid border-white bg-neutral-1"
                  >
                    <Icon name={item} width={24} height={24} />
                  </div>
                ))}
              </div>
              <div
                className="text-sm font-medium text-neutral-40"
                style={{ lineHeight: 21 }}
              >
                {reactions?.likes || 0}
              </div>
            </div>
            {/* comment icon */}
            <div className="inline-block rounded-full size-0.5 mx-1 bg-neutral-20"></div>
            <Link className="flex gap-1 px-2 items-center" href={""}>
              <Icon name="comment_icon" />
              <div className="text-sm font-medium text-neutral-40">
                {reactions?.comments || 0}
              </div>
            </Link>
            {/* ................... */}
            {/* comment icon */}
            <div className="inline-block rounded-full size-0.5 mx-1 bg-neutral-20"></div>
            <div className="flex items-center gap-1 px-2 hover:cursor-pointer">
              <Icon name="interested" />
              <div className="text-sm font-medium text-neutral-40">
                {reactions?.views || 0}
              </div>
            </div>
            {/* ................... */}
          </div>
        </div>
      </div>
      <Divider style={{ margin: "8px 0" }} />
      <Space styles={{ item: { flex: 1 } }} className="w-full">
        <Button
          block
          icon={<Icon name="like_false" className="h-5 w-5 text-neutral-40" />}
          style={{ border: "none" }}
          className={className.button}
        >
          Like
        </Button>
        <Button
          block
          icon={
            <Icon name="comment_icon" className="h-5 w-5 text-neutral-40" />
          }
          style={{ border: "none" }}
          className={className.button}
          onClick={onClickComment}
        >
          Comment
        </Button>
        <Button
          block
          icon={<Icon name="donate_icon" className="h-5 w-5 text-neutral-40" />}
          style={{ border: "none" }}
          className={className.button}
        >
          Donate
        </Button>
      </Space>
      <Divider style={{ margin: "8px 0" }} />
    </div>
  );
};

export default Reactions;
