var bio = {
    "name": "Lee Ser Chim",
    "role": "Wordpress Wizard",
    "contacts": {
        "mobile": "+65-9123-4567",
        "email": "serchim@gmail.com",
        "github": "erorr",
        "twitter": "typ0graphy",
        "location": "Singapore"
    },
    "welcomeMessage": "Always learning, Always Searching",
    "skills": [
        "Wordpress",
        "HTML/CSS",
        "Javascript",
        "Photoshop"
    ],
    "bioPic": "images/fry.jpg"
}

bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName, formattedRole);


var formattedWorkMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var	formattedWorkEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedWorkTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
var formattedWorkGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedWorkLocation = HTMLlocation.replace("%data%",bio.contacts.location);

$("#topContacts").append(formattedWorkMobile, formattedWorkEmail, formattedWorkTwitter, formattedWorkGithub, formattedWorkLocation);

var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedbioPic, formattedwelcomeMessage);

$("#header").append(HTMLskillsStart);

if (bio.skills.length > 0) {
	for (var skill in bio.skills) {
		$("#header").append(HTMLskills.replace("%data%",bio.skills[skill]));
	}
}
}

bio.display();

var work = {
    "jobs": [
        {
            "employer": "Typo Incorporated",
            "title": "Web Developer",
            "location": "Singapore",
            "dates": "2003 - 2009",
            "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar."
        },
        {
            "employer": "Erorr Incorporated",
            "title": "Website Administrator",
            "location": "Thailand",
            "dates": "2009 - Present",
            "description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
        }
    ]
}

work.display = function() {

	if (work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);

		for (var job in work.jobs) {
		
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    		var formattedEmployerTitle = formattedEmployer + formattedTitle;
    		$(".work-entry").append(formattedEmployerTitle);

    		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    		$(".work-entry").append(formattedDates);

    		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    		$(".work-entry").append(formattedWorkLocation);
    		
    		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    		$(".work-entry").append(formattedDescription);
		}
	}
}

work.display();


var projects = {
    "assignments": [
        {
            "title": "Corporate Website",
            "dates": "2003 - 2009",
            "description": "Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated. On no applauded exquisite my additions. Pronounce add boy estimable nay suspected. You sudden nay elinor thirty esteem temper. Quiet leave shy you gay off asked large style. ",
            "images": [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }
    ]
}

/*
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
*/

projects.display = function() {
if (projects.assignments.length > 0) {
	$("#projects").append(HTMLprojectStart);

	for (var assignment in projects.assignments) {
		
    	var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.assignments[assignment].title);
    	$(".project-entry").append(formattedprojectTitle);

    	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.assignments[assignment].dates);
    	$(".project-entry").append(formattedProjectDates);
    		
    	var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.assignments[assignment].description);
    	$(".project-entry").append(formattedProjectDescription);

    	for (var image in projects.assignments[assignment].images) {

    		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.assignments[assignment].images[image]);
    		$(".project-entry").append(formattedProjectImage);

    	}
    	
	}
}
}

projects.display();

var education = {
    "schools": [
        {
            "name": "Nanyang Technology University",
            "location": "Singapore",
            "degree": "Bachelor in Business Studies",
            "majors": [
                "Information Technology"
            ],
            "dates": "1999 to 2002",
            "url": "www.ntu.edu.sg"
        },
        {
            "name": "Hwa Chong Junior College",
            "location": "China",
            "degree": "GCE 'A' Level",
            "majors": [
                "Not Applicable"
            ],
            "dates": "1995 to 1996",
            "url": "www.hci.edu.sg"
        }
    ],
    "onlineCourses": [
        {
            "title": "Introduction to Computer Science and Programming",
            "school": "EdX",
            "date": "Jan 01, 2014",
            "url": "https://courses.edx.org/courses/MITx/6.00.1x/3T2013/"
        },
        {
            "title": "Introduction to Computational Thinking and Data Science",
            "school": "EdX",
            "date": "May 09, 2014",
            "url": "https://courses.edx.org/courses/MITx/6.00.2x/1T2014/"
        }
    ]
}

/*
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/

education.display = function() {

$("#education").append(HTMLschoolStart);

if (education.schools.length > 0) {

	for (var school in education.schools) {
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    	var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    	$(".education-entry").append(formattedSchoolName + formattedSchoolDegree);

    	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    	$(".education-entry").append(formattedSchoolDates);

    	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    	$(".education-entry").append(formattedSchoolLocation);
    		
    	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
    	$(".education-entry").append(formattedSchoolMajor);
	}
}

if (education.onlineCourses.length > 0) {

	$(".education-entry").append(HTMLonlineClasses);

	for (var course in education.onlineCourses) {
		
		var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    	var formattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    	$(".education-entry").append(formattedCourseTitle + formattedCourseSchool);

    	var formattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
    	$(".education-entry").append(formattedCourseDates);
   		
    	var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[0]);
    	$(".education-entry").append(formattedSchoolMajor);
	}
}
}

education.display();

$("#mapDiv").append(googleMap);
