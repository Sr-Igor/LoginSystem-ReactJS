import { useContext } from "react"
import { Login } from "../pages/Login"
import { AuthContext } from "./AuthContext"

type Props = {
    children: JSX.Element
}
export const RequiredAuth = ({children}: Props) => {

    const auth = useContext(AuthContext);

    if (!auth.user){
        return <Login />
    }

    return children
}