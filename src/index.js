module.exports = function makeExchange(currency) {
  var res = {};
  if(currency <= 0) return res;
  if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  var h = Math.floor((currency - currency % 50) / 50);
  var q = Math.floor((currency - h * 50) / 25);
  var d = Math.floor((currency - h * 50 - q * 25) / 10);
  var n = Math.floor((currency - h * 50 - q * 25 - d * 10) / 5);
  var p = currency % 5;
  
  if(h) res.H = h;
  if(q) res.Q = q;
  if(d) res.D = d;
  if(n) res.N = n;
  if(p) res.P = p;
  
  return res;
}