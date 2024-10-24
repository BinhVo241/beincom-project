"use client";

import Form from "@/components/Form";
import Icon from "@/components/Icon";
import { Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

export interface ISearchContent {
  // content: string;
  setActiveKey: Dispatch<SetStateAction<string>>;
}

const SearchHeaderForm: React.FC<ISearchContent> = ({ setActiveKey }) => {
  const [form] = useForm<ISearchContent>();
  const router = useRouter();

  const handleSearch = (data: any) => {
    setActiveKey("/search");
    if (!data?.content) {
      router.push("/search");
    } else {
      const path = `/search?content=${encodeURIComponent(data?.content)}`;
      router.push(path);
    }
  };

  return (
    <Form
      form={form}
      className="w-full"
      name="searchContent"
      onFinish={handleSearch}
    >
      <Form.Item name="content" style={{ margin: 0 }}>
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
