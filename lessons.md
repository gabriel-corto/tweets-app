
# Components
    <Tweet />

# Props
  {/* States */}
    <Tweet content="Tweet 1"/>

# States 
const [tweets, setTweet] = useState([
    'Tweet 1'
])
setTweet(
    [...tweets, 'Tweet 2']
)