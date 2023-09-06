import Sidebar from "@/containers/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Sidebar />
      {children}
    </div>
  );
}
