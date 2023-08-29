var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BatasKecamatan_1 = new ol.format.GeoJSON();
var features_BatasKecamatan_1 = format_BatasKecamatan_1.readFeatures(json_BatasKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_1.addFeatures(features_BatasKecamatan_1);
var lyr_BatasKecamatan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasKecamatan_1, 
                style: style_BatasKecamatan_1,
                interactive: true,
                title: '<img src="styles/legend/BatasKecamatan_1.png" /> Batas Kecamatan'
            });
var format_AsetTanahKabupatenDharmasraya_2 = new ol.format.GeoJSON();
var features_AsetTanahKabupatenDharmasraya_2 = format_AsetTanahKabupatenDharmasraya_2.readFeatures(json_AsetTanahKabupatenDharmasraya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AsetTanahKabupatenDharmasraya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AsetTanahKabupatenDharmasraya_2.addFeatures(features_AsetTanahKabupatenDharmasraya_2);
var lyr_AsetTanahKabupatenDharmasraya_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AsetTanahKabupatenDharmasraya_2, 
                style: style_AsetTanahKabupatenDharmasraya_2,
                interactive: true,
    title: 'Aset Tanah Kabupaten Dharmasraya<br />\
    <img src="styles/legend/AsetTanahKabupatenDharmasraya_2_0.png" /> Belum Bersertifikat<br />\
    <img src="styles/legend/AsetTanahKabupatenDharmasraya_2_1.png" /> Bersertifikat<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_BatasKecamatan_1.setVisible(true);lyr_AsetTanahKabupatenDharmasraya_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_BatasKecamatan_1,lyr_AsetTanahKabupatenDharmasraya_2];
lyr_BatasKecamatan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'WADMKC': 'WADMKC', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'luas': 'luas', });
lyr_AsetTanahKabupatenDharmasraya_2.set('fieldAliases', {'Id': 'Id', 'Nama_Objek': 'Nama_Objek', 'Luas': 'Luas', 'Nagari': 'Nagari', 'Kecamatan': 'Kecamatan', 'Status': 'Status', 'Hak': 'Hak', 'NIB': 'NIB', 'No_SU': 'No_SU', 'Tanggal_SU': 'Tanggal_SU', 'Penerbitan': 'Penerbitan', 'NB': 'NB', 'KodeTerbit': 'KodeTerbit', 'Peruntukan': 'Peruntukan', });
lyr_BatasKecamatan_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas': 'TextEdit', });
lyr_AsetTanahKabupatenDharmasraya_2.set('fieldImages', {'Id': 'Range', 'Nama_Objek': 'TextEdit', 'Luas': 'TextEdit', 'Nagari': 'TextEdit', 'Kecamatan': 'TextEdit', 'Status': 'TextEdit', 'Hak': 'TextEdit', 'NIB': 'TextEdit', 'No_SU': 'TextEdit', 'Tanggal_SU': 'TextEdit', 'Penerbitan': 'TextEdit', 'NB': 'TextEdit', 'KodeTerbit': 'TextEdit', 'Peruntukan': 'TextEdit', });
lyr_BatasKecamatan_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMPR': 'no label', 'WADMKK': 'no label', 'WADMKC': 'header label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'luas': 'no label', });
lyr_AsetTanahKabupatenDharmasraya_2.set('fieldLabels', {'Id': 'no label', 'Nama_Objek': 'no label', 'Luas': 'no label', 'Nagari': 'no label', 'Kecamatan': 'no label', 'Status': 'no label', 'Hak': 'no label', 'NIB': 'no label', 'No_SU': 'no label', 'Tanggal_SU': 'no label', 'Penerbitan': 'no label', 'NB': 'no label', 'KodeTerbit': 'no label', 'Peruntukan': 'no label', });
lyr_AsetTanahKabupatenDharmasraya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});