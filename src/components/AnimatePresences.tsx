import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const BoxContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #e09, #d0e);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
`;

const Button = styled.button`
  color: #fff;
  background: linear-gradient(135deg, #d0e, #e09);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const boxVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function AnimatePresences() {
  const [visible, setVisible] = useState(false);
  const handleToggle = () => setVisible((prev) => !prev);

  return (
    <Wrapper>
      <Button onClick={handleToggle}>I am here</Button>
      <BoxContainer>
        <AnimatePresence>
          {visible && (
            <Box
              variants={boxVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          )}
        </AnimatePresence>
      </BoxContainer>
    </Wrapper>
  );
}

export default AnimatePresences;
