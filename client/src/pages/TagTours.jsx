import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getToursByTag } from "../redux/features/tourSlice";
import { excerpt } from "../utility/index.js";

const TagTours = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { tagTours, loading } = useSelector((state) => ({ ...state.tour }));

  const { tag } = useParams();

  useEffect(() => {
    if (tag) {
      dispatch(getToursByTag(tag));
    }
  }, [tag]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div
      style={{
        margin: "auto",
        padding: "120px",
        maxWidth: "900px",
        alignContent: "center",
      }}
    >
      <h3 className="taxt-center">Tours with tag: {tag}</h3>
      <hr style={{ maxWidth: "570px" }} />
      {tagTours &&
        tagTours.map((item) => (
          <MDBCardGroup key={item._id}>
            <MDBCard style={{ maxWidth: "600px" }} className="mt-2">
              <MDBRow className="g-0">
                <MDBCol md="4">
                  <MDBCardImage
                    className="rounded"
                    src={item.imageFile}
                    alt={item.title}
                    fluid
                  />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody>
                    <MDBCardTitle className="text-start">
                      {item.title}
                    </MDBCardTitle>
                    <MDBCardText className="text-start">
                      {excerpt(item.discription, 40)}
                      {/* <div style={{ float: "left", marginTop: "-5px" }}> */}
                      <MDBBtn
                        size="sm"
                        rounded
                        color="info"
                        onClick={() => navigate(`/tour/${item._id}`)}
                      >
                        read more
                      </MDBBtn>
                      {/* </div> */}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCardGroup>
        ))}
    </div>
  );
};

export default TagTours;
