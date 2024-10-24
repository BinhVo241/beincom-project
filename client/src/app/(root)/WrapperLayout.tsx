"use client";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { redirect } from "next/navigation";
import Header from "./Header";
import { useEffect } from "react";
const { Content } = Layout;

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = useSelector((root: RootState) => root.auth.isAuthenticated);
  useEffect(() => {
    if (!isAuth) {
      redirect("/login");
    }
  });

  return (
    <Layout>
      <Header />
      <Content
        className="h-main-layout overflow-y-auto overflow-x-hidden bg-gray-5"
        style={{
          scrollbarGutter: "stable both-edges",
          marginTop: "3.75rem",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
