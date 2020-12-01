---
title: 'Development'
process_order: 4
---

## Development

Although this application was small in scale, there were some interesting challenges that made it a good way to exercise my coding muscles. The challenges can be broken down into different sections:

- Authentication
- Firebase Security
- Handling Display and Organization of User Todos and Todo Tasks
- Handling Display and Edits for Tasks and Keywords in a Single Component
- Using React's Context API to handle Firebase Interactions and State Management

#### Authentication

An essential part of the app is allowing users to create accounts and login to the application to view their To Do lists. Thankfully Firebase has authentication processes and functions to make this process easier. Two functions, `createUserWithEmailAndPassword` and `signInWithEmailAndPassword`, are available to check against Firebase and return data as a return value for apps to handle and direct the application forward. An essential piece is creating a listener that can wait for changes in authentication state from Firebase through the `onAuthStateChanged` function and call a function to update React state. The app can then depend on React state management to provide data as query arguments to retrieve more data from Firebase like todos and tasks.

```javascript
useEffect(() => {
  const unsubscribe = addAuthListener((user) => {
    const data = { user, isLoading: false };
    updateAuth(data);
  });

  return unsubscribe;
}, []);

const addAuthListener = (callback) => {
  const onChange = (user) => {
    if (user) {
      callback(user.uid);
    } else {
      callback(null);
    }
  };

  return firebase.auth().onAuthStateChanged(onChange);
};

const updateAuth = (user) => {
  dispatch({ type: UPDATE_AUTH, payload: user });
};
```

The code above is from the `AuthState.js` file that handles application-wide state. Using React Hooks and the useEffect hook, the `addAuthListener` function is setup on the component mounting and an unsubscribe function is returned is run when the component will unmount. In the meantime, changes to the Firebase authentication state will result in either data to be sent back from Firebase with authenticated user information or null, which is triggered on a `signOut` function call.

#### Firebase Security

A key part of using Firebase is taking advantage of the built-in security rules to control access to data. Cloud Firestore will block reads and writes by default. It's necessary to update the Rules on Cloud Firestore to allow an app to read and write using the database. The rules below allow an authenticated user to read and write to all the documents in the databases. The next rule updates the first rule by allowing an authenticated user update documents in the users collection only if the usersId in the collection document matches the authenticated user.

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow write: if request.auth.uid != null;
      allow read: if request.auth.uid != null;
    }

    match /users/{userId} {
    	allow write: if request.auth.uid == userId;
    }
  }
}
```

#### Handling the Display and Organization of User Todos and Todo Tasks

A major challenge of the app is displaying a user's todo lists and the tasks associated with each todo list. Because of the way that NoSQL databases like Firebase work, there's not a hard coded relationship between one table to another. In place of a hard coded relationship between tables, NoSQL uses logical relationships to associate data in one collection with another collection. To make it easy to maintain the correct association between todo lists and task items, each todo document has a `userId` field and each task document has a `todoId` and `userId` field.

When a user navigates to the To Do Lists page, the app loads todos and tasks based on the user's id. This is done by running a side effect through the useEffect hook to query Firebase and set data to an app-wide state using React Context API.

```javascript
useEffect(() => {
  const getTodos = async () => {
    if (user) {
      await getTodosByUserId(user);
      setIsSpinning(false);
    }
  };

  getTodos();
}, [user, getTodosByUserId]);

useEffect(() => {
  const getTasks = async () => {
    if (user) {
      await getTasksByUserId(user);
    }
  };

  getTasks();
}, [user, getTasksByUserId]);
```

#### Handling Display and Edits for Tasks and Keywords in a Single Component

A key benefit of using React and a component-based UI system is that the components can be flexible and conform to the context of the app to display different html or data. An example is making using of a local state boolean value called `editTitleTask` which indicates whether or not the user had clicked on a button to edit the title of a task. The user is either shown a pre-filled input field with an update button or the text of the title.

```javascript
{
  editTitleTask ? (
    <div className='flex w-full'>
      <form className='flex items-center w-full' onSubmit={handleEditUpdate}>
        <Input
          id='taskTitleId'
          type='text'
          placeholder='Enter a title'
          name='title'
          value={editTitle}
          onChange={handleTitleChange}
        />{' '}
        <Button type='submit' size='small'>
          Update
        </Button>
      </form>
    </div>
  ) : (
    <label
      htmlFor={id}
      className={`flex-initial ml-2  ${
        completed ? 'line-through text-gray-500' : 'text-black'
      }`}
    >
      {title}
    </label>
  );
}
```

#### Using React Context API to handle Firebase Interactions and State Management

This particular app doesn't have a lot of different pages or overly complex logic, however, it is still complex enough to make handling state by passing props up and down component trees very unappealing. A good solution to handle state app-wide is React Context API. This was done for auth, todos, tasks, and user state management. The way context works in this app is by sending a payload object with a dispatch function and the `useReducer` hook, which will handle setting state. The great thing about Context API is that code for state management can be setup away from components and brought in through the `useContext` hook as needed.

```javascript
const getTodosByUserId = useCallback(
  async (uid) => {
    try {
      const todosSnapshot = await firebase
        .firestore()
        .collection('todos')
        .orderBy('createdAt', 'asc')
        .where('userId', '==', uid)
        .get();

      const todos = todosSnapshot.docs.map((todo) => ({
        ...todo.data(),
        id: todo.id,
      }));

      dispatch({ type: GET_TODOS_BY_USER_ID, payload: todos });
    } catch (error) {
      console.log(error);
      dispatch({ type: TODOS_ERROR, payload: error.message });
    }
  },
  [dispatch]
);
```
