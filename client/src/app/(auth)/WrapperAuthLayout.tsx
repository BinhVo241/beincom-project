"use client";

import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function WrapperAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = useSelector((root: RootState) => root.auth.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  });

  return children;
}
