import React, { Component } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import './loader.scss'


export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="center">
          <CircularProgress />
        </div>
      </div>
    )
  }
}
