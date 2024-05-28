import React from "react";

function Container(props: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`container p-8 mx-auto xl:px-0 ${props?.className}`}>
      {props.children}
    </div>
  );
}

export default Container;
