import Sidebar from "@/containers/Sidebar";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Sidebar/>
                { children }
            </body>
        </html>
    )
}