var map = L.map('map', {
    center: [-17.645185, -71.346191],
    zoom: 15,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-17.9398,-71.6604], [-17.1437,-70.8254]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleTerrain = L.tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
googleTerrain.addTo(map);

var colegios = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_colegios_ilo/wms?", {
	   layers: "proyecto_colegios_ilo:colegios", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
colegios.addTo(map);

var departamento = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_colegios_ilo/wms?", {
	   layers: "proyecto_colegios_ilo:departamentos", //gisweb:este es el fepartamento de moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
departamento.addTo(map);

var provincias = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_colegios_ilo/wms?", {
	   layers: "proyecto_colegios_ilo:provincias", //gisweb:estas son las provincias de moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
provincias.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_colegios_ilo/wms?", {
	   layers: "proyecto_colegios_ilo:distritos", //gisweb:estas son las provincias de moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
distritos.addTo(map);

var baseMaps = {
    "OSM": basemapOSM,
    "GoogleTerrain" : googleTerrain
};

var overlayMaps = {
    "Centros educativos": colegios,
    "Departamento Moquegua": departamento,
    "Provincias Moquegua": provincias,
    "Distritos Moquegua": distritos
    };

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
  imperial: false
}).addTo(map);