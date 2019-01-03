/* Generated by SharpKit 5 v5.4.4 sss*/
if (typeof ($Inherit) == 'undefined') {
	var $Inherit = function (ce, ce2) {

		if (typeof (Object.getOwnPropertyNames) == 'undefined') {

			for (var p in ce2.prototype)
				if (typeof (ce.prototype[p]) == 'undefined' || ce.prototype[p] == Object.prototype[p])
					ce.prototype[p] = ce2.prototype[p];
			for (var p in ce2)
				if (typeof (ce[p]) == 'undefined')
					ce[p] = ce2[p];
			ce.$baseCtor = ce2;

		} else {

			var props = Object.getOwnPropertyNames(ce2.prototype);
			for (var i = 0; i < props.length; i++)
				if (typeof (Object.getOwnPropertyDescriptor(ce.prototype, props[i])) == 'undefined')
					Object.defineProperty(ce.prototype, props[i], Object.getOwnPropertyDescriptor(ce2.prototype, props[i]));

			for (var p in ce2)
				if (typeof (ce[p]) == 'undefined')
					ce[p] = ce2[p];
			ce.$baseCtor = ce2;

		}

	}
};

if (typeof ($CreateAnonymousDelegate) == 'undefined') {
    var $CreateAnonymousDelegate = function (target, func) {
        if (target == null || func == null)
            return func;
        var delegate = function () {
            return func.apply(target, arguments);
        };
        delegate.func = func;
        delegate.target = target;
        delegate.isDelegate = true;
        return delegate;
    }
}

if (typeof($CreateDelegate)=='undefined'){
    if(typeof($iKey)=='undefined') var $iKey = 0;
    if(typeof($pKey)=='undefined') var $pKey = String.fromCharCode(1);
    var $CreateDelegate = function(target, func){
        if (target == null || func == null) 
            return func;
        if(func.target==target && func.func==func)
            return func;
        if (target.$delegateCache == null)
            target.$delegateCache = {};
        if (func.$key == null)
            func.$key = $pKey + String(++$iKey);
        var delegate;
        if(target.$delegateCache!=null)
            delegate = target.$delegateCache[func.$key];
        if (delegate == null){
            delegate = function(){
                return func.apply(target, arguments);
            };
            delegate.func = func;
            delegate.target = target;
            delegate.isDelegate = true;
            if(target.$delegateCache!=null)
                target.$delegateCache[func.$key] = delegate;
        }
        return delegate;
    }
}


/* Generated by SharpKit 5 v5.4.4 */

if (typeof(nodejs) == "undefined")
    var nodejs = {};
nodejs.utils = function (){
};
nodejs.utils.rgHasNumber = new RegExp("[0123456789]+");
nodejs.utils.rgHasBrace = new RegExp("\\{.+\\}");
nodejs.utils.rgHasDigit = new RegExp("[0123456789]", "g");
nodejs.utils.rgRemoveBraces = new RegExp("[\\{\\}]", "g");
nodejs.utils.cast = function (obj){
    return obj;
};
nodejs.utils.isNode = function (){
    var res = false;
    try{
        var fs = require("fs");
        res = true;
    }
    catch($$e1){
    }
    return res;
};
nodejs.utils.isNull = function (text){
    if (text == undefined || text == null){
        return true;
    }
    if (text == "" && text.length == 0 && text.toLowerCase() == ""){
        return true;
    }
    return false;
};
nodejs.utils.addClass = function (el, className){
    if (!nodejs.utils.hasClass(el, className)){
        el.className += " " + className;
    }
};
nodejs.utils.assert = function (exp, msg){
    if (!exp){
        console.error("Assert:" + msg);
        if (!nodejs.utils.isNode() && confirm("Assert:" + msg + " Debug?")){
            debugger;
        }
        else {
            nodejs.trace.inst.error("assert:" + msg);
        }
    }
};
nodejs.utils.log = function (msg){
    console.log(msg);
};
nodejs.utils.getEventKeyCode = function (evt){
    var ev = evt;
    var code = ev["keyCode"];
    if (nodejs.utils.isNull(code)){
        code = ev["with"];
    }
    return code;
};
nodejs.utils.getSrcElement = function (evt){
    var ev = evt;
    var res = null;
    if (!nodejs.utils.isNull(ev["explicitOriginalTarget"])){
        res = ev["explicitOriginalTarget"];
        if (nodejs.utils.isNull(res.tagName)){
            res = res.parentNode;
            nodejs.utils.assert(!nodejs.utils.isNull(res), "Element can\'t be null");
        }
    }
    else if (!nodejs.utils.isNull(evt.srcElement)){
        res = evt.srcElement;
    }
    else {
        res = evt.target;
    }
    return res;
};
nodejs.utils.hasClass = function (el, className){
    nodejs.utils.assert(!nodejs.utils.isNull(el), "Element can\'t be empty.Class name is " + className);
    var elClass = el.className;
    var res = false;
    if (!nodejs.utils.isNull(elClass)){
        var idx = elClass.indexOf(className);
        if (-1 != idx){
            var str = elClass.substr(idx);
            if (str == className){
                res = true;
            }
            else {
                var len = className.length;
                if (str.length >= len){
                    var lastChar = (str.length > len) ? str.charAt(className.length) : new String(" ");
                    str = str.substr(0, className.length);
                    if ((str == className && lastChar == " ")){
                        res = true;
                    }
                }
            }
        }
    }
    return res;
};
nodejs.utils.toBool = function (val){
    var res = false;
    if (!nodejs.utils.isNull(val)){
        var sVal = val.toString();
        if (sVal == "1" || sVal == "true" || sVal == "True" || sVal == "true"){
            res = true;
        }
    }
    return res;
};
nodejs.utils.forIn = function (words, action){
    for(var key in words){action(key,words[key]);}
};
nodejs.utils.contains = function (arr, obj){
    var res = false;
    for (var i = 0,len = arr.length; i < len; ++i){
        if (arr[i] == obj){
            res = true;
            break;
        }
    }
    return res;
};


/* Generated by SharpKit 5 v5.4.4 */
if (typeof ($CreateAnonymousDelegate) == 'undefined') {
    var $CreateAnonymousDelegate = function (target, func) {
        if (target == null || func == null)
            return func;
        var delegate = function () {
            return func.apply(target, arguments);
        };
        delegate.func = func;
        delegate.target = target;
        delegate.isDelegate = true;
        return delegate;
    }
}

if (typeof($CreateException)=='undefined') 
{
    var $CreateException = function(ex, error) 
    {
        if(error==null)
            error = new Error();
        if(ex==null)
            ex = new System.Exception.ctor();       
        error.message = ex.message;
        for (var p in ex)
           error[p] = ex[p];
        return error;
    }
}


if (typeof(nodejs) == "undefined")
    var nodejs = {};
nodejs.utils = function (){
};
nodejs.utils.rgHasNumber = new RegExp("[0123456789]+");
nodejs.utils.rgHasBrace = new RegExp("\\{.+\\}");
nodejs.utils.rgHasDigit = new RegExp("[0123456789]", "g");
nodejs.utils.rgRemoveBraces = new RegExp("[\\{\\}]", "g");
nodejs.utils.cast = function (obj){
    return obj;
};
nodejs.utils.isNode = function (){
    var res = false;
    try{
        var fs = require("fs");
        res = true;
    }
    catch($$e1){
    }
    return res;
};
nodejs.utils.isNull = function (text){
    if (text == undefined || text == null){
        return true;
    }
    if (text == "" && text.length == 0 && text.toLowerCase() == ""){
        return true;
    }
    return false;
};
nodejs.utils.addClass = function (el, className){
    if (!nodejs.utils.hasClass(el, className)){
        el.className += " " + className;
    }
};
nodejs.utils.assert = function (exp, msg){
    if (!exp){
        console.error("Assert:" + msg);
        if (!nodejs.utils.isNode() && confirm("Assert:" + msg + " Debug?")){
            debugger;
        }
        else {
            nodejs.trace.inst.error("assert:" + msg);
        }
    }
};
nodejs.utils.log = function (msg){
    console.log(msg);
};
nodejs.utils.getEventKeyCode = function (evt){
    var ev = evt;
    var code = ev["keyCode"];
    if (nodejs.utils.isNull(code)){
        code = ev["with"];
    }
    return code;
};
nodejs.utils.getSrcElement = function (evt){
    var ev = evt;
    var res = null;
    if (!nodejs.utils.isNull(ev["explicitOriginalTarget"])){
        res = ev["explicitOriginalTarget"];
        if (nodejs.utils.isNull(res.tagName)){
            res = res.parentNode;
            nodejs.utils.assert(!nodejs.utils.isNull(res), "Element can\'t be null");
        }
    }
    else if (!nodejs.utils.isNull(evt.srcElement)){
        res = evt.srcElement;
    }
    else {
        res = evt.target;
    }
    return res;
};
nodejs.utils.hasClass = function (el, className){
    nodejs.utils.assert(!nodejs.utils.isNull(el), "Element can\'t be empty.Class name is " + className);
    var elClass = el.className;
    var res = false;
    if (!nodejs.utils.isNull(elClass)){
        var idx = elClass.indexOf(className);
        if (-1 != idx){
            var str = elClass.substr(idx);
            if (str == className){
                res = true;
            }
            else {
                var len = className.length;
                if (str.length >= len){
                    var lastChar = (str.length > len) ? str.charAt(className.length) : new String(" ");
                    str = str.substr(0, className.length);
                    if ((str == className && lastChar == " ")){
                        res = true;
                    }
                }
            }
        }
    }
    return res;
};
nodejs.utils.toBool = function (val){
    var res = false;
    if (!nodejs.utils.isNull(val)){
        var sVal = val.toString();
        if (sVal == "1" || sVal == "true" || sVal == "True" || sVal == "true"){
            res = true;
        }
    }
    return res;
};
nodejs.utils.forIn = function (words, action){
    for(var key in words){action(key,words[key]);}
};
nodejs.utils.contains = function (arr, obj){
    var res = false;
    for (var i = 0,len = arr.length; i < len; ++i){
        if (arr[i] == obj){
            res = true;
            break;
        }
    }
    return res;
};

