var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TonyParsonsRCC_2 = new ol.format.GeoJSON();
var features_TonyParsonsRCC_2 = format_TonyParsonsRCC_2.readFeatures(json_TonyParsonsRCC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TonyParsonsRCC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TonyParsonsRCC_2.addFeatures(features_TonyParsonsRCC_2);
var lyr_TonyParsonsRCC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TonyParsonsRCC_2, 
                style: style_TonyParsonsRCC_2,
                popuplayertitle: "TonyParsonsRCC",
                interactive: true,
                    title: '<img src="styles/legend/TonyParsonsRCC_2.png" /> TonyParsonsRCC'
                });
var format_SuziPapinRCC_3 = new ol.format.GeoJSON();
var features_SuziPapinRCC_3 = format_SuziPapinRCC_3.readFeatures(json_SuziPapinRCC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuziPapinRCC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuziPapinRCC_3.addFeatures(features_SuziPapinRCC_3);
var lyr_SuziPapinRCC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuziPapinRCC_3, 
                style: style_SuziPapinRCC_3,
                popuplayertitle: "SuziPapinRCC",
                interactive: true,
                    title: '<img src="styles/legend/SuziPapinRCC_3.png" /> SuziPapinRCC'
                });
var format_SusieLeonRCC_4 = new ol.format.GeoJSON();
var features_SusieLeonRCC_4 = format_SusieLeonRCC_4.readFeatures(json_SusieLeonRCC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SusieLeonRCC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SusieLeonRCC_4.addFeatures(features_SusieLeonRCC_4);
var lyr_SusieLeonRCC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SusieLeonRCC_4, 
                style: style_SusieLeonRCC_4,
                popuplayertitle: "SusieLeonRCC",
                interactive: true,
                    title: '<img src="styles/legend/SusieLeonRCC_4.png" /> SusieLeonRCC'
                });
var format_SharonMuellerRCC_5 = new ol.format.GeoJSON();
var features_SharonMuellerRCC_5 = format_SharonMuellerRCC_5.readFeatures(json_SharonMuellerRCC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SharonMuellerRCC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SharonMuellerRCC_5.addFeatures(features_SharonMuellerRCC_5);
var lyr_SharonMuellerRCC_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SharonMuellerRCC_5, 
                style: style_SharonMuellerRCC_5,
                popuplayertitle: "SharonMuellerRCC",
                interactive: true,
                    title: '<img src="styles/legend/SharonMuellerRCC_5.png" /> SharonMuellerRCC'
                });
var format_RobertLaethemRCC_6 = new ol.format.GeoJSON();
var features_RobertLaethemRCC_6 = format_RobertLaethemRCC_6.readFeatures(json_RobertLaethemRCC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RobertLaethemRCC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RobertLaethemRCC_6.addFeatures(features_RobertLaethemRCC_6);
var lyr_RobertLaethemRCC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RobertLaethemRCC_6, 
                style: style_RobertLaethemRCC_6,
                popuplayertitle: "RobertLaethemRCC",
                interactive: true,
                    title: '<img src="styles/legend/RobertLaethemRCC_6.png" /> RobertLaethemRCC'
                });
var format_NicoleStirettRCC_7 = new ol.format.GeoJSON();
var features_NicoleStirettRCC_7 = format_NicoleStirettRCC_7.readFeatures(json_NicoleStirettRCC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NicoleStirettRCC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NicoleStirettRCC_7.addFeatures(features_NicoleStirettRCC_7);
var lyr_NicoleStirettRCC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NicoleStirettRCC_7, 
                style: style_NicoleStirettRCC_7,
                popuplayertitle: "NicoleStirettRCC",
                interactive: true,
                    title: '<img src="styles/legend/NicoleStirettRCC_7.png" /> NicoleStirettRCC'
                });
var format_MichelleBaconRCC_8 = new ol.format.GeoJSON();
var features_MichelleBaconRCC_8 = format_MichelleBaconRCC_8.readFeatures(json_MichelleBaconRCC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MichelleBaconRCC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MichelleBaconRCC_8.addFeatures(features_MichelleBaconRCC_8);
var lyr_MichelleBaconRCC_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MichelleBaconRCC_8, 
                style: style_MichelleBaconRCC_8,
                popuplayertitle: "MichelleBaconRCC",
                interactive: true,
                    title: '<img src="styles/legend/MichelleBaconRCC_8.png" /> MichelleBaconRCC'
                });
