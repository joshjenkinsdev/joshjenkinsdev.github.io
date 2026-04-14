import { createContext, useContext } from "react";

export const ThemeToggleContext = createContext<() => void>(() => {});

export function useThemeToggle() {
  return useContext(ThemeToggleContext);
}
