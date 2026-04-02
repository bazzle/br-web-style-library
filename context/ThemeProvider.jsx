'use client'

import { ThemeProvider } from 'next-themes'

export default function AppThemeProvider({ children }) {
	return (
		<ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
			{children}
		</ThemeProvider>
	)
}
