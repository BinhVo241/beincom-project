"use client";

import apiRequest from "@/apiRequests/apiRequest";
import { queryKey } from "@/lib/constraints/queryKey";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { IPosts } from "./usePostsInfinity";

type OptionsProps = Omit<
  UseQueryOptions<any, any, IPosts>,
  "queryKey" | "queryFn"
>;

const useGetPost = (postId: any, options?: OptionsProps) => {
  const { data, error, status, isLoading, isError, refetch } = useQuery({
    queryKey: [...queryKey.ARTICLE, postId],
    queryFn: () => apiRequest.getPost(postId),
    retry: 1,
    staleTime: 5 * 1000,
    refetchOnWindowFocus: "always",
    ...options,
  });

  return {
    data,
    error,
    status,
    isLoading,
    isError,
    refetch,
  };
};

export default useGetPost;
