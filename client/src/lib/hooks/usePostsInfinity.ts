"use client";

import apiRequest from "@/apiRequests/apiRequest";
import { DEFAULT_PAGESIZE } from "@/lib/constraints/configValue";
import { queryKey } from "@/lib/constraints/queryKey";
import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

export interface IPosts {
  author?: {
    id: number | string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
  };
  verified: boolean;
  title: string;
  description: string;
  paragraph: string;
  authorId: number;
  createdAt: any;
  updatedAt: any;
  id: number | string;
  avatar: string;
  readTime: any;
  reactions?: {
    likes: number;
    comments: number;
    views: number;
    shares: number;
  };
  group: Array<{ title: string; postId: number }>;
  userId: number | string;
  picture: any;
}

const usePostsInfinity = (options?: UseInfiniteQueryOptions<any, any>) => {
  const { ref, inView } = useInView();

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: queryKey.LIST_POST_INFINITY,
    initialPageParam: 1,
    queryFn: ({ pageParam }) => apiRequest.getPosts(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.length === DEFAULT_PAGESIZE ? allPages.length + 1 : undefined;
      return nextPage;
    },

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
  };
};

export default usePostsInfinity;
