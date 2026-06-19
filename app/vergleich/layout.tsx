import { BreadcrumbAuto } from "@/components/BreadcrumbAuto";

export default function VergleichLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbAuto />
      {children}
    </>
  );
}
