var lessonId = getCookie("lessonId");
var lessonType = getCookie("lessonType");
var csid = getCookie("csid");
var slidesCompletedArr = getCookie("slidesCompletedArr");
var scoreArr = getCookie("scoreArr");
var slideCount = parseInt(getCookie("slideCount"), 10);

fetch(`https://login.i-ready.com/student/v2/web/lesson_component/${csid}/markprogress/${csid}`, {
	"headers": {
		"accept": "*/*",
		"accept-language": "en-US,en;q=0.9",
		"content-type": "application/json;charset=UTF-8",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
		"sec-gpc": "1"
	},
	"referrer": "https://login.i-ready.com/student/dashboard/home",
	"referrerPolicy": "strict-origin-when-cross-origin",
	"body": `{\"value\":\"{\\\"finalStageArr\\\":[],\\\"curSlideInt\\\":${slideCount - 1},\\\"slideCompletedArr\\\":[${slidesCompletedArr}],\\\"allScoreDataArr\\\":[${scoreArr}],\\\"stateStoreDataObj\\\":{}}\",\"bucket\":\"short_term_unsecured\",\"datatype\":\"json\"}`,
	"method": "POST",
	"mode": "cors",
	"credentials": "include"
});

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
