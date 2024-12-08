import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const BoxContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #e09, #d0e);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #e09;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #d0e;
  }
`;

const boxVariants = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7 },
  },
  exit: {
    x: -500,
    opacity: 0,
    scale: 0,
    rotateY: 90,
    transition: { duration: 0.7 },
  },
};

function Slider() {
  const [visible, setVisible] = useState(1);
  const next = () => setVisible((prev) => (prev === 10 ? 1 : prev + 1));
  const before = () => setVisible((prev) => (prev === 1 ? 10 : prev - 1));
  return (
    <Wrapper>
      <BoxContainer>
        <AnimatePresence>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
            (i) =>
              i === visible && (
                <Box
                  variants={boxVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  key={i}
                >
                  {i}
                </Box>
              )
          )}
        </AnimatePresence>
      </BoxContainer>
      <ButtonContainer>
        <Button onClick={before}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </ButtonContainer>
    </Wrapper>
  );
}

export default Slider;
