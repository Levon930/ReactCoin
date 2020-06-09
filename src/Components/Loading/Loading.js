import React from "react";
import "./Loading.css";
import PropTypes from "prop-types";

const Loading = ({ width, height }) => {
  return <div className="Loading" style={{ width, height }} />;
};
Loading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
Loading.defaultProps = {
  width: "28px",
  height: "28px",
};
export default Loading;
