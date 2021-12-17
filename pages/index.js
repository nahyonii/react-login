import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

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
      <Link href="/user">
        <a>로그인 페이지(SSR 적용 x)로 이동</a>
      </Link>
    </>
  );
};

export default Home;
