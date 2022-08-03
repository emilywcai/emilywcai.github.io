import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router'

const Layout = () => {
    return ( 
    <div className="App">
        <Sidebar />
        <div className="page">
            <span className="tags top-tags">&lt;body&gt</span>

            <Outlet />

        </div>
    </div>
    )
}

export default Layout