var fs = require('fs');
var fetch = require('node-fetch');

// replace with your personal access token. 
var personalAccessToken = '0/bb57fe8aa50f3ff99369c022d8219f3f';

// Making an array of project IDs
var projectIds = [877745135554818,
	877731750113733,
	877748104811774,
	877748104811809,
	877748104811845,
	877748104811877,
	877750772990599,
	877750772990631,
	877750772990661,
	737603402518917,
	736977586788245,
	737603402518913,
	932599856407534]

// Loop through all project
async function run() {
	var reviews = []

for (var i = 0; i < projectIds.length; i++) {
	var projectId = projectIds[i];
	var response = await fetch(`https://app.asana.com/api/1.0/projects/${projectId}/tasks?opt_fields=id,projects,created_at,completed,completed_at,notes,name&access_token=${personalAccessToken}`,
	{
		headers: {"Authorization": `Bearer ${personalAccessToken}`}
	})
	var tasks = await response.json();
	console.log(tasks);
}

console.log(reviews);
}


run()

