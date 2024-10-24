import ConfigProvider from "@/providers/ConfigProvider";
import QueryProvider from "@/providers/QueryProvider";
import StyledComponentsRegistry from "@/providers/registry";
import "@/styles/globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ReduxProvider = dynamic(() => import("@/providers/Provider"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Everyone needs a place to be in | Beincom",
  icons: "/logo.webp",
  description:
    "Beincom (BIC) is a social community network powered by Web2 and Web3 (Blockchain) technology - a great platform for those who want to build their own small inner circle, company/organization, or even huge fan community, to truly and deeply connect people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ReduxProvider>
          <QueryProvider>
            <StyledComponentsRegistry>
              <AntdRegistry>
                <ConfigProvider>{children}</ConfigProvider>
              </AntdRegistry>
            </StyledComponentsRegistry>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
