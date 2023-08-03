import { useState } from "react"

export function Tweets() {

  const [Tweets, setTweet] = useState([])
  function createTweet() {
    const input = document.querySelector('input')
    setTweet(
      [...Tweets, input.value]
    )
  }
  return (
    <div id="Tweets">
      {Tweets.map((tweet) => {
        return <p className="tweet">{tweet}</p>
      })}
      <form onSubmit={createTweet} action="#">
        <input type="text" placeholder="Adcione um Tweet a Publicação" />
        <button type="submit">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </div>
  )
}