"use client";

import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

type ThemeType = "light" | "dark";

type ThemeContextProps = {
    theme: ThemeType;
    changeTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    /**
     * @description State in provider
     */
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [theme, setTheme] = useState<ThemeType>("light");

    /**
     * @description Function to change theme
     */
    const changeTheme = useCallback((newTheme: ThemeType) => {
        /**
         * TODO Update theme value in state of provider
         */
        setTheme(newTheme);
        /**
         * TODO Update theme value in local storage
         */
        localStorage.setItem("theme", newTheme);
    }, []);

    /**
     * @description Side effect
     */
    useEffect(() => {
        const themeState = localStorage.getItem("theme");

        if (!themeState) {
            localStorage.setItem("theme", "light");
        } else {
            setTheme(themeState as ThemeType);
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        // TODO Clear className in body tag
        document.body.className = "";
        // TODO Add className theme in body tag
        document.body.classList.add(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {!isLoading && children}
        </ThemeContext.Provider>
    );
};
