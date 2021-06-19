import React from "react";
import styled from "styled-components/macro";
import Box from "../styles/shared/Box";
import { ReactComponent as Magnifier } from "../images/magnifier.svg";

const StyledBox = styled(Box)`
  background-color: white;
`;

const StyledTextInput = styled.input.attrs(({ value }) => ({
  type: "text",
  placeholder: "Search",
  value: value,
  autofocus: "true",
  "aria-label": "Search"
}))`
  height: 70%;
  background: #ffffff;
  border: 1px solid #e4ebef;
  box-sizing: border-box;
  border-radius: 3px;
  margin-left: 1vw;
  font: 1em montserrat;
  padding: 0 15px;
  outline: none;
  width: 120px;
  @media screen and (min-width: 500px) {
    margin-left: 10vw;
    width: 240px;
  }
`;

const CheckInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto 1vw auto auto;
  @media screen and (min-width: 500px) {
    margin-right: 10vw;
  }
`

const SubHeaderComponent = ({ searchString, changeHandler, showArchive, checkHandler }) => {
  return (
    <StyledBox as='div'>
      <StyledTextInput value={searchString} onChange={changeHandler} />
      <Magnifier style={{ position: "relative", left: -25 }} />
      <CheckInputContainer>
        <label for="archived">Show archived &nbsp;</label>
        <input onChange={checkHandler} checked={showArchive} style={{height: 25, width: 25, border: '1px solid lightgrey'}} type="checkbox" id="archived" name="archived" />
      </CheckInputContainer>
    </StyledBox>
  );
};

export default SubHeaderComponent;
