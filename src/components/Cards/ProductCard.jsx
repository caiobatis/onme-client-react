import React from 'react'
import Button from '../Button/Button'
import ReactHtmlParser from 'react-html-parser'
import {Link} from 'react-router-dom'

import './cards.scss'

const ProductCard = props => {
  return (
    <div className="ProductCard">
      <div className="image">
        <img src={props.img || 'https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/11/19/104852360-GettyImages-137084202.530x298.jpg'} alt=""/>
      </div>
      <div className="title">
        <h3 className="h3">{props.title}</h3>
      </div>
      <div className="flag">
        <div className="item">{props.brand || 'Frente'}</div>
      </div>
      <div className="description">
        <p className="p">{ReactHtmlParser(props.description)}</p>
      </div>
      <div className="actions">
        <Link to={props.path}>
          <Button
            full={true}
            theme='secundary'
            value={props.titleButton}
          />
        </Link>
      </div>
    </div>
  )
}
export default ProductCard