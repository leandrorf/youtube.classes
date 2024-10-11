import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

interface IUsuarioLogadoProvider {
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProvider> = ({ children }) => {
    const [nome, setNome] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setNome('Leandro');
        }, 1000);
    })

    const handleLogout = useCallback(() => {
        console.log('Logout executou');

    }, []);

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout: handleLogout }}>
            {children}
        </UsuarioLogadoContext.Provider>
    )
}