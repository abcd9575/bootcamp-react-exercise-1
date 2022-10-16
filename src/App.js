import { VStack, IconButton, Box, Heading, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState, useEffect } from 'react';

function App() {
  //console.log('안녕')
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);

  useEffect(() => {
  }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.sort((todo) => {
      return todo.id !== id;
    });

    return newTodos
  }

  function addTodo(todo) {        // AddTodo.js 에서 참조된 함수정의부.
    console.log(todo)             // todos는 배열타입이다. 어떻게 todo를 집어넣냐. todo는 객체인데
    setTodos( (prevTodos) => [ ...prevTodos, todo ] )
  }

  useEffect( () => console.log(todos), [todos] )

  const {colorMode, toggleColorMode} = useColorMode();
  
  return (
    <VStack p='4'>
      <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode} />
      <Box>
        <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, cyan.400, purple.400, pink.400)' bgClip='text'>Todo Application</Heading>
      </Box>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
