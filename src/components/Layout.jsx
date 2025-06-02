import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import PageContent from "../layout/PageContent";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <PageContent>{children}</PageContent>
      <Footer />
    </div>
  );
}

export default Layout;
