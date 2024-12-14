import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nulla ullam
        ab deleniti velit natus laudantium officia quos earum nihil odit
        voluptas nesciunt, dignissimos ipsam rem iusto saepe eos ad.
      </p>
    </React.Fragment>
  );
};

export default Child;
