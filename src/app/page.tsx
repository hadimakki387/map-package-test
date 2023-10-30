"use client"
import {useState} from "react"
import { MapContainer ,TileLayer,Marker,Popup,useMapEvents} from 'react-leaflet'
import {Icon} from "leaflet"
import "leaflet/dist/leaflet.css"

const customIcon = new Icon({
  iconUrl:"https://cdn-icons-png.flaticon.com/128/684/684908.png",
  iconSize:[38,38]
})

function LocationMarker() {
  const [position, setPosition]:any = useState(null)
  const map = useMapEvents({
    click(event) {
      const lat = event.latlng.lat;
      const lng = event.latlng.lng;
      console.log(`Long: ${lng}, Lat: ${lat}`);
      // map.locate()
      setPosition(event.latlng)
    },
    //  locationfound(e) {
    //    setPosition(e.latlng)
    //    map.flyTo(e.latlng, map.getZoom())
    //  },
  })

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default function Home() {
  
  return (
    <MapContainer  center={[33.854721, 35.862286]} zoom={13} scrollWheelZoom={true}>
    <TileLayer
    
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]} icon={customIcon}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    <LocationMarker/>
  </MapContainer>
  )
}
