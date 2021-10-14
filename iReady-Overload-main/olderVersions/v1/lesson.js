// gets lesson data
var lessonId = html5Iframe.src.split("/")[html5Iframe.src.split("/").length - 1];
var csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];
var lessonType = lessonId.split("_")[lessonId.split("_").length - 1];
var subject = csid.includes("math") ? "math" : "reading";

// empty global variables for later use
var slidesCompletedArr = [];
var scoreArr = [];
var slideCount;

// gets lesson strucure
html5Iframe.contentWindow.fetch(`https://cdn.i-ready.com/instruction/phoenix-content/${subject}/${lessonId}/lessonStructure.json`, {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"sec-gpc": "1"
		},
		"referrer": "https://login.i-ready.com/student/dashboard/home",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": null,
		"method": "GET",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json())
	.then(function(data) {
		console.log();
		slideCount = data.lessonStructureObj.slideData.length;

		slidesCompletedArr = [];
		scoreArr = [];

		// creates score and completion arrays with the length neccessary
		for (var i = 0; i < slideCount; i++) {
			slidesCompletedArr.push(true);
			scoreArr.push(1);
		}

		// sets cookies for external.js to use
		document.cookie = `lessonId=${lessonId};`
		document.cookie = `lessonType=${lessonType};`
		document.cookie = `subject=${subject};`
		document.cookie = `csid=${csid};`
		document.cookie = `slidesCompletedArr=${slidesCompletedArr};`
		document.cookie = `scoreArr=${scoreArr};`
		document.cookie = `slideCount=${slideCount};`
	});
