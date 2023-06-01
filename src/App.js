import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import {OrderPage} from "./OrderPage/";

function App() {
  const urlParams = new URLSearchParams(window.location.search)
  const bands = [skaBand, kpopBand, punkBand];
  const bandId = urlParams.get('band') || 0;
  return (
    <div className="App mx-8 my-6">
      <OrderPage band={bands[bandId]} />
    </div>
  );
}

export default App;
