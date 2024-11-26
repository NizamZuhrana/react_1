import Navbar from "./component/Navbar"
import {Footer} from "./component/Footer"

export const App= () => {
  // const name = "Nizam";
  // const isSingle = false;

  // const renderStatus = () => {
  //   if (isSingle) {
  //     return "iyaa, saya sendiri";
  //   } else {
  //     return "engga, saya sudah nikah";
  //   }
  // }

  return (
    <div>
      {/* <h1>hello world</h1>
      <h1>hasil dari 2 + 2 = {2 + 2}</h1>
      <h1>test nama saya {name}</h1>
      <h1>test nama besar saya {name.toUpperCase}</h1> */}
      {/* <h1>{isSingle? `iyaa saya sendiri`: `engga, saya sudah nikah`}</h1> */}
      {/* <h1>{renderStatus()}</h1> */}
      <Navbar />
      <Footer />
    </div>
  )
}

//  export default App