import { useContext } from "react";


export const AuthContext = useContext(null); 


export default function AuthState({children}){
    return <AuthContext.Provider>{children}</AuthContext.Provider>
}