import styled from "styled-components";
import {AnimatePresence, motion, useMotionValue, useTransform, useViewportScroll} from 'framer-motion'
import {RecoilBridge} from "recoil";
import {useEffect, useRef, useState} from "react";

const Wrapper = styled(motion.div)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #da2faf;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const box = {
  entry: (goBack:boolean) => {
    return {
      x: goBack ? -500 : 500,
      opacity: 0,
      scale: 0,
    }
  },
  center: {
    x: 0,  
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (goBack: boolean) => (
    { 
      x: goBack ? 500 : -500, 
      opacity: 0, 
      scale: 0, 
      transition: { duration: 1 } }
    ),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);
  const nextPlease = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    setBack(false);
  }
  const prevPlease = () => {
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    setBack(true);
  }

    return (
      
      <Wrapper> 
          <AnimatePresence custom={back}> 
              <Box
                custom={back}
                variants={box}
                initial="entry"
                animate="center"
                exit="exit"
                key={visible}
              >
                {visible}
              </Box>
            
        </AnimatePresence>
        <button onClick={nextPlease}>next</button>
        <button onClick={prevPlease}>prev</button>
    </Wrapper>
    );
}

export default App;
