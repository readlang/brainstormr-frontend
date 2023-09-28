import Context from "@/components/Context"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer";
import './globals.css';  // needed for tailwind

export const metadata = {
  title: 'Brainstormr',
  description: 'Amazing tool for brainstorming and notes!',
}

export default function RootLayout({ children }) { 
  
  return (
    <html lang="en" data-theme="light" className="bg-base-200">
      <body className="container mx-auto px-4" >
        <Context>
          <div style={{minHeight: "calc(100vh - 65px)" }}>
            <Header/> 
            <main>{children}</main>
          </div>
          <Footer/>
        </Context>
      </body>
    </html>
  )
}
