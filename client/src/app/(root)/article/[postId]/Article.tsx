"use client";

import CommentsForm from "@/components/CommentsForm";
import HeaderPostContent from "@/components/PostItem/HeaderPostContent";
import Reactions from "@/components/PostItem/Reactions";
import useGetPost from "@/lib/hooks/useGetPost";
import { Image, Skeleton } from "antd";
import { notFound, useParams } from "next/navigation";
import React, { useRef } from "react";

// export interface IArticleProps extends IPosts {
//   innerRef?: (node?: Element | null | undefined) => void;
// }

const Article: React.FC<any> = () => {
  const ref = useRef<any>(null);
  const params = useParams();

  const { data, status, isLoading, isError } = useGetPost(params.postId);

  if (isError || status === "error") {
    notFound();
  }

  if (isLoading)
    return (
      <div className="rounded-lg bg-white">
        <Skeleton loading={isLoading} active avatar></Skeleton>
      </div>
    );

  return (
    <div className="rounded-lg bg-white">
      <HeaderPostContent
        showFull
        avatar={data?.avatar}
        title={`${data?.author?.firstName} ${data?.author?.lastName}`}
        verified={data?.verified}
        createdAt={data?.createdAt}
      />
      <div className="relative aspect-[3/1] w-full flex-center">
        <div className="relative size-full overflow-hidden">
          <Image src={data?.picture} alt="picture content article" />
        </div>
      </div>
      <div className="mx-auto flex w-content-article flex-col">
        <div className="px-4 pb-3 pt-12">
          <div className="text-4xl font-semibold text-neutral-60">
            {data?.title}
          </div>
          <div className="flex items-center gap-x-2 whitespace-nowrap text-xs font-normal text-neutral-40 pt-2">
            {data?.readTime}
          </div>
          <div className="mt-6 border-y border-neutral-5 bg-neutral-1 p-4 text-base font-medium text-neutral-40">
            {data?.description}
          </div>
        </div>
        <div className="px-4 pb-6 pt-1 ">{data?.paragraph}</div>
        <section className="grid">
          <Reactions
            reactions={data && data.reactions}
            onClickComment={() => {
              ref.current?.focus();
            }}
          />
        </section>
        <CommentsForm ref={ref} postId={data && (data.id as any)} full />
      </div>
    </div>
  );
};

export default Article;
