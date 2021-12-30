//ssr이 적용된 페이지
import React, { useEffect, useState } from "react";
import { LOAD_USER_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { END } from "redux-saga";
import Link from "next/link";

const User = ({ me }) => {
  // const { me } = useSelector((state) => state.user);
  useEffect(() => {
    const res = await fetch("http://localhost:3000/hello");
    const me = await res.json();
    console.log(me);

    return {
      props: {
        me,
      },
    };
  });
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <p>{!me ? "아이디 정보가 없어요ㅠㅠ" : me.data.id}</p>
      <p>{!me ? "유저 이름이 없어요ㅠㅠ" : me.data.username}</p>
      <p>{count}</p>
      <Link href="/">
        <a>로그인 페이지(SSR 적용 x)로 이동</a>
      </Link>
      <button onClick={handleClick}>하하하하</button>
    </>
  );
};

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  const res = await fetch("http://localhost:3000/hello");
  const me = await res.json();
  console.log(me);

  return {
    props: {
      me,
    },
  };
});

export default User;
