import { auth } from "../firebase";
import Log from "./Log";
import Reg from "./Reg";

function TestFb() {
  return (
    <>
      <div>
        Login
        <Log />
      </div>
      <div>
        Registra
        <Reg />
      </div>
      <button onClick={() => console.log(auth)}>log Auth</button>
    </>
  );
}

export default TestFb;
