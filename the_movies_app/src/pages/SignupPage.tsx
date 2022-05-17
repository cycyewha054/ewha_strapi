import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "../components/TextField";

export const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { replace } = useHistory();

  const register = () => {
    axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: name,
        email: email,
        password: password,
        phone: phone,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
        localStorage.setItem("token", response.data.jwt);
        replace("/");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <div className="m-4">
      <div className="text-3xl font-bold mb-10">회원가입</div>

      <div>
        <TextField
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <TextField
          label="이름"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          label="전화번호"
          placeholder="전화번호를 입력해주세요."
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
      </div>

      <div>
        <div
          className="bg-gray-800 text-white text-center py4"
          onClick={() => {
            register();
          }}
        >
          회원가입
        </div>
      </div>
    </div>
  );
};
