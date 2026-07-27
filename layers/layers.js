var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_zona_riesgo_1 = new ol.format.GeoJSON();
var features_zona_riesgo_1 = format_zona_riesgo_1.readFeatures(json_zona_riesgo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zona_riesgo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zona_riesgo_1.addFeatures(features_zona_riesgo_1);
var lyr_zona_riesgo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zona_riesgo_1, 
                style: style_zona_riesgo_1,
                popuplayertitle: 'zona_riesgo',
                interactive: true,
    title: 'zona_riesgo<br />\
    <img src="styles/legend/zona_riesgo_1_0.png" /> bajo<br />' });
var format_hidrografia_2 = new ol.format.GeoJSON();
var features_hidrografia_2 = format_hidrografia_2.readFeatures(json_hidrografia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hidrografia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hidrografia_2.addFeatures(features_hidrografia_2);
var lyr_hidrografia_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hidrografia_2, 
                style: style_hidrografia_2,
                popuplayertitle: 'hidrografia',
                interactive: true,
                title: '<img src="styles/legend/hidrografia_2.png" /> hidrografia'
            });
var format_areas_verdes_3 = new ol.format.GeoJSON();
var features_areas_verdes_3 = format_areas_verdes_3.readFeatures(json_areas_verdes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_verdes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_verdes_3.addFeatures(features_areas_verdes_3);
var lyr_areas_verdes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_verdes_3, 
                style: style_areas_verdes_3,
                popuplayertitle: 'areas_verdes',
                interactive: true,
                title: '<img src="styles/legend/areas_verdes_3.png" /> areas_verdes'
            });
var format_parcela_4 = new ol.format.GeoJSON();
var features_parcela_4 = format_parcela_4.readFeatures(json_parcela_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcela_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcela_4.addFeatures(features_parcela_4);
var lyr_parcela_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcela_4, 
                style: style_parcela_4,
                popuplayertitle: 'parcela',
                interactive: true,
    title: 'parcela<br />\
    <img src="styles/legend/parcela_4_0.png" /> comercial<br />\
    <img src="styles/legend/parcela_4_1.png" /> equipamientos<br />\
    <img src="styles/legend/parcela_4_2.png" /> residencial<br />' });
var format_red_vial_5 = new ol.format.GeoJSON();
var features_red_vial_5 = format_red_vial_5.readFeatures(json_red_vial_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_red_vial_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_red_vial_5.addFeatures(features_red_vial_5);
var lyr_red_vial_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_red_vial_5, 
                style: style_red_vial_5,
                popuplayertitle: 'red_vial',
                interactive: true,
    title: 'red_vial<br />\
    <img src="styles/legend/red_vial_5_0.png" /> secundaria<br />\
    <img src="styles/legend/red_vial_5_1.png" /> principal<br />' });
var format_equipamientos_6 = new ol.format.GeoJSON();
var features_equipamientos_6 = format_equipamientos_6.readFeatures(json_equipamientos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_equipamientos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_equipamientos_6.addFeatures(features_equipamientos_6);
var lyr_equipamientos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_equipamientos_6, 
                style: style_equipamientos_6,
                popuplayertitle: 'equipamientos',
                interactive: true,
    title: 'equipamientos<br />\
    <img src="styles/legend/equipamientos_6_0.png" /> EDUCACION<br />\
    <img src="styles/legend/equipamientos_6_1.png" /> SALUD<br />' });
var format_buffer_educacion_7 = new ol.format.GeoJSON();
var features_buffer_educacion_7 = format_buffer_educacion_7.readFeatures(json_buffer_educacion_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_educacion_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_educacion_7.addFeatures(features_buffer_educacion_7);
var lyr_buffer_educacion_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_educacion_7, 
                style: style_buffer_educacion_7,
                popuplayertitle: 'buffer_educacion',
                interactive: true,
                title: '<img src="styles/legend/buffer_educacion_7.png" /> buffer_educacion'
            });
var format_buffer_salud_8 = new ol.format.GeoJSON();
var features_buffer_salud_8 = format_buffer_salud_8.readFeatures(json_buffer_salud_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_salud_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_salud_8.addFeatures(features_buffer_salud_8);
var lyr_buffer_salud_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_salud_8, 
                style: style_buffer_salud_8,
                popuplayertitle: 'buffer_salud',
                interactive: true,
                title: '<img src="styles/legend/buffer_salud_8.png" /> buffer_salud'
            });
var format_Lmite_sector_9 = new ol.format.GeoJSON();
var features_Lmite_sector_9 = format_Lmite_sector_9.readFeatures(json_Lmite_sector_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmite_sector_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmite_sector_9.addFeatures(features_Lmite_sector_9);
var lyr_Lmite_sector_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmite_sector_9, 
                style: style_Lmite_sector_9,
                popuplayertitle: 'Límite_sector',
                interactive: true,
                title: '<img src="styles/legend/Lmite_sector_9.png" /> Límite_sector'
            });
var group_santarosa_geodata_Renteria_TorresMerino = new ol.layer.Group({
                                layers: [lyr_hidrografia_2,lyr_areas_verdes_3,lyr_parcela_4,lyr_red_vial_5,lyr_equipamientos_6,lyr_buffer_educacion_7,lyr_buffer_salud_8,lyr_Lmite_sector_9,],
                                fold: 'open',
                                title: 'santarosa_geodata_Renteria_TorresMerino'});

lyr_OpenStreetMap_0.setVisible(true);lyr_zona_riesgo_1.setVisible(true);lyr_hidrografia_2.setVisible(true);lyr_areas_verdes_3.setVisible(true);lyr_parcela_4.setVisible(true);lyr_red_vial_5.setVisible(true);lyr_equipamientos_6.setVisible(true);lyr_buffer_educacion_7.setVisible(true);lyr_buffer_salud_8.setVisible(true);lyr_Lmite_sector_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_zona_riesgo_1,group_santarosa_geodata_Renteria_TorresMerino];
lyr_zona_riesgo_1.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', 'nivel_riesgo': 'nivel_riesgo', });
lyr_hidrografia_2.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'cota_msnm': 'cota_msnm', 'caudal_m3s': 'caudal_m3s', });
lyr_areas_verdes_3.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo': 'tipo', 'area_m2': 'area_m2', 'estado': 'estado', });
lyr_parcela_4.set('fieldAliases', {'fid': 'fid', 'cod_predio': 'cod_predio', 'uso_suelo': 'uso_suelo', 'area_m2': 'area_m2', 'valor_m2': 'valor_m2', 'cota_msnm': 'cota_msnm', 'nivel_riesgo': 'nivel_riesgo', });
lyr_red_vial_5.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo_via': 'tipo_via', 'ancho_m': 'ancho_m', 'sentido': 'sentido', });
lyr_equipamientos_6.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo (educacion/salud)': 'tipo (educacion/salud)', 'capacidad': 'capacidad', 'subtipo': 'subtipo', });
lyr_buffer_educacion_7.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo (educacion/salud)': 'tipo (educacion/salud)', 'capacidad': 'capacidad', 'subtipo': 'subtipo', });
lyr_buffer_salud_8.set('fieldAliases', {'fid': 'fid', 'nombre': 'nombre', 'tipo (educacion/salud)': 'tipo (educacion/salud)', 'capacidad': 'capacidad', 'subtipo': 'subtipo', });
lyr_Lmite_sector_9.set('fieldAliases', {'fid': 'fid', });
lyr_zona_riesgo_1.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'Range', 'cota_msnm': 'TextEdit', 'nivel_riesgo': 'TextEdit', });
lyr_hidrografia_2.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'cota_msnm': 'TextEdit', 'caudal_m3s': 'TextEdit', });
lyr_areas_verdes_3.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo': 'TextEdit', 'area_m2': 'TextEdit', 'estado': 'TextEdit', });
lyr_parcela_4.set('fieldImages', {'fid': 'TextEdit', 'cod_predio': 'TextEdit', 'uso_suelo': 'TextEdit', 'area_m2': 'TextEdit', 'valor_m2': 'TextEdit', 'cota_msnm': 'TextEdit', 'nivel_riesgo': 'TextEdit', });
lyr_red_vial_5.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo_via': 'TextEdit', 'ancho_m': 'TextEdit', 'sentido': 'TextEdit', });
lyr_equipamientos_6.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo (educacion/salud)': 'TextEdit', 'capacidad': 'TextEdit', 'subtipo': 'TextEdit', });
lyr_buffer_educacion_7.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo (educacion/salud)': 'TextEdit', 'capacidad': 'TextEdit', 'subtipo': 'TextEdit', });
lyr_buffer_salud_8.set('fieldImages', {'fid': 'TextEdit', 'nombre': 'TextEdit', 'tipo (educacion/salud)': 'TextEdit', 'capacidad': 'TextEdit', 'subtipo': 'TextEdit', });
lyr_Lmite_sector_9.set('fieldImages', {'fid': 'TextEdit', });
lyr_zona_riesgo_1.set('fieldLabels', {'fid': 'no label', 'cod_predio': 'no label', 'uso_suelo': 'no label', 'area_m2': 'no label', 'valor_m2': 'no label', 'cota_msnm': 'no label', 'nivel_riesgo': 'no label', });
lyr_hidrografia_2.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'cota_msnm': 'no label', 'caudal_m3s': 'no label', });
lyr_areas_verdes_3.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo': 'no label', 'area_m2': 'no label', 'estado': 'no label', });
lyr_parcela_4.set('fieldLabels', {'fid': 'no label', 'cod_predio': 'no label', 'uso_suelo': 'no label', 'area_m2': 'no label', 'valor_m2': 'no label', 'cota_msnm': 'no label', 'nivel_riesgo': 'no label', });
lyr_red_vial_5.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo_via': 'no label', 'ancho_m': 'no label', 'sentido': 'no label', });
lyr_equipamientos_6.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo (educacion/salud)': 'no label', 'capacidad': 'no label', 'subtipo': 'no label', });
lyr_buffer_educacion_7.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo (educacion/salud)': 'no label', 'capacidad': 'no label', 'subtipo': 'no label', });
lyr_buffer_salud_8.set('fieldLabels', {'fid': 'no label', 'nombre': 'no label', 'tipo (educacion/salud)': 'no label', 'capacidad': 'no label', 'subtipo': 'no label', });
lyr_Lmite_sector_9.set('fieldLabels', {'fid': 'no label', });
lyr_Lmite_sector_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});