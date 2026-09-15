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

  const isConnectionError =
    error.message.includes("fetch") ||
    error.message.includes("network") ||
    (typeof window !== "undefined" && !navigator.onLine);

  return (
    <ErrorMessage
      variant={isConnectionError ? "connection" : "error"}
      reset={reset}
    />
  );
}
