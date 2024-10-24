import "@/styles/globals.css";
import ConfigProvider from "@/providers/ConfigProvider";
import Provider from "@/providers/Provider";
import StyledComponentsRegistry from "@/providers/registry";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "Everyone needs a place to be in | Beincom",
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
        <QueryProvider>
          <StyledComponentsRegistry>
            <Provider>
              <AntdRegistry>
                <ConfigProvider>{children}</ConfigProvider>
              </AntdRegistry>
            </Provider>
          </StyledComponentsRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
