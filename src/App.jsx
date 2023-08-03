
import './App.css'
import '/public/icons.js'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Tweets } from './components/Tweets'

function App() {
    return (
        <main>
            <Header />
            <Post />
            <Tweets />
        </main>
        
    )
}
export default App
