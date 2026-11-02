import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <div className="fixed top-0 left-0 z-[999999] bg-red-600 text-white p-3">
        WEBSITE LAYOUT IS WORKING
      </div> */}

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}