import  { useContext } from 'react'
import { CalContext } from '../context/CalContext';

const Screen = () => {
    const {cal} = useContext(CalContext);
    
  return (
    <div className='screen' max = {70} >{cal.num? cal.num: cal.res}</div>
  )
}

export default Screen;