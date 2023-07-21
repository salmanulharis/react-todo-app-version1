# React To Do App

<br>

Create react app using the following command

    npx create-react-app .

Install package `uuid` to create unique id's

    npm i uuid

Using fontoawesome for icons

    npm i --save @fortawesome/fontawesome-svg-core

Free icons styles

    npm i --save @fortawesome/free-solid-svg-icons
    npm i --save @fortawesome/free-regular-svg-icons

## Code and it break down

    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));

The code you provided is a JavaScript expression that updates an array of todo items based on the given `id`. Let's break it down step by step:

1. `todos.map(todo => ...)` starts by iterating over each element in the `todos` array using the `map` function. It creates a new array where each element is transformed based on the provided callback function.

2. `todo.id === id ? {...todo, completed: !todo.completed} : todo` is the callback function used in the `map` operation. It checks if the `id` of the current `todo` object matches the given `id`. If they match, it creates a new object using the spread syntax (`{...todo}`) to copy all the properties of the original `todo` object. It then sets the `completed` property to the opposite of its current value by using the `!` (logical NOT) operator. If the `id` doesn't match, it returns the original `todo` object unchanged.

3. Finally, the outermost part of the expression `setTodos(...)` sets the updated array of todos as the new value of the `todos` state variable. The exact implementation of `setTodos` depends on the context in which this code is used, but typically it refers to a state update function provided by a state management library like React's `useState` hook.

In summary, the code updates the `completed` property of a todo item in an array by toggling its value based on the `id` provided.

<br>

    setTodos(todos.filter(todo => todo.id !== id));

The code you provided is a JavaScript expression that removes a todo item from an array based on the given `id`. Let's break it down step by step:

1. `todos.filter(todo => ...)` starts by iterating over each element in the `todos` array using the `filter` function. It creates a new array that only includes elements for which the provided callback function returns `true`.

2. `todo.id !== id` is the callback function used in the `filter` operation. It checks if the `id` of the current `todo` object does not match the given `id`. If the `id` does not match, it returns `true`, indicating that the current `todo` object should be included in the filtered array. If the `id` does match, it returns `false`, indicating that the current `todo` object should be excluded from the filtered array.

3. Finally, the outermost part of the expression `setTodos(...)` sets the filtered array of todos as the new value of the `todos` state variable. The exact implementation of `setTodos` depends on the context in which this code is used, but typically it refers to a state update function provided by a state management library like React's `useState` hook.

In summary, the code removes a todo item from an array by filtering out the object that has an `id` matching the given `id`.

<br>
