function showNavBar(activeTabName){
    var dashboardTab = "";
    var photoTab = "";
    var themeTab = "";
    var aboutUsTab = "";
    var contactUsTab = "";
    switch(activeTabName){
        case "PHOTO":
            photoTab = "active";
            break;
        case "DASHBOARD":
            dashboardTab = "active";
            break;
        case "THEME":
            themeTab = "active";
            break;
        case "ABOUT_US":
            aboutUsTab = "active";
            break;
        case "CONTACT_US":
            contactUsTab = "active";
            break;
    }
    var navBar = ""+
    "<nav class=\"navbar navbar-expand-lg navbar-dark navbar-dark purple\">"+
			"<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#basicExampleNav\" aria-controls=\"basicExampleNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">"+
			"<span class=\"navbar-toggler-icon\">"+"</span>"+
			"</button>"+
			"<div class=\"collapse navbar-collapse\" id=\"basicExampleNav\">"+
				"<ul class=\"navbar-nav mr-auto\">"+
					"<li class=\"nav-item\">"+
                        "<a class=\"nav-link\" onclick=\"dashboardButtonURL()\">Dashboard"+
                            "<span class=\"sr-only\">(current)</span>"+
                        "</a>"+
                    "</li>"+
                    "<li class=\"nav-item "+photoTab+"\">"+
                        "<a class=\"nav-link\" onclick=\"photoGraphButtonURL()\">Photographs</a>"+
                    "</li>"+
                    "<li class=\"nav-item "+themeTab+"\">"+
                        "<a class=\"nav-link\" onclick=\"themeButtonURL()\">Themes</a>"+
                    "</li>"+
                    "<li class=\"nav-item "+aboutUsTab+"\">"+
                        "<a class=\"nav-link\" onclick=\"aboutUsButtonURL()\">About Us</a>"+
                    "</li>"+
                    "<li class=\"nav-item "+contactUsTab+"\">"+
                        "<a class=\"nav-link\" onclick=\"contactUsButtonURL()\">Contact Us</a>"+
                    "</li>"+
				"</ul>"+
                "<span class=\"white-text\">"+
                    "<ul class=\"navbar-nav mr-auto\">"+
                        "<li class=\"nav-item\">"+
                            "<a class=\"nav-link\" onclick=\"logoutButtonURL()\">Logout</a>"+
                        "</li>"+
                    "</ul>"+
                "</span>"+
			"</div>"+
		"</nav>";
    document.getElementById("nav-bar-id").innerHTML = navBar;
}

function getLoginId(){
    return getURL().split("=")[1]; 
}

function photoGraphButtonURL(){   
    window.location = "photographs.html?loginId="+getLoginId();
}

function themeButtonURL(){
    window.location = "theme-home-page.html?loginId="+getLoginId();
}

function dashboardButtonURL(){
    window.location = "welcome-page.html?loginId="+getLoginId();
}

function aboutUsButtonURL(){
    window.location = "about-us.html?loginId="+getLoginId();
}

function contactUsButtonURL(){
    window.location = "contact-us.html?loginId="+getLoginId();
}

function logoutButtonURL(){
    window.location = "jsp-pages/logout.jsp?loginId="+getLoginId();
}

function getURL(){
	var URL = window.location.href;
	var splitURLByQuestionMark = URL.split("?");
	return splitURLByQuestionMark[1];
}