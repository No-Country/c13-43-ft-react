import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}
