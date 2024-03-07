import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { counter } from '../Atoms/counter'
import {Computecounter} from '../Selectors/Computecounter'
export default function CounterDisplay() {
    const [data,setData]=useRecoilState(counter);
    const result = useRecoilValue(Computecounter);
  return (
    <div>
        <h1>you have clicked {data} times</h1>
      <button onClick={()=>setData(data+1)}>increament</button>
      <h1>two times of click{result}</h1>
      <button onClick={()=>setData(data+1)}>decrement</button>
    </div>
  )
}
