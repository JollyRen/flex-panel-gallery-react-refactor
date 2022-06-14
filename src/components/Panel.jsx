import React from 'react'
import { toggleActive, handleClick } from '../utils'

const Panel = ({ text, className }) => (
  <>
    <div className={className} onClick={handleClick} onTransitionEnd={(e) => toggleActive(e)}>
      {text.map((par, i) => (
        <p key={i}>{par}</p>
      ))}
    </div>
  </>
)

export default Panel