var format_MeganHockingRCC_9 = new ol.format.GeoJSON();
var features_MeganHockingRCC_9 = format_MeganHockingRCC_9.readFeatures(json_MeganHockingRCC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MeganHockingRCC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MeganHockingRCC_9.addFeatures(features_MeganHockingRCC_9);
var lyr_MeganHockingRCC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MeganHockingRCC_9, 
                style: style_MeganHockingRCC_9,
                popuplayertitle: "MeganHockingRCC",
                interactive: true,
                    title: '<img src="styles/legend/MeganHockingRCC_9.png" /> MeganHockingRCC'
                });
var format_MaryheleneThurburRCC_10 = new ol.format.GeoJSON();
var features_MaryheleneThurburRCC_10 = format_MaryheleneThurburRCC_10.readFeatures(json_MaryheleneThurburRCC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaryheleneThurburRCC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaryheleneThurburRCC_10.addFeatures(features_MaryheleneThurburRCC_10);
var lyr_MaryheleneThurburRCC_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaryheleneThurburRCC_10, 
                style: style_MaryheleneThurburRCC_10,
                popuplayertitle: "MaryheleneThurburRCC",
                interactive: true,
                    title: '<img src="styles/legend/MaryheleneThurburRCC_10.png" /> MaryheleneThurburRCC'
                });
var format_MaryEllenBrownRCC_11 = new ol.format.GeoJSON();
var features_MaryEllenBrownRCC_11 = format_MaryEllenBrownRCC_11.readFeatures(json_MaryEllenBrownRCC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaryEllenBrownRCC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaryEllenBrownRCC_11.addFeatures(features_MaryEllenBrownRCC_11);
var lyr_MaryEllenBrownRCC_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaryEllenBrownRCC_11, 
                style: style_MaryEllenBrownRCC_11,
                popuplayertitle: "MaryEllenBrownRCC",
                interactive: true,
                    title: '<img src="styles/legend/MaryEllenBrownRCC_11.png" /> MaryEllenBrownRCC'
                });
var format_LarryViveritoRCC_12 = new ol.format.GeoJSON();
var features_LarryViveritoRCC_12 = format_LarryViveritoRCC_12.readFeatures(json_LarryViveritoRCC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LarryViveritoRCC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LarryViveritoRCC_12.addFeatures(features_LarryViveritoRCC_12);
var lyr_LarryViveritoRCC_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LarryViveritoRCC_12, 
                style: style_LarryViveritoRCC_12,
                popuplayertitle: "LarryViveritoRCC",
                interactive: true,
                    title: '<img src="styles/legend/LarryViveritoRCC_12.png" /> LarryViveritoRCC'
                });
var format_MindiRomoRCC_13 = new ol.format.GeoJSON();
var features_MindiRomoRCC_13 = format_MindiRomoRCC_13.readFeatures(json_MindiRomoRCC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MindiRomoRCC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MindiRomoRCC_13.addFeatures(features_MindiRomoRCC_13);
var lyr_MindiRomoRCC_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MindiRomoRCC_13, 
                style: style_MindiRomoRCC_13,
                popuplayertitle: "MindiRomoRCC",
                interactive: true,
                    title: '<img src="styles/legend/MindiRomoRCC_13.png" /> MindiRomoRCC'
                });
var format_KirkSwansonRCC_14 = new ol.format.GeoJSON();
var features_KirkSwansonRCC_14 = format_KirkSwansonRCC_14.readFeatures(json_KirkSwansonRCC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KirkSwansonRCC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KirkSwansonRCC_14.addFeatures(features_KirkSwansonRCC_14);
var lyr_KirkSwansonRCC_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KirkSwansonRCC_14, 
                style: style_KirkSwansonRCC_14,
                popuplayertitle: "KirkSwansonRCC",
                interactive: true,
                    title: '<img src="styles/legend/KirkSwansonRCC_14.png" /> KirkSwansonRCC'
                });
var format_KaylaDoenitzRCC_15 = new ol.format.GeoJSON();
var features_KaylaDoenitzRCC_15 = format_KaylaDoenitzRCC_15.readFeatures(json_KaylaDoenitzRCC_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KaylaDoenitzRCC_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KaylaDoenitzRCC_15.addFeatures(features_KaylaDoenitzRCC_15);
var lyr_KaylaDoenitzRCC_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KaylaDoenitzRCC_15, 
                style: style_KaylaDoenitzRCC_15,
                popuplayertitle: "KaylaDoenitzRCC",
                interactive: true,
                    title: '<img src="styles/legend/KaylaDoenitzRCC_15.png" /> KaylaDoenitzRCC'
                });
