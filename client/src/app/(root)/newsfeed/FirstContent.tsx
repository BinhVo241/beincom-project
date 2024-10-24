"use client";

import Icon from "@/components/Icon";
import { Avatar, Button, Col, Row } from "antd";

export interface IFirstContentValues {
  name: string;
  description: string;
  urlAvatar?: string;
}

const FirstContent: React.FC<IFirstContentValues> = ({
  name,
  description,
  urlAvatar,
}) => {
  return (
    <div className="grid w-full gap-2 rounded-lg bg-white p-4">
      <span className="inline-flex items-center">
        <div className="flex w-full items-start gap-4">
          <Avatar
            src={urlAvatar || ""}
            className="relative flex size-10 flex-none cursor-pointer"
          ></Avatar>
          <div className="flex w-full grow flex-col justify-center">
            <div className="text-sm text-neutral-80 inline-flex gap-1">
              <span className="flex-none font-normal">Welcome back, </span>
              <span className="flex items-center gap-x-1 text-sm font-semibold">
                <span className="grid">
                  <span className="truncate cursor-pointer hover:underline text-neutral-60">
                    {name}
                  </span>
                </span>
              </span>
            </div>
            <div className="text-xs font-normal text-neutral-40">
              {description}
            </div>
          </div>
        </div>
      </span>
      <Row gutter={16}>
        <Col flex={1}>
          <Button
            icon={<Icon name="create_post_icon" />}
            block
            style={{ padding: "12px 16px", border: "none", height: 48 }}
            className="hover:text-neutral-70 space-x-4 rounded-xl bg-neutral-1 px-4 py-3 text-sm font-medium text-neutral-40 hover:bg-neutral-2"
          >
            Quick Post
          </Button>
        </Col>
        <Col flex={1}>
          <Button
            icon={<Icon name="create_post_icon" />}
            block
            style={{ padding: "12px 16px", border: "none", height: 48 }}
            className="hover:text-neutral-70 space-x-4 rounded-xl bg-neutral-1 px-4 py-3 text-sm font-medium text-neutral-40 hover:bg-neutral-2"
          >
            Write Article
          </Button>
        </Col>
        <Col flex={1}>
          <Button
            icon={<Icon name="create_post_icon" />}
            block
            style={{ padding: "12px 16px", border: "none", height: 48 }}
            className="hover:text-neutral-70 space-x-4 rounded-xl bg-neutral-1 px-4 py-3 text-sm font-medium text-neutral-40 hover:bg-neutral-2"
          >
            Create Series
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FirstContent;
