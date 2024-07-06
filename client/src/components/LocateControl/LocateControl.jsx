import 'leaflet.locatecontrol'
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css'
import L from 'leaflet'

import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const LocateControl = () => {
  const map = useMap()

  useEffect(() => {
    const location = L.control.locate().addTo(map)

    return () => {
      map.removeControl(location)
    }
  }, [map])

  return
}

export default LocateControl