var format_JoniWebbRCC_16 = new ol.format.GeoJSON();
var features_JoniWebbRCC_16 = format_JoniWebbRCC_16.readFeatures(json_JoniWebbRCC_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JoniWebbRCC_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JoniWebbRCC_16.addFeatures(features_JoniWebbRCC_16);
var lyr_JoniWebbRCC_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JoniWebbRCC_16, 
                style: style_JoniWebbRCC_16,
                popuplayertitle: "JoniWebbRCC",
                interactive: true,
                    title: '<img src="styles/legend/JoniWebbRCC_16.png" /> JoniWebbRCC'
                });
var format_JessicaRudolphRCC_17 = new ol.format.GeoJSON();
var features_JessicaRudolphRCC_17 = format_JessicaRudolphRCC_17.readFeatures(json_JessicaRudolphRCC_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JessicaRudolphRCC_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JessicaRudolphRCC_17.addFeatures(features_JessicaRudolphRCC_17);
var lyr_JessicaRudolphRCC_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JessicaRudolphRCC_17, 
                style: style_JessicaRudolphRCC_17,
                popuplayertitle: "JessicaRudolphRCC",
                interactive: true,
                    title: '<img src="styles/legend/JessicaRudolphRCC_17.png" /> JessicaRudolphRCC'
                });
var format_JessicaLylesRCC_18 = new ol.format.GeoJSON();
var features_JessicaLylesRCC_18 = format_JessicaLylesRCC_18.readFeatures(json_JessicaLylesRCC_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JessicaLylesRCC_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JessicaLylesRCC_18.addFeatures(features_JessicaLylesRCC_18);
var lyr_JessicaLylesRCC_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JessicaLylesRCC_18, 
                style: style_JessicaLylesRCC_18,
                popuplayertitle: "JessicaLylesRCC",
                interactive: true,
                    title: '<img src="styles/legend/JessicaLylesRCC_18.png" /> JessicaLylesRCC'
                });
var format_JessiCadeRCC_19 = new ol.format.GeoJSON();
var features_JessiCadeRCC_19 = format_JessiCadeRCC_19.readFeatures(json_JessiCadeRCC_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JessiCadeRCC_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JessiCadeRCC_19.addFeatures(features_JessiCadeRCC_19);
var lyr_JessiCadeRCC_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JessiCadeRCC_19, 
                style: style_JessiCadeRCC_19,
                popuplayertitle: "JessiCadeRCC",
                interactive: true,
                    title: '<img src="styles/legend/JessiCadeRCC_19.png" /> JessiCadeRCC'
                });
var format_JenniferWoodKellyRCC_20 = new ol.format.GeoJSON();
var features_JenniferWoodKellyRCC_20 = format_JenniferWoodKellyRCC_20.readFeatures(json_JenniferWoodKellyRCC_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenniferWoodKellyRCC_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenniferWoodKellyRCC_20.addFeatures(features_JenniferWoodKellyRCC_20);
var lyr_JenniferWoodKellyRCC_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JenniferWoodKellyRCC_20, 
                style: style_JenniferWoodKellyRCC_20,
                popuplayertitle: "JenniferWoodKellyRCC",
                interactive: true,
                    title: '<img src="styles/legend/JenniferWoodKellyRCC_20.png" /> JenniferWoodKellyRCC'
                });
var format_JenniferLoveRCC_21 = new ol.format.GeoJSON();
var features_JenniferLoveRCC_21 = format_JenniferLoveRCC_21.readFeatures(json_JenniferLoveRCC_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenniferLoveRCC_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenniferLoveRCC_21.addFeatures(features_JenniferLoveRCC_21);
var lyr_JenniferLoveRCC_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JenniferLoveRCC_21, 
                style: style_JenniferLoveRCC_21,
                popuplayertitle: "JenniferLoveRCC",
                interactive: true,
                    title: '<img src="styles/legend/JenniferLoveRCC_21.png" /> JenniferLoveRCC'
                });
