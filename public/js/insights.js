console.log("insights.js loaded");

pubInfoClick = async () =>
{
	document.getElementById("pubInfoText").innerHTML = "Waiting...";

	const publisher = document.getElementById("publisher").value;
	
	//console.log(publisher);
	
	let response = await fetch("/entries/insights/forpublisher/" + publisher);

	response = await response.json();

	if (response.num != 0)
	{
		document.getElementById("pubInfoText").innerHTML = `
			Average Engagement Score for ${publisher} is ${response.avgEng}<br>
			There are a total of ${response.num} entries by this publisher.`
	}
	else
	{
		document.getElementById("pubInfoText").innerHTML = "There are no entries with this publisher!"
	}

}

authorInfoClick = async () =>
{
	document.getElementById("authorInfoText").innerHTML = "Waiting...";

	const author = document.getElementById("author").value;
	
	//console.log(publisher);
	
	let response = await fetch("/entries/insights/forauthor/" + author);

	response = await response.json();

	if (response.num != 0)
	{
		document.getElementById("authorInfoText").innerHTML = `
			Average Engagement Score for ${author} is ${response.avgEng}<br>
			There are a total of ${response.num} entries by this author.`
	}
	else
	{
		document.getElementById("authorInfoText").innerHTML = "There are no entries with this author!"
	}

}