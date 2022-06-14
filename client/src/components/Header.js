import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
        <MDBContainer>
          <MDBNavbarBrand style={{ color: "#606080" }}>TourInfo</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Header;
