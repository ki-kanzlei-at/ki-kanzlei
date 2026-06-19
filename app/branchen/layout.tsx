import { BreadcrumbAuto } from "@/components/BreadcrumbAuto";

export default function BranchenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbAuto />
      {children}
    </>
  );
}
