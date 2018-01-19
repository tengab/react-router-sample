import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import REST from './REST'
import RestToDoList from './RestToDoList'
import FirebaseComponent from './FirebaseComponent'
import FirebaseToDo from "./FirebaseToDo";
import FirebaseLogIn from "./FirebaseLogIn";

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
    }
]

export default routes
