<!-- Insert Name into Header -->

var name = "Lee Ser Chim";
var formattedName = HTMLheaderName.replace("%data%", name);

$("#header").append(formattedName);

var role = "Wordpress Wizard";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedRole);