function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places)  + "e-" + places);
}


tokens = readCookie('token')
price = 0.2
drinks = readCookie('drink')

if (!tokens) {
  tokens = 0
}

if (!drink) {
  drinks = 0
}

document.getElementById("token_count").innerHTML = tokens;
document.getElementById("drink_count").innerHTML = drinks;

function addTokens(n) {
    tokens = parseFloat(tokens) + n;
    tokens = tokens.toFixed(2);
    createCookie('token', tokens, 90)
    document.getElementById("token_count").innerHTML = tokens;
}

function setTokens(n) {
  tokens = n;
  tokens = tokens.toFixed(2);
  createCookie('token', tokens, 90)
  document.getElementById("token_count").innerHTML = tokens;
}

function removeTokens(n) {
    if ((parseFloat(tokens) - n) >= 0) {
      tokens = tokens - n
      tokens = tokens.toFixed(2);
      createCookie('token', tokens, 90)
      document.getElementById("token_count").innerHTML = tokens;
      return true
    } else {
      alert("Add more money")
      return false
    }
}

function drink() {
  if (removeTokens(price) === true) {
    drinks = parseInt(drinks) + 1;
    createCookie('drink', drinks, 90);
    document.getElementById("drink_count").innerHTML = drinks;
  }
}
