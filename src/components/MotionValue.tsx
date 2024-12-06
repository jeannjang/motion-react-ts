import styled, { useTheme } from "styled-components";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
  useScroll,
} from "motion/react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  background: #fbd4ff;
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function MotionValue() {
  const theme = useTheme();
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-300, 0, 300], [-360, 0, 360]);
  useMotionValueEvent(x, "change", (latest) =>
    console.log("rotateZ : ", latest)
  );
  const gradient = useTransform(
    x,
    [-300, 0, 300],
    ["#ef63fc", theme.bgColor, "#a556f4"]
  );
  const { scrollYProgress } = useScroll();
  const scaleScroll = useTransform(scrollYProgress, [0, 1], [0.5, 2]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, rotateZ, scale: scaleScroll }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default MotionValue;
