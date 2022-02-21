---
title: 'Development'
process_order: 5
---

## Development

This project presented multiple challenges including integrating new versions of existing technologies, such as [Firebase](https://firebase.google.com/) and [React Router](https://reactrouter.com/docs/en/v6). The project also accessed user data and created personalized visualizations for each user making use of the [React Google Charts](https://www.react-google-charts.com/) library. Finally, the entire project was created using React and incorporated the latest features of React such as hooks and context.

#### Firebase

One of the first steps taken was to prepare Firebase for use in the project. For this project, it was possible to integrate [Firebase Web v9](https://firebase.google.com/docs/web/setup) into the project, which offered several improvements over the previous v8. The main selling point of [Firebase Web v9](https://firebase.google.com/docs/web/learn-more) is it's modular approach to development and use of functions to execute different features of available services. This introduces a large degree of flexibility into the development process and results in smaller bundled code into production. For this project, the services used included [Firebase Authentication](https://firebase.google.com/docs/auth) and the [Cloud Firestore](https://firebase.google.com/docs/firestore), a NoSQL database.

The modular approach in Firebase Web v9 helped to streamline the process of adding and consuming services from Firebase. For example, the login process made use of the Firebase Auth service and required two functions, first the `getAuth()` function to retrieve the FirebaseAuth object for the project, and then the `signInWithEmailAndPassword()` function to sign in the user. The simplified code for the `useLogin` custom hooks below demonstrates this process.

```javascript
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = () => {
  const auth = getAuth();

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (!isCancelled) {
        // set an error message
      }
    }
  };

  return { login };
};
```

Firebase Firestore works similarly to the Authentication process. To work with Firestore, it's necessary to first import the functions needed to connect to the Firestore service and perform queries on it. This process is initialized with the `getFirestore()` function, then to use the various functions available to perform different queries, such as `doc()` and `getDoc()`, shown below. This process highlights the strengths of the v9 Firebase Web SDK, which only requires importing the specific functions needed instead of an entire SDK.

```javascript
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore();

const loadProfile = useCallback(
  async (docId) => {
    const docRef = doc(db, 'users', docId);
    try {
      const docSnap = await getDoc(docRef);
      const docData = docSnap.data();
      // do something with the document data
    } catch (error) {
      // set an error message
    }
  },
  [dispatch]
);
```

#### React Router

Another important part of the project was React Router, which had also recently been updated to version 6. This version introduced some important changes to the components used to creating routes and their features. First, there is a new `<Routes>` component, which replaced the function of the `<Switch>` component. The Routes component also simplified the process of selecting the preferred route, based on the best match instead of being processed from route order from top to bottom. React Router also supports route nesting, allowing sub-routes to be accepted as children of a parent Route. This results in a more logical structure for the routes in a single location.

```javascript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

return (
  <div className='app'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/knowledge-base' element={<KnowledgeBase />} />
        <Route path='/poll' element={<Poll />}>
          <Route path=':weekNumber' element={<Poll />} />
        </Route>
        <Route path='/quiz' element={<Quiz />}>
          <Route path=':weekNumber' element={<Quiz />} />
        </Route>
      </Routes>
    </Router>
  </div>
);
```

Version 6 of React Router also introduces several useful hooks that offer programmatic functionality. These hooks include existing features like `useParams` as well as new hooks like `useNavigate`. This hook can be used to navigate the user based on the result of logical operations. For example, within a React element, the following code could be added to navigate the user to an index page if there is no user object.

```javascript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

useEffect(() => {
  if (!user) {
    navigate('/');
  }
}, [user, navigate]);
```

These new features make using React Router more intuitive (for example, with the simplified Route matching) and functional (with the expanded hooks).

#### Adding Data Visualizations with React Google Charts

A key element of the website is to help student learn more about data visualization. One way to do this is to transform some user data into a visualization they can view within the website. To do this, I accessed the quiz results from the user and passed the data to a chart type component from React Google Charts. The example below shows a Column Chart component.

```javascript
import { Chart } from 'react-google-charts';
import { Spinner } from './Spinner';

export const ColumnChart = ({
  title,
  hAxisTitle,
  vAxisTitle,
  chartData,
  loading,
  error,
}) => {
  const options = {
    hAxis: {
      title: hAxisTitle,
    },
    vAxis: {
      title: vAxisTitle,
      maxValue: 10,
      minValue: 0,
      ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    legend: { position: 'bottom' },
  };

  if (loading) {
    return (
      <div className='centered'>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className='centered'>
        <p>No Data to Display</p>
      </div>
    );
  }

  return (
    <div className='chart'>
      <h3>{title}</h3>
      <Chart
        chartType='ColumnChart'
        width='100%'
        height='400px'
        data={chartData}
        options={options}
      />
    </div>
  );
};
```

Building a chart with React Google Charts is fairly easy. Once the `Chart` component is imported from the `react-google-charts` library, it's possible to pass in options and data to the component props, which are accessed to build the visualizations.
