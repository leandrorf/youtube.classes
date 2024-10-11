import { useRef, useState } from "react";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const Login = () => {

    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEntrar = () => {
        console.log(email);
        console.log(password);

        if (inputPasswordRef.current != null) {
            inputPasswordRef.current.focus();
        }
    }

    return (
        <div>
            <form>
                <InputLogin
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />
                <InputLogin
                    type="password"
                    label="Senha"
                    value={password}
                    onChange={e => setPassword(e)}
                    ref={inputPasswordRef}
                />

                <ButtonLogin type="button" onClick={handleEntrar}>
                    Login
                </ButtonLogin>

                <ButtonLogin type="button" onClick={handleEntrar}>
                    Cadastrar-se
                </ButtonLogin>
            </form>
        </div>
    )
}