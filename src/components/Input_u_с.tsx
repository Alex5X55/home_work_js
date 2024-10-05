import { Component, ReactElement } from "react";
import axios from 'axios';

interface InputProps {
  textToShow: string;
}

interface InputState {
  urlText: string;
  answer: string;
  fontColor: string;
}


export class InputUC extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = { urlText: "https://catfact.ninja/fact", answer: "", fontColor: "black" };
  }

  onUrlChange = (event: { target: { value: any; }; }) => {
    this.setState({ urlText: event.target.value });
    console.log(event.target.value);
    console.log(this.state);
  }

  onUrlBeforeInput = () => {
    if (this.state.urlText === "https://catfact.ninja/fact")
      this.setState({ urlText: "" });
    console.log(this.state);
  }


  getAnswer = async () => {
    await axios(this.state.urlText)
      .then(response => {
        //const response = responsea.data; //console.log(response.data);
        this.setState({ answer: JSON.stringify(response), fontColor: "black" });
      })
      .catch(error => {
        //const error = error; //console.log(error.cause)
        this.setState({ answer: JSON.stringify(error), fontColor: "red" });
      })

  }

  onBClick = () => {
    this.getAnswer();
    console.log(this.state);
  }


  render() {

    const style = {
      color: this.state.fontColor,
      fontSize: '1rem',
      padding: '1rem',
    };

    const res: ReactElement = <div className="inputuc">
      <button onClick={this.onBClick}>Send</button>
      <input type="text" name="url" value={this.state.urlText} onBeforeInput={this.onUrlBeforeInput} onChange={this.onUrlChange}></input>
      <div style={style}>{this.state.answer}</div>
    </div>;

    return res;

  }
}