var format_JalenCarrilloRCC_22 = new ol.format.GeoJSON();
var features_JalenCarrilloRCC_22 = format_JalenCarrilloRCC_22.readFeatures(json_JalenCarrilloRCC_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalenCarrilloRCC_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalenCarrilloRCC_22.addFeatures(features_JalenCarrilloRCC_22);
var lyr_JalenCarrilloRCC_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalenCarrilloRCC_22, 
                style: style_JalenCarrilloRCC_22,
                popuplayertitle: "JalenCarrilloRCC",
                interactive: true,
                    title: '<img src="styles/legend/JalenCarrilloRCC_22.png" /> JalenCarrilloRCC'
                });
var format_JacobShorkeyRCC_23 = new ol.format.GeoJSON();
var features_JacobShorkeyRCC_23 = format_JacobShorkeyRCC_23.readFeatures(json_JacobShorkeyRCC_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JacobShorkeyRCC_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JacobShorkeyRCC_23.addFeatures(features_JacobShorkeyRCC_23);
var lyr_JacobShorkeyRCC_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JacobShorkeyRCC_23, 
                style: style_JacobShorkeyRCC_23,
                popuplayertitle: "JacobShorkeyRCC",
                interactive: true,
                    title: '<img src="styles/legend/JacobShorkeyRCC_23.png" /> JacobShorkeyRCC'
                });
var format_HelenRayRCC_24 = new ol.format.GeoJSON();
var features_HelenRayRCC_24 = format_HelenRayRCC_24.readFeatures(json_HelenRayRCC_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HelenRayRCC_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HelenRayRCC_24.addFeatures(features_HelenRayRCC_24);
var lyr_HelenRayRCC_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HelenRayRCC_24, 
                style: style_HelenRayRCC_24,
                popuplayertitle: "HelenRayRCC",
                interactive: true,
                    title: '<img src="styles/legend/HelenRayRCC_24.png" /> HelenRayRCC'
                });
var format_ElizabethGradowski_25 = new ol.format.GeoJSON();
var features_ElizabethGradowski_25 = format_ElizabethGradowski_25.readFeatures(json_ElizabethGradowski_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElizabethGradowski_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElizabethGradowski_25.addFeatures(features_ElizabethGradowski_25);
var lyr_ElizabethGradowski_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElizabethGradowski_25, 
                style: style_ElizabethGradowski_25,
                popuplayertitle: "ElizabethGradowski",
                interactive: true,
                    title: '<img src="styles/legend/ElizabethGradowski_25.png" /> ElizabethGradowski'
                });
var format_ConnieAllenRCC_26 = new ol.format.GeoJSON();
var features_ConnieAllenRCC_26 = format_ConnieAllenRCC_26.readFeatures(json_ConnieAllenRCC_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConnieAllenRCC_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConnieAllenRCC_26.addFeatures(features_ConnieAllenRCC_26);
var lyr_ConnieAllenRCC_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConnieAllenRCC_26, 
                style: style_ConnieAllenRCC_26,
                popuplayertitle: "ConnieAllenRCC",
                interactive: true,
                    title: '<img src="styles/legend/ConnieAllenRCC_26.png" /> ConnieAllenRCC'
                });
var format_ColtJonesRCC_27 = new ol.format.GeoJSON();
var features_ColtJonesRCC_27 = format_ColtJonesRCC_27.readFeatures(json_ColtJonesRCC_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColtJonesRCC_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColtJonesRCC_27.addFeatures(features_ColtJonesRCC_27);
var lyr_ColtJonesRCC_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ColtJonesRCC_27, 
                style: style_ColtJonesRCC_27,
                popuplayertitle: "ColtJonesRCC",
                interactive: true,
                    title: '<img src="styles/legend/ColtJonesRCC_27.png" /> ColtJonesRCC'
                });
var format_CharityHillardRCC_28 = new ol.format.GeoJSON();
var features_CharityHillardRCC_28 = format_CharityHillardRCC_28.readFeatures(json_CharityHillardRCC_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CharityHillardRCC_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CharityHillardRCC_28.addFeatures(features_CharityHillardRCC_28);
var lyr_CharityHillardRCC_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CharityHillardRCC_28, 
                style: style_CharityHillardRCC_28,
                popuplayertitle: "CharityHillardRCC",
                interactive: true,
                    title: '<img src="styles/legend/CharityHillardRCC_28.png" /> CharityHillardRCC'
                });
