import { IBasemap } from '../models/IMap';

export class BasemapConfig {
    static readonly basemaps: Array<any> = [
      {
        title: "Streets",
        thumbnailUrl: "assets/images/basemaps/streets.jpg",
        type: "esri",
        baseMapLayers: 1,
        name: "streets"
      },
      {
        title: "Satellite",
        thumbnailUrl: "assets/images/basemaps/satellite.jpg",
        type: "esri",
        baseMapLayers: 1,
        name: "satellite"
      },
      {
        title: "Satellite with Labels",
        thumbnailUrl: "assets/images/basemaps/satellitelabels.jpg",
        type: "esri",
        baseMapLayers: 2,
        name: "hybrid"
      },
      {
        title: "Terrain with Labels",
        thumbnailUrl: "assets/images/basemaps/terrainlabels.jpg",
        type: "esri",
        baseMapLayers: 2, 
        name: "terrain"
      },
      {
        title: "Topographic",
        thumbnailUrl: "assets/images/basemaps/topo.jpg",
        type: "esri",
        baseMapLayers: 1,
        name: "topo"
      },
      {
        title: "Light Gray Canvas",
        thumbnailUrl: "assets/images/basemaps/lightgray.jpg",
        type: "esri",
        baseMapLayers: 2,
        name: "gray"
      },
      {
        title: "Dark Gray Canvas",
        thumbnailUrl: "assets/images/basemaps/darkgray.png",
        type: "esri",
        baseMapLayers: 2,
        name: "dark-gray"
      },
      {
        title: "Oceans",
        thumbnailUrl: "assets/images/basemaps/oceans.jpg",
        type: "esri",
        baseMapLayers: 2,
        name: "oceans"
      },
      {
        title: "National Geographic",
        thumbnailUrl: "assets/images/basemaps/natgeo.jpg",
        type: "esri",
        baseMapLayers: 1,
        name: "national-geographic"
      },
      {
        title: "OpenStreetMap",
        thumbnailUrl: "assets/images/basemaps/osm.jpg",
        type: "esri",
        baseMapLayers: 1,
        name: "osm"
      }
    ]
  
