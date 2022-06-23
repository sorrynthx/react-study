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

const Svg = styled.svg`
  width: 200px;
  height: 200px;
  path {
    stroke: white;
    stroke-width: 2;
  }
`;
const svg = {
  start: {pathLength: 0, fill: 'rgba(255,255,255, 0)'},
  end: {
    fill: 'rgba(255,255,255, 1)',
    pathLength: 1,
  }
}

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
      //console.log(scrollY.get(), scrollYProgress.get());
    })
  }, [scrollY, scrollYProgress]);


  return (
      <Wrapper style={{background: gradient}}>
        
        
        <Svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 448 512"
        >
            <motion.path 
              variants={svg}
              initial={"start"}
              animate={"end"}
              transition={{
                default: {duration: 5},
                fill: {duration: 1, delay: 3}
              }}
              d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"
            />
        </Svg>
        
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

