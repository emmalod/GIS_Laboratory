

/*
let osm = new ol.layer.Tile({ visible: true,
    source: new ol.source.OSM()
});
const initialZoom = 2;
const initialCoordinates = [0, 0];
let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [osm],
    view: new ol.View({
        center: initialCoordinates,
        zoom: initialZoom
    })
});
*/

let osm = new ol.layer.Tile({
    title: 'OpenStreetMap',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});

let stamen = new ol.layer.Tile({
    title: 'Staminchia',
    visible: true,
    source: new ol.source.Stamen({
        layer: 'watercolor',
      }),
});

let toner = new ol.layer.Tile({
    title: 'Tonericchio(ne)',
    visible: true,
    source: new ol.source.Stamen({
        layer: 'toner',
      }),
});

//Put here the main map object.
const initialZoom = 10;
const initialCoordinates = [9.2462, 45.9644];
let map = new ol.Map({
    target: document.getElementById('map'),
    //layers: [osm, toner, stamen],
    view: new ol.View({
        center: ol.proj.fromLonLat(initialCoordinates), //We have to convert from EPSG:4326 to EPSG:3857 because openlayers uses it by default!
        zoom: initialZoom
    })
});

//Step 2: The Colombia Boundary layer definition. This is a WMS layer
var NLZ = new ol.layer.Image({
    title: 'NLZ',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:NLZ'}
    }),
    opacity: 0.5,
});

var CaseStudy1 = new ol.layer.Image({
    title: 'Case Study',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:CaseStudy1'}
    }),
    opacity: 0.5,
});

var Differences1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:Differences1'}
    }),
});
map.addLayer(Differences1);

var LSclipped = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:LSclipped'}
    }),
});
map.addLayer(LSclipped);

var PlanCurvature1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:PlanCurvature1'}
    }),
});
map.addLayer(PlanCurvature1);

var Slope1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:Slope1'}
    }),
});
map.addLayer(Slope1);

var aspect5 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:aspect5'}
    }),
});
map.addLayer(aspect5);

var dtm_clipped11 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:dtm_clipped11'}
    }),
});
map.addLayer(dtm_clipped11);

var dusaf1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:dusaf1'}
    }),
});
map.addLayer(dusaf1);

var faults2 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:faults2'}
    }),
});
map.addLayer(faults2);

var resampled_susceptibility = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:resampled_susceptibility'}
    }),
});
map.addLayer(resampled_susceptibility);

var rivers1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:rivers1'}
    }),
});
map.addLayer(rivers1);

var roads1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:roads1'}
    }),
});
map.addLayer(roads1);

var susceptibility1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:susceptibility1'}
    }),
});
map.addLayer(susceptibility1);

var susceptibility_reclassified1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:susceptibility_reclassified1'}
    }),
});
map.addLayer(susceptibility_reclassified1);

var ProfileCurvature = new ol.layer.Image({
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gisgeoserver_06:ProfileCurvature'}
    }),
});
map.addLayer(ProfileCurvature);

let basemapLayers = new ol.layer.Group({
    title: "Base Maps",
    layers: [osm, toner, stamen]
});

let overlayLayers = new ol.layer.Group({
    title: 'Overlay Layers',
    layers: [CaseStudy1, Differences1, LSclipped, NLZ, PlanCurvature1, ProfileCurvature, Slope1, aspect5, dtm_clipped11, dusaf1, faults2, resampled_susceptibility, rivers1, roads1, susceptibility1, susceptibility_reclassified1]
    })
let TotalMap = new ol.layer.Group({
    title: 'Our Map',
    layers: [basemapLayers,overlayLayers]
    })
map.addLayer(TotalMap);



// Controls

map.addControl(new ol.control.ScaleLine());
map.addControl(new ol.control.FullScreen());
map.addControl(new ol.control.OverviewMap());
map.addControl(
    new ol.control.MousePosition ({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    className: 'custom-control',
    placeholder: '0.0000, 0.0000'
    })
);

//Add the layer switcher control
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);





