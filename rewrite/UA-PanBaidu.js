/***********************************

[rewrite_local]
^http:\/\/(.*?)\.baidupcs\.com url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/pornhub.js

[mitm] 
hostname = *.pornhub.com

***********************************/


let headers = $request.headers; // 不需要 JSON.parse
console.log("原User-Agent: " + headers["User-Agent"]);
headers["User-Agent"] = "pan.baidu.com";
$done({ headers }); // 这里传递的键名应该是 headers，而不是 Header