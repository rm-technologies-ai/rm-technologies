
import { createContext, useContext, ReactNode } from 'react';

type AppContextType = {
    // ...define types for your shared state
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppWrapper = ({ children }: { children: ReactNode }) => {
    let sharedState = {
        // ... your shared state
    };

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = (): AppContextType => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppWrapper');
    }
    return context;
};
