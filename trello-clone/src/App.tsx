import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
function App() {
  const onDragEnd = () => {

  }
  
  {/* 특정 영역에만 설정하기 (지금은 전체 적용됨) */}
  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId='one'>
            {(magic) => (
                
                <ul ref={magic.innerRef} {...magic.droppableProps}>
                  
                  <Draggable draggableId='first' index={0}>
                    {(magic) => 
                      <li 
                        ref={magic.innerRef} 
                        {...magic.draggableProps} 
                        //{...magic.dragHandleProps}
                      >
                        One!
                        <span {...magic.dragHandleProps}>🏇</span>
                      </li>}
                  </Draggable>
                  
                  <Draggable draggableId='second' index={1}>
                    {(magic) => 
                      <li 
                        ref={magic.innerRef} 
                        {...magic.draggableProps} 
                        {...magic.dragHandleProps}
                      >
                        Two!
                        <span>🏇</span>
                      </li>}
                  </Draggable>
                </ul>
              )
            }
          </Droppable>
        </div>
      </DragDropContext>
    
    
  );
}

export default App;
