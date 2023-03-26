import React, { ReactNode } from "react";

interface MyParagraphProps {
  children: ReactNode;
}

const MyParagraph = (props: MyParagraphProps) => {
  console.log("MyParagraph RUNNING");
  return <p>{props.children}</p>;
};

export default MyParagraph;
