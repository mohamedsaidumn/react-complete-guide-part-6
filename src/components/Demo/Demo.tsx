import React from "react";
import MyParagraph from "./MyParagraph";

interface DemoOutputProps {
  show: boolean;
}

const DemoOutput = (props: DemoOutputProps) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default DemoOutput;
