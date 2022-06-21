import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { excerpt } from "../utility/index.js";

const RelatedTour = ({ RelatedTour, tourId }) => {
  return (
    <>
      {RelatedTour && RelatedTour.length > 0 && (
        <>
          {RelatedTour.length > 1 && <h4>Related Tours</h4>}
          <MDBRow className="g-4 row-cols-1 row-cols-md-3">
            {RelatedTour.filter((item) => item._id !== tourId)
              .splice(0, 3)
              .map((item) => (
                <MDBCol className="" key={item._id}>
                  <MDBCard>
                    <Link to={`/tour/${item._id}`}>
                      <MDBCardImage
                        src={item.imageFile}
                        alt={item.title}
                        position="top"
                      />
                    </Link>
                    <span className="text-start tag-card">
                      {item.tags.map((tag, index) => (
                        <Link key={index} to={`/tours/tag${tag}`}>
                          #{tag}
                        </Link>
                      ))}
                    </span>
                    <MDBCardBody>
                      <MDBCardTitle className="text-start">
                        {item.title}
                      </MDBCardTitle>
                      <MDBCardText className="text-start">
                        {excerpt(item.discription, 45)}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              ))}
          </MDBRow>
        </>
      )}
    </>
  );
};

export default RelatedTour;
