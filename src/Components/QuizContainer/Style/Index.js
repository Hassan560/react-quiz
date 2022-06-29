import styled from "styled-components";

export const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 10px;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  font-size: 18px;
`;
export const Text = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 60%;
  box-shadow: 0px 0px 1px 0px rgb(0 0 0 / 75%);
  padding: 10px;
  border-radius: 5px;
  margin: 5rem auto;
  @media only screen and (max-width: 900px) {
    width: 95%;
    margin: 1rem auto;
  }
`;