if (typeof(nodejs) == "undefined")
    var nodejs = {};
nodejs.serverBase = function (){
    this._app = null;
    this._bodyParser = null;
    this._cache = new Object();
    this._ejs = null;
    this._express = null;
    this._fs = null;
    this._http = null;
    this._https = null;
    this._nStore = null;
    this._qs = null;
    this._session = null;
    this._zlib = null;
};
nodejs.serverBase.prototype.init = function (){
    this._express = require("express");
    this._session = require("express-session");
    this._http = require("http");
    this._https = require("https");
    this._fs = require("fs");
    this._nStore = require("nstore");
    this._bodyParser = require("body-parser");
    this._ejs = require("ejs");
    this._qs = require("querystring");
    this._zlib = require("zlib");
    var compression = require("compression");
    this._app = (this._express).call();
    this._app.use(this._express.static(__dirname + "/public"));
    var sessionObj = (this._session).call(this._session, {
        secret: "mysecret",
        resave: true,
        saveUninitialized : true
    });
    this._app.use(sessionObj);
    this._app.use(this._bodyParser.json());
    this._app.use(compression());
    this._app.use(this._bodyParser.urlencoded({
        extended: true
    }));
    this._app.use("/gen", this._express.static(__dirname + "/gen"));
    this._app.use("/lang", this._express.static(__dirname + "/lang"));
    this._app.use("/client", this._express.static(__dirname + "/client"));
    this._app.set("view engine", "html");
    this._app.set("port", (process.env.PORT != undefined ? process.env.PORT : 5000));
    this._app.set("view options", {
        layout: false
    });
    this._app.set("db", __dirname + "/db");
    this._app.set("views", __dirname + "/client/html");
    this._app.engine("html", this._ejs.renderFile);
    this._app.get("/trace/get", $CreateAnonymousDelegate(this, function (req, res){
        var str = nodejs.trace.inst.getAllTrace();
        res.header("content-type", "text/html");
        res.send(str);
    }));
    this._app.get("/trace/clear", $CreateAnonymousDelegate(this, function (req, res){
        nodejs.trace.inst.clear();
        var str = nodejs.trace.inst.getAllTrace();
        res.header("content-type", "text/html");
        res.send(str);
    }));
};
nodejs.serverBase.prototype.start = function (){
    this._app.listen(this._app.get("port"), $CreateAnonymousDelegate(this, function (){
        console.log("Node app is running at localhost:" + this._app.get("port"));
    }));
};
nodejs.serverBase.prototype.getBody = function (req){
    var obj = req.body;
    var obj2 = JSON.parse(obj["x"]);
    return obj2;
};
nodejs.serverBase.prototype.onProcessZipRequestInternal = function (url, req, res){
    if (this._cache[url] != undefined){
        var headers = new Object();
        headers ["content-encoding"] = "deflate";
        res.writeHead(200, headers);
        res.end(this._cache[url]);
    }
    else if (true){
        if (this._fs.existsSync(url)){
            var text = this._fs.readFileSync(url);
            var acceptEncoding = req.headers["accept-encoding"];
            if (-1 != acceptEncoding.indexOf("deflate")){
                this._zlib.deflate(text, $CreateAnonymousDelegate(this, function (err, buffer){
                    if (err != null)
                        throw $CreateException(err, new Error());
                    var headers = new Object();
                    headers ["content-encoding"] = "deflate";
                    res.writeHead(200, headers);
                    this._cache[url] = buffer;
                    res.end(buffer);
                }));
            }
            else {
                res.writeHead(200, new Object());
                res.end(text);
            }
        }
        else {
            res.writeHead(500, new Object());
            res.send("File not found url = " + url);
        }
    }
    else {
        var raw = this._fs.createReadStream(url);
        var acceptEncoding = req.headers["accept-encoding"];
        if (undefined == acceptEncoding){
            acceptEncoding = "";
        }
        if (-1 != acceptEncoding.indexOf("deflate")){
            var obj1 = new Object();
            obj1 ["content-encoding"] = "deflate";
            res.writeHead(200, obj1);
            raw.pipe(this._zlib.createDeflate()).pipe(res);
        }
        else if (-1 != acceptEncoding.indexOf("gzip")){
            var obj1 = new Object();
            obj1 ["content-encoding"] = "gzip";
            res.writeHead(200, obj1);
            raw.pipe(this._zlib.createGzip()).pipe(res);
        }
        else {
            res.writeHead(200, new Object());
            raw.pipe(res);
        }
    }
};
nodejs.trace = function (){
    this._fs = null;
};
nodejs.trace.inst = new nodejs.trace();
nodejs.trace.prototype.init = function (){
    if (this._fs == undefined){
        this._fs = require("fs");
    }
};
nodejs.trace.prototype.log = function (msg){
    this.init();
    console.log(msg);
    msg = "<div style=\'color:blue;font-family:tahoma;font-size:12px;\'>" + this.getToday() + " : " + msg + "</div>";
    this._fs.appendFileSync(__dirname + "/gen/log.html", msg);
};
nodejs.trace.prototype.error = function (msg){
    this.init();
    console.error(msg);
    msg = "<div style=\'color:red;font-family:tahoma;font-size:12px;\'>" + this.getToday() + " : " + msg + "</div>";
    this._fs.appendFileSync(__dirname + "/gen/log.html", msg);
};
nodejs.trace.prototype.getToday = function (){
    var date = new Date();
    return date.toDateString() + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds();
};
nodejs.trace.prototype.clear = function (){
    this.init();
    this._fs.writeFileSync(__dirname + "/gen/log.html", "");
};
nodejs.trace.prototype.getAllTrace = function (){
    this.init();
    var res = this._fs.readFileSync(__dirname + "/gen/log.html");
    return res;
};


