import { DEFAULT_PAGESIZE } from "@/lib/constraints/configValue";
import axiosClient from "./axiosClient";

const apiRequest = {
  getPosts: async (pageParam: any) => {
    const dataPost = await axiosClient.get(
      `/posts?_page=${pageParam}&_limit=${DEFAULT_PAGESIZE}`
    );

    return dataPost;
  },
  getComments: async (postId: number | string) =>
    await axiosClient.get(`/comments?postId=${postId}`),
  getPost: async (postId: number | string) => {
    const dataPost = await axiosClient.get(`/posts/${postId}`);

    return dataPost;
  },
  sendComment: async (data: any, postId: any) => {
    const dataPost = await axiosClient.post(`/posts/${postId}/comments`, {
      ...data,
    });

    return dataPost;
  },
};

export default apiRequest;
