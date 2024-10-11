import React from "react";

interface IButtonLoginProps {
    onClick: () => void;
    type?: "submit" | "reset" | "button";
    
    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    )
}