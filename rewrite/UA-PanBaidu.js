/***********************************
[rewrite_local]
^https?:\/\/([^\/]*)\.baidupcs\.com\/.*$ url script-request-header https://raw.githubusercontent.com/TT3301/QX/refs/heads/main/rewrite/UA-PanBaidu.js
^https?:\/\/(raw|gist)\.githubusercontent\.com\/.*$ url script-request-header https://raw.githubusercontent.com/TT3301/QX/refs/heads/main/rewrite/UA-PanBaidu.js

[mitm]
hostname = *.baidupcs.com, raw.githubusercontent.com, gist.githubusercontent.com
***********************************/



// 获取请求头
let headers = $request.headers;

// 获取请求的 URL 和主机名
let url = $request.url;
let host = url.match(/^https?:\/\/([^\/]+)/)[1]; // 提取域名部分

// 调试信息：输出当前请求的域名
console.log("请求域名: " + host);

// 根据域名执行不同的请求头修改逻辑
if (host.includes("baidupcs.com")) {
    // 对于 baidupcs.com 域名，修改 User-Agent
    console.log("原User-Agent: " + headers["User-Agent"]);
    headers["User-Agent"] = "pan.baidu.com";
    console.log("新User-Agent: " + headers["User-Agent"]);
} else if (host === "raw.githubusercontent.com" || host === "gist.githubusercontent.com") {
    // 对于 raw.githubusercontent.com 和 gist.githubusercontent.com 域名，修改 Accept-Language
    console.log("原Accept-Language: " + (headers["Accept-Language"] || "未设置"));
    headers["Accept-Language"] = "en-US";
    console.log("新Accept-Language: " + headers["Accept-Language"]);
} else {
    // 其他域名不做处理，仅输出调试信息
    console.log("未匹配目标域名，未修改请求头");
}

// 返回修改后的请求头
$done({ headers });
