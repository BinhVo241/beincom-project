"use client";

import React, { useRef } from "react";
import CardContent from "./CardContent";
import HeaderPostContent from "./HeaderPostContent";
import Reactions from "./Reactions";
import CommentsForm from "../CommentsForm";
import { IPosts } from "@/lib/hooks/usePostsInfinity";

export interface IPostItemProps extends IPosts {
  innerRef?: (node?: Element | null | undefined) => void;
}

const PostItem: React.FC<IPostItemProps> = ({
  id,
  avatar,
  title,
  verified,
  createdAt,
  author,
  description,
  readTime,
  picture,
  reactions,
  innerRef,
}) => {
  const ref = useRef<any>(null);

  return (
    <div className="overflow-anchor: none;" key={id} ref={innerRef}>
      <div className="pb-4">
        <div className="size-full overflow-hidden rounded-lg bg-white flex-col">
          <HeaderPostContent
            avatar={avatar}
            title={`${author?.firstName} ${author?.lastName}`}
            verified={verified}
            createdAt={createdAt}
          />
          <div className="px-4 pb-4">
            <CardContent
              postId={id}
              description={description}
              title={title}
              readTime={readTime}
              picture={picture}
            />
          </div>
          <section className="grid">
            <Reactions
              reactions={reactions}
              onClickComment={() => {
                ref.current?.focus();
              }}
            />
          </section>
          <CommentsForm ref={ref} postId={id} />
        </div>
      </div>
    </div>
  );
};

export default PostItem;
