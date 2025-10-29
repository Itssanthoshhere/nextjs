import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>NavBar</p>
      {children}
    </div>
  );
};

export default Layout;
