import styled from "styled-components";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 5px;
  div:nth-child(1),
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  height: 100px;
  background: linear-gradient(135deg, #e09, #d0e);
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  &.openBox {
    width: 200px;
    height: 100px;
  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlayVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function LayoutOverlay() {
  const [id, setId] = useState<null | string>(null);

  return (
    <Wrapper>
      <Grid>
        {[1, 2, 3, 4].map((n) => (
          <Box onClick={() => setId(n + "")} key={n} layoutId={n + ""} />
        ))}
      </Grid>
      <AnimatePresence>
        {id && (
          <Overlay
            onClick={() => setId(null)}
            variants={overlayVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Box className="openBox" layoutId={id} />
          </Overlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

export default LayoutOverlay;
