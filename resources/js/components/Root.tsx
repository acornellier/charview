import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { App } from '@/components/App'
import { ThemeProvider } from '@/components/ThemeProvider'

const queryClient = new QueryClient()

export function Root() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <main>
          <App />
        </main>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
