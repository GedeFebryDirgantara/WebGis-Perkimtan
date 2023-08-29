var size = 0;
var placement = 'point';
function categories_AsetTanahKabupatenDharmasraya_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Belum Bersertifikat':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bersertifikat':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(27,115,27,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 4}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_AsetTanahKabupatenDharmasraya_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Status");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_AsetTanahKabupatenDharmasraya_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
