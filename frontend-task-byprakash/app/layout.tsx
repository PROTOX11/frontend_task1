import "./global.css";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "Legal Work Platform",
  description: "Manage your legal work in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"           // start in dark mode to match reference
          enableSystem
          disableTransitionOnChange     // smoother switches
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}