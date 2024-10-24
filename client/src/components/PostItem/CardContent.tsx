"use client";

import { Image } from "antd";
import Link from "next/link";
import React from "react";

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
        <div className="mt-2 text-sm font-normal text-neutral-60 break-word ">
          {description}
        </div>
      </div>
    </Link>
  );
};

export default CardContent;
