import Context from "@/components/Context"
import { Header } from "@/app/_layout/Header"
import { Footer } from "@/app/_layout/Footer";
import './_layout/globals.css'; // needed for tailwind
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const neue_mont = localFont({
  src: './_layout/NeueMontreal-Variable.woff2',
  display: 'swap',
  variable: '--font-neue-montreal',
})

export const metadata = {
  title: 'Brainstormr',
  description: 'Amazing tool for brainstorming and notes!',
}

export default function RootLayout({ children }) { 
  
  return (
    <html lang="en" data-theme="light" className={`${neue_mont.variable} bg-base-200`}>
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
