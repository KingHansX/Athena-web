var window_1 = document.getElementById("Window_1");
var window_2 = document.getElementById("Window_2");
var window_3 = document.getElementById("Window_3");

var download = document.querySelector(".Download");
var manual = document.querySelector(".Manual");
var credits = document.querySelector(".Credits");
var downloadButton = document.querySelector(".download_Button");
var youtubeButton = document.querySelector(".Youtube_Button1");
var youtubeButton2 = document.querySelector(".Youtube_Button2");
var discordButton = document.querySelector(".discord_Button");

download.addEventListener("click", (e) => {
	if(e.which == 1) {
		download.style.backgroundColor = "#303030";
		manual.style.backgroundColor = "#242424";
		credits.style.backgroundColor = "#242424";
		window_1.style.display = "block";
		window_2.style.display = "none";
		window_3.style.display = "none";
	}
});

manual.addEventListener("click", (e) => {
	if(e.which == 1) {
		download.style.backgroundColor = "#242424";
		manual.style.backgroundColor = "#303030";
		credits.style.backgroundColor = "#242424";
		window_1.style.display = "none";
		window_2.style.display = "block";
		window_3.style.display = "none";
	}
});

credits.addEventListener("click", (e) => {
	if(e.which == 1) {
		download.style.backgroundColor = "#242424";
		manual.style.backgroundColor = "#242424";
		credits.style.backgroundColor = "#303030";
		window_1.style.display = "none";
		window_2.style.display = "none";
		window_3.style.display = "block";
	}
});

downloadButton.addEventListener("mouseover", downloadBottomShadow);
downloadButton.addEventListener("mouseout", clearDownloadBottomShadow);
function downloadBottomShadow() {
	downloadButton.style.background = "linear-gradient(to bottom, #07158f 5%, #0538ad 100%)";
	downloadButton.style.textShadow = "-4px -4px 0px #030a47";
}

function clearDownloadBottomShadow() {
	downloadButton.style.background = "linear-gradient(to bottom, #0538ad 5%, #07158f 100%)";
	downloadButton.style.textShadow = "4px 4px 0px #030a47";
}

youtubeButton.addEventListener("mouseover", youtube1BottomShadow);
youtubeButton.addEventListener("mouseout", clearYoutube1BottomShadow);
function youtube1BottomShadow() {
	youtubeButton.style.background = "linear-gradient(to bottom, #8f0707 5%, #bf060f 100%)";
	youtubeButton.style.textShadow = "-4px -4px 0px #470404";
}

function clearYoutube1BottomShadow() {
	youtubeButton.style.background = "linear-gradient(to bottom, #bf060f 5%, #8f0707 100%)";
	youtubeButton.style.textShadow = "4px 4px 0px #470404";
}

discordButton.addEventListener("mouseover", discordBottomShadow);
discordButton.addEventListener("mouseout", clearDiscordBottomShadow);
function discordBottomShadow() {
	discordButton.style.background = "linear-gradient(to bottom, #07158f 5%, #0538ad 100%)";
	discordButton.style.textShadow = "-4px -4px 0px #030a47";
}

function clearDiscordBottomShadow() {
	discordButton.style.background = "linear-gradient(to bottom, #0538ad 5%, #07158f 100%)";
	discordButton.style.textShadow = "4px 4px 0px #030a47";
}

youtubeButton2.addEventListener("mouseover", youtube2BottomShadow);
youtubeButton2.addEventListener("mouseout", clearYoutube2BottomShadow);
function youtube2BottomShadow() {
	youtubeButton2.style.background = "linear-gradient(to bottom, #8f0707 5%, #bf060f 100%)";
	youtubeButton2.style.textShadow = "-4px -4px 0px #470404";
}

function clearYoutube2BottomShadow() {
	youtubeButton2.style.background = "linear-gradient(to bottom, #bf060f 5%, #8f0707 100%)";
	youtubeButton2.style.textShadow = "4px 4px 0px #470404";
}
