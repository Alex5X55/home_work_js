import { PropsWithChildren, ReactElement } from "react";

// interface FancyProps{
//     textToShow:string;
//     numCounter:number
// }

//export function OrangeRamka(val:FancyProps) {
export function ButtonUF(val: {
    // textToShow:string,
    // numCounter:number,
} &PropsWithChildren
) {
   //const {textToShow, numCounter}=val;

   const Click = () =>{
    //alert("Orange");
   }

    //Это оранжевая рамка +  {val.textToShow} + {val.numCounter}
    // let res: ReactElement = <div style={style}>
    //     Это оранжевая рамка +  {textToShow} |||{val.children}||| {val.numCounter}

    // <br/>
    // <button onClick={fancyClicker}>А меня?</button>    
    // </div>;

    let res: ReactElement = 
        <button onClick={Click}>Клик</button>    
    



    return res;
}