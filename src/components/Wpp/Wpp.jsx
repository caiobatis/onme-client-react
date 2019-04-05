import React from 'react';
import wppImg from '../Commons/wpp.svg'
import { Link } from "react-router-dom"


import './wpp.scss'

const Wpp = props => {
  return (
    <Link className="wpp" to="">
      <img src={wppImg} alt=""/>
    </Link>
  )
}
export default Wpp