import styled from "styled-components";

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FillerProgressBar = styled.div`
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  height: 20px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #333;
`;
