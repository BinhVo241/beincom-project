"use client";

import { Image } from "antd";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import Highlighter from "react-highlight-words";

export interface ICardContentProps {
  postId: number | string;
  readTime: string;
  description: string;
  title: string;
  picture: any;
}

const CardContent: React.FC<ICardContentProps> = ({
  postId,
  readTime,
  description,
  title,
  picture,
}) => {
  const search = useSearchParams();
  const searchParam = search.get("content");

  return (
    <Link
      href={`/article/${postId}`}
      className="flex flex-col overflow-hidden rounded-lg hover:text-current"
    >
      <div className="relative h-[265px]">
        <div className="relative size-full" style={{ width: 640, height: 265 }}>
          <Image
            src={picture}
            alt=""
            preview={false}
            width={640}
            height={265}
          />
        </div>
      </div>
      <div className="bg-neutral-1 p-4 hover:text-current">
        <div className="flex items-center gap-x-2 whitespace-nowrap text-xs font-normal text-neutral-40">
          {readTime}
        </div>
        <div className="text-lg font-semibold leading-[30px] text-neutral-60 break-word">
          {title}
        </div>
        <Highlighter
          searchWords={[searchParam || ""]}
          autoEscape={true}
          textToHighlight={description}
        >
          <div className="mt-2 text-sm font-normal text-neutral-60 break-word ">
            {description}
          </div>
        </Highlighter>
      </div>
    </Link>
  );
};

export default CardContent;
