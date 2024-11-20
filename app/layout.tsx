import { GlobalProvider } from "./context/GlobalContext";
import "./globals.css";

// import "@/app/ui/global.css";
import { inter } from "./ui/fonts";
export default function RootLayout({
  // auth,
  children,
}: {
  children: React.ReactNode;
  // auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <GlobalProvider>
          {/* {auth} */}
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
