import { VStack, IconButton, Box, Heading, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from "react-icons/fa";
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState, useEffect } from 'react';
import { sortByTreeOrder } from 'framer-motion/types/render/utils/animation';

// const a = {
//     "key": 'value',
//     "key": 'value',
//     "key": 'value',
//   }

// const b = [
//   {
//     "key": 'value',
//     "key": 'value',
//     "key": 'value',
//   },
//   {
//     "key": 'value',
//     "key": 'value',
//     "key": 'value',
//   },
//   {
//     "key": 'value',
//   }
// ]
// function useDebugValue<T>(value: T, format?: (value: T) => any): void;
/*
  useDebugValue(123) => useDebugValue<int>
    useDebugValue(123, undefined) => useDebugValue<int>
  
  useDebugValue({"a":"a"}, ()=> { return null;} ) => useDebugValue<object>
  useDebugValue([{"a":"a"}], ()=> { return null;} ) => useDebugValue<object>
  useDebugValue('123', ()=> { return 'abc';} ) => useDebugValue<String>

  useDebugValue(123, (value: String) => {return value +1;}) => useDebugValue<int> (X)
  useDebugValue(123, (value) => {return value +1;}) => useDebugValue<int> (O)
  useDebugValue(123, function (){
    
  }) => useDebugValue<int> (O)
const hello = function(){
  return 1;
};
  useDebugValue(123, hello ) => useDebugValue<int> (O)
  useDebugValue(123, hello()) => useDebugValue<int> (X) hello의 return
  useDebugValue(123, 1) => useDebugValue<int>
 */

function App() {
  //console.log('안녕')
  const [abc, setAbc] = useState('') //제네릭은 너가 넣어줄 타입이 뭔지 모르겠어. 그러니까, 니가 넣어준 변수에 타입을 따라갈게. 근데 경우에 따라 다르게하고싶어
                                    // function useState<S>(initialState: S | (() => S)): // 일단 니가 쳐넣은게 S라고 치고 S가 들어온 초기값의 형태로 따라갈게 혹은(|) 함수실행의 결과의 타입으로 정하자.
  const [todos, setTodos] = useState(() => JSON.parse(localStorage.getItem('todos')) || []);  // << 이거 풀어쓴게 아래 3줄
  // const TODO = useState(() => JSON.parse(localStorage.getItem('todos')) || []);
  // const todos = TODO[0]
  // const setTodos = TODO[1]


  useEffect(() => {
    
  }, [todos]);

  function deleteTodo(id) {    
    // filter함수는 배열에만쓸수있는 함수중 하나. 그리고 map(). map()은 .select (a => a.어쩌구) // filter()은 .where(a=>a.어쩌구)와 같다.
    // const newTodos = todos.filter((todo) => {  
    //   return todo.id !== id;
    // });
    todos.sort( (a,b) => a - b);
    todos.sort( (a,b) => b - a);

    const newTodos = todos.filter(todo => todo.id !== id); // 원래코드
    //const newTodos = todos.Where(todo => todo.id !== id);
    // setTodos( newTodos )
    setTodos( [...newTodos] )
  }
  // useEffect( () => console.log(todos), [todos] ) // 


  function addTodo(todo) {        // AddTodo.js 에서 참조된 함수정의부.
    //console.log(todo)             // todos는 배열타입이다. 어떻게 todo를 집어넣냐. todo는 객체인데
    setTodos( (prevTodos) =>  [ ...prevTodos, todo ] ) // ... 배열이거나 json애들을 까서 넣어준다. 아래 예시코드 갓기훈 아래 a는 const니까 변경 불가. 
    
    // ==의 문제 >> 자바스크립트에서 1=='1'은 true다 형식체크까지 하려면 === 써야한다. 즉 1==='1'는 false
    const a = {
      "a":"a",
      "b":"b"
    }
    
    const b = {
      ...a,
      "c":"c"      
    }
    const c = {
      ...b,
      // ...b는 a:a, b:b, c:c인데 
      "a": "A",// 덮어쓰기
      // a:A, b:b, c:c가 됨.
    }
  }

  //useEffect( () => console.log(todos), [todos] )

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
