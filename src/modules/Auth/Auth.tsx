import React, { useState } from "react";
import { useUser } from "../../context/User";
import axios from "axios";
import { API_URL } from "../../common/constants";
import {
  StyledHelper,
  StyledInput,
  StyledLabel,
  SubmitButton,
  SubmitWrapper,
  Wrapper,
} from "../../common/styled";
import styled from "styled-components";

export interface LoginRequest {
  username: string;
  password: string;
}

interface LoginResponse {
  allowed: boolean;
}

interface AuthProps {
  children: React.ReactElement;
}

export const Auth = ({ children }: AuthProps) => {
  const { userLogged, login } = useUser();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState(false);

  const loginRequest = async (data: LoginRequest) => {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
      username: data.username,
      password: data.password,
    });

    login({ allowed: response.data.allowed });
  };

  const onLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      loginRequest({
        username: userEmail,
        password: userPassword,
      });
    } catch (error) {
      setError(true);
    }
  };

  if (userLogged) {
    return children;
  }

  return (
    <Wrapper>
      <ImageWrapper />
      <LoginCardWrapper>
        <LoginCard method="POST" onSubmit={onLoginSubmit}>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <StyledLabel>
            <StyledHelper>User</StyledHelper>
            <StyledInput
              type="email"
              value={userEmail}
              onChange={(event) => setUserEmail(event.target.value)}
              placeholder="huginn@ravn.co"
              required
            />
          </StyledLabel>
          <StyledLabel>
            <StyledHelper>Password</StyledHelper>
            <StyledInput
              type="password"
              value={userPassword}
              onChange={(event) => setUserPassword(event.target.value)}
              placeholder="write your password here"
              required
            />
          </StyledLabel>
          <SubmitWrapper>
            <SubmitButton type="submit">
              <h4>Log in</h4>
            </SubmitButton>
          </SubmitWrapper>
        </LoginCard>
      </LoginCardWrapper>
    </Wrapper>
  );
};

const ImageWrapper = styled.div`
  flex: 1;
  height: 100vh;
  background-image: url(${backImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const LoginCardWrapper = styled.div`
  flex: 1;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginCard = styled.form`
  width: 70%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`;

const LogoWrapper = styled.div`
  width: 330px;
`;
