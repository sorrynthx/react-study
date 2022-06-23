import styled from "styled-components";
import {motion} from 'framer-motion'
import { RecoilBridge } from "recoil";

const Wrapper = styled.div `
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Box2 = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const box2Vars = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};
const circleVariants  = {
  start: {
    opacity: 0,
    y: 10,
  },
  end: {
    opacity: 1,
    y: 0,
  } 
};


const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const myVars = {
  start: {scale: 0},
  end: {
        scale: 1, 
        rotateZ: 360, 
        transition: {type: "spring", bounce: 0.5}
      }
}

const Box3 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const box3Variants = {
  hover: { scale: 1.5, rotateZ: 90},
  click: { scale: 1, borderRadius: "100px" }
};

const Box4 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const box4Variants = {
  hover: { scale: 1.5, rotateZ: 90},
  click: { scale: 1, borderRadius: "100px" },
  drag: {backgroundColor: "rgb(46,204,113)", transition: {duration: 2} }
};

function App() {
    return (
      <Wrapper>
        
        <Box4
          drag
          variants={box4Variants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="click"
        />

        <Box3 
          variants={box3Variants}
          whileHover="hover"
          whileTap="click"
        />


        <Box2 variants={box2Vars} initial="start" animate="end">
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
        </Box2>
                
        <Box 
          variants={myVars} 
          initial="start"
          animate="end"
        />
      </Wrapper>
  );
}

export default App;

