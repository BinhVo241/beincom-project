"use client";

import { ConfigProvider as ConfigProviderLib, ConfigProviderProps } from "antd";

export interface IConProps extends ConfigProviderProps {
  children: React.ReactNode;
}

export default function ConfigProvider({ children, ...props }: IConProps) {
  return (
    <ConfigProviderLib
      theme={{
        token: {
          colorPrimary: "#6f32bb",
          colorTextBase: "#2e3660",
          colorIcon: "#444f8e",
        },
        components: {
          Form: {
            itemMarginBottom: 24,
            verticalLabelPadding: 2,
          },
          Input: {
            controlHeight: 40,
          },
        },
      }}
      {...props}
    >
      {children}
    </ConfigProviderLib>
  );
}
