import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {heads: 0, tails: 0, isHeads: true}

  onClickTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prev => {
      if (tossResult === 0) {
        return {heads: prev.heads + 1, isHeads: true}
      }
      return {tails: prev.tails + 1, isHeads: false}
    })
  }

  renderResultImage = () => {
    const {isHeads} = this.state
    const imgUrl = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return <img src={imgUrl} alt="toss result" className="toss-result-image" />
  }

  render() {
    const {heads, tails} = this.state
    const total = heads + tails
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          {this.renderResultImage()}

          <button
            type="button"
            className="button"
            onClick={this.onClickTossCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
