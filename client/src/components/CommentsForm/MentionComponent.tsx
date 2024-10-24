"use client";
import { Avatar, Form, Mentions } from "antd";

import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { CSSProperties } from "react";

export interface IMentionComponent {
  style?: CSSProperties;
  className?: string;
}

const MentionComponent = React.forwardRef<any, IMentionComponent>(
  function MentionComponent({ style, className }, innerRef) {
    return (
      <div
        className={className ? className : "flex w-full space-x-2"}
        style={style}
      >
        <Link href={""} className="pt-1">
          <Avatar icon={<UserOutlined />} style={{ width: 40, height: 40 }} />
        </Link>

        <Form.Item name="comment" className="flex w-full flex-col m-0">
          <Mentions
            ref={innerRef}
            placeholder="Write your comment"
            // count={{ show: true }}
            styles={{
              textarea: {
                padding: "8px 12px",
                lineHeight: "24px",
                fontSize: 16,
                fontWeight: 400,
                minHeight: 48,
              },
            }}
            className="flex min-h-12 w-full gap-y-2 overflow-hidden"
            autoSize={{ minRows: 1, maxRows: 6 }}
            onKeyDown={(e) => {
              if (["13", "Enter"].includes(e.key)) {
                e.preventDefault();
              }
            }}
            options={[
              {
                value: "afc163",
                label: "afc163",
              },
              {
                value: "zombieJ",
                label: "zombieJ",
              },
              {
                value: "yesmeck",
                label: "yesmeck",
              },
            ]}
          />
        </Form.Item>
      </div>
    );
  }
);

export default MentionComponent;
