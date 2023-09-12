import React from "react";
import "./common.css";
import KendoButton from "../../components/button/KendoButton";
import DropZone from "../../components/dropzone/DropZone";
import Footer from "../../components/Footer/Footer";
const Stage3 = () => {
  return (
    <>
      <div className="heading">Lorem ipsum dolor sit amet consectetur.</div>
      <div className="sub-sub-heading" style={{ paddingTop: "1.5rem" }}>
        Lorem ipsum dolor sit amet consectetur. Ac tellus ut quis vel et egestas
        pharetra porta cursus. Arcu dui elit integer arcu{" "}
      </div>
      <div style={{ paddingTop: "1.5rem" }}>
        <KendoButton style={{padding: "0.75rem 1.25rem", textDecoration:'none', border:'none'}}>Download Sample </KendoButton>
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <DropZone />
      </div>
    </>
  );
};

export default Stage3;
