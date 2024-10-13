/***********************************

[rewrite_local]
^http:\/\/(.*?)\.baidupcs\.com url script-request-header https://raw.githubusercontent.com/TT3301/QX/refs/heads/main/rewrite/UA-PanBaidu.js

[mitm] 
hostname = *.baidupcs.com

***********************************/


let headers = $request.headers; // 不需要 JSON.parse
console.log("原User-Agent: " + headers["User-Agent"]);
headers["User-Agent"] = "pan.baidu.com";
$done({ headers }); // 这里传递的键名应该是 headers，而不是 Header