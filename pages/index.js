import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    console.log("gaga");
    e.preventDefault();
    axios
      .post("https://api.kingdonkey.site/login", {
        id: id,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error!");
      });
  };

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          name="userId"
          value={id}
          onChange={onChangeId}
          placeholder="아이디"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호"
        />
        <button type="submit">로그인하기</button>
      </form>
    </>
  );
};

export default Home;
