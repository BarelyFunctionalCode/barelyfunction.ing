import { ThemeProvider } from 'styled-components';


const theme = {
  colors: {
    primary: '#1ba40c',
  },
}

export default function Theme({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}