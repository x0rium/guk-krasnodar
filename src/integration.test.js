const integration = require("./Integration");

test("parsing", async () => {
    const html = `
<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <title>Лицевой счет №00000000</title>
    <link href="/assets/f5acc5a1/css/bootstrap.css" rel="stylesheet">
<link href="/assets/18ae4bf5/css/kv-grid-expand.min.css" rel="stylesheet">
<link href="/assets/18ae4bf5/css/kv-grid.min.css" rel="stylesheet">
<link href="/assets/737d00bc/dist/css/bootstrap-dialog.min.css" rel="stylesheet">
<link href="/assets/18ae4bf5/css/jquery.resizableColumns.min.css" rel="stylesheet">
<link href="/assets/220eed0f/css/app-scroll-to-top.css" rel="stylesheet">
<link href="/css/style.css" rel="stylesheet">
<style>.bootstrap-dialog .modal-header.bootstrap-dialog-draggable{cursor:move}</style>
<script src="/assets/3e9650cf/js/dialog.min.js"></script>
<script>var kvExpandRow_c3164577 = {"gridId":"w0","hiddenFromExport":true,"detailUrl":"","onDetailLoaded":"","expandIcon":"<span class=\\"glyphicon glyphicon-expand\\"></span>","collapseIcon":"<span class=\\"glyphicon glyphicon-collapse-down\\"></span>","expandTitle":"Expand","collapseTitle":"Collapse","expandAllTitle":"Expand All","collapseAllTitle":"Collapse All","rowCssClass":"info","animationDuration":"slow","expandOneOnly":true,"enableRowClick":true,"enableCache":true,"rowClickExcludedTags":["A","BUTTON","INPUT"],"collapseAll":false,"expandAll":false,"extraData":[]};

var krajeeDialogDefaults_71c625b2 = {"alert":{"type":"type-info","title":"Information","buttonLabel":"<span class=\\"glyphicon glyphicon-ok\\"></span> Ok"},"confirm":{"type":"type-warning","title":"Confirmation","btnOKClass":"btn-warning","btnOKLabel":"<span class=\\"glyphicon glyphicon-ok\\"></span> Ok","btnCancelLabel":"<span class=\\"glyphicon glyphicon-ban-circle\\"></span> Cancel"},"prompt":{"draggable":false,"title":"Information","buttons":[{"label":"Cancel","icon":"glyphicon glyphicon-ban-circle"},{"label":"Ok","icon":"glyphicon glyphicon-ok","cssClass":"btn-primary"}],"closable":false},"dialog":{"draggable":true,"title":"Information","buttons":[{"label":"Cancel","icon":"glyphicon glyphicon-ban-circle"},{"label":"Ok","icon":"glyphicon glyphicon-ok","cssClass":"btn-primary"}]}};
var krajeeDialog_e48a4427 = {"id":"w1"};
var krajeeDialog=new KrajeeDialog(true,krajeeDialog_e48a4427,krajeeDialogDefaults_71c625b2);
var kvGridExp_e0dd3dff={"gridId":"w0","target":"_blank","messages":{"allowPopups":"Disable any popup blockers in your browser to ensure proper download.","confirmDownload":"Ok to proceed?","downloadProgress":"Generating the export file. Please wait...","downloadComplete":"Request submitted! You may safely close this dialog after saving your downloaded file."},"exportConversions":[{"from":"<span class=\\"glyphicon glyphicon-ok text-success\\"></span>","to":"Active"},{"from":"<span class=\\"glyphicon glyphicon-remove text-danger\\"></span>","to":"Inactive"}],"showConfirmAlert":true};
var kvGridExp_12735912={"filename":"grid-export","showHeader":true,"showPageSummary":true,"showFooter":true};
var kvGridExp_fb069215={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_e0dd3dff,"genOpts":kvGridExp_12735912,"alertMsg":"The HTML export file will be generated for download.","config":{"cssFile":"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"}};
var kvGridExp_158f4d98={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_e0dd3dff,"genOpts":kvGridExp_12735912,"alertMsg":"The CSV export file will be generated for download.","config":{"colDelimiter":",","rowDelimiter":"\\r\\n"}};
var kvGridExp_0a35c183={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_e0dd3dff,"genOpts":kvGridExp_12735912,"alertMsg":"The TEXT export file will be generated for download.","config":{"colDelimiter":"\\t","rowDelimiter":"\\r\\n"}};
var kvGridExp_368e0eaa={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_e0dd3dff,"genOpts":kvGridExp_12735912,"alertMsg":"The EXCEL export file will be generated for download.","config":{"worksheet":"ExportWorksheet","cssFile":""}};
var kvGridExp_7099573b={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_e0dd3dff,"genOpts":kvGridExp_12735912,"alertMsg":"The PDF export file will be generated for download.","config":{"mode":"UTF-8","format":"A4-L","destination":"D","marginTop":20,"marginBottom":20,"cssInline":".kv-wrap{padding:20px;}.kv-align-center{text-align:center;}.kv-align-left{text-align:left;}.kv-align-right{text-align:right;}.kv-align-top{vertical-align:top!important;}.kv-align-bottom{vertical-align:bottom!important;}.kv-align-middle{vertical-align:middle!important;}.kv-page-summary{border-top:4px double #ddd;font-weight: bold;}.kv-table-footer{border-top:4px double #ddd;font-weight: bold;}.kv-table-caption{font-size:1.5em;padding:8px;border:1px solid #ddd;border-bottom:none;}","methods":{"SetHeader":[{"odd":{"L":{"content":"Yii2 Grid Export (PDF)","font-size":8,"color":"#333333"},"C":{"content":"Grid Export","font-size":16,"color":"#333333"},"R":{"content":"Generated: Thu, 01-Oct-2020 10:48 pm +03","font-size":8,"color":"#333333"}},"even":{"L":{"content":"Yii2 Grid Export (PDF)","font-size":8,"color":"#333333"},"C":{"content":"Grid Export","font-size":16,"color":"#333333"},"R":{"content":"Generated: Thu, 01-Oct-2020 10:48 pm +03","font-size":8,"color":"#333333"}}}],"SetFooter":[{"odd":{"L":{"content":"© Krajee Yii2 Extensions","font-size":8,"font-style":"B","color":"#999999"},"R":{"content":"[ {PAGENO} ]","font-size":10,"font-style":"B","font-family":"serif","color":"#333333"},"line":true},"even":{"L":{"content":"© Krajee Yii2 Extensions","font-size":8,"font-style":"B","color":"#999999"},"R":{"content":"[ {PAGENO} ]","font-size":10,"font-style":"B","font-family":"serif","color":"#333333"},"line":true}}]},"options":{"title":"Grid Export","subject":"PDF export generated by kartik-v/yii2-grid extension","keywords":"krajee, grid, export, yii2-grid, pdf"},"contentBefore":"","contentAfter":""}};
var kvGridExp_6463fc66={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_e0dd3dff,"genOpts":kvGridExp_12735912,"alertMsg":"The JSON export file will be generated for download.","config":{"colHeads":[],"slugColHeads":false,"jsonReplacer":function(k,v){return typeof(v)==='string'?$.trim(v):v},"indentSpace":4}};
var krajeeDialog_f8382620 = {"id":"w5"};
var krajeeDialog=new KrajeeDialog(true,krajeeDialog_f8382620,krajeeDialogDefaults_71c625b2);
var kvGridExp_1fea5130={"gridId":"w4","target":"_blank","messages":{"allowPopups":"Disable any popup blockers in your browser to ensure proper download.","confirmDownload":"Ok to proceed?","downloadProgress":"Generating the export file. Please wait...","downloadComplete":"Request submitted! You may safely close this dialog after saving your downloaded file."},"exportConversions":[{"from":"<span class=\\"glyphicon glyphicon-ok text-success\\"></span>","to":"Active"},{"from":"<span class=\\"glyphicon glyphicon-remove text-danger\\"></span>","to":"Inactive"}],"showConfirmAlert":true};
var kvGridExp_de0ea509={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_1fea5130,"genOpts":kvGridExp_12735912,"alertMsg":"The HTML export file will be generated for download.","config":{"cssFile":"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"}};
var kvGridExp_5e58fbe7={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_1fea5130,"genOpts":kvGridExp_12735912,"alertMsg":"The CSV export file will be generated for download.","config":{"colDelimiter":",","rowDelimiter":"\\r\\n"}};
var kvGridExp_9709013f={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_1fea5130,"genOpts":kvGridExp_12735912,"alertMsg":"The TEXT export file will be generated for download.","config":{"colDelimiter":"\\t","rowDelimiter":"\\r\\n"}};
var kvGridExp_f9090bb6={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_1fea5130,"genOpts":kvGridExp_12735912,"alertMsg":"The EXCEL export file will be generated for download.","config":{"worksheet":"ExportWorksheet","cssFile":""}};
var kvGridExp_58de4a2f={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_1fea5130,"genOpts":kvGridExp_12735912,"alertMsg":"The PDF export file will be generated for download.","config":{"mode":"UTF-8","format":"A4-L","destination":"D","marginTop":20,"marginBottom":20,"cssInline":".kv-wrap{padding:20px;}.kv-align-center{text-align:center;}.kv-align-left{text-align:left;}.kv-align-right{text-align:right;}.kv-align-top{vertical-align:top!important;}.kv-align-bottom{vertical-align:bottom!important;}.kv-align-middle{vertical-align:middle!important;}.kv-page-summary{border-top:4px double #ddd;font-weight: bold;}.kv-table-footer{border-top:4px double #ddd;font-weight: bold;}.kv-table-caption{font-size:1.5em;padding:8px;border:1px solid #ddd;border-bottom:none;}","methods":{"SetHeader":[{"odd":{"L":{"content":"Yii2 Grid Export (PDF)","font-size":8,"color":"#333333"},"C":{"content":"Grid Export","font-size":16,"color":"#333333"},"R":{"content":"Generated: Thu, 01-Oct-2020 10:48 pm +03","font-size":8,"color":"#333333"}},"even":{"L":{"content":"Yii2 Grid Export (PDF)","font-size":8,"color":"#333333"},"C":{"content":"Grid Export","font-size":16,"color":"#333333"},"R":{"content":"Generated: Thu, 01-Oct-2020 10:48 pm +03","font-size":8,"color":"#333333"}}}],"SetFooter":[{"odd":{"L":{"content":"© Krajee Yii2 Extensions","font-size":8,"font-style":"B","color":"#999999"},"R":{"content":"[ {PAGENO} ]","font-size":10,"font-style":"B","font-family":"serif","color":"#333333"},"line":true},"even":{"L":{"content":"© Krajee Yii2 Extensions","font-size":8,"font-style":"B","color":"#999999"},"R":{"content":"[ {PAGENO} ]","font-size":10,"font-style":"B","font-family":"serif","color":"#333333"},"line":true}}]},"options":{"title":"Grid Export","subject":"PDF export generated by kartik-v/yii2-grid extension","keywords":"krajee, grid, export, yii2-grid, pdf"},"contentBefore":"","contentAfter":""}};
var kvGridExp_a0d33f7e={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_1fea5130,"genOpts":kvGridExp_12735912,"alertMsg":"The JSON export file will be generated for download.","config":{"colHeads":[],"slugColHeads":false,"jsonReplacer":function(k,v){return typeof(v)==='string'?$.trim(v):v},"indentSpace":4}};
var krajeeDialog_dcee8129 = {"id":"w9"};
var krajeeDialog=new KrajeeDialog(true,krajeeDialog_dcee8129,krajeeDialogDefaults_71c625b2);
var kvGridExp_a9af2465={"gridId":"w8","target":"_blank","messages":{"allowPopups":"Disable any popup blockers in your browser to ensure proper download.","confirmDownload":"Ok to proceed?","downloadProgress":"Generating the export file. Please wait...","downloadComplete":"Request submitted! You may safely close this dialog after saving your downloaded file."},"exportConversions":[{"from":"<span class=\\"glyphicon glyphicon-ok text-success\\"></span>","to":"Active"},{"from":"<span class=\\"glyphicon glyphicon-remove text-danger\\"></span>","to":"Inactive"}],"showConfirmAlert":true};
var kvGridExp_f0b74a16={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_a9af2465,"genOpts":kvGridExp_12735912,"alertMsg":"The HTML export file will be generated for download.","config":{"cssFile":"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"}};
var kvGridExp_538abf1b={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_a9af2465,"genOpts":kvGridExp_12735912,"alertMsg":"The CSV export file will be generated for download.","config":{"colDelimiter":",","rowDelimiter":"\\r\\n"}};
var kvGridExp_2674daf6={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_a9af2465,"genOpts":kvGridExp_12735912,"alertMsg":"The TEXT export file will be generated for download.","config":{"colDelimiter":"\\t","rowDelimiter":"\\r\\n"}};
var kvGridExp_2bbff16a={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_a9af2465,"genOpts":kvGridExp_12735912,"alertMsg":"The EXCEL export file will be generated for download.","config":{"worksheet":"ExportWorksheet","cssFile":""}};
var kvGridExp_f0de0355={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_a9af2465,"genOpts":kvGridExp_12735912,"alertMsg":"The PDF export file will be generated for download.","config":{"mode":"UTF-8","format":"A4-L","destination":"D","marginTop":20,"marginBottom":20,"cssInline":".kv-wrap{padding:20px;}.kv-align-center{text-align:center;}.kv-align-left{text-align:left;}.kv-align-right{text-align:right;}.kv-align-top{vertical-align:top!important;}.kv-align-bottom{vertical-align:bottom!important;}.kv-align-middle{vertical-align:middle!important;}.kv-page-summary{border-top:4px double #ddd;font-weight: bold;}.kv-table-footer{border-top:4px double #ddd;font-weight: bold;}.kv-table-caption{font-size:1.5em;padding:8px;border:1px solid #ddd;border-bottom:none;}","methods":{"SetHeader":[{"odd":{"L":{"content":"Yii2 Grid Export (PDF)","font-size":8,"color":"#333333"},"C":{"content":"Grid Export","font-size":16,"color":"#333333"},"R":{"content":"Generated: Thu, 01-Oct-2020 10:48 pm +03","font-size":8,"color":"#333333"}},"even":{"L":{"content":"Yii2 Grid Export (PDF)","font-size":8,"color":"#333333"},"C":{"content":"Grid Export","font-size":16,"color":"#333333"},"R":{"content":"Generated: Thu, 01-Oct-2020 10:48 pm +03","font-size":8,"color":"#333333"}}}],"SetFooter":[{"odd":{"L":{"content":"© Krajee Yii2 Extensions","font-size":8,"font-style":"B","color":"#999999"},"R":{"content":"[ {PAGENO} ]","font-size":10,"font-style":"B","font-family":"serif","color":"#333333"},"line":true},"even":{"L":{"content":"© Krajee Yii2 Extensions","font-size":8,"font-style":"B","color":"#999999"},"R":{"content":"[ {PAGENO} ]","font-size":10,"font-style":"B","font-family":"serif","color":"#333333"},"line":true}}]},"options":{"title":"Grid Export","subject":"PDF export generated by kartik-v/yii2-grid extension","keywords":"krajee, grid, export, yii2-grid, pdf"},"contentBefore":"","contentAfter":""}};
var kvGridExp_83f1b8b5={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_a9af2465,"genOpts":kvGridExp_12735912,"alertMsg":"The JSON export file will be generated for download.","config":{"colHeads":[],"slugColHeads":false,"jsonReplacer":function(k,v){return typeof(v)==='string'?$.trim(v):v},"indentSpace":4}};
var krajeeDialog_1a77a252 = {"id":"w13"};
var krajeeDialog=new KrajeeDialog(true,krajeeDialog_1a77a252,krajeeDialogDefaults_71c625b2);
var kvGridExp_f1a0e99d={"gridId":"w12","target":"_blank","messages":{"allowPopups":"Disable any popup blockers in your browser to ensure proper download.","confirmDownload":"Ok to proceed?","downloadProgress":"Generating the export file. Please wait...","downloadComplete":"Request submitted! You may safely close this dialog after saving your downloaded file."},"exportConversions":[{"from":"<span class=\\"glyphicon glyphicon-ok text-success\\"></span>","to":"Active"},{"from":"<span class=\\"glyphicon glyphicon-remove text-danger\\"></span>","to":"Inactive"}],"showConfirmAlert":true};
var kvGridExp_f5ade9ea={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_f1a0e99d,"genOpts":kvGridExp_12735912,"alertMsg":"The HTML export file will be generated for download.","config":{"cssFile":"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"}};
var kvGridExp_12fbcddf={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_f1a0e99d,"genOpts":kvGridExp_12735912,"alertMsg":"The CSV export file will be generated for download.","config":{"colDelimiter":",","rowDelimiter":"\\r\\n"}};
var kvGridExp_d2c743e8={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_f1a0e99d,"genOpts":kvGridExp_12735912,"alertMsg":"The TEXT export file will be generated for download.","config":{"colDelimiter":"\\t","rowDelimiter":"\\r\\n"}};
var kvGridExp_5d131ea1={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_f1a0e99d,"genOpts":kvGridExp_12735912,"alertMsg":"The EXCEL export file will be generated for download.","config":{"worksheet":"ExportWorksheet","cssFile":""}};
var kvGridExp_e6046faa={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_f1a0e99d,"genOpts":kvGridExp_12735912,"alertMsg":"The PDF export file will be generated for download.","config":{"mode":"UTF-8","format":"A4-L","destination":"D","marginTop":20,"marginBottom":20,"cssInline":".kv-wrap{padding:20px;}.kv-align-center{text-align:center;}.kv-align-left{text-align:left;}.kv-align-right{text-align:right;}.kv-align-top{vertical-align:top!important;}.kv-align-bottom{vertical-align:bottom!important;}.kv-align-middle{vertical-align:middle!important;}.kv-page-summary{border-top:4px double #ddd;font-weight: bold;}.kv-table-footer{border-top:4px double #ddd;font-weight: bold;}.kv-table-caption{font-size:1.5em;padding:8px;border:1px solid #ddd;border-bottom:none;}","methods":{"SetHeader":[{"odd":{"L":{"content":"Yii2 Grid Export (PDF)","font-size":8,"color":"#333333"},"C":{"content":"Grid Export","font-size":16,"color":"#333333"},"R":{"content":"Generated: Thu, 01-Oct-2020 10:48 pm +03","font-size":8,"color":"#333333"}},"even":{"L":{"content":"Yii2 Grid Export (PDF)","font-size":8,"color":"#333333"},"C":{"content":"Grid Export","font-size":16,"color":"#333333"},"R":{"content":"Generated: Thu, 01-Oct-2020 10:48 pm +03","font-size":8,"color":"#333333"}}}],"SetFooter":[{"odd":{"L":{"content":"© Krajee Yii2 Extensions","font-size":8,"font-style":"B","color":"#999999"},"R":{"content":"[ {PAGENO} ]","font-size":10,"font-style":"B","font-family":"serif","color":"#333333"},"line":true},"even":{"L":{"content":"© Krajee Yii2 Extensions","font-size":8,"font-style":"B","color":"#999999"},"R":{"content":"[ {PAGENO} ]","font-size":10,"font-style":"B","font-family":"serif","color":"#333333"},"line":true}}]},"options":{"title":"Grid Export","subject":"PDF export generated by kartik-v/yii2-grid extension","keywords":"krajee, grid, export, yii2-grid, pdf"},"contentBefore":"","contentAfter":""}};
var kvGridExp_b7e33118={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_f1a0e99d,"genOpts":kvGridExp_12735912,"alertMsg":"The JSON export file will be generated for download.","config":{"colHeads":[],"slugColHeads":false,"jsonReplacer":function(k,v){return typeof(v)==='string'?$.trim(v):v},"indentSpace":4}};
var krajeeDialog_06c5c055 = {"id":"w17"};
var krajeeDialog=new KrajeeDialog(true,krajeeDialog_06c5c055,krajeeDialogDefaults_71c625b2);
var kvGridExp_0e978552={"gridId":"w16","target":"_blank","messages":{"allowPopups":"Disable any popup blockers in your browser to ensure proper download.","confirmDownload":"Ok to proceed?","downloadProgress":"Generating the export file. Please wait...","downloadComplete":"Request submitted! You may safely close this dialog after saving your downloaded file."},"exportConversions":[{"from":"<span class=\\"glyphicon glyphicon-ok text-success\\"></span>","to":"Active"},{"from":"<span class=\\"glyphicon glyphicon-remove text-danger\\"></span>","to":"Inactive"}],"showConfirmAlert":true};
var kvGridExp_98334b7a={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_0e978552,"genOpts":kvGridExp_12735912,"alertMsg":"The HTML export file will be generated for download.","config":{"cssFile":"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"}};
var kvGridExp_a9537984={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_0e978552,"genOpts":kvGridExp_12735912,"alertMsg":"The CSV export file will be generated for download.","config":{"colDelimiter":",","rowDelimiter":"\\r\\n"}};
var kvGridExp_aed77647={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_0e978552,"genOpts":kvGridExp_12735912,"alertMsg":"The TEXT export file will be generated for download.","config":{"colDelimiter":"\\t","rowDelimiter":"\\r\\n"}};
var kvGridExp_30c63d6d={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_0e978552,"genOpts":kvGridExp_12735912,"alertMsg":"The EXCEL export file will be generated for download.","config":{"worksheet":"ExportWorksheet","cssFile":""}};
var kvGridExp_d02f267e={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_0e978552,"genOpts":kvGridExp_12735912,"alertMsg":"The PDF export file will be generated for download.","config":{"mode":"UTF-8","format":"A4-L","destination":"D","marginTop":20,"marginBottom":20,"cssInline":".kv-wrap{padding:20px;}.kv-align-center{text-align:center;}.kv-align-left{text-align:left;}.kv-align-right{text-align:right;}.kv-align-top{vertical-align:top!important;}.kv-align-bottom{vertical-align:bottom!important;}.kv-align-middle{vertical-align:middle!important;}.kv-page-summary{border-top:4px double #ddd;font-weight: bold;}.kv-table-footer{border-top:4px double #ddd;font-weight: bold;}.kv-table-caption{font-size:1.5em;padding:8px;border:1px solid #ddd;border-bottom:none;}","methods":{"SetHeader":[{"odd":{"L":{"content":"Yii2 Grid Export (PDF)","font-size":8,"color":"#333333"},"C":{"content":"Grid Export","font-size":16,"color":"#333333"},"R":{"content":"Generated: Thu, 01-Oct-2020 10:48 pm +03","font-size":8,"color":"#333333"}},"even":{"L":{"content":"Yii2 Grid Export (PDF)","font-size":8,"color":"#333333"},"C":{"content":"Grid Export","font-size":16,"color":"#333333"},"R":{"content":"Generated: Thu, 01-Oct-2020 10:48 pm +03","font-size":8,"color":"#333333"}}}],"SetFooter":[{"odd":{"L":{"content":"© Krajee Yii2 Extensions","font-size":8,"font-style":"B","color":"#999999"},"R":{"content":"[ {PAGENO} ]","font-size":10,"font-style":"B","font-family":"serif","color":"#333333"},"line":true},"even":{"L":{"content":"© Krajee Yii2 Extensions","font-size":8,"font-style":"B","color":"#999999"},"R":{"content":"[ {PAGENO} ]","font-size":10,"font-style":"B","font-family":"serif","color":"#333333"},"line":true}}]},"options":{"title":"Grid Export","subject":"PDF export generated by kartik-v/yii2-grid extension","keywords":"krajee, grid, export, yii2-grid, pdf"},"contentBefore":"","contentAfter":""}};
var kvGridExp_145b0652={"dialogLib":"krajeeDialog","gridOpts":kvGridExp_0e978552,"genOpts":kvGridExp_12735912,"alertMsg":"The JSON export file will be generated for download.","config":{"colHeads":[],"slugColHeads":false,"jsonReplacer":function(k,v){return typeof(v)==='string'?$.trim(v):v},"indentSpace":4}};</script>    <meta name="csrf-param" content="_csrf">
    <meta name="csrf-token" content="H1yVPSPMCPG33p-SMnboHEO4zHk14sQ8N5hZHfV0C3tmG7hJF7pYucPrq9RUBp0xOYCmMHqojVFG3ygshytASw==">
</head>
<body>
    <div class="wrap">
    <nav id="w20" class="navbar-default navbar-fixed-top navbar"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#w20-collapse"><span class="sr-only">Toggle navigation</span>
<span class="icon-bar"></span>
<span class="icon-bar"></span>
<span class="icon-bar"></span></button><a class="navbar-brand" href="/lite/account"><img src="/frontend/web/img/guklogo40.png" alt="ГУК-Краснодар"></a></div><div id="w20-collapse" class="collapse navbar-collapse">    <ul id="w21" class="navbar-nav navbar-right nav"><li><a href="http://gukkrasnodar.ru/2013-03-19-10-37-01">Способы оплаты</a></li>
<li><a href="/user/sign-in/signup">Signup</a></li>
<li><a href="/user/sign-in/login">Login</a></li></ul>    </div></div></nav>        <div class="container">

        
        
        <div class="cabinet-default-index">
\t\t\t<h2>Лицевой счет №040036610</h2>
\t\t\t<h4>ул.им. Игнатова, д.16 кв.351</h4>
<div class="container">
\t<div class="row">
        <div class="col-xs-12 col-sm-8 col-md-8">
            <a class="btn btn-primary" href="/lite"><< К поиску лицевых счетов</a>        </div>
\t\t<div class="col-xs-12 col-sm-8 col-md-8">
            <h4>Приборы учета</h4>
<div id="w0" class="grid-view hide-resize" data-krajee-grid="kvGridInit_6b1f2f34"><div id="w0-container" class="table-responsive kv-grid-container"><table class="kv-grid-table table table-bordered table-striped"><colgroup><col>
<col>
<col>
<col class="skip-export"></colgroup>
<thead>

<tr><th style="white-space: normal;" data-col-seq="0"></th><th data-col-seq="1">Номер ПУ</th><th style="white-space: normal;" data-col-seq="2">Дата следующей поверки</th><th class="kv-align-center kv-align-middle skip-export kv-expand-header-cell kv-batch-toggle" title="Expand All" style="width:50px;" data-col-seq="3"><div class='kv-expand-header-icon kv-state-collapsed'><span class="glyphicon glyphicon-expand"></span></div></th></tr>

</thead>
<tbody>
<tr data-key="38617"><td data-col-seq="0"><strong>Холодная вода</strong></td><td data-col-seq="1">249709</td><td data-col-seq="2">21.02.2021 г.</td><td class="skip-export kv-align-center kv-align-middle kv-expand-icon-cell" title="Expand" style="width:50px;" data-col-seq="3">        <div class="kv-expand-row w0">
            <div class="kv-expand-icon kv-state-expanded w0"><span class="glyphicon glyphicon-expand"></span></div>
            <div class="kv-expand-detail skip-export w0" style="display:none;">
                <div class="skip-export kv-expanded-row w0" data-index="0" data-key="38617">
<h4>Показания по прибору учета</h4>


\t\t<div class="col-xs-12 col-sm-4 col-md-6">
        \t            <div id="w4" class="grid-view hide-resize" data-krajee-grid="kvGridInit_d64bf6e0"><div id="w4-container" class="table-responsive kv-grid-container"><table class="kv-grid-table table table-bordered table-striped"><thead>

<tr><th data-col-seq="0">Дата</th><th data-col-seq="1">Показания</th></tr>

</thead>
<tbody>
<tr data-key="38451"><td data-col-seq="0">August 2020</td><td data-col-seq="1">584</td></tr>
</tbody></table></div></div>            
\t\t</div>
\t\t<div class="col-xs-2 col-md-2">
\t\t\t<a class="btn btn-primary" href="/lite/read/create?ids=38617">Внести показания</a>\t\t</div>
</div>
            </div>
        </div></td></tr>
<tr data-key="38618"><td data-col-seq="0"><strong>Горячая вода</strong></td><td data-col-seq="1">4000013</td><td data-col-seq="2">21.02.2021 г.</td><td class="skip-export kv-align-center kv-align-middle kv-expand-icon-cell" title="Expand" style="width:50px;" data-col-seq="3">        <div class="kv-expand-row w0">
            <div class="kv-expand-icon kv-state-expanded w0"><span class="glyphicon glyphicon-expand"></span></div>
            <div class="kv-expand-detail skip-export w0" style="display:none;">
                <div class="skip-export kv-expanded-row w0" data-index="1" data-key="38618">
<h4>Показания по прибору учета</h4>


\t\t<div class="col-xs-12 col-sm-4 col-md-6">
        \t            <div id="w8" class="grid-view hide-resize" data-krajee-grid="kvGridInit_29aa5ff0"><div id="w8-container" class="table-responsive kv-grid-container"><table class="kv-grid-table table table-bordered table-striped"><thead>

<tr><th data-col-seq="0">Дата</th><th data-col-seq="1">Показания</th></tr>

</thead>
<tbody>
<tr data-key="38452"><td data-col-seq="0">August 2020</td><td data-col-seq="1">294</td></tr>
</tbody></table></div></div>            
\t\t</div>
\t\t<div class="col-xs-2 col-md-2">
\t\t\t<a class="btn btn-primary" href="/lite/read/create?ids=38618">Внести показания</a>\t\t</div>
</div>
            </div>
        </div></td></tr>
<tr data-key="38619"><td data-col-seq="0"><strong>Горячая вода</strong></td><td data-col-seq="1">52871</td><td data-col-seq="2">06.02.2023 г.</td><td class="skip-export kv-align-center kv-align-middle kv-expand-icon-cell" title="Expand" style="width:50px;" data-col-seq="3">        <div class="kv-expand-row w0">
            <div class="kv-expand-icon kv-state-expanded w0"><span class="glyphicon glyphicon-expand"></span></div>
            <div class="kv-expand-detail skip-export w0" style="display:none;">
                <div class="skip-export kv-expanded-row w0" data-index="2" data-key="38619">
<h4>Показания по прибору учета</h4>


\t\t<div class="col-xs-12 col-sm-4 col-md-6">
        \t            <div id="w12" class="grid-view hide-resize" data-krajee-grid="kvGridInit_8d8996b4"><div id="w12-container" class="table-responsive kv-grid-container"><table class="kv-grid-table table table-bordered table-striped"><thead>

<tr><th data-col-seq="0">Дата</th><th data-col-seq="1">Показания</th></tr>

</thead>
<tbody>
<tr data-key="38453"><td data-col-seq="0">August 2020</td><td data-col-seq="1">50</td></tr>
</tbody></table></div></div>            
\t\t</div>
\t\t<div class="col-xs-2 col-md-2">
\t\t\t<a class="btn btn-primary" href="/lite/read/create?ids=38619">Внести показания</a>\t\t</div>
</div>
            </div>
        </div></td></tr>
<tr data-key="38620"><td data-col-seq="0"><strong>Холодная вода</strong></td><td data-col-seq="1">55872</td><td data-col-seq="2">06.02.2023 г.</td><td class="skip-export kv-align-center kv-align-middle kv-expand-icon-cell" title="Expand" style="width:50px;" data-col-seq="3">        <div class="kv-expand-row w0">
            <div class="kv-expand-icon kv-state-expanded w0"><span class="glyphicon glyphicon-expand"></span></div>
            <div class="kv-expand-detail skip-export w0" style="display:none;">
                <div class="skip-export kv-expanded-row w0" data-index="3" data-key="38620">
<h4>Показания по прибору учета</h4>


\t\t<div class="col-xs-12 col-sm-4 col-md-6">
        \t            <div id="w16" class="grid-view hide-resize" data-krajee-grid="kvGridInit_f3d8b07d"><div id="w16-container" class="table-responsive kv-grid-container"><table class="kv-grid-table table table-bordered table-striped"><thead>

<tr><th data-col-seq="0">Дата</th><th data-col-seq="1">Показания</th></tr>

</thead>
<tbody>
<tr data-key="38454"><td data-col-seq="0">August 2020</td><td data-col-seq="1">68</td></tr>
</tbody></table></div></div>            
\t\t</div>
\t\t<div class="col-xs-2 col-md-2">
\t\t\t<a class="btn btn-primary" href="/lite/read/create?ids=38620">Внести показания</a>\t\t</div>
</div>
            </div>
        </div></td></tr>
</tbody></table></div></div>\t\t</div>
\t</div>
    <div class="row">
        <div class="col-xs-12 col-md-8 visible-xs">
            <br>
        </div>
    </div>
</div>
</div>

    </div>
<a class="scroll-to-top-link" href="#wrapper" style="display: none;"></a></div>

<footer class="footer">
    <div class="container">
        <p class="pull-left">&copy; ООО "ГУК-Краснодар" 2020</p>
        <p class="pull-right">Версия 1.5.18 от 18.05.2020</p>
    </div>
</footer>
<script src="/assets/c2a1fbf9/jquery.js"></script>
<script src="/assets/18ae4bf5/js/kv-grid-expand.min.js"></script>
<script src="/assets/f5acc5a1/js/bootstrap.js"></script>
<script src="/assets/737d00bc/dist/js/bootstrap-dialog.min.js"></script>
<script src="/assets/45047fd9/yii.js"></script>
<script src="/assets/3e9650cf/js/dialog-yii.min.js"></script>
<script src="/assets/18ae4bf5/js/kv-grid-export.min.js"></script>
<script src="/assets/18ae4bf5/js/jquery.resizableColumns.min.js"></script>
<script src="/assets/45047fd9/yii.gridView.js"></script>
<script src="/assets/2b3d1baa/jquery.scrollToTop.min.js"></script>
<script src="/assets/220eed0f/js/app-scroll-to-top.js"></script>
<!--[if lt IE 9]>
<script src="/assets/447f6348/dist/html5shiv.min.js"></script>
<![endif]-->
<script src="/js/app.js"></script>
<script>jQuery(function ($) {
kvExpandRow(kvExpandRow_c3164577);
krajeeYiiConfirm('krajeeDialog');
var kvGridInit_6b1f2f34=function(){
jQuery('#w0 .export-html').gridexport(kvGridExp_fb069215);jQuery('#w0 .export-csv').gridexport(kvGridExp_158f4d98);jQuery('#w0 .export-txt').gridexport(kvGridExp_0a35c183);jQuery('#w0 .export-xls').gridexport(kvGridExp_368e0eaa);jQuery('#w0 .export-pdf').gridexport(kvGridExp_7099573b);jQuery('#w0 .export-json').gridexport(kvGridExp_6463fc66);jQuery("#w0-container").resizableColumns('destroy').resizableColumns({"store":null,"resizeFromBody":false});
};
kvGridInit_6b1f2f34();
jQuery('#w2').dropdown();
jQuery('#w0').yiiGridView({"filterUrl":"\\/lite\\/account","filterSelector":"#w0-filters input, #w0-filters select"});
var kvGridInit_d64bf6e0=function(){
jQuery('#w4 .export-html').gridexport(kvGridExp_de0ea509);jQuery('#w4 .export-csv').gridexport(kvGridExp_5e58fbe7);jQuery('#w4 .export-txt').gridexport(kvGridExp_9709013f);jQuery('#w4 .export-xls').gridexport(kvGridExp_f9090bb6);jQuery('#w4 .export-pdf').gridexport(kvGridExp_58de4a2f);jQuery('#w4 .export-json').gridexport(kvGridExp_a0d33f7e);jQuery("#w4-container").resizableColumns('destroy').resizableColumns({"store":null,"resizeFromBody":false});
};
kvGridInit_d64bf6e0();
jQuery('#w6').dropdown();
jQuery('#w4').yiiGridView({"filterUrl":"\\/lite\\/account","filterSelector":"#w4-filters input, #w4-filters select"});
var kvGridInit_29aa5ff0=function(){
jQuery('#w8 .export-html').gridexport(kvGridExp_f0b74a16);jQuery('#w8 .export-csv').gridexport(kvGridExp_538abf1b);jQuery('#w8 .export-txt').gridexport(kvGridExp_2674daf6);jQuery('#w8 .export-xls').gridexport(kvGridExp_2bbff16a);jQuery('#w8 .export-pdf').gridexport(kvGridExp_f0de0355);jQuery('#w8 .export-json').gridexport(kvGridExp_83f1b8b5);jQuery("#w8-container").resizableColumns('destroy').resizableColumns({"store":null,"resizeFromBody":false});
};
kvGridInit_29aa5ff0();
jQuery('#w10').dropdown();
jQuery('#w8').yiiGridView({"filterUrl":"\\/lite\\/account","filterSelector":"#w8-filters input, #w8-filters select"});
var kvGridInit_8d8996b4=function(){
jQuery('#w12 .export-html').gridexport(kvGridExp_f5ade9ea);jQuery('#w12 .export-csv').gridexport(kvGridExp_12fbcddf);jQuery('#w12 .export-txt').gridexport(kvGridExp_d2c743e8);jQuery('#w12 .export-xls').gridexport(kvGridExp_5d131ea1);jQuery('#w12 .export-pdf').gridexport(kvGridExp_e6046faa);jQuery('#w12 .export-json').gridexport(kvGridExp_b7e33118);jQuery("#w12-container").resizableColumns('destroy').resizableColumns({"store":null,"resizeFromBody":false});
};
kvGridInit_8d8996b4();
jQuery('#w14').dropdown();
jQuery('#w12').yiiGridView({"filterUrl":"\\/lite\\/account","filterSelector":"#w12-filters input, #w12-filters select"});
var kvGridInit_f3d8b07d=function(){
jQuery('#w16 .export-html').gridexport(kvGridExp_98334b7a);jQuery('#w16 .export-csv').gridexport(kvGridExp_a9537984);jQuery('#w16 .export-txt').gridexport(kvGridExp_aed77647);jQuery('#w16 .export-xls').gridexport(kvGridExp_30c63d6d);jQuery('#w16 .export-pdf').gridexport(kvGridExp_d02f267e);jQuery('#w16 .export-json').gridexport(kvGridExp_145b0652);jQuery("#w16-container").resizableColumns('destroy').resizableColumns({"store":null,"resizeFromBody":false});
};
kvGridInit_f3d8b07d();
jQuery('#w18').dropdown();
jQuery('#w16').yiiGridView({"filterUrl":"\\/lite\\/account","filterSelector":"#w16-filters input, #w16-filters select"});
});</script></body>
</html>`;
    const guk = new integration("040000000");
    const data = guk.parseValues(html);
    expect(data).toEqual(
        [
            {
                id: 38617,
                type: 'Холодная вода',
                hwId: 249709,
                nextCheckDate: '21.02.2021',
                waterId: 38451,
                lastPostDate: 'August 2020',
                value: 584
            },
            {
                id: 38618,
                type: 'Горячая вода',
                hwId: 4000013,
                nextCheckDate: '21.02.2021',
                waterId: 38452,
                lastPostDate: 'August 2020',
                value: 294
            },
            {
                id: 38619,
                type: 'Горячая вода',
                hwId: 52871,
                nextCheckDate: '06.02.2023',
                waterId: 38453,
                lastPostDate: 'August 2020',
                value: 50
            },
            {
                id: 38620,
                type: 'Холодная вода',
                hwId: 55872,
                nextCheckDate: '06.02.2023',
                waterId: 38454,
                lastPostDate: 'August 2020',
                value: 68
            }
        ]
    )
})
