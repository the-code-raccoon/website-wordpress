import styled from "styled-components";

interface WorkContainerI {
  bgcolor: string;
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 2px solid red;
`;

export const WorkContainer = styled.div<WorkContainerI>`
  border: 2px solid green;
  width: 40%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.bgcolor};
`;

export const WorkLogo = styled.img`
  position: relative;
`;
