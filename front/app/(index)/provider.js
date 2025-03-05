"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createContext, useContext } from "react";

const AuthContext = createContext()

export default function Providers({ children, isAuth }) {
    const queryClient = new QueryClient();

    return (
        <AuthContext.Provider value={isAuth}>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </AuthContext.Provider>
    );
}
export function useAuth(){
    return useContext(AuthContext)
}
