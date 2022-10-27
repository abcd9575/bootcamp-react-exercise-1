import React, { useState } from 'react';
import { HStack, Input, Button, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

const AddTodo = ({addTodo}) => { //AddTodo는 'Todo' 추가해주는 함수, addTodo라는 객체를 param으로 받는다(x). // 갓기훈풀이 아래 3줄
// const AddTodo = (params) => {       // App.js에서 <AddTodo addTodo={addTodo} />
//   const addTodo = params.addTodo //JS

  const [content, setContent] = useState(''); // useState는 return 값이 배열인데 [값, 함수]로 반환. '함수'인 setContent는 'content'의 값을 변경하기 위함
  const toast = useToast();   // content가 '' 값 이면 오류 뿌려주는거.

  function handleSubmit(e) {  // submit이 일어나면 (버튼눌리면 작동하는 함수)
    e.preventDefault();       // e는 event인거같은데 뭔지몰라.

    //console.log(content)      
    if(!content) {            // !content 이게 왠지 undefined? 검사해주는것인듯. 혹은 null?
      toast({
        title: 'No content',
        status: 'error',
        duration: 2000,
        isClosable: true
      });

      return;
    }

    const todo = {
      id: nanoid(),         // id 랜덤으로 뿌려주는함수인듯
      body: content         // input에 있던 문자열 대입
    };
    addTodo(todo);          // 이게 App.js에 정의된 addTodo함수 호출 // 아 여따 써놨네 ㅡㅡ 
    //console.log(todo)
    setContent('')
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input variant='filled' placeholder='Learning React' value={content} onChange={(event) => {   // 변경이 있을때마다, event에 값을 받고
          const {target : {value}} = event                    // event 는 {target : {value}}구조로 받을수 있단다.
          setContent(value)                                   //https://velog.io/@gyrbs22/React-React-%EC%A4%91%EA%B8%89-hook-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0-1
          }} />
        <Button type='submit' colorScheme='cyan' px='8'>Add Todo</Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
