import { VariableContextProvider } from "nativewind";
import { useColorScheme } from "react-native";

const themes = {
  light: {
    "--color-background": "#f8fafc",
    "--color-card": "#ffffff",
    "--color-foreground": "#0f172a",
    "--color-muted": "#64748b",
    "--color-border": "#e2e8f0",
    "--color-primary": "#2563eb",
  },

  dark: {
    "--color-background": "#0f172a",
    "--color-card": "#1e293b",
    "--color-foreground": "#f8fafc",
    "--color-muted": "#94a3b8",
    "--color-border": "#334155",
    "--color-primary": "#60a5fa",
  },
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const appearance = useColorScheme();

  const colorScheme = appearance === "dark" ? "dark" : "light";

  return (
    <VariableContextProvider value={themes[colorScheme]}>
      {children}
    </VariableContextProvider>
  );
}
