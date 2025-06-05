import { createContext, useContext, useEffect, useState } from "react";
import { parse, serialize } from "cookie";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
    children: React.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
};

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
                                  children,
                                  defaultTheme = "system",
                                  storageKey = "vite-ui-theme",
                                  ...props
                              }: ThemeProviderProps) {
    // Obtém o tema inicial do cookie no servidor ou localStorage no cliente
    const getInitialTheme = (): Theme => {
        if (typeof window === "undefined") {
            return defaultTheme;
        }

        const storedTheme = document.cookie
            .split("; ")
            .find((row) => row.startsWith(`${storageKey}=`))
            ?.split("=")[1] as Theme | undefined;

        return storedTheme || defaultTheme;
    };

    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const root = window.document.documentElement;
            root.classList.remove("light", "dark");

            if (theme === "system") {
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                root.classList.add(systemTheme);
            } else {
                root.classList.add(theme);
            }

            // Atualiza o cookie para persistir no SSR
            document.cookie = serialize(storageKey, theme, {
                path: "/",
                maxAge: 60 * 60 * 24 * 365, // 1 ano
            });
        }
    }, [theme]);

    const value = {
        theme,
        setTheme: (newTheme: Theme) => {
            setTheme(newTheme);
            document.cookie = serialize(storageKey, newTheme, { path: "/", maxAge: 60 * 60 * 24 * 365 });
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
    return context;
};
