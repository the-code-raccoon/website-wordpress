import styled from "styled-components";

interface WorkContainerI {
  bgcolor: string;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid red;
  width: 100%;
`;

export const WorkContainer = styled.div<WorkContainerI>`
  border: 2px solid green;
  width: 400px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgcolor};
`;

export const WorkLogo = styled.img`
  position: relative;
  height: 100px;
  width: auto;
  max-width: 350px;
`;
