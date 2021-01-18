import React from "react";
import styled from "styled-components";

const HeaderBar = styled.div`
  position: static;
  width: 100%;
  height: 18vh;
  font-size: 5vh;
  left: 0px;
  top: 0px;
  color: #fff4f4;

  background: linear-gradient(
    271deg,
    #ffada8 2.37%,
    rgba(255, 118, 118, 0.85) 97.64%
  );
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  p {
    margin: 0px 0px;
  }

  .title_block {
    position: relative;
    left: 10px;
    top: 20%;
    display: block-inline;
    float: left
  }

  .title_text_light {
    font-family: Roboto;
    font-weight: 300;
    font-style: normal;
    line-height: 87%;
    float: left;
    /*display: inline-block;*/
  }

  .title_text_bold {
    font-family: Roboto;
    font-weight: 500;
    font-style: normal;
    line-height: 87%;
    float: left;
    /*display: inline-block;*/
  }
`;

function PageHeader() {
  return (
    <HeaderBar>
      <div className="title_block">
        <p className="title_text_bold">R</p>
        <p className="title_text_light">eview</p>
        <br />
        <p className="title_text_bold">R</p>
        <p className="title_text_light">ecommendation</p>
      </div>
    </HeaderBar>
  );
}

export default PageHeader;
