import { ILoginFormValues } from "@/containers/Auth/LoginForm";
import axiosClient from "./axiosClient";
import { IRegisterFormValues } from "@/containers/Auth/RegisterForm";

const authApiRequest = {
  login: (body: ILoginFormValues) =>
    axiosClient.post<ILoginFormValues>("/login", body),
  register: (body: IRegisterFormValues) =>
    axiosClient.post<IRegisterFormValues>("/register", body),
  logoutFromNextClientToNextServer: (force?: boolean | undefined) =>
    axiosClient.request({
      baseURL: `${process.env.NEXT_PUBLIC_API_LOCALSERVER_URL}/api/auth/logout`,
      method: "POST",
      data: { force },
    }),
};

export default authApiRequest;
