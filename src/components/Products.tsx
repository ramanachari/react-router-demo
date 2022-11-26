import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Products"></input>
      </div>
      <nav>
        <Link to="/products/featured">Featured</Link>
        {/* relative paths doesn't start with forward slash(/) */}
        <Link to="new-products">New</Link>
      </nav>
      {/* Finding routes that matching in child components in route */}
      <Outlet />
    </>
  );
};
