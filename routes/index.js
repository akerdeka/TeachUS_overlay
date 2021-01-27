var express = require('express');
var router = express.Router();
const { google } = require('googleapis');
const keys = require('./SAD_cle.json');

/* GET home page. */
router.get('/', function (req, res, next) {

    const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets']
    );

    client.authorize(function (err, tokens) {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Connected!');
            gsrun(client, function (data) {
                res.render('index', { title: "Démo Express", data1: data.data1.data.values, data2: data.data2.data.values, data3: data.data3.data.values, data4: data.data4.data.values, data5: data.data5.data.values, data6: data.data6.data.values, data7: data.data7.data.values, data8: data.data8.data.values, data9: data.data9.data.values, data10: data.data10.data.values, data11: data.data11.data.values, data12: data.data12.data.values, data13: data.data13.data.values, data14: data.data14.data.values, data15: data.data15.data.values, data16: data.data16.data.values, data17: data.data17.data.values, data18: data.data18.data.values, data19: data.data19.data.values, data20: data.data20.data.values, data21: data.data21.data.values});
            });
        };
    });

    async function gsrun(cl, cbk) {
        const gsapi = google.sheets({ version: 'v4', auth: cl });
        const opt = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!B2',
        };
        const opt1 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!B3',
        };
        const opt2 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!B4',
        };
        const opt3 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!B5',
        };
        const opt4 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!B6',
        };
        const opt5 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!B7',
        };
        const opt6 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!B8',
        };
        const opt7 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!B9',
        };
        const opt8 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!B10',
        };
        const opt9 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!B11',
        };
        const opt10 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!C2',
        };
        const opt11 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!C3',
        };
        const opt12 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!C4',
        };
        const opt13 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!C5',
        };
        const opt14 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!C6',
        };
        const opt15 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!C7',
        };
        const opt16 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!C8',
        };
        const opt17 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!C9',
        };
        const opt18 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!C10',
        };
        const opt19 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!C11',
        };
        const opt20 = {
            spreadsheetId: '1jRbWZ667aqvXsa_j9ZDAqJiG9FgaS_-4bmiHEDkGWuU',
            range: 'teachus!E2',
        };
        let data1 = await gsapi.spreadsheets.values.get(opt);
        let data2 = await gsapi.spreadsheets.values.get(opt1);
        let data3 = await gsapi.spreadsheets.values.get(opt2);
        let data4 = await gsapi.spreadsheets.values.get(opt3);
        let data5 = await gsapi.spreadsheets.values.get(opt4);
        let data6 = await gsapi.spreadsheets.values.get(opt5);
        let data7 = await gsapi.spreadsheets.values.get(opt6);
        let data8 = await gsapi.spreadsheets.values.get(opt7);
        let data9 = await gsapi.spreadsheets.values.get(opt8);
        let data10 = await gsapi.spreadsheets.values.get(opt9);
        let data11 = await gsapi.spreadsheets.values.get(opt10);
        let data12 = await gsapi.spreadsheets.values.get(opt11);
        let data13 = await gsapi.spreadsheets.values.get(opt12);
        let data14 = await gsapi.spreadsheets.values.get(opt13);
        let data15 = await gsapi.spreadsheets.values.get(opt14);
        let data16 = await gsapi.spreadsheets.values.get(opt15);
        let data17 = await gsapi.spreadsheets.values.get(opt16);
        let data18 = await gsapi.spreadsheets.values.get(opt17);
        let data19 = await gsapi.spreadsheets.values.get(opt18);
        let data20 = await gsapi.spreadsheets.values.get(opt19);
        let data21 = await gsapi.spreadsheets.values.get(opt20);
        var data = {
            data1: data1,
            data2: data2,
            data3: data3,
            data4: data4,
            data5: data5,
            data6: data6,
            data7: data7,
            data8: data8,
            data9: data9,
            data10: data10,
            data11: data11,
            data12: data12,
            data13: data13,
            data14: data14,
            data15: data15,
            data16: data16,
            data17: data17,
            data18: data18,
            data19: data19,
            data20: data20,
            data21: data21
        }
        console.log(data);
        cbk(data);
    };
});

module.exports = router;