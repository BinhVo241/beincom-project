"use client";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space, Typography } from "antd";
import { formatDistance } from "date-fns";
import Link from "next/link";
import React, { CSSProperties, useState } from "react";
import Icon from "../Icon";
import { ICommentsForm } from "@/lib/hooks/useGetComments";

export interface ICommentItem
  extends Pick<ICommentsForm, "author" | "createdAt" | "content"> {
  style?: CSSProperties;
  className?: string;
}

const CommentItem: React.FC<ICommentItem> = ({
  style,
  className,
  author,
  createdAt,
  content,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={className ? className : "flex w-full space-x-2 pt-3"}
      style={style}
    >
      <Link href={""} className="h-fit w-fit py-3">
        <Avatar icon={<UserOutlined />} style={{ height: 40, width: 40 }} />
      </Link>
      <div className="flex w-full flex-col">
        <div className="flex w-full flex-col rounded-lg bg-neutral-1 text-neutral-60">
          <Space className="ml-4 mt-2 justify-between">
            <Link
              href={""}
              className="truncate cursor-pointer hover:underline text-neutral-60 hover:text-current font-semibold"
            >
              {`${author?.firstName} ${author?.lastName}`}
            </Link>
            <Space
              style={{ gap: 0 }}
              className="justify-center space-x-1 px-2 text-xs font-medium text-neutral-40"
            >
              <div style={{ cursor: "pointer" }}>
                {formatDistance(new Date(), createdAt)}
              </div>
              <div style={{ cursor: "pointer" }}>
                <Icon name="three_dot" height={16} width={16} />
              </div>
            </Space>
          </Space>
          <div className="mx-4 mb-3">
            <Typography.Paragraph
              className="relative text-base font-normal text-neutral-60 break-word"
              ellipsis={{
                rows: 3,
                expandable: "collapsible",
                expanded,
                onExpand: (_, info) => setExpanded(info.expanded),
                symbol: () => (
                  <div
                    style={{
                      position: "absolute",
                      bottom: -20,
                      left: 0,
                      right: 0,
                      display: expanded ? "none" : undefined,
                    }}
                  >
                    <div className="h-6 w-full self-stretch bg-gradient-to-t from-neutral-1 to-transparent"></div>
                    <div style={{ textAlign: "end" }}>...Seemore</div>
                  </div>
                ),
              }}
            >
              {content}
            </Typography.Paragraph>
          </div>
        </div>
        <div className="flex h-8 items-center p-1">
          <div className="cursor-pointer hover:underline disabled:cursor-not-allowed disabled:text-gray-20 disabled:no-underline text-sm text-neutral-60 hover:text-neutral-60 font-semibold">
            Like
          </div>
          <span className="mx-4 flex h-2 w-px items-center bg-gray-5"></span>
          <div className="cursor-pointer hover:underline disabled:cursor-not-allowed disabled:text-gray-20 disabled:no-underline text-sm text-neutral-60 hover:text-neutral-60 font-semibold">
            Reply
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
