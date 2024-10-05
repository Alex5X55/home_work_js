import { Component, PropsWithChildren, ReactElement } from "react";
//import "./style.css"

// interface FancyProps{
//     textToShow:string;
//     numCounter:number
// }
// export class PurpleRamka extends Component<FancyProps & PropsWithChildren>{
export class ButtonUC extends Component<{} & PropsWithChildren>{    

    click = ()=>{
       // alert("Purple");
    }

    render(){

        // const style ={
        //     borderColor: 'purple',
        //     borderStyle: 'dotted',
        //     borderWidth: '1rem',
        //     fontSize: '2rem',
        //     padding: '1rem',

        // };


       // return <div style={style}>
         //   Это фиолетовая рамка
           // </div>;

       //const res:ReactElement =  <div style={style}>    
       const res:ReactElement =  //<div className="purple">
          //{this.props.textToShow} + {this.props.numCounter}

          <button onClick={()=> this.click()}>Клик</button>

          //{this.props.children}
          //</div>;   

        return res;  

        }
}