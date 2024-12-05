import styled from "styled-components";
import { motion } from "motion/react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: linear-gradient(135deg, #e09, #d0e);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function Motions() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default Motions;
