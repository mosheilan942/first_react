import Child from "./child";
// interface Props {
//     name: string
// }

export default function myName(): JSX.Element {
    // const myStyle = {
    //     backgroundColor: "blue",
    //     fontSize: "20px",
    //     font: "bold",
    //     color: "firebrick"
    // }
    return <Child getDate={(value) => (value)}/>
}

