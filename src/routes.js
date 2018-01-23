import Counter from './components/Counter'
import DefaultPropsComponent from './components/DefaultPropsComponent'
import REST from './components/REST'
import RestToDoList from './components/RestToDoList'
import FirebaseComponent from './components/FirebaseComponent'
import FirebaseToDo from "./components/FirebaseToDo";
import FirebaseLogIn from "./components/FirebaseLogin";
import ReduxToDo from './components/ReduxToDo'

const routes = [
    {
        path: '/component/counter',
        text: 'Counter',
        component: Counter
    },
    {
        path: '/component/default-props',
        text: 'defaultProps example',
        component: DefaultPropsComponent
    },
    {
        path: '/component/REST',
        text: 'REST',
        component: REST
    },
    {
        path: '/component/rest-to-do',
        text: 'REST to Do',
        component: RestToDoList
    },
    {
        path: '/component/firebase',
        text: 'FireBase basics',
        component: FirebaseComponent
    },
    {
        path: '/component/firebase-to-do',
        text: 'FireBase To Do',
        component: FirebaseToDo
    },
    {
        path: '/component/firebase-login',
        text: 'FireBase Log In',
        component: FirebaseLogIn
    },
    {
        path: '/component/redux-to-do',
        text: 'Redux ToDo',
        component: ReduxToDo
    }
]

export default routes
