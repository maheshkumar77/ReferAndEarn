import Freqntly from "./component/frequntly";
import Hero from "./component/hero";
import Navbar from "./component/navbar";
//import ReferEarn from "./component/raff";
import Referald from "./component/referaldetails";
import Raferb from "./component/referbenifits";



export default function Home() {
  return (
    <div className=" flex justify-center items-center flex-col gap-3">
     <Navbar/>
     <Hero/>
     <Raferb/>
     <Referald/>
     <Freqntly/>
    </div>
  );
}
