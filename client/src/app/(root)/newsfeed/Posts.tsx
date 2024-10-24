"use client";

import PostItem from "@/components/PostItem";
import usePostsInfinity, { IPosts } from "@/lib/hooks/usePostsInfinity";
import VirtualList from "rc-virtual-list";
import React, { useEffect } from "react";

export interface IFilterContentProps {}

const Posts: React.FC<IFilterContentProps> = ({}) => {
  const { data, ref, fetchNextPage, inView, hasNextPage } = usePostsInfinity();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <div style={{ height: "100%" }}>
      <VirtualList data={data?.pages || []} itemKey="id">
        {(item, idx) => {
          return (
            <React.Fragment key={idx}>
              {item.map((post: IPosts, idx: any) => {
                if (item.length === idx + 1)
                  return <PostItem key={post.id} {...post} innerRef={ref} />;
                return <PostItem key={post.id} {...post} />;
              })}
            </React.Fragment>
          );
        }}
      </VirtualList>
    </div>
  );
};

export default Posts;
