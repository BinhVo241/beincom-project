"use client";

import apiRequest from "@/apiRequests/apiRequest";
import { DEFAULT_PAGESIZE } from "@/lib/constraints/configValue";
import { queryKey } from "@/lib/constraints/queryKey";
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

const useFilterPostsInfinity = (
  filter?: boolean,
  content?: any,
  options?: UseInfiniteQueryOptions<any, any>
) => {
  const { ref, inView } = useInView();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: queryKey.LIST_POST_FILTER,
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      if (!content) return apiRequest.getPosts(pageParam);
      return apiRequest.getFilterPosts(content, pageParam);
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.length === DEFAULT_PAGESIZE ? allPages.length + 1 : undefined;
      return nextPage;
    },
    enabled: filter,
    ...options,
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    ref,
    inView,
    refetch,
  };
};

export default useFilterPostsInfinity;
