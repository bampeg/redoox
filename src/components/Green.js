import React from 'react'
import { connect } from 'react-redux'
import { handleInputValue } from '../ducks/reducer'

function Green(props) {
  return (
    <div style={{ backgroundColor: 'green' }}>
      Green
      <input
        type="text"
        placeholder="type in here"
        onChange={event => props.handleInputValue(event.target.value)} />
    </div>
  )
}

const mapDispatchToProps = {
  handleInputValue
}

export default connect(null, mapDispatchToProps)(Green)