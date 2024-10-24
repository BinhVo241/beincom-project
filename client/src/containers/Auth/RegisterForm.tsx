"use client";

import authApiRequest from "@/apiRequests/auth";
import axiosClient, { setToken } from "@/apiRequests/axiosClient";
import Form from "@/components/Form";
import Icon from "@/components/Icon";
import { authActions } from "@/redux/auth/slice";
import { useMutation } from "@tanstack/react-query";
import { Button, Col, Input, message, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import { useDispatch } from "react-redux";

export interface IRegisterFormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const LoginForm: React.FC<{}> = ({}) => {
  const [form] = useForm<IRegisterFormValues>();
  const dispatch = useDispatch();

  const reqRegister = useMutation({
    mutationKey: ["register"],
    mutationFn: authApiRequest.register,
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
    form.validateFields().then((data) => {
      reqRegister.mutate(data);
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex w-full flex-col px-6 xs:px-12 flex-1 space-y-4">
      <div className="flex flex-col gap-3">
        <Button
          type="text"
          className="relative flex items-center justify-center space-x-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:!cursor-not-allowed disabled:!ring-0 disabled:focus-visible:!outline-0 focus-visible:outline-neutral-20 active:ring-neutral-20 px-3 py-2 text-sm focus-visible:outline-2 active:ring-2 [&>svg]:size-5 disabled:bg-gray-5 disabled:text-gray-40 text-neutral-60 hover:bg-neutral-5 h-10 w-full border border-neutral-5  disabled:pointer-events-none"
          icon={<Icon name="logo_google" width={24} height={24} alt="google" />}
        >
          Sign up with Google
        </Button>
        <Button
          type="text"
          className="relative flex items-center justify-center space-x-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:!cursor-not-allowed disabled:!ring-0 disabled:focus-visible:!outline-0 focus-visible:outline-neutral-20 active:ring-neutral-20 px-3 py-2 text-sm focus-visible:outline-2 active:ring-2 [&>svg]:size-5 disabled:bg-gray-5 disabled:text-gray-40 text-neutral-60 hover:bg-neutral-5 h-10 w-full border border-neutral-5  disabled:pointer-events-none"
          icon={<Icon name="logo_fb" width={24} height={24} alt="google" />}
        >
          Sign up with Facebook
        </Button>
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
      >
        <Row gutter={12}>
          <Col xs={12}>
            <Form.Item
              name="firstName"
              label="First name"
              rules={[{ required: true }]}
            >
              <Input placeholder="First name" autoComplete="firstName" />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item
              name="lastName"
              label="Last name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Last name" autoComplete="lastname" />
            </Form.Item>
          </Col>
        </Row>

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
          loading={reqRegister.isPending}
          type="primary"
          htmlType="submit"
          style={{
            marginTop: 12,
            minHeight: 40,
            width: "100%",
          }}
        >
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
