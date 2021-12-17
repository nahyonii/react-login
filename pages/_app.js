import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import withReduxSaga from "next-redux-saga";

//redex
import wrapper from "../store/configureStore";

const StudyPlanner = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>React Login</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

StudyPlanner.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(StudyPlanner);
