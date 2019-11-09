import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Snowflake from './components/Snowflake.jsx';

const App = () => {
  const snowFlakes = useSelector(state => state.snowFlakes);
  const dispatch = useDispatch();
  const [children, setChildren] = useState(snowFlakes);
  useEffect(() => {
    setChildren(snowFlakes);
  }, [snowFlakes]);

  const handleClick = () => {
    setChildren([...snowFlakes, snowFlakes.length])
    dispatch({type: "CREATE_SNOWFLAKE"});
  }
  return (
    <div onClick={handleClick}>
      Hello world!
      {
        children.map((el, i) => (
          <Snowflake key={i} />
        ))
      }
    </div>
  )
}

export default App;