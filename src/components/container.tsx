import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return <div className='mx-auto my-0 px-[20px] max-w-2xl'>{children}</div>;
};

export default Container;
