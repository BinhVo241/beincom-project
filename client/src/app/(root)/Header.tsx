"use client";
import authApiRequest from "@/apiRequests/auth";
import Icon from "@/components/Icon";
import SearchHeaderForm from "@/containers/Header/SearchHeaderForm";
import { authActions } from "@/redux/auth/slice";
import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Button, Dropdown, Layout, message, Tabs, theme } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const { Header: AntHeader } = Layout;

const WrapperTab = styled.div`
  .ant-tabs-tab {
    min-width: 24px;
    width: 5rem;
    height: 3rem;
    padding-top: 0;
  }

  .ant-tabs-tab:hover {
    background: #e3e6ee;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .ant-tabs-tab-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    color: ${({ color }) => `${color}`};
  }
  .ant-tabs-ink-bar {
    height: 0.25rem !important;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname();

  const [activeKey, setActiveKey] = useState(pathName);

  useEffect(() => {
    router.push(activeKey);
  }, [activeKey, router]);

  return (
    <AntHeader
      className="fixed top-0 h-navbar w-screen gap-x-6 border-b bg-white px-6 shadow-1 flex-center xl:gap-x-12 xl:px-12"
      style={{ borderBottomWidth: 1 }}
    >
      <div className="hidden min-w-layout-side-pane max-w-layout-side-pane grow xl:flex">
        <Link
          href={"/"}
          style={{ height: "100%" }}
          className="gap-x-1.5 flex-center"
        >
          <Icon
            name="logo_beincomm_icon_only"
            alt=""
            style={{ height: 28, width: 28 }}
          />
          <Icon
            name="logo_beincomm_text_only"
            alt=""
            style={{ height: 22, width: 110 }}
          />
        </Link>
      </div>
      <div className="h-full min-w-layout-main-pane max-w-layout-main-pane grow gap-x-6 flex-center">
        <nav className="flex h-full items-end">
          <WrapperTab color={theme.useToken().token.colorIcon}>
            <Tabs
              defaultActiveKey={activeKey}
              activeKey={activeKey}
              onChange={(path) => {
                setActiveKey(path);
              }}
              tabBarGutter={0}
              items={[
                {
                  key: "/newsfeed",
                  label: "",
                  icon: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.7 11.3L12.7 2.3C12.3 1.9 11.7 1.9 11.3 2.3L2.30002 11.3C2.00002 11.6 1.90002 12 2.10002 12.4C2.20002 12.8 2.60002 13 3.00002 13H4.00002V19C4.00002 20.7 5.30002 22 7.00002 22H17C18.7 22 20 20.7 20 19V13H21C21.4 13 21.8 12.8 21.9 12.4C22.1 12 22 11.6 21.7 11.3ZM14 20H10V15C10 14.4 10.4 14 11 14H13C13.6 14 14 14.4 14 15V20Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  ),
                },
                {
                  key: "/search",
                  label: (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.3 3.7C7.6 3.3 6.9 3 6.1 3C5.3 3 4.6 3.2 3.9 3.7C3.3 4.1 2.8 4.8 2.6 5.5C2.3 6.3 2.3 7.1 2.5 7.8C2.7 8.6 3.2 9.2 3.8 9.7C2.6 10.2 1.7 11 1.1 12.1C1.1 12.1 1 12.2 1 12.3V12.6C1 12.7 1.1 12.8 1.1 12.8C1.1 12.8618 1.1382 12.8854 1.19098 12.918C1.22361 12.9382 1.2618 12.9618 1.3 13H1.5L6.6 13.1C6.6 12.3 6.7 11.5 7 10.7C7.3 9.6 8 8.6 9 7.9C9.15279 7.74721 9.36393 7.65279 9.54427 7.57214C9.6 7.54721 9.65279 7.52361 9.7 7.5C9.8 6.9 9.8 6.3 9.6 5.7C9.4 4.9 8.9 4.2 8.3 3.7ZM23.4 12.3001C22.8 11.2001 21.9 10.4001 20.8 9.9001C21.4 9.4001 21.9 8.8001 22.1 8.0001C22.3 7.2001 22.3 6.4001 22.1 5.7001C21.9 4.9001 21.4 4.3001 20.8 3.8001C20.2 3.3001 19.4 3.1001 18.6 3.1001C17.8 3.1001 17.1 3.3001 16.4 3.8001C15.8 4.3001 15.3 4.9001 15 5.6001C14.8 6.2001 14.7 6.8001 14.8 7.4001C14.9 7.4501 15.025 7.5251 15.15 7.6001C15.275 7.6751 15.4 7.7501 15.5 7.8001C16.5 8.5001 17.2 9.5001 17.6 10.6001C17.9 11.4001 18 12.3001 17.9 13.1001L22.9 13.2001C23 13.2001 23.1 13.2001 23.1 13.1001C23.1618 13.1001 23.1854 13.0619 23.218 13.0091C23.2382 12.9765 23.2618 12.9383 23.3 12.9001C23.3575 12.8426 23.3819 12.8182 23.3923 12.7888C23.4 12.767 23.4 12.7426 23.4 12.7001V12.4001C23.5 12.5001 23.5 12.4001 23.4 12.3001ZM16.7 14.1C16.4 15.1 15.9 15.9 15.1 16.5C16.4 17.1 17.6 18.2 18.1 19.5C18.1 19.55 18.125 19.6 18.15 19.65C18.175 19.7 18.2 19.75 18.2 19.8V20.1C18.2 20.2 18.2 20.3 18.1 20.4C18.1 20.4618 18.0618 20.4854 18.009 20.518C17.9764 20.5382 17.9382 20.5618 17.9 20.6C17.8 20.7 17.7 20.7 17.6 20.7H6.6C6.55 20.7 6.5 20.675 6.45 20.65C6.4 20.625 6.35 20.6 6.3 20.6C6.2382 20.6 6.21459 20.5618 6.18197 20.509C6.1618 20.4764 6.1382 20.4382 6.1 20.4C6.1 20.35 6.075 20.3 6.05 20.25C6.025 20.2 6 20.15 6 20.1V19.8C6 19.7 6 19.6 6.1 19.5C6.9 18.2 8 17.2 9.4 16.6C8.7 16 8.1 15.1 7.8 14.2C7.5 13.2 7.5 12.2 7.8 11.3C8.2 10.3 8.8 9.5 9.6 8.9C10.4 8.3 11.3 8 12.3 8C13.3 8 14.2 8.3 15 8.9C15.8 9.5 16.4 10.3 16.7 11.2C17 12.1 17 13.2 16.7 14.1Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="currentColor"
                      ></path>
                    </svg>
                  ),
                },
                {
                  key: "/marketplace/discover",
                  label: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 25 25"
                      fill="none"
                    >
                      <path
                        d="M13.2994 17.9486C13.9819 17.9486 14.5364 18.5031 14.5364 19.1856V21.8941H10.1003V19.1856C10.1003 18.5031 10.6548 17.9486 11.3373 17.9486H13.2994ZM18.226 21.8941C18.9511 21.8941 19.6335 21.6168 20.1454 21.105C20.6572 20.5931 20.9345 19.9107 20.9345 19.1856V12.9367C19.1217 13.7685 17.0316 13.7258 15.2828 12.8088C14.3658 13.2779 13.3634 13.5339 12.3397 13.5125C11.316 13.5339 10.2923 13.2779 9.39654 12.8088C8.47948 13.2993 7.4771 13.5552 6.43208 13.5339C5.49368 13.5339 4.57662 13.3419 3.72354 12.9367V19.1856C3.72354 19.9107 4.00079 20.5931 4.51264 21.105C5.02449 21.6168 5.70695 21.8941 6.43208 21.8941H8.62877V19.1856C8.62877 17.6927 9.84441 16.477 11.3373 16.477H13.2994C14.7923 16.477 16.0079 17.6927 16.0079 19.1856V21.8941H18.226ZM4.25671 11.5505C4.91785 11.8917 5.6643 12.041 6.41075 12.041C7.24251 12.0623 8.05294 11.849 8.77806 11.4438C9.14062 11.2305 9.58849 11.2305 9.97237 11.4438C11.2947 12.2329 13.3847 12.2329 14.6857 11.4438C15.0482 11.2305 15.4961 11.2305 15.8587 11.4438C17.0956 12.1903 19.0364 12.2542 20.3587 11.5718C21.5103 10.9533 22.0435 9.58836 21.617 8.35139L20.3587 4.55516C19.9961 3.44616 18.9511 2.69971 17.7994 2.69971H6.83729C5.6643 2.69971 4.6406 3.44616 4.27804 4.55516L2.99841 8.33006C2.5932 9.56703 3.12638 10.932 4.25671 11.5505Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  ),
                },
              ]}
              tabBarStyle={{ margin: 0 }}
            />
          </WrapperTab>
        </nav>
        <div className="flex h-fit w-full">
          <SearchHeaderForm setActiveKey={setActiveKey} />
        </div>
      </div>
      <div className="flex size-full min-w-layout-side-pane max-w-layout-side-pane grow items-center justify-end gap-x-3">
        <div style={{ cursor: "pointer" }}>
          <Icon name="bell_icon" />
        </div>
        <Link href={""}>
          <Icon name="bic_chat_logo" />
        </Link>
        <Dropdown
          menu={{
            items: [
              {
                label: "Log out",
                key: "0",
                onClick: async () => {
                  await authApiRequest
                    .logoutFromNextClientToNextServer(true)
                    .catch((e) => {
                      message.error(e);
                    });
                  dispatch(authActions.logout());
                },
              },
            ] as MenuProps["items"],
          }}
          trigger={["click"]}
        >
          <Avatar
            // src={session?.avatar}
            style={{
              cursor: "pointer",
              //   backgrounddivor: strToHex(userInfo?.username),
            }}
            icon={<UserOutlined style={{ fontSize: 18 }} />}
          />
        </Dropdown>
        <div className="bg-gray-5 shrink-0 mx-2 w-px my-2 my-0 h-6"></div>
        <Button
          icon={<Icon name="wallet" />}
          className="bg-neutral-2 text-neutral-60 hover:bg-neutral-5"
          style={{
            border: "none",
            fontWeight: 600,
          }}
        >
          Wallet
        </Button>
      </div>
      {/* </Row> */}
    </AntHeader>
  );
};
export default Header;
