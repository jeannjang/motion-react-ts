import styled from "styled-components";
import { motion } from "motion/react";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ParrentBox = styled(motion.div)`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbd4ff;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background: #f158ff;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: 180 },
  click: { scale: 0.5, rotateZ: -180, borderRadius: "50%" },
  drag: { background: "#fff", transition: { duration: 1 } },
};

function Gestures() {
  const parrentBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <ParrentBox ref={parrentBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={parrentBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        />
      </ParrentBox>
    </Wrapper>
  );
}

export default Gestures;