//Get the list of basemaps and Extend the list using the .extend() function adding the 2 new layers
//basemapLayers.getLayers().extend([stamenWatercolor, stamenToner]);
//Add the Bing Maps layers
/*
var BING_MAPS_KEY = "AgtG84GxqgWsJZDR1jn1ROSuXfgcQTtJQxqL1FoWEac7JtF9uKRWw72QbZY9Criv";
var bingRoads = new ol.layer.Tile({
    title: 'Bing Maps—Roads',
    type: 'base',
    visible: true,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Road'
    })
});
/*

let osm = new ol.layer.Tile({
    title: 'OpenStreetMap',
    type: 'base',
    visible: true,
    source: new ol.source.OSM()
});
var colombiaDepartments = new ol.layer.Image({
    title: 'Colombia adm1',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_adm1' }
    }),
    opacity: 0.5
});

var colombiaRoads = new ol.layer.Image({
    title: 'Colombia roads',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_roads' }
    }),
    visible: false
});
var colombiaRivers = new ol.layer.Image({
    title: 'Colombia rivers',
    source: new ol.source.ImageWMS({
        url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
        params: { 'LAYERS': 'gis:COL_rivers' }
    }),
    minResolution: 1000,
    maxResolution: 5000
});


//Add the layers to layer groups
let basemapLayers = new ol.layer.Group({
    title: "Base Maps",
    layers: [osm]
});
let overlayLayers = new ol.layer.Group({
    title: "Overlay Layers",
    layers: [colombiaDepartments, colombiaRivers, colombiaRoads]
})

let map = new ol.Map({
    target: document.getElementById('map'),
    layers: [basemapLayers, overlayLayers],
    view: new ol.View({
        center: ol.proj.fromLonLat([-74, 4.6]),
        zoom: 5
    }),
});


// Add the map controls:
map.addControl(new ol.control.ScaleLine()); //Controls can be added using the addControl() map function
map.addControl(new ol.control.FullScreen());
map.addControl(new ol.control.OverviewMap());
map.addControl(
    new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(4),
        projection: 'EPSG:4326',
        className: 'custom-control',
        placeholder: '0.0000, 0.0000'
    })
);


//Add the layer switcher control
var layerSwitcher = new ol.control.LayerSwitcher({});
map.addControl(layerSwitcher);


//OPTIONAL
//Add the Bing Maps layers
var BING_MAPS_KEY = "Get_your_own_key";
var bingRoads = new ol.layer.Tile({
    title: 'Bing Maps—Roads',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Road'
    })
});
var bingAerial = new ol.layer.Tile({
    title: 'Bing Maps—Aerial',
    type: 'base',
    visible: false,
    source: new ol.source.BingMaps({
        key: BING_MAPS_KEY,
        imagerySet: 'Aerial'
    })
});
//Get the list of basemaps and Extend the list using the .extend() function adding the 2 new layers
basemapLayers.getLayers().extend([bingRoads, bingAerial]);


//Add the Stamen base layers
var stamenWatercolor = new ol.layer.Tile({
    title: 'Stamen Watercolor',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'watercolor'
    })
});
var stamenToner = new ol.layer.Tile({
    title: 'Stamen Toner',
    type: 'base',
    visible: false,
    source: new ol.source.Stamen({
        layer: 'toner'
    })
});
//Get the list of basemaps and Extend the list using the .extend() function adding the 2 new layers
basemapLayers.getLayers().extend([stamenWatercolor, stamenToner]);


//Add the WFS layer
let vectorSource = new ol.source.Vector({});
const vectorLayer = new ol.layer.Vector({
    title: "Colombia water areas",
    source: vectorSource,
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgb(58, 255, 81)',
            width: 4
        })
    }),
    zIndex: 10
});
overlayLayers.getLayers().extend([vectorLayer]);

function loadFeatures(response) {
    vectorSource.addFeatures(new ol.format.GeoJSON().readFeatures(response))
}
var base_url = "https://www.gis-geoserver.polimi.it/geoserver/gis/ows?";
var wfs_url = base_url;
wfs_url += "service=WFS&"
wfs_url += "version=2.0.0&"
wfs_url += "request=GetFeature&"
wfs_url += "typeName=gis%3ACOL_water_areas&"
wfs_url += "outputFormat=text%2Fjavascript&"
wfs_url += "srsname=EPSG:3857&"
wfs_url += "format_options=callback:loadFeatures"
$.ajax({ url: wfs_url, dataType: 'jsonp' });


//Add the code for the Pop-up
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

var popup = new ol.Overlay({
    element: container
});
map.addOverlay(popup);
//This is the event listener for the map. It fires when a single click is made on the map.
map.on('singleclick', function (event) {
    //This iterates over all the features that are located on the pixel of the click (can be many)
    var feature = map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
        return feature;
    });

    //If there is a feature, open the popup by setting a position to it and put the data from the feature
    if (feature != null) {
        var pixel = event.pixel;
        var coord = map.getCoordinateFromPixel(pixel);
        popup.setPosition(coord);
        content.innerHTML =
            '<h5>Colombia Water Areas</h5><br><b>Name: </b>' +
            feature.get('NAME') +
            '</br><b>Description: </b>' +
            feature.get('HYC_DESCRI');
    } else {
        //Only if the colombiaRoads layer is visible, do the GetFeatureInfo request
        if (colombiaRoads.getVisible()) {
            var viewResolution = (map.getView().getResolution());
            var url = colombiaRoads.getSource().getFeatureInfoUrl(event.coordinate, viewResolution, 'EPSG:3857', { 'INFO_FORMAT': 'text/html' });

            if (url) {
                var pixel = event.pixel;
                var coord = map.getCoordinateFromPixel(pixel);
                popup.setPosition(coord);
                //We do again the AJAX request to get the data from the GetFeatureInfo request
                $.ajax({ url: url })
                    .done((data) => {
                        console.log(data);
                        //Put the data of the GetFeatureInfo response inside the pop-up
                        //The data that arrives is in HTML
                        content.innerHTML = data;
                    });
            }
        }
    }

});
//This closes the pop-up when the X button is clicked
closer.onclick = function () {
    popup.setPosition(undefined);
    closer.blur();
    return false;
};


// Adding map event for pointermove
map.on('pointermove', function (event) {
    var pixel = map.getEventPixel(event.originalEvent);
    var hit = map.hasFeatureAtPixel(pixel);
    map.getTarget().style.cursor = hit ? 'pointer' : '';
});


*/