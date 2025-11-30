// app/layout.tsx
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeInitializer from './contexts/ThemeInitializer';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <ThemeProvider>
          <ThemeInitializer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}