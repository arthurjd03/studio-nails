import type { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";


export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Confira a Política de Privacidade e saiba como os seus dados pessoais são protegidos durante o agendamento de serviços no estúdio.",
  robots: {
    index: true,
    follow: true,
  },
};
export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
