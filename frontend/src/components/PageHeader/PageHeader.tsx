import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import PageNavDivider from "../../images/PageNavDivider.svg";

const HeaderBar = styled.div`
  position: relative;
  width: 100vw;
  height: 18vh;
  font-size: 5vh;
  left: 0px;
  top: 0px;
  color: #fff4f4;

  background: linear-gradient(
    271deg,
    rgba(0, 117, 110, 0.85) 2.37%,
    #120663 97.63%
  );
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  p {
    margin: 0px 0px;
  }

  .title-block {
    position: relative;
    left: 10px;
    top: 20%;
    float: left;
  }

  .title-text-light {
    font-family: Roboto;
    font-weight: 300;
    font-style: normal;
    line-height: 87%;
    float: left;
  }

  .title-text-bold {
    font-family: Roboto;
    font-weight: 500;
    font-style: normal;
    line-height: 87%;
    float: left;
  }
`;

const Navbar = styled.div`
  position: absolute;
  bottom: 5%;
  height: 20%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  .nav-button,
  .indicator,
  .indicator p {
    transition-property: width, background-color, color;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
  }

  .nav-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;

    width: 30%;
    height: 100%;
    font-size: 35%;
    background-color: transparent;
    border: none;
    outline: none;
    color: white;

    :hover {
      cursor: pointer;
    }
  }

  .nav-button .indicator {
    display: flex;
    justify-content: center;
    align-items: center;

    height: fit-content;
    width: fit-content;
    padding: 2px 1em;

    p {
      color: white;
      white-space: nowrap;
    }
  }

  .nav-button .deactivated {
    width: fit-content;
    border-radius: 1em;
  }

  .nav-button .activated {
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 36.6%,
      #ffffff 59.26%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 0;
    p {
      color: #000000;
    }
  }

  .nav-button:hover .deactivated {
    width: fit-content;
    background-color: rgba(255, 255, 255, 0.4);
    p {
      color: #ffffff;
    }
  }

  .nav-button:active .deactivated {
    width: 0%;
    border-radius: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 36.6%,
      #ffffff 59.26%,
      rgba(255, 255, 255, 0) 100%
    );
    p {
      color: white;
    }
  }
`;

function PageHeader() {
  let history = useHistory();
  let location = useLocation();

  const onReviewPageClick = () => {
    if (location.pathname !== "/" && location.pathname !== "/review")
      history.push("/review");
  };

  const onSingleSumPageClick = () => {
    if (location.pathname !== "/single-sum") history.push("/single-sum");
  };

  const onMultiSumPageClick = () => {
    if (location.pathname !== "/multi-sum") history.push("/multi-sum");
  };

  return (
    <HeaderBar>
      <div className="title-block">
        <p className="title-text-bold">R</p>
        <p className="title-text-light">oboTiPS</p>
        <br />
        <p className="title-text-light" style={{ fontSize: "2vh" }}>
          딥러닝 AI가 추천해주는 리뷰 작성 도우미
        </p>
      </div>
      <Navbar>
        <div className="nav-button" onClick={onReviewPageClick}>
          <div
            className={
              location.pathname === "/" || location.pathname === "/review"
                ? "indicator activated"
                : "indicator deactivated"
            }
          >
            <p>리뷰 작성</p>
          </div>
        </div>
        <img src={PageNavDivider} height="90%" width="2px" alt="divider" />
        <div className="nav-button" onClick={onSingleSumPageClick}>
          <div
            className={
              location.pathname === "/single-sum"
                ? "indicator activated"
                : "indicator deactivated"
            }
          >
            <p>단일 문서 요약</p>
          </div>
        </div>
        <img src={PageNavDivider} height="90%" width="2px" alt="divider" />
        <div className="nav-button" onClick={onMultiSumPageClick}>
          <div
            className={
              location.pathname === "/multi-sum"
                ? "indicator activated"
                : "indicator deactivated"
            }
          >
            <p>다중 문서 요약</p>
          </div>
        </div>
      </Navbar>
    </HeaderBar>
  );
}

export default PageHeader;
