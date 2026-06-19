import { BreadcrumbAuto } from "@/components/BreadcrumbAuto";

export default function LeistungenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbAuto />
      {children}
    </>
  );
}
