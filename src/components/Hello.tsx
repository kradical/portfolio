import * as React from "react";

interface IHelloProps {
  compiler: string;
  framework: string;
  author: string;
}

export const Hello = (props: IHelloProps) =>
  (
    <React.Fragment>
      <h1>Hello!</h1>
      <p>This site is made with {props.compiler} and {props.framework}.</p>
      <p>Work in progress</p>
      <small>Brought to you by {props.author}</small>
    </React.Fragment>
  );
