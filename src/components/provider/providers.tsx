"use client";

import { Provider } from "jotai";
import { ReactNode } from "react";
const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider>{children}</Provider>;
};

export default Providers;
