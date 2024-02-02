import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35vh;
`;

export const Rope = styled.div`
  width: 10px;
  height: 70px;
  background-color: black;
`;

export const Head = styled.div`
  width: 70px;
  height: 70px;
  border: solid black 10px;
  border-radius: 100px;
`;

export const Body = styled.div`
  width: 10px;
  height: 70px;
  background-color: black;
`;

export const LeftArm = styled.div`
  width: 10px;
  height: 70px;
  background-color: black;
  position: absolute;
  transform: rotate(-45deg);
  margin-top: 130px;
  margin-left: 50px;
`;

export const RightArm = styled.div`
  width: 10px;
  height: 70px;
  background-color: black;
  position: absolute;
  transform: rotate(45deg);
  margin-top: 130px;
  margin-right: 50px;
`;

export const LeftLeg = styled.div`
  width: 10px;
  height: 70px;
  background-color: black;
  position: absolute;
  transform: rotate(-45deg);
  margin-top: 200px;
  margin-left: 50px;
`;

export const RightLeg = styled.div`
  width: 10px;
  height: 70px;
  background-color: black;
  position: absolute;
  transform: rotate(45deg);
  margin-top: 200px;
  margin-right: 50px;
`;

export const LeftFoot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: black;
  position: absolute;
  margin-top: 180px;
  margin-right: 100px;
`;

export const RightFoot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: black;
  position: absolute;
  margin-top: 180px;
  margin-left: 100px;
`;

export const Eye = styled.div`
  font-size: 25px;
  margin-top: 80px;
  position: absolute;
`;

export const Mouth = styled.div`
  width: 20px;
  height: 5px;
  margin-top: 115px;
  position: absolute;
  background-color: black;
`;
