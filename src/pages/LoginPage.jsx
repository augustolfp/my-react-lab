import { useState, useRef, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import styled from "styled-components";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const { auth, setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef(); //para fins de acessibilidade, pois o screenreader pega o erro on focus
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  async function handleLogin(e) {
    setIsDisabled(true);
    e.preventDefault();

    try {
      const body = { email, password };
      const response = await api.post("/sign-in", body);
      const accessToken = response?.data?.token;
      setAuth({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setEmail("");
      setPassword("");
      setIsDisabled(false);
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 400) {
        setErrMsg("Email ou senha não preenchidos!");
      } else if (err.response?.status === 401) {
        setErrMsg("Credenciais não autorizadas!");
      } else {
        setErrMsg("Falha no login!");
      }
      errRef.current.focus();
      setIsDisabled(false);
    }
  }

  return (
    <Container>
      {success ? (
        <>
          <h1>Você está logado!</h1>
          <Link to={"/counted-days"}>Clique aqui para ir até a homepage</Link>
        </>
      ) : (
        <form onSubmit={handleLogin}>
          <input
            ref={emailRef}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            disabled={isDisabled}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="senha"
            disabled={isDisabled}
            required
          />
          <button type="submit" disabled={isDisabled}>
            ENTRAR
          </button>
        </form>
      )}
      {errMsg && (
        <ErrorDisplay ref={errRef} aria-live="assertive">
          Credenciais incorretas!{errMsg}
        </ErrorDisplay>
      )}
    </Container>
  );
}

const Container = styled.div``;

const ErrorDisplay = styled.div`
  color: red;
  font-weight: bold;
  font-size: 16px;
`;