if (typeof(mvcLocalize) == "undefined")
    var mvcLocalize = {};
if (typeof(mvcLocalize.common) == "undefined")
    mvcLocalize.common = {};
mvcLocalize.common.responseBase = function (){
    this.success = false;
    this.msg = null;
};
mvcLocalize.common.translationClientBase = function (){
    this.lang = null;
    this.userId = null;
    this.words = null;
};
mvcLocalize.common.userConfigCommon = function (){
    this.translations = null;
    this.translations =  [];
};
mvcLocalize.common.userConfigCommon.prototype.init = function (data){
    var items =  [];
    this.translations = items;
    var trs = nodejs.utils.cast(data["translations"]);
    for (var i = 0,len = trs.length; i < len; ++i){
        var tr = trs[i];
        var item = new mvcLocalize.client.translationClient();
        item.init(tr);
        items.push(item);
    }
};
mvcLocalize.common.wordDataCommon = function (){
    this.path = null;
    this.translate = null;
    this.ignore = false;
};
mvcLocalize.common.wordDataCommon.prototype.init = function (val){
    this.path = nodejs.utils.cast(val["path"]);
    this.translate = nodejs.utils.cast(val["translate"]);
    this.ignore = nodejs.utils.cast(val["ignore"]);
};

if (typeof(mvcLocalize) == "undefined")
    var mvcLocalize = {};
if (typeof(mvcLocalize.server) == "undefined")
    mvcLocalize.server = {};
