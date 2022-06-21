import MapGL from "react-map-gl";   
import {useState} from "react"                            
export default function MapUi() {

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
   longitude: -100,
   latitude: 40,
   zoom: 4

  })
    return <MapGL
    mapStyle="mapbox://styles/divy-ansh/cl1zbgnqk008o15o9keovk8w7"
    mapboxAccessToken="pk.eyJ1IjoiZGl2eS1hbnNoIiwiYSI6ImNsMXEzbWw1MDA1c3EzZG16YzJoa2d3YTYifQ.E-QM15sjNG--WdBWdAS8ig"
    {...viewport}
    onViewportChange={(nextViewport) => setViewport(nextViewport)}
  ></MapGL>
}
// initialViewState={{
//   longitude: -100,
//   latitude: 40,
//   zoom: 3.5
// }}