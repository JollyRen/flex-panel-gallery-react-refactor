import React from 'react'
import { Panel } from './'
import { panels } from '../data'

const Panels = () => (
  <div className="panels">
    {panels.map((panel, i) => (
      <Panel text={panel.text} className={panel.className} key={i} />
    ))}
  </div>
)

export default Panels
