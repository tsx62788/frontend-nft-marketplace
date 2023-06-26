import './globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import { Nunito } from 'next/font/google'
import { ConfigProvider, NavBar } from './components'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'NFT Marketplace',
  description: 'NFT Marketplace',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={nunito.className}>
        <div className='md:mx-auto p-4'>
          <ConfigProvider>
            <NavBar />
            {children}
          </ConfigProvider>
        </div>
      </body>
    </html>
  )
}
