import styled from "styled-components";
import {motion, useMotionValue, useTransform, useViewportScroll} from 'framer-motion'
import { RecoilBridge } from "recoil";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div) `
  height: 200vh;
  width: 100vw;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  align-items: center;
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


const Box4Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255, 0.2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;
const Box4 = styled(motion.div)`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const box4Variants = {
  hover: { scale: 1.5, rotateZ: 90},
  click: { scale: 1, borderRadius: "100px" },
  drag: {backgroundColor: "rgb(46,204,113)", transition: {duration: 2} }
};

const Box5 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Box6 = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]); // 모션값, 인풋, 아웃풋
  useEffect(() => {
    //x.onChange(() => console.log(x.get()));
    //scale.onChange(() => console.log(scale.get()));
  }, [x]);
  const gradient = useTransform(
    x, 
    [-800, 0, 800], 
    [
      'linear-gradient(135deg,rgb(0,210,238),rgb(0,83,238))',
      'linear-gradient(135deg,rgb(238,0,153), rgb(221,0,238))',
      'linear-gradient(135deg,rgb(0,238,155),rgb(238,178,0))'
    ]
  );
  const {scrollY, scrollYProgress} = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  
  useEffect(() => {
    scrollY.onChange(() => {
      console.log(scrollY.get(), scrollYProgress.get());
    })
  }, [scrollY, scrollYProgress]);


  return (
      <Wrapper style={{background: gradient}}>
        <Box5
          drag="x"
          dragSnapToOrigin
          style={{ x, rotateZ }}
        />
        
        <Box4Wrapper ref={biggerBoxRef}>
          <Box4
            drag
            dragSnapToOrigin={true}
            dragElastic={0.5}
            dragConstraints={biggerBoxRef}
            variants={box4Variants}
            whileHover="hover"
            whileDrag="drag"
            whileTap="click"
          />
        </Box4Wrapper>

        <Box6
          drag="x"
          dragSnapToOrigin
          style={{ scale: scale }}
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

