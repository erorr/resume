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

var projects = {
    "projects": [
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






