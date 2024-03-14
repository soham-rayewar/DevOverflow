import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  );
};

export default Layout;
