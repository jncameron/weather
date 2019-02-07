import React from 'react';
import { Card } from 'semantic-ui-react';


const CityResult = ({results, temp}) => {

  const mainResults = results.main;

  return(
    <Card>

      <div>
        <h3>{results.name}</h3>
        <div>
          <h3>{temp}</h3>
        </div>
      </div>

    </Card>
  )
}

export default CityResult;