import React from "react";

interface DemoOutputProps {
  show: boolean;
}

const DemoOutput = (props: DemoOutputProps) => {
  console.log("DemoOutput RUNNING");
  return <p>{props.show ? "This is new!" : ""}</p>;
};

export default DemoOutput;
