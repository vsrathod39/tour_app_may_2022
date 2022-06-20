import React from "react";
import image from "../assets/page_not_found_404.png";

const PageNotFound = () => {
  return (
    <div
      style={{ margin: "100px auto", maxWidth: "450px", maxHeight: "450px" }}
    >
      <img
        style={{ width: "100%", height: "100%" }}
        src={image}
        alt="Not Found"
      />
    </div>
  );
};

export default PageNotFound;
