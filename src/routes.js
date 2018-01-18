import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import REST from './REST'
import RestToDoList from './RestToDoList'
import FirebaseComponent from './FirebaseComponent'

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
    }
]

export default routes
