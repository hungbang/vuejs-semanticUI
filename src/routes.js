import App from './App'
import About from './layouts/About'
import User from './pages/User'
import AddUser from './pages/AddUser'

export default [
	{
		name : 'home',
		path : '/',
		component : App,
		children: [
			{
				name : 'about',
				path : 'about',
				component : About,
			},
			{
				name : 'user',
				path : 'user',
				component : User
			},
			{
				name : 'adduser',
				path : 'adduser',
				component : AddUser
			},
		]
	}
]