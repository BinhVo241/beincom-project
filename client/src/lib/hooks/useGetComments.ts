"use client";

import apiRequest from "@/apiRequests/apiRequest";
import { queryKey } from "@/lib/constraints/queryKey";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

export interface ICommentsForm {
  id: string;
  postId: string;
  userId: number | string;
  author?: {
    id: number | string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
  };
  createdAt?: any;
  content: string;
  reactions: { likes: number };
}

type OptionsProps = Omit<
  UseQueryOptions<any, any, [ICommentsForm]>,
  "queryKey" | "queryFn"
>;

const useGetComments = (postId: string | number, options?: OptionsProps) => {
  const { data, error, status, refetch } = useQuery({
    queryKey: [...queryKey.LIST_COMMENT, postId],
    queryFn: () => apiRequest.getComments(postId),
    ...options,
  });

  return {
    data,
    error,
    status,
    refetch,
  };
};

export default useGetComments;
