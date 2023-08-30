// import { ReactElement } from "react";
// import HelloWorld from "./helloWorld.tsx";
import Prodect from "./prodect.tsx";
import Header from "./header.tsx";
import Twomain from "./twomain.tsx";
import Footer from "./Footer.tsx";
import book from "../ts/type.ts";

const book1 :book =  {
  title: "foo",
  imgsrc: "https://picsum.photos/id/24/200/300",
  text: "locewcewcecewcewcewc"
};
const book2 :book = {
  title: "foo",
  imgsrc: "https://picsum.photos/id/23/200/300",
  text: "yewtrewitrireytirt"
}

const book3 :book = {
  title: "foo",
  imgsrc: "https://picsum.photos/id/22/200/300",
  text: "nrevkurenvireqbvreiv"
}

const books = [book1, book2, book3]

function app():JSX.Element {
    return (<div>
      <Header/>
      <Twomain books={books}/>
      <Footer/>
      <Prodect prodect={books}/>
      <Prodect prodect={books}/>

      {/* <HelloWorld />
      <HelloWorld />
      <HelloWorld />
       */}

    </div>)
        
    
}

export default app