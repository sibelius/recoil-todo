import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from './TodoAtoms';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import { Text } from 'rebass';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

const App = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      <Text mt='10px' mb='10px'>Todos</Text>
      {todoList.map((todoItem) => (
        <TodoItem item={todoItem} />
      ))}
    </>
  );
}

export default App;