mvcLocalize.server.dataManager = function (){
};
mvcLocalize.server.dataManager.inst = new mvcLocalize.server.dataManager();
mvcLocalize.server.dataManager.prototype.get__fs = function (){
    return mvcLocalize.server.server.inst._fs;
};
mvcLocalize.server.dataManager.prototype.get__https = function (){
    return mvcLocalize.server.server.inst._https;
};
mvcLocalize.server.dataManager.prototype.getUserData = function (userId){
    var ud = new mvcLocalize.server.userData();
    return ud;
};
mvcLocalize.server.dataManager.prototype.getTranslation = function (userId){
    var res =  [];
    var ud = this.getUserData(userId);
    for (var $i5 = 0,$t5 = ud.langs,$l5 = $t5.length,name = $t5[$i5]; $i5 < $l5; $i5++, name = $t5[$i5]){
        var trans = new mvcLocalize.server.translationServer();
        trans.userId = userId;
        trans.lang = name;
        res.push(trans);
    }
    return res;
};
mvcLocalize.server.dataManager.prototype.addWord = function (request, complete){
    var res = {};
    nodejs.utils.assert(request != null, "Request can\'t be empty");
    var trs = this.getTranslation(request.userId);
    for (var i = 0,len = trs.length; i < len; ++i){
        var tmp = trs[i];
        tmp.load();
        res = tmp.addWord(request.key);
    }
    this.saveCombined(request.userId, trs, res);
    complete(res);
};
mvcLocalize.server.dataManager.prototype.translateWord = function (request, complete){
    var res = {};
    var trs = this.getTranslation(request.userId);
    for (var i = 0,len = trs.length; i < len; ++i){
        var tmp = trs[i];
        if (tmp.lang == request.lang){
            tmp.load();
            res = tmp.translateWord(request.key, request.translate);
        }
    }
    this.saveCombined(request.userId, trs, res);
    complete(res);
};
mvcLocalize.server.dataManager.prototype.addWords = function (request, complete){
    var res = {};
    var trs = this.getTranslation(request.userId);
    for (var i = 0,len = trs.length; i < len; ++i){
        var tmp = trs[i];
        tmp.load();
        res = tmp.addWords(request.keys);
    }
    this.saveCombined(request.userId, trs, res);
    complete(res);
};
mvcLocalize.server.dataManager.prototype.combine = function (userId, complete){
    var r = {};
    r.success = true;
    var trs = this.getTranslation(userId);
    this.saveCombined(userId, trs, r);
    complete(r);
};
mvcLocalize.server.dataManager.prototype.create = function (userId, complete){
    var r = {};
    r.success = true;
    var trs = this.getTranslation(userId);
    for (var i = 0,len = trs.length; i < len; ++i){
        var tr = trs[i];
        tr.load();
        tr.save();
    }
    this.saveCombined(userId, trs, r);
    complete(r);
};
mvcLocalize.server.dataManager.prototype.ignoreWord = function (request, complete){
    var r = {};
    r.success = true;
    var trs = this.getTranslation(request.userId);
    for (var i = 0,len = trs.length; i < len; ++i){
        var tr = trs[i];
        tr.load();
        tr.ignoreWord(request.key);
    }
    this.saveCombined(request.userId, trs, r);
    complete(r);
};
mvcLocalize.server.dataManager.prototype.saveCombined = function (userId, trs, r){
    var newTrs =  [];
    for (var i = 0,len = trs.length; i < len; ++i){
        var tr = trs[i];
        tr.load();
        tr.optimize();
        newTrs.push(tr);
    }
    var obj = (function (){
        var $v1 = new mvcLocalize.common.userConfigCommon();
        $v1.translations = newTrs;
        return $v1;
    }).call(this);
    var json = JSON.stringify(obj);
    json = "var TRANSLATE = " + json + ";";
    var path = __dirname + "/lang/" + userId + ".js";
    this.get__fs().writeFileSync(path, json);
};
mvcLocalize.server.dataManager.prototype.translateFiles = function (userId, complete){
    var trs = this.getTranslation(userId);
    var tmpArr =  [];
    for (var i = 0,len = trs.length; i < len; ++i){
        var trLang = trs[i];
        trLang.load();
        if (trLang.lang != "en"){
            tmpArr.push(trLang);
        }
    }
    this.translateFilesRecursive(userId, tmpArr, complete);
};
mvcLocalize.server.dataManager.prototype.translateFilesRecursive = function (userId, langsArr, complete){
    var tr = langsArr.pop();
    if (null != tr){
        this.translateFile(userId, tr.lang, $CreateAnonymousDelegate(this, function (res){
            this.translateFilesRecursive(userId, langsArr, complete);
        }));
    }
    else {
        var r = {};
        r.success = true;
        r.msg = "translate success";
        complete(r);
    }
};
mvcLocalize.server.dataManager.prototype.translateFile = function (userId, lang, complete){
    var res = {};
    var trs = this.getTranslation(userId);
    var trEn = null;
    var trLang = null;
    for (var i = 0,len = trs.length; i < len; ++i){
        var tr = trs[i];
        tr.load();
        if (tr.lang == "en"){
            trEn = tr;
        }
        if (tr.lang == lang){
            trLang = tr;
        }
    }
    if (trLang != null && trEn != null){
        var usingWords =  [];
        for (var i = 0,len = trs.length; i < len; ++i){
            var tr = trs[i];
            if (tr.lang != "en" && tr.lang != lang){
                nodejs.utils.forIn(tr.words, $CreateAnonymousDelegate(this, function (tmpKey, tmpVal){
                    if (!nodejs.utils.isNull(tmpKey)){
                        if (trEn.hasWord(tmpKey)){
                            var trVal = tr.getTrans(tmpKey);
                            if (!nodejs.utils.isNull(trVal) && !nodejs.utils.contains(usingWords, tmpKey)){
                                usingWords.push(tmpKey);
                            }
                        }
                    }
                }));
            }
        }
        console.log("translate [" + lang + "] words count = " + usingWords.length);
        var translateRecursive = null;
        var someFn = $CreateAnonymousDelegate(this, function (){
            var key = usingWords.pop();
            if (!nodejs.utils.isNull(key)){
                this.translateInternal(key, lang, trLang, $CreateAnonymousDelegate(this, function (translateStr){
                    trLang.translateWord(key, translateStr);
                    if (usingWords.length > 0){
                        translateRecursive();
                    }
                    else {
                        console.log("save " + userId);
                        trLang.save();
                        this.saveCombined(userId, trs, res);
                        complete(res);
                    }
                }));
            }
        });
        translateRecursive = someFn;
        translateRecursive();
    }
    else {
        complete(res);
    }
};
mvcLocalize.server.dataManager.prototype.translateInternal = function (key, lang, trLang, callback){
    var val = trLang.getTrans(key);
    if (nodejs.utils.isNull(val)){
        var options = {
            host: "www.googleapis.com",
            path: encodeURI("/language/translate/v2?q=" + key + "&target=" + lang + "&format=text&source=en&key=AIzaSyDZGjLZo783GKvaMHnPfdYxtzmFQtEcaUs")
        };
        console.log(options.path);
        this.get__https().get(options, $CreateAnonymousDelegate(this, function (r){
            var json = "";
            r.on("data", $CreateAnonymousDelegate(this, function (obj){
                json += obj;
            }));
            r.on("end", $CreateAnonymousDelegate(this, function (){
                try{
                    var obj = JSON.parse(json);
                    obj = obj["data"];
                    obj = obj["translations"];
                    obj = obj[0];
                    obj = obj["translatedText"];
                    json = obj;
                    console.log("google translate key=" + key + " value=" + json);
                }
                catch(ex){
                    nodejs.trace.inst.error(ex.toString());
                }
                callback(json);
            }));
        }));
    }
    else {
        callback(val);
    }
};
mvcLocalize.server.userData = function (){
    this.langs =  [];
    this.userId = null;
    this.langs.push("en");
    this.langs.push("ua");
    this.langs.push("rus");
    this.langs.push("es");
    this.langs.push("de");
    this.langs.push("fr");
};
mvcLocalize.server.result = function (){
    this.success = false;
    this.msg = null;
};
mvcLocalize.server.server = function (){
    nodejs.serverBase.call(this);
};
mvcLocalize.server.server.inst = new mvcLocalize.server.server();
mvcLocalize.server.server.prototype.init = function (){
    nodejs.serverBase.prototype.init.call(this);
    var idx = 0;
    nodejs.trace.inst.log("server started");
    this._app.all("*", $CreateAnonymousDelegate(this, function (req, res, next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        next();
    }));
    this._app.get("/", $CreateAnonymousDelegate(this, function (req, res){
        if (req.session["mySessionId"] == undefined){
            req.session["mySessionId"] = "session id = " + idx++;
        }
        res.render("index.html");
    }));
    this._app.get("/combine", $CreateDelegate(this, this.onCombine));
    this._app.get("/create", $CreateDelegate(this, this.onCreateLangFiles));
    this._app.get("/gen", $CreateDelegate(this, this.onCreateStartupScript));
    this._app.get("/translate", $CreateDelegate(this, this.onTranslateFile));
    this._app.post("/ignoreWord", $CreateDelegate(this, this.onIgnoreWord));
    this._app.post("/addWord", $CreateDelegate(this, this.onAddWord));
    this._app.post("/addWords", $CreateDelegate(this, this.onAddWords));
    this._app.post("/translateWord", $CreateDelegate(this, this.onTranslateWord));
    this._app.get("/*zip.*", $CreateDelegate(this, this.onProcessZipRequest));
};
mvcLocalize.server.server.prototype.onProcessZipRequest = function (req, res){
    var url = req.originalUrl;
    url = url.replace(".zip", "");
    url = url.substr(1);
    var idx = url.indexOf("?");
    if (-1 != idx){
        url = url.substr(0, idx);
    }
    console.log("originalUrl = " + url);
    if (this._fs.existsSync(url)){
        this.onProcessZipRequestInternal(url, req, res);
    }
    else {
        res.writeHead(404, new Object());
        res.end("");
    }
};
mvcLocalize.server.server.prototype.onIgnoreWord = function (req, res){
    var request = this.getBody(req);
    console.log("request = " + JSON.stringify(request));
    mvcLocalize.server.dataManager.inst.ignoreWord(request, $CreateAnonymousDelegate(this, function (){
        var response = new mvcLocalize.common.responseBase();
        response.success = true;
        response.msg = JSON.stringify(request);
        res.send(response);
    }));
};
mvcLocalize.server.server.prototype.onTranslateFile = function (req, res){
    var userId = req.query["userId"];
    var lang = req.query["lang"];
    if (!nodejs.utils.isNull(userId) && !nodejs.utils.isNull(lang)){
        mvcLocalize.server.dataManager.inst.translateFile(userId, lang, $CreateAnonymousDelegate(this, function (r){
            res.send(JSON.stringify(r));
        }));
    }
    else if (!nodejs.utils.isNull(userId)){
        mvcLocalize.server.dataManager.inst.translateFiles(userId, $CreateAnonymousDelegate(this, function (r){
            res.send(JSON.stringify(r));
        }));
    }
    else {
        res.send("userId and lang can\'t be null.Add query string ?userId=repair-cam&lang=es");
    }
};
mvcLocalize.server.server.prototype.onCreateStartupScript = function (req, res){
    var id = req.query["id"];
    var s = "";
    s += "<script type=\'text/javascript\'>//<![CDATA[\n";
    s += "var __lw = {dm: false, su: \'https://localize-web.herokuapp.com/\', sn: \'" + id + "\',\n";
    s += "ls: function (url, fn) {var ld = fn ? \'onload=\"\' + fn + \'()\"\' : \'\'; var doc = document;\n";
    s += "doc.write(\'<script type=\"text/javascript\" \' + ld + \'  src=\"\' + url + \'\">\');doc.write(\'</\');doc.write(\'script>\');\n";
    s += "},ch: function () {localizeWeb.inst.init(this.sn, \'en\', this.dm); __lw = undefined;},i: function () {var s = this;\n";
    s += "var w = window; if (!w.TRANSLATE) { s.ls(s.su + \'lang/\' + s.sn + \'.js\'); }\n";
    s += "if (!w.localizeWeb) { s.ls(s.su + \'gen/localizeWeb.min.js\', \'__lw.ch\'); } else { __lw.ch(); }\n";
    s += "}}; __lw.i();//]]></script> \n";
    console.log(s);
    res.header("content-type", "text/plain");
    res.send(s);
};
mvcLocalize.server.server.prototype.onCombine = function (req, res){
    var userId = req.query["userId"];
    if (!nodejs.utils.isNull(userId)){
        mvcLocalize.server.dataManager.inst.combine(userId, $CreateAnonymousDelegate(this, function (r){
        }));
        res.send("fix success");
    }
    else {
        res.send("userId is null.Add query string ?userId=repair-cam");
    }
};
mvcLocalize.server.server.prototype.onCreateLangFiles = function (req, res){
    var userId = req.query["userId"];
    if (!nodejs.utils.isNull(userId)){
        console.log("oncreate userId = " + userId);
        mvcLocalize.server.dataManager.inst.create(userId, $CreateAnonymousDelegate(this, function (r){
            var response = new mvcLocalize.common.responseBase();
            response.success = true;
            response.msg = userId + "data = ";
            res.send(response);
        }));
    }
    else {
        res.send("userId is null.Add query string ?userId=repair-cam");
    }
};
mvcLocalize.server.server.prototype.onAddWord = function (req, res){
    var request = this.getBody(req);
    console.log("request = " + JSON.stringify(request));
    mvcLocalize.server.dataManager.inst.addWord(request, $CreateAnonymousDelegate(this, function (r){
        var response = new mvcLocalize.common.responseBase();
        response.success = r.success;
        response.msg = JSON.stringify(request) + r.msg;
        res.send(response);
    }));
};
mvcLocalize.server.server.prototype.onTranslateWord = function (req, res){
    var request = this.getBody(req);
    console.log("request = " + JSON.stringify(request));
    mvcLocalize.server.dataManager.inst.translateWord(request, $CreateAnonymousDelegate(this, function (r){
        var response = new mvcLocalize.common.responseBase();
        response.success = r.success;
        response.msg = JSON.stringify(request) + r.msg;
        res.send(response);
    }));
};
mvcLocalize.server.server.prototype.onAddWords = function (req, res){
    var request = this.getBody(req);
    console.log("request = " + JSON.stringify(request));
    mvcLocalize.server.dataManager.inst.addWords(request, $CreateAnonymousDelegate(this, function (r){
        var response = new mvcLocalize.common.responseBase();
        response.success = r.success;
        response.msg = JSON.stringify(request) + r.msg;
        res.send(response);
    }));
};
$Inherit(mvcLocalize.server.server, nodejs.serverBase);
mvcLocalize.server.translationServer = function (){
    this.isLoaded = false;
    mvcLocalize.common.translationClientBase.call(this);
    this.words = new Object();
};
mvcLocalize.server.translationServer.prototype.get__fs = function (){
    return mvcLocalize.server.server.inst._fs;
};
mvcLocalize.server.translationServer.prototype.get_fileName = function (){
    return this.userId + "_" + this.lang + ".js";
};
mvcLocalize.server.translationServer.prototype.clearWords = function (){
    this.words = new Object();
};
mvcLocalize.server.translationServer.prototype.writeFile = function (fileName, json){
    var path = __dirname + "/lang/" + fileName;
    this.get__fs().writeFileSync(path, json);
};
mvcLocalize.server.translationServer.prototype.fileExist = function (fileName){
    var path = __dirname + "/lang/" + fileName;
    if (this.get__fs().existsSync(path)){
        return true;
    }
    return false;
};
mvcLocalize.server.translationServer.prototype.readFile = function (fileName){
    var path = __dirname + "/lang/" + fileName;
    var content = this.get__fs().readFileSync(path);
    return content;
};
mvcLocalize.server.translationServer.prototype.load = function (){
    if (this.fileExist(this.get_fileName())){
        var obj = this.readFile(this.get_fileName());
        if (undefined != obj && ("" != obj)){
            var data = null;
            try{
                data = JSON.parse(obj + "");
            }
            catch($$e2){
            }
            if (null != data){
                this.userId = data["userId"];
                this.lang = data["lang"];
                this.words = data["words"];
            }
        }
    }
    this.isLoaded = true;
};
mvcLocalize.server.translationServer.prototype.save = function (){
    nodejs.utils.assert(this.isLoaded, "Translation must be loaded");
    var json = JSON.stringify(this);
    this.writeFile(this.get_fileName(), json);
};
mvcLocalize.server.translationServer.prototype.addWord = function (key){
    var res = {};
    console.log(this.lang + " add word key=" + key + " exsist words[key]" + this.words[key]);
    if (undefined == this.words[key]){
        var newWord = new mvcLocalize.common.wordDataCommon();
        this.words [key] = newWord;
        res.success = true;
    }
    else {
        res.msg = "word already exist.";
    }
    this.save();
    return res;
};
mvcLocalize.server.translationServer.prototype.addWords = function (keys){
    var res = {};
    res.msg = "";
    for (var i = 0,len = keys.length; i < len; ++i){
        var key = keys[i];
        if (undefined == this.words[key]){
            this.words [key] = new mvcLocalize.common.wordDataCommon();
            res.success = true;
        }
        else {
            res.msg += " this key already has in dict \'" + key + "\';";
        }
    }
    this.save();
    return res;
};
mvcLocalize.server.translationServer.prototype.findWord = function (key){
    var dataClient = null;
    if (undefined != this.words[key]){
        dataClient = this.words[key];
    }
    return dataClient;
};
mvcLocalize.server.translationServer.prototype.ignoreWord = function (key){
    var res = {};
    var dataClient = this.findWord(key);
    if (null != dataClient){
        dataClient.ignore = true;
        res.success = true;
        this.save();
    }
    else {
        res.msg = "word not found,nothing to ignore";
    }
    return res;
};
mvcLocalize.server.translationServer.prototype.translateWord = function (key, translate){
    var res = {};
    var dataClient = this.findWord(key);
    if (null == dataClient){
        this.addWord(key);
        res.msg = "add new key in translate.";
    }
    dataClient = this.findWord(key);
    if (null != dataClient){
        dataClient.ignore = false;
        dataClient.translate = translate;
        res.success = true;
    }
    else {
        res.msg = "error!word must exisit.";
    }
    this.save();
    return res;
};
mvcLocalize.server.translationServer.prototype.optimize = function (){
    var optimizedWords = new Object();
    for (var key in this.words){
        var word = this.words[key];
        if (!word.ignore && !nodejs.utils.isNull(word.translate)){
            optimizedWords [key] = word;
            word.path = "";
        }
    }
    this.words = optimizedWords;
};
mvcLocalize.server.translationServer.prototype.getTrans = function (key){
    var word = this.findWord(key);
    return null != word ? word.translate : "";
};
mvcLocalize.server.translationServer.prototype.hasWord = function (key){
    var word = this.findWord(key);
    return word != null;
};
$Inherit(mvcLocalize.server.translationServer, mvcLocalize.common.translationClientBase);
mvcLocalize.server.server.inst.init();
mvcLocalize.server.server.inst.start();

