import { useState, useEffect } from 'react';
const Fetch = ({advices}) => {
  
  return (
    <div>
      {advices && (
        <p key={advices.id}>{advices.advice}</p>
      )}
    </div>
  );
};
export default Fetch;