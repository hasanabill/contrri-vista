import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function ProfileStatistics({ imgUrl }) {
  return (
    <MDBCol md="12" xl="4" style={{ margin: "0.5rem", width: "299px" }}>
      <MDBCard style={{ borderRadius: "15px" }}>
        <MDBCardBody className="text-center">
          <div
            className="mt-3 mb-4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <MDBCardImage
              src={imgUrl}
              className="rounded-circle"
              fluid
              style={{ width: "100px" }}
            />
          </div>
          <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
          <MDBCardText className="text-muted mb-4">
            @Programmer <span className="mx-2">|</span>{" "}
            <a href="#!">mdbootstrap.com</a>
          </MDBCardText>
          <div className="mb-4 pb-2">
            <MDBBtn outline floating>
              <MDBIcon fab icon="facebook" size="lg" />
            </MDBBtn>
            <MDBBtn outline floating className="mx-1">
              <MDBIcon fab icon="twitter" size="lg" />
            </MDBBtn>
            <MDBBtn outline floating>
              <MDBIcon fab icon="skype" size="lg" />
            </MDBBtn>
          </div>

          <Link to="/chat">
            <MDBBtn rounded size="lg">
              message
            </MDBBtn>
          </Link>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
