"use client";

import MountTransition from "@/components/MountTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return <MountTransition>{children}</MountTransition>;
}
