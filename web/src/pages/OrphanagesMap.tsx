import React from 'react'
import {Link} from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import mapMarkerImg from '../images/map-marker.svg'
import { Map, TileLayer } from 'react-leaflet'
import '../styles/pages/orphanages-map.css'

import 'leaflet/dist/leaflet.css'

export default function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>SP</span>
                </footer>
            </aside>
            <Map
                center={[-23.5865642,-46.6866518]}
                zoom={12}
                style={{width:'100', height:'100'}}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}