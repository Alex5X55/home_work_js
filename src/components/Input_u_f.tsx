import { ChangeEvent, PropsWithChildren, ReactElement, useState } from "react";
import axios from 'axios';
import ReactDOM from "react-dom";

export function InputUF() {
  const [state, setState] = useState({
    result: "",
    outcolor: "",
    requestUrl: "https://catfact.ninja/fact"
  })

  const getAnswer = async () => {
    try {
      const { data } = await axios(state.requestUrl)
      setState((state) => ({...state, result: JSON.stringify(data), outcolor: "black"}))
    } catch (error) {
      setState((state) => ({...state, result: JSON.stringify(error),  outcolor: "red"}))
    }
  }

  const style = {
    color: state.outcolor,
    fontSize: '1rem',
    padding: '1rem',
  };

  const setRequestUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setState({...state, requestUrl: e.target.value})
  }

  return (
    <div>
      <button onClick={getAnswer}>Send</button>
      <input type="text" defaultValue={state.requestUrl} onChange={setRequestUrl} />
      <div style = {style}>{state.result}</div>
  </div>
  )
}