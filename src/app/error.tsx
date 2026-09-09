"use client";

import { useEffect } from "react";
import ErrorMessage from "@/components/ErrorMessage";

type RootErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function RootErrorPage({ error, reset }: RootErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <ErrorMessage reset={reset} />;
}
