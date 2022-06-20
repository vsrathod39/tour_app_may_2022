import React from "react";
import { MDBPagination, MDBPaginationItem, MDBBtn } from "mdb-react-ui-kit";

const Pagination = ({
  setCorrentPage,
  correntPage,
  numberOfPages,
  dispatch,
}) => {
  const renderPagination = () => {
    if (correntPage === numberOfPages && correntPage === 1) {
      return null;
    }
    if (correntPage === 1) {
      return (
        <MDBPagination center className="mb-0">
          <MDBPaginationItem>
            <p className="fw-bold mt-1">1</p>
          </MDBPaginationItem>
          <MDBPaginationItem>
            <MDBBtn
              rounded
              className="mx-2"
              onClick={() => dispatch(setCorrentPage(correntPage + 1))}
            >
              Next
            </MDBBtn>
          </MDBPaginationItem>
        </MDBPagination>
      );
    } else {
      if (correntPage !== 1) {
        return (
          <MDBPagination center className="mb-0">
            <MDBPaginationItem>
              <MDBBtn
                rounded
                className="mx-2"
                onClick={() => dispatch(setCorrentPage(correntPage + 1))}
              >
                Prev
              </MDBBtn>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <p className="fw-bold mt-1">1</p>
            </MDBPaginationItem>
          </MDBPagination>
        );
      }
    }
  };

  return <div></div>;
};

export default Pagination;
