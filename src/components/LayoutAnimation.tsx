import styled from "styled-components";
import { motion } from "motion/react";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Box = styled(motion.div)`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e09, #d0e);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  height: 100px;
  width: 100px;

  place-self: center;
  background-color: #fff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function LayoutAnimation() {
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => setClicked((prev) => !prev);

  return (
    <Wrapper onClick={toggleClick}>
      <Box>
        {!clicked && <Circle layoutId="circle" style={{ borderRadius: 50 }} />}
      </Box>
      <Box>
        {clicked && (
          <Circle layoutId="circle" style={{ borderRadius: 0, scale: 2 }} />
        )}
      </Box>
    </Wrapper>
  );
}

export default LayoutAnimation;
