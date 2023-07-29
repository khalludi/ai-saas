"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("11da2cf7-a252-4c8a-9048-658e423dd408");
  }, []);

  return null;
};
