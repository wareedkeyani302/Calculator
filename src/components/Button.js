import {useContext} from 'react';
import { CalContext } from '../context/CalContext';

const getStyleName = btn => {
  const className = {
      '=': 'equals',
      'x': 'opt',
      '-': 'opt',
      '+': 'opt',
      '/': 'opt',
  }
  return className[btn]
}

const Button = ({value}) => {
  const {cal, setCal} = useContext (CalContext);

  const commaClick = () => {
     setCal ({
      ...cal,
      num: !cal.num.toString().includes('.') ? cal.num + value : cal.num
     })
  }
  const resetClick = () => {
    setCal ({sign: '', num: 0 , res: 0})
  }
  const handleClickButton = () => {
    const numberString = value.toString ()

    let numberValue;
    if (numberString === '0' && cal.num === 0) {
      numberValue = '0'
    } else {
      numberValue = Number (cal.num + numberString)
    }

    setCal ({
      ...cal,
      num: numberValue
    })
  }
  const signClick = () => {
    setCal ({
      sign: value,
      res: !cal.res && cal.num ? cal.num : cal.res,
      num: 0
    })
  }
  const equalsClick =() => {
    if (cal.res && cal.num){
      const math = (a, b, sign ) => {
        const result = {
          '+': (a, b) => a + b,
          '-': (a, b) => a - b,
          'x': (a, b) => a * b,
          '/': (a, b) => a / b,
        }
        return result [sign] (a, b);
      }
      setCal ({
        res: math(cal.res, cal.num, cal.sign),
        sign: '',
        num: 0
      })
    }
  }
  const percentClick = () => {
    setCal ({
      num: (cal.num / 100),
      res: (cal.res / 100),
      sign: ''
    })
  }
  const invertClick = () => {
    setCal({
      num: cal.num ? cal.num * -1 : 0,
      res: cal.res ? cal.res * -1 : 0,
      sign: ''
    })
  }

  const handleBtnClick = () => {
    const results = {
      '.': commaClick,
      'c': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,
      '=': equalsClick,
      '%': percentClick,
      '+-': invertClick,
    }
    if (results[value]) {
      return results[value] ()
    } else {
      return handleClickButton ()
    }
  }
  return (
    <button onClick = {handleBtnClick} className={`${getStyleName(value)} buttons`}>{value}</button>
  )
}

export default Button;

