"use client";

import PostItem from "@/components/PostItem";
import useFilterPostsInfinity from "@/lib/hooks/useFilterPostsInfinity";
import usePostsInfinity, { IPosts } from "@/lib/hooks/usePostsInfinity";
import { useSearchParams } from "next/navigation";
import VirtualList from "rc-virtual-list";
import React, { useEffect } from "react";

export interface IPostsProps {
  filter?: boolean;
}

const Posts: React.FC<IPostsProps> = ({ filter }) => {
  const search = useSearchParams();
  const searchParam = search.get("content");

  const { data, ref, fetchNextPage, inView, hasNextPage } =
    usePostsInfinity(filter);
  const {
    data: dataSearch,
    refetch,
    fetchNextPage: fetchNextFilter,
    inView: inViewFilter,
    hasNextPage: hasNextPageFilter,
    ref: refFilter,
  } = useFilterPostsInfinity(filter, searchParam);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  useEffect(() => {
    if (inViewFilter && hasNextPageFilter) {
      fetchNextFilter();
    }
  }, [inViewFilter, fetchNextFilter, hasNextPageFilter]);

  useEffect(() => {
    refetch();
  }, [searchParam, refetch]);

  return (
    <div style={{ height: "100%" }}>
      <VirtualList
        data={(filter ? dataSearch?.pages : data?.pages) || []}
        itemKey={(item) => `index_${item?.length}`}
      >
        {(item, idx) => {
          return (
            <React.Fragment key={idx}>
              {item.map((post: IPosts, idx: any) => {
                if (item.length === idx + 1)
                  return (
                    <PostItem
                      key={post.id}
                      {...post}
                      innerRef={filter ? refFilter : ref}
                    />
                  );
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
