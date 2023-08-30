// import { ReactElement } from "react";
import HelloWorld from "./helloWorld.tsx";
import Prodect from "./prodect.tsx";
import Header from "./header.tsx";
import Twomain from "./twomain.tsx";
import Footer from "./Footer.tsx";

const book1 = {
  title: "foo",
  imgsrc: "https://picsum.photos/id/24/200/300",
  text: "locewcewcecewcewcewc"
};
const book2 = {
  title: "foo",
  imgsrc: "https://picsum.photos/id/23/200/300",
  text: "yewtrewitrireytirt"
}

const book3 = {
  title: "foo",
  imgsrc: "https://picsum.photos/id/22/200/300",
  text: "nrevkurenvireqbvreiv"
}

const all = [book1, book2, book3]

function app():JSX.Element {
    return (<div>
      <Header/>
      <Twomain data={all[0]}/>
      <Footer/>
      <Prodect prodect={all[0]}/>
      <Prodect prodect={all[1]}/>

      {/* <HelloWorld />
      <HelloWorld />
      <HelloWorld />
       */}

    </div>)
        
    
}

export default app