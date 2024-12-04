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
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #e09, #d0e);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    rotateZ: 360,
    transition: { duration: 0.5, type: "spring", stiffness: 260 },
  },
};

function Motion() {
  return (
    <Wrapper>
      <Box variants={Variants} initial="initial" animate="animate" />
    </Wrapper>
  );
}

export default Motion;
