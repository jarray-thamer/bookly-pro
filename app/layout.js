import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bookly Pro",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased text-black`}>
        <Header />
        <div className="max-w-screen-2xl mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
