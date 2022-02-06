var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_IND_adm1_1 = new ol.format.GeoJSON();
var features_IND_adm1_1 = format_IND_adm1_1.readFeatures(json_IND_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_adm1_1.addFeatures(features_IND_adm1_1);
var lyr_IND_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IND_adm1_1, 
                style: style_IND_adm1_1,
                interactive: true,
                title: '<img src="styles/legend/IND_adm1_1.png" /> IND_adm1'
            });
var format_Smartcities_2 = new ol.format.GeoJSON();
var features_Smartcities_2 = format_Smartcities_2.readFeatures(json_Smartcities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Smartcities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Smartcities_2.addFeatures(features_Smartcities_2);
var lyr_Smartcities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Smartcities_2, 
                style: style_Smartcities_2,
                interactive: true,
                title: 'Smartcities'
            });
var format_smartcities1_3 = new ol.format.GeoJSON();
var features_smartcities1_3 = format_smartcities1_3.readFeatures(json_smartcities1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_smartcities1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_smartcities1_3.addFeatures(features_smartcities1_3);
var lyr_smartcities1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_smartcities1_3, 
                style: style_smartcities1_3,
                interactive: true,
                title: 'smartcities1'
            });

lyr_OSMStandard_0.setVisible(true);lyr_IND_adm1_1.setVisible(true);lyr_Smartcities_2.setVisible(true);lyr_smartcities1_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_IND_adm1_1,lyr_Smartcities_2,lyr_smartcities1_3];
lyr_IND_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Smartcities_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_smartcities1_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_IND_adm1_1.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_Smartcities_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_smartcities1_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_IND_adm1_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_Smartcities_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_smartcities1_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'header label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_smartcities1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});