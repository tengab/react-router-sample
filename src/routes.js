import Counter from './Counter'
import DefaultPropsComponent from './DefaultPropsComponent'
import REST from './REST'
import RestToDoList from './RestToDoList'

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
    }
]

export default routes
