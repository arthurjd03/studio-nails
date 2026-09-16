"use client";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/components/ErrorMessage";

export default function NotFound() {
  const router = useRouter();
  return (
    <ErrorMessage
      variant="not-found"
      showReset={false}
      secondaryLabel="Voltar ao início"
      reset={() => router.push("/")}
    />
  );
}
