import React from 'react'
import { Segment, Label } from 'semantic-ui-react'

export default ({ data }) => (
  <Segment>
    <Label>
          Minimum
      <div className="detail">
        {data.min}
      </div>
    </Label>
    <Label>
          Maximum
      <div className="detail">
        {data.max}
      </div>
    </Label>
    <Label>
          Average
      <div className="detail">
        {data.avg}
      </div>
    </Label>
  </Segment>
)
