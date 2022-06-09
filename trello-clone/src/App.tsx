import {DragDropContext, Draggable, Droppable, DropResult} from 'react-beautiful-dnd';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { toDoState } from './routes/atoms';


const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;

`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;



function App() {
  
  const [toDos, setToDos] = useRecoilState(toDoState);

  // Drag 끝났을때,
  const onDragEnd = ({draggableId, destination, source}: DropResult) => {
    
    // 목적지 (이동) 없을 때,
    if (!destination) return;

    // 목적지 (이동) 있을 때,
    setToDos(oldToDos => {
      // 원본 변경하지 않고 복사해서 사용
      const toDosCopy = [...oldToDos];

      console.log("Delete item on", source.index);
      console.log(toDosCopy);

      // 1. source.index 아이템 삭제
      toDosCopy.splice(source.index, 1);

      console.log("Delete item");
      console.log(toDosCopy);

      // 2. destination.index 아이템에 넣기
      toDosCopy.splice(destination?.index, 0, draggableId);

      console.log("Put back", draggableId, "on", destination.index);
      console.log(toDosCopy);

      return toDosCopy;
    })
  };
  
  return (
    
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            <Droppable droppableId='one'>
              
              {(magic) => (    
                  <Board ref={magic.innerRef} {...magic.droppableProps}>  
                    {toDos.map((toDo, index) => (
                        <Draggable key={toDo} draggableId={toDo} index={index}>
                          {(magic) => 
                            <Card 
                              ref={magic.innerRef} 
                              {...magic.draggableProps} 
                              {...magic.dragHandleProps}
                            >
                              {toDo} <span {...magic.dragHandleProps}>🏇</span>
                            </Card>}
                        </Draggable>
                      )
                    )}
                    {/* deoppable이 끝날때까지 모양 잡아줌 */}
                    {magic.placeholder}
                  </Board>
                )}
            </Droppable>
          </Boards>
        </Wrapper>
      </DragDropContext>
    
    
  );
}

export default App;
