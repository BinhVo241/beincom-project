"use client";

import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

export default function WrapperAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = useSelector((root: RootState) => root.auth.isAuthenticated);
  const router = useRouter();
  if (isAuth) {
    router.push("/");
  }
  return children;
}
