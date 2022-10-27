import React from 'react';
import { VStack, StackDivider, HStack, Text, Spacer, IconButton, Badge } from '@chakra-ui/react';
import { FaTrash } from "react-icons/fa";

const TodoList = ({todos, deleteTodo}) => { // 이 두 인자값은 app.js의 별표 안에 있는 attribute값 <TodoList **todos**={todos} ***deleteTodo***={deleteTodo} />
// const TodoList = ({todos, deleteTodo} = a) => {
  // const TodoList = (a) => {
  // const todos = a.todos;
  // const deleteTodo = a.deleteTodo;

  if(!todos.length) {
    return(
      <Badge colorScheme='cyan' p='4' borderRadius='lg'>
        No Todos, yay!!!
      </Badge>
    );
  }
  
  return (
    <VStack divider={<StackDivider />} borderWidth='2px' borderColor='gray.100' borderRadius='lg' padding='4' w='100%' maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw'}} alignItems='stretch'>
      {todos.map(todo => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton icon={<FaTrash />} isRound='true' onClick={() => deleteTodo(todo.id)} />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