    static readonly olBasemapEndpoints: Array<IBasemap> = [
      { 
        title: "Open Street Maps",
        url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'http://www.arcgis.com/sharing/rest/content/items/5d2bfa736f8448b3a1708e1f6be23eed/info/thumbnail/temposm.jpg',
        labelColor: 'rgba(0,0,0,1)'
      }, 
      {
        title: 'National Geographic',
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'http://www.arcgis.com/sharing/rest/content/items/509e2d6b034246d692a461724ae2d62c/info/thumbnail/natgeo.jpg',
        labelColor: 'rgba(0,255,0,1)'
      },
      {
        title: "Satellite",
        url: 'http://server.arcgisonline.com/arcgis/rest/services/ESRI_Imagery_World_2D/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'https://www.arcgis.com/sharing/rest/content/items/86de95d4e0244cba80f0fa2c9403a7b2/info/thumbnail/thumbnail1591224931210.jpeg',
        labelColor: 'rgba(0,0,0,1)'
      },
      {
        title: "Streets",
        url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'http://www.arcgis.com/sharing/rest/content/items/d8855ee4d3d74413babfb0f41203b168/info/thumbnail/world_street_map.jpg',
        labelColor: 'rgba(0,0,0,1)'
      },
      {
        title: "Streets (Night)",
        url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'https://www.arcgis.com/sharing/rest/content/items/1c8ddaba2ee9498cb0025554351e5475/info/thumbnail/streetnight_thumb_b2.jpg',
        labelColor: 'rgba(0,0,0,1)'
      },
      {
        title: "Topographic",
        url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'http://www.arcgis.com/sharing/rest/content/items/6e03e8c26aad4b9c92a87c1063ddb0e3/info/thumbnail/topo_map_2.jpg',
        labelColor: 'rgba(0,0,0,1)'
      },
      {
        title: "Terrain",
        url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'http://www.arcgis.com/sharing/rest/content/items/aab054ab883c4a4094c72e949566ad40/info/thumbnail/terrain_labels.jpg',
        labelColor: 'rgba(0,0,0,1)'
      },
      {
        title: "Oceans",
        url: 'http://server.arcgisonline.com/arcgis/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'http://www.arcgis.com/sharing/rest/content/items/48b8cec7ebf04b5fbdcaf70d09daff21/info/thumbnail/tempoceans.jpg',
        labelColor: 'rgba(0,0,0,1)'
      },
      {
        title: "Dark Gray",
        url: 'http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'http://www.arcgis.com/sharing/rest/content/items/25869b8718c0419db87dad07de5b02d8/info/thumbnail/DGCanvasBase.png',
        labelColor: 'rgba(0,0,0,1)'
      },
      {
        title: "Light Gray",
        url: 'http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'http://www.arcgis.com/sharing/rest/content/items/8b3b470883a744aeb60e5fff0a319ce7/info/thumbnail/light_gray_canvas.jpg',
        labelColor: 'rgba(0,0,0,1)'
      },
      {
        title: "ESRI OSM",
        url: 'http://server.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
        thumbnailUrl: 'http://www.arcgis.com/sharing/rest/content/items/5d2bfa736f8448b3a1708e1f6be23eed/info/thumbnail/temposm.jpg',
        labelColor: 'rgba(0,0,0,1)'
      },
      {
        title: "OSM Light Theme",
        url: 'https://gpw.canmarnet.gc.ca/NPR/tiles?url=light/{z}/{y}/{x}.png',
        thumbnailUrl: 'https://wiki.openstreetmap.org/w/images/8/8f/Tile_mapnikb%26w.png',
        labelColor: 'rgba(0,0,0,1)'
      },
      {
        title: "OSM Pirate Theme",
        url: 'https://gpw.canmarnet.gc.ca/NPR/tiles?url=space-station/{z}/{y}/{x}.png',
        thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-rsXAbg7hU1EC589oz-HOPFGhd3JoSkS_rnoxvJ393QmwjSe',
        labelColor: 'rgba(0,0,0,1)'
      }
    ]
  
    static readonly mapDiscoveryEndpoints: Array<any> = [
        {catalogName: 'Environment Canada Beta', catalogDiscoveryUrl: 'http://geo.weather.gc.ca/geomet-beta/?lang=E&service=WMS&request=GetCapabilities'},
        {catalogName: 'Environment Canada', catalogDiscoveryUrl: 'https://geo.weather.gc.ca/geomet/?lang=en&service=WMS&request=GetCapabilities'},
        {catalogName: 'NRCan Basin Database', catalogDiscoveryUrl: 'http://geoappext.nrcan.gc.ca/arcgis/services/GSCA/backscatter_e/MapServer/WMSServer?request=GetCapabilities&service=WMS&version=1.3.0!'},
        {catalogName: 'NRCan Marine Backscatter', catalogDiscoveryUrl: 'http://geoappext.nrcan.gc.ca/arcgis/services/GSCA/backscatter_e/MapServer/WMSServer?request=GetCapabilities&service=WMS&version=1.3.0'},
        {catalogName: 'NRCan Energy Fossil Fuels', catalogDiscoveryUrl: 'http://geoappext.nrcan.gc.ca/arcgis/services/GSCA/energy_e/MapServer/WMSServer?request=GetCapabilities&service=WMS&version=1.3.0'},
        {catalogName: 'NRCan Marine LIDAR', catalogDiscoveryUrl: 'http://geoappext.nrcan.gc.ca/arcgis/services/GSCA/lidar_e/MapServer/WMSServer?request=GetCapabilities&service=WMS&version=1.3.0'},
        {catalogName: 'NRCan Bathymetric East', catalogDiscoveryUrl: 'http://geoappext.nrcan.gc.ca/arcgis/services/GSCA/multibeam_east_e/MapServer/WMSServer?request=GetCapabilities&service=WMS&version=1.3.0'},
        {catalogName: 'NASA', catalogDiscoveryUrl: 'https://neowms.sci.gsfc.nasa.gov/wms/wms'}
    ]
    
  }