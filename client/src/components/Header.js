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
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../redux/features/authSlice";

const Header = () => {
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <div>
      <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
        <MDBContainer>
          <MDBNavbarBrand href="/" style={{ color: "#606080" }}>
            TourInfo
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toogle navigation"
            onClick={() => setShow(!show)}
          >
            <MDBIcon icon="bars" fas style={{ color: "#606080" }} />
          </MDBNavbarToggler>
          <MDBCollapse show={show} navbar>
            <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
              {user?.result?._id && (
                <h5 style={{ marginRight: "30px", marginTop: "17px" }}>
                  Logged in as: {user?.result?.name}
                </h5>
              )}
              <MDBNavbarItem>
                <MDBNavbarLink href="/">
                  <p className="header-text">Home</p>
                </MDBNavbarLink>
              </MDBNavbarItem>
              {user?.result?._id && (
                <>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/addtour">
                      <p className="header-text">Add Tour</p>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                  <MDBNavbarItem>
                    <MDBNavbarLink href="/dashboard">
                      <p className="header-text">Dashbord</p>
                    </MDBNavbarLink>
                  </MDBNavbarItem>
                </>
              )}
              {user?.result?._id ? (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/login">
                    <p className="header-text" onClick={handleLogout}>
                      Logout
                    </p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ) : (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/login">
                    <p className="header-text">Login</p>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default Header;
