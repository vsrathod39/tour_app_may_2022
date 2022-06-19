import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBSpinner,
} from "mdb-react-ui-kit";
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createTour } from "../redux/features/tourSlice";

const initialState = {
  title: "",
  discription: "",
  //   name: "",
  //   creator: "",
  tags: [],
};

const AddEditTour = () => {
  const [tourData, setTourDate] = useState(initialState);
  const { error, loading } = useSelector((state) => ({ ...state.tour }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, discription, tags } = tourData;

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && discription && tags) {
      const updatedTourData = { ...tourData, name: user?.result?.name };
      dispatch(createTour({ updatedTourData, navigate, toast }));
      handleClear();
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTourDate({ ...tourData, [name]: value });
  };

  const handleAddTag = (tag) => {
    setTourDate({ ...tourData, tags: [...tourData.tags, tag] });
  };

  const handleDeletetag = (deleteTag) => {
    setTourDate({
      ...tourData,
      tags: tourData.tags.filter((tag) => tag !== deleteTag),
    });
  };

  const handleClear = () => {
    setTourDate({ title: "", discription: "", tags: [] });
  };

  return (
    <>
      <div
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "450px",
          alignContent: "center",
          marginTop: "120px",
        }}
        className="container"
      >
        <MDBCard alignment="center">
          <h5>Add Tour</h5>
          <MDBCardBody>
            <MDBValidation
              onSubmit={handleSubmit}
              className="row g-3"
              noValidate
            >
              <div className="col-md-12">
                <input
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  name="title"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid={"true"}
                  validation="Please provide title"
                />
              </div>
              <div className="col-md-12">
                <input
                  style={{ height: "100px" }}
                  type="text"
                  placeholder="Enter discription"
                  value={discription}
                  name="discription"
                  onChange={onInputChange}
                  className="form-control"
                  required
                  invalid={"true"}
                  validation="Please provide discription"
                />
              </div>
              <div className="col-md-12">
                <ChipInput
                  name="tags"
                  variant="outlined"
                  placeholder="Enter tag"
                  fullWidth
                  value={tags}
                  onAdd={(tag) => handleAddTag(tag)}
                  onDelete={(tag) => handleDeletetag(tag)}
                />
              </div>
              <div className="d-flex justify-content-start">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                    setTourDate({ ...tourData, imageFile: base64 })
                  }
                />
              </div>
              <div className="col-12">
                <MDBBtn style={{ width: "100%" }}>Submit</MDBBtn>
                <MDBBtn
                  style={{ width: "100%" }}
                  className="mt-2"
                  color="danger"
                  onClick={handleClear}
                >
                  Clear
                </MDBBtn>
              </div>
            </MDBValidation>
          </MDBCardBody>
        </MDBCard>
      </div>
    </>
  );
};

export default AddEditTour;
