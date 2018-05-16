import React from 'react'
import { connect } from 'react-redux'

function Red({ greenInput }) {
  return (
    <div style={{ backgroundColor: 'red' }}>
      Red
      <h2>{greenInput}</h2>
    </div>
  )
}

function mapStateToProps({ greenInput }) {
  return {
    greenInput
  }
}

export default connect(mapStateToProps)(Red)