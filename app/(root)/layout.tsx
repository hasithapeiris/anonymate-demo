import RootFooter from "@/components/root-footer";
import RootHeader from "@/components/root-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <RootHeader />
      <main className="flex-1 wrapper">{children}</main>
      <RootFooter />
    </div>
  );
}
