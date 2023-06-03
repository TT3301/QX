if ($response.statusCode != 200) {
  $done(null);
}

const emojis= ['🆘','🈲','⚠️','🔞','📵','🚦','🏖','🖥','📺','🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']
var city0 = "哥谭市";
var isp0 = "Cross-GFW.org";
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function City_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return city0
//emojis[getRandomInt(emojis.length)]
  }
}

function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return isp0
//emojis[getRandomInt(emojis.length)]
  }
}

function Area_check(para) {
  if(para=="中华民国"){
  return "台湾"
  } else
  {
  return para
  }
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['country'] + '•' + City_ValidCheck(obj['regionName']) + '•' + City_ValidCheck(obj['city']);
var subtitle = obj['query'] + ' ' + ISP_ValidCheck(obj['org']);
var ip = obj['query'];
var description = '---------------------- ' + '\nIP: ' + obj['query'] + '\n---------------------- ' + '\n' + '\nASN: ' + obj['as'] + '\n' + '\n地区: ' + obj['country'] + '•' + City_ValidCheck(obj['regionName']) + '•' + City_ValidCheck(obj['city']) + '\n' + '\n供应商: ' + obj['isp'] + '\n' + obj['org'] + '\n' + '\n时区: ' + obj['timezone'];
$done({title, subtitle, ip, description});
