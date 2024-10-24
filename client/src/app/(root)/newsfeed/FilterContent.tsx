"use client";

import Icon from "@/components/Icon";
import { Dropdown, MenuProps, Tabs } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

export interface IFilterContentProps {}

const WrapperTab = styled.div`
  flex: 1;
  .ant-tabs-tab {
    padding: 0;
  }

  .ant-tabs-tab-btn {
    width: 100%;
    padding: 8px 16px 12px;
  }
  .ant-tabs-ink-bar {
    height: 0.25rem !important;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }
`;

const FilterContent: React.FC<IFilterContentProps> = ({}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const viewTypeUrl = searchParams.get("viewType");
  const [viewType, setViewType] = useState(viewTypeUrl ?? "following");

  useEffect(() => {
    const path = `${pathName}?viewType=${viewType}`;
    router.push(path);
  }, [viewType, pathName, router]);

  return (
    <div className="flex justify-between items-center py-4">
      <WrapperTab>
        <Tabs
          defaultActiveKey={viewType}
          tabBarGutter={0}
          items={[
            {
              key: "following",
              label: "Following",
            },
            {
              key: "recommendation",
              label: "Explore",
            },
            {
              key: "saved",
              label: "Saved",
            },
          ]}
          tabBarExtraContent={
            viewType !== "recommendation" && (
              <Dropdown
                menu={{
                  items: [
                    {
                      label: "Filter",
                      key: "0",
                      onClick: async () => {},
                    },
                  ] as MenuProps["items"],
                }}
                trigger={["click"]}
              >
                <div style={{ display: "flex", cursor: "pointer" }}>
                  <Icon name="filter_icon" />
                  <span style={{ marginLeft: 8 }}>Filter</span>
                </div>
              </Dropdown>
            )
          }
          onChange={(activeKey) => {
            setViewType(activeKey);
          }}
        />
      </WrapperTab>
    </div>
  );
};

export default FilterContent;
