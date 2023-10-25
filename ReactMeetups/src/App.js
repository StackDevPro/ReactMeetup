import {Routes,Route} from 'react-router-dom'

import AllMeetUp from './pages/AllMeetups'
import NewMeetUp from './pages/NewMeetUp'
import Favorites from './pages/favorites'

import Layout from './components/layout/Layout'


function App() {
    return (
        <Layout>
            
            <Routes>
                <Route path="/" element={<AllMeetUp />} />
                <Route path="/new-meetups" element={<NewMeetUp />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
            
        </Layout>
    )
}

export default App