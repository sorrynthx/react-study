import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Board from './Components/Board';
import { toDoState } from './routes/atoms';


const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100vw;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;
const Boards = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;



function App() {
  
  const [toDos, setToDos] = useRecoilState(toDoState);

  // Drag 끝났을때,
  const onDragEnd = (info: DropResult) => {
    
    // source -> destination
    console.log(info);
    const {destination, draggableId, source} = info;
    
    if (!destination) return;
    
    // 같은 보드 안에서 움직임
    if (destination?.droppableId === source.droppableId) {
      setToDos((allBoards) => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination?.index, 0, taskObj);
        return {
          ...allBoards,
          [source.droppableId]: boardCopy
        };
      });
    }

    // 다른 보드로 움직임
    if (destination?.droppableId !== source.droppableId) {
      setToDos((allBoard) => {
        const sourceBoard = [...allBoard[source.droppableId]];
        const taskObj = sourceBoard[source.index];
        const destinationBoard = [...allBoard[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, taskObj);
        return {
          ...allBoard,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        }
      });
    }

  };
  
  return (
    
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {
              Object.keys(toDos).map(
                boardId => 
                <Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />
              )
            }
          </Boards>
        </Wrapper>
      </DragDropContext>
    
    
  );
}

export default App;
