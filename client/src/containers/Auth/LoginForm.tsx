"use client";

import authApiRequest from "@/apiRequests/auth";
import axiosClient, { setToken } from "@/apiRequests/axiosClient";
import Form from "@/components/Form";
import Icon from "@/components/Icon";
import { authActions } from "@/redux/auth/slice";
import { useMutation } from "@tanstack/react-query";
import { Button, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";
import FooterAuthContent from "./FooterAuthContent";
import HeaderAuthContent from "./HeaderAuthContent";

export interface ILoginFormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC<{}> = ({}) => {
  const [form] = useForm<ILoginFormValues>();
  const dispatch = useDispatch();

  const reqLogin = useMutation({
    mutationKey: ["login"],
    mutationFn: authApiRequest.login,
    async onSuccess(res: any) {
      setToken(res.accessToken);

      await axiosClient.request({
        baseURL: `${process.env.NEXT_PUBLIC_API_LOCALSERVER_URL}/api/auth`,
        method: "POST",
        data: res,
      });

      dispatch(
        authActions.login({
          token: res.accessToken,
          userInfo: res.user,
        })
      );
    },
    onError(error: any) {
      message.error(error);
    },
  });

  const onFinish = () => {
    form.validateFields().then(async (data) => {
      await reqLogin.mutateAsync(data);
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="relative flex size-full shrink flex-col rounded-2xl bg-white shadow-card-auth h-fit xs:min-h-login-form-md xs:w-login-form max-w-login-form">
      <HeaderAuthContent
        title="Log in to Beincom"
        des="The future of community engagement"
      />
      {/* Form----------- */}
      <div className="flex w-full flex-col px-6 xs:px-12 flex-1 space-y-4">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <Button
              type="text"
              block
              icon={
                <Icon name="logo_google" width={24} height={24} alt="google" />
              }
              className="text-neutral-60 hover:bg-neutral-5 h-10 w-full border border-neutral-5"
            >
              Google
            </Button>
            <Button
              type="text"
              block
              className="text-neutral-60 hover:bg-neutral-5 h-10 w-full border border-neutral-5"
              icon={<Icon name="logo_fb" width={24} height={24} alt="google" />}
            >
              Facebook
            </Button>
          </div>
        </div>
        {/* -------- */}
        <div className="flex w-full items-center">
          <div
            data-orientation="horizontal"
            role="none"
            className="bg-gray-5 shrink-0 my-2 h-px w-full my-2 m-0 flex-1"
          ></div>
          <div className="mx-3 text-xs font-normal text-neutral-40">or</div>
          <div
            data-orientation="horizontal"
            role="none"
            className="bg-gray-5 shrink-0 my-2 h-px w-full my-2 m-0 flex-1"
          ></div>
        </div>
        <Form
          form={form}
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="space-y-4"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                message: "Invalid email format!",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Email" autoComplete="email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
            style={{ marginBottom: 24 }}
          >
            <Input.Password
              placeholder="password"
              autoComplete="current-password"
            />
          </Form.Item>
          <Button
            loading={reqLogin.isPending}
            className="login-button"
            type="primary"
            htmlType="submit"
            style={{
              marginTop: 12,
              minHeight: 40,
              width: "100%",
            }}
          >
            Log In
          </Button>
        </Form>
        <p className="w-full text-center text-xs font-normal text-neutral-40 !mt-2">
          By logging in, you agree to our Privacy & Terms
        </p>
        <div className="w-full text-center " style={{ color: "#0961ed" }}>
          Forgot password?
        </div>
      </div>
      <FooterAuthContent
        title={`Don’t have an account? `}
        linkName=" Sign up"
        path="/register"
      />
    </div>
  );
};

export default LoginForm;
