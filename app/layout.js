import { Inter } from 'next/font/google';
import './e.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gestion des congés rappel ',

};

export default function RootLayout({ children }) {
  return (
    <html dir='rtl' lang="َar">
      <body className={inter.className}> {children} </body>{' '}
    </html>
  );
}
