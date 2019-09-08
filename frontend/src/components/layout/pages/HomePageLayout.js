import ResponsiveContainer from '../containers/ResponsiveContainer'
import React from 'react'

const HomepageLayout = props => (
    <ResponsiveContainer>
      {props.children}
     
    </ResponsiveContainer>
  )
  export default HomepageLayout;