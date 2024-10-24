"use client";

import apiRequest from "@/apiRequests/apiRequest";
import { mutationKey } from "@/lib/constraints/queryKey";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { message } from "antd";

type OptionsProps = Omit<
  UseMutationOptions<any, any>,
  "mutationKey" | "mutationFn"
>;

const useGetComments = (postId: any, options?: OptionsProps) => {
  const { data, error, status, mutateAsync } = useMutation({
    mutationKey: mutationKey.NEW_COMMENT,
    mutationFn: (body) => apiRequest.sendComment(body, postId),
    ...options,
    onError: (e) => {
      console.log(e);
      message.error("Send comment fail!");
    },
  });

  return {
    data,
    error,
    status,
    mutateAsync,
  };
};

export default useGetComments;
