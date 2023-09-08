import Sidebar from "@/containers/Sidebar";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="hidden xl:flex">
        <Sidebar />
      </div>
      {children}
    </div>
  );
}
