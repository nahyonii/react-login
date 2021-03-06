//ssr이 적용된 페이지
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { LOAD_USER_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";
import { END } from "redux-saga";
import Link from "next/link";

const User = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      <p>{!me ? "아이디 정보가 없어요ㅠㅠ" : me.id}</p>
      <p>{!me ? "유저 이름이 없어요ㅠㅠ" : me.username}</p>
      <Link href="/">
        <a>로그인 페이지(SSR 적용 x)로 이동</a>
      </Link>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    context.store.dispatch({
      type: LOAD_USER_REQUEST,
    });

    context.store.dispatch(END);

    await context.store.sagaTask.toPromise();
  }
);

export default User;
