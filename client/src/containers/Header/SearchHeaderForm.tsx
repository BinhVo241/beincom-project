"use client";

import Form from "@/components/Form";
import Icon from "@/components/Icon";
import { Input } from "antd";
import { useForm } from "antd/es/form/Form";

export interface ILoginFormValues {
  email: string;
  password: string;
}

const SearchHeaderForm: React.FC<{}> = ({}) => {
  const [form] = useForm<ILoginFormValues>();

  return (
    <Form form={form} className="w-full" name="searchHeader">
      <Form.Item
        name="email"
        style={{ margin: 0 }}
        rules={[
          {
            required: true,
            message: "Invalid email format!",
            type: "email",
          },
        ]}
      >
        <Input
          prefix={
            <Icon name="search_icon" alt="" className="text-neutral-40" />
          }
          placeholder="Search content"
        />
      </Form.Item>
    </Form>
  );
};

export default SearchHeaderForm;