var format_CarterMurlickRCC_29 = new ol.format.GeoJSON();
var features_CarterMurlickRCC_29 = format_CarterMurlickRCC_29.readFeatures(json_CarterMurlickRCC_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CarterMurlickRCC_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CarterMurlickRCC_29.addFeatures(features_CarterMurlickRCC_29);
var lyr_CarterMurlickRCC_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CarterMurlickRCC_29, 
                style: style_CarterMurlickRCC_29,
                popuplayertitle: "CarterMurlickRCC",
                interactive: true,
                    title: '<img src="styles/legend/CarterMurlickRCC_29.png" /> CarterMurlickRCC'
                });
var format_BrandySendersRCC_30 = new ol.format.GeoJSON();
var features_BrandySendersRCC_30 = format_BrandySendersRCC_30.readFeatures(json_BrandySendersRCC_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrandySendersRCC_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrandySendersRCC_30.addFeatures(features_BrandySendersRCC_30);
var lyr_BrandySendersRCC_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BrandySendersRCC_30, 
                style: style_BrandySendersRCC_30,
                popuplayertitle: "BrandySendersRCC",
                interactive: true,
                    title: '<img src="styles/legend/BrandySendersRCC_30.png" /> BrandySendersRCC'
                });
var format_BrandieTaylorRCC_31 = new ol.format.GeoJSON();
var features_BrandieTaylorRCC_31 = format_BrandieTaylorRCC_31.readFeatures(json_BrandieTaylorRCC_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BrandieTaylorRCC_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BrandieTaylorRCC_31.addFeatures(features_BrandieTaylorRCC_31);
var lyr_BrandieTaylorRCC_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BrandieTaylorRCC_31, 
                style: style_BrandieTaylorRCC_31,
                popuplayertitle: "BrandieTaylorRCC",
                interactive: true,
                    title: '<img src="styles/legend/BrandieTaylorRCC_31.png" /> BrandieTaylorRCC'
                });
var format_AmberForemanRCC_32 = new ol.format.GeoJSON();
var features_AmberForemanRCC_32 = format_AmberForemanRCC_32.readFeatures(json_AmberForemanRCC_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmberForemanRCC_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmberForemanRCC_32.addFeatures(features_AmberForemanRCC_32);
var lyr_AmberForemanRCC_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmberForemanRCC_32, 
                style: style_AmberForemanRCC_32,
                popuplayertitle: "Amber ForemanRCC",
                interactive: true,
                    title: '<img src="styles/legend/AmberForemanRCC_32.png" /> Amber ForemanRCC'
                });
var format_AlyssaSwansonRCC_33 = new ol.format.GeoJSON();
var features_AlyssaSwansonRCC_33 = format_AlyssaSwansonRCC_33.readFeatures(json_AlyssaSwansonRCC_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlyssaSwansonRCC_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlyssaSwansonRCC_33.addFeatures(features_AlyssaSwansonRCC_33);
var lyr_AlyssaSwansonRCC_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlyssaSwansonRCC_33, 
                style: style_AlyssaSwansonRCC_33,
                popuplayertitle: "Alyssa SwansonRCC",
                interactive: true,
                    title: '<img src="styles/legend/AlyssaSwansonRCC_33.png" /> Alyssa SwansonRCC'
                });
var format_AbbeyWalkerJoniWebb_34 = new ol.format.GeoJSON();
var features_AbbeyWalkerJoniWebb_34 = format_AbbeyWalkerJoniWebb_34.readFeatures(json_AbbeyWalkerJoniWebb_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbbeyWalkerJoniWebb_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbbeyWalkerJoniWebb_34.addFeatures(features_AbbeyWalkerJoniWebb_34);
var lyr_AbbeyWalkerJoniWebb_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbbeyWalkerJoniWebb_34, 
                style: style_AbbeyWalkerJoniWebb_34,
                popuplayertitle: "AbbeyWalkerJoniWebb",
                interactive: true,
                    title: '<img src="styles/legend/AbbeyWalkerJoniWebb_34.png" /> AbbeyWalkerJoniWebb'
                });
var format_AbbeyWalkerRCC_35 = new ol.format.GeoJSON();
var features_AbbeyWalkerRCC_35 = format_AbbeyWalkerRCC_35.readFeatures(json_AbbeyWalkerRCC_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbbeyWalkerRCC_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbbeyWalkerRCC_35.addFeatures(features_AbbeyWalkerRCC_35);
var lyr_AbbeyWalkerRCC_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbbeyWalkerRCC_35, 
                style: style_AbbeyWalkerRCC_35,
                popuplayertitle: "AbbeyWalkerRCC",
                interactive: true,
                    title: '<img src="styles/legend/AbbeyWalkerRCC_35.png" /> AbbeyWalkerRCC'
                });

lyr_Positronnolabels_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_TonyParsonsRCC_2.setVisible(true);lyr_SuziPapinRCC_3.setVisible(true);lyr_SusieLeonRCC_4.setVisible(true);lyr_SharonMuellerRCC_5.setVisible(true);lyr_RobertLaethemRCC_6.setVisible(true);lyr_NicoleStirettRCC_7.setVisible(true);lyr_MichelleBaconRCC_8.setVisible(true);lyr_MeganHockingRCC_9.setVisible(true);lyr_MaryheleneThurburRCC_10.setVisible(true);lyr_MaryEllenBrownRCC_11.setVisible(true);lyr_LarryViveritoRCC_12.setVisible(true);lyr_MindiRomoRCC_13.setVisible(true);lyr_KirkSwansonRCC_14.setVisible(true);lyr_KaylaDoenitzRCC_15.setVisible(true);lyr_JoniWebbRCC_16.setVisible(true);lyr_JessicaRudolphRCC_17.setVisible(true);lyr_JessicaLylesRCC_18.setVisible(true);lyr_JessiCadeRCC_19.setVisible(true);lyr_JenniferWoodKellyRCC_20.setVisible(true);lyr_JenniferLoveRCC_21.setVisible(true);lyr_JalenCarrilloRCC_22.setVisible(true);lyr_JacobShorkeyRCC_23.setVisible(true);lyr_HelenRayRCC_24.setVisible(true);lyr_ElizabethGradowski_25.setVisible(true);lyr_ConnieAllenRCC_26.setVisible(true);lyr_ColtJonesRCC_27.setVisible(true);lyr_CharityHillardRCC_28.setVisible(true);lyr_CarterMurlickRCC_29.setVisible(true);lyr_BrandySendersRCC_30.setVisible(true);lyr_BrandieTaylorRCC_31.setVisible(true);lyr_AmberForemanRCC_32.setVisible(true);lyr_AlyssaSwansonRCC_33.setVisible(true);lyr_AbbeyWalkerJoniWebb_34.setVisible(true);lyr_AbbeyWalkerRCC_35.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_OSMStandard_1,lyr_TonyParsonsRCC_2,lyr_SuziPapinRCC_3,lyr_SusieLeonRCC_4,lyr_SharonMuellerRCC_5,lyr_RobertLaethemRCC_6,lyr_NicoleStirettRCC_7,lyr_MichelleBaconRCC_8,lyr_MeganHockingRCC_9,lyr_MaryheleneThurburRCC_10,lyr_MaryEllenBrownRCC_11,lyr_LarryViveritoRCC_12,lyr_MindiRomoRCC_13,lyr_KirkSwansonRCC_14,lyr_KaylaDoenitzRCC_15,lyr_JoniWebbRCC_16,lyr_JessicaRudolphRCC_17,lyr_JessicaLylesRCC_18,lyr_JessiCadeRCC_19,lyr_JenniferWoodKellyRCC_20,lyr_JenniferLoveRCC_21,lyr_JalenCarrilloRCC_22,lyr_JacobShorkeyRCC_23,lyr_HelenRayRCC_24,lyr_ElizabethGradowski_25,lyr_ConnieAllenRCC_26,lyr_ColtJonesRCC_27,lyr_CharityHillardRCC_28,lyr_CarterMurlickRCC_29,lyr_BrandySendersRCC_30,lyr_BrandieTaylorRCC_31,lyr_AmberForemanRCC_32,lyr_AlyssaSwansonRCC_33,lyr_AbbeyWalkerJoniWebb_34,lyr_AbbeyWalkerRCC_35];
lyr_TonyParsonsRCC_2.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_SuziPapinRCC_3.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_SusieLeonRCC_4.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_SharonMuellerRCC_5.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_RobertLaethemRCC_6.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_NicoleStirettRCC_7.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_MichelleBaconRCC_8.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_MeganHockingRCC_9.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_MaryheleneThurburRCC_10.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_MaryEllenBrownRCC_11.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_LarryViveritoRCC_12.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_MindiRomoRCC_13.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_KirkSwansonRCC_14.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_KaylaDoenitzRCC_15.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_JoniWebbRCC_16.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_JessicaRudolphRCC_17.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_JessicaLylesRCC_18.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_JessiCadeRCC_19.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_JenniferWoodKellyRCC_20.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_JenniferLoveRCC_21.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_JalenCarrilloRCC_22.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_JacobShorkeyRCC_23.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_HelenRayRCC_24.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_ElizabethGradowski_25.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_ConnieAllenRCC_26.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_ColtJonesRCC_27.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_CharityHillardRCC_28.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_CarterMurlickRCC_29.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_BrandySendersRCC_30.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_BrandieTaylorRCC_31.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_AmberForemanRCC_32.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_AlyssaSwansonRCC_33.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_AbbeyWalkerJoniWebb_34.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_AbbeyWalkerRCC_35.set('fieldAliases', {'ZCTA5CE10': 'ZCTA5CE10', 'AFFGEOID10': 'AFFGEOID10', 'GEOID10': 'GEOID10', 'ALAND10': 'ALAND10', 'AWATER10': 'AWATER10', });
lyr_TonyParsonsRCC_2.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_SuziPapinRCC_3.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_SusieLeonRCC_4.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_SharonMuellerRCC_5.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_RobertLaethemRCC_6.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_NicoleStirettRCC_7.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_MichelleBaconRCC_8.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_MeganHockingRCC_9.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_MaryheleneThurburRCC_10.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_MaryEllenBrownRCC_11.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_LarryViveritoRCC_12.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_MindiRomoRCC_13.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_KirkSwansonRCC_14.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_KaylaDoenitzRCC_15.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_JoniWebbRCC_16.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_JessicaRudolphRCC_17.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_JessicaLylesRCC_18.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_JessiCadeRCC_19.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_JenniferWoodKellyRCC_20.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_JenniferLoveRCC_21.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_JalenCarrilloRCC_22.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_JacobShorkeyRCC_23.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_HelenRayRCC_24.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_ElizabethGradowski_25.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_ConnieAllenRCC_26.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_ColtJonesRCC_27.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_CharityHillardRCC_28.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_CarterMurlickRCC_29.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_BrandySendersRCC_30.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_BrandieTaylorRCC_31.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_AmberForemanRCC_32.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_AlyssaSwansonRCC_33.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_AbbeyWalkerJoniWebb_34.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_AbbeyWalkerRCC_35.set('fieldImages', {'ZCTA5CE10': 'TextEdit', 'AFFGEOID10': 'TextEdit', 'GEOID10': 'TextEdit', 'ALAND10': 'TextEdit', 'AWATER10': 'TextEdit', });
lyr_TonyParsonsRCC_2.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_SuziPapinRCC_3.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_SusieLeonRCC_4.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_SharonMuellerRCC_5.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_RobertLaethemRCC_6.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_NicoleStirettRCC_7.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_MichelleBaconRCC_8.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_MeganHockingRCC_9.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_MaryheleneThurburRCC_10.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_MaryEllenBrownRCC_11.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_LarryViveritoRCC_12.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_MindiRomoRCC_13.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_KirkSwansonRCC_14.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'header label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_KaylaDoenitzRCC_15.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_JoniWebbRCC_16.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'header label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_JessicaRudolphRCC_17.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_JessicaLylesRCC_18.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_JessiCadeRCC_19.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_JenniferWoodKellyRCC_20.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_JenniferLoveRCC_21.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_JalenCarrilloRCC_22.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_JacobShorkeyRCC_23.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_HelenRayRCC_24.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_ElizabethGradowski_25.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_ConnieAllenRCC_26.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_ColtJonesRCC_27.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_CharityHillardRCC_28.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_CarterMurlickRCC_29.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_BrandySendersRCC_30.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_BrandieTaylorRCC_31.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_AmberForemanRCC_32.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_AlyssaSwansonRCC_33.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_AbbeyWalkerJoniWebb_34.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_AbbeyWalkerRCC_35.set('fieldLabels', {'ZCTA5CE10': 'inline label - visible with data', 'AFFGEOID10': 'inline label - visible with data', 'GEOID10': 'inline label - visible with data', 'ALAND10': 'inline label - visible with data', 'AWATER10': 'inline label - visible with data', });
lyr_AbbeyWalkerRCC_35.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});