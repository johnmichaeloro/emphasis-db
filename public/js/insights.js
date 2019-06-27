console.log("insights.js loaded");


let authors, publishers;




getSuggestions = (arr, str) =>
{
	//Returns another array containing strings
	//from the given array that match the given substring

	const suggestions =
	{
		html: [],
		rawstr: []
	};

	for (let i = 0; i < arr.length; i++)
	{
		//Get a substring from the beginning of the array element
		//that is the length of the given substring

		if (arr[i].substring(0, str.length).toLowerCase() == str.toLowerCase())
		{
			suggestions.html.push(`<b>${arr[i].substring(0, str.length)}</b>${arr[i].substring(str.length, arr[i].length)}`);
			suggestions.rawstr.push(arr[i]);
		}
	}
	//console.log(suggestions);
	return suggestions;
}

pubSuggestClick = (str) =>
{
	document.getElementById("pubSuggest").style = "display: none";
	document.getElementById("publisher").value = str;
}


pubInfoChange = async () =>
{
	const pubSuggest = document.getElementById("pubSuggest");

	const query = document.getElementById("publisher");

	const suggestions = getSuggestions(publishers, query.value);

	if (query.value == "")
	{
		pubSuggest.style = "display: none";
		pubSuggest.innerHTML = "";
	}
	else
	{
		pubSuggest.style = "";
		pubSuggest.innerHTML = "";
		for (let i = 0; i < suggestions.html.length; i++)
		{
			pubSuggest.innerHTML = pubSuggest.innerHTML + `<span onClick="pubSuggestClick('${suggestions.rawstr[i]}')" class="suggestionSpan">${suggestions.html[i]}</span>`;
		}
	}
}

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
			<span class="pubStatement">${publisher}</span> Average Engagement Score is <span class="engagementScoreInsightFound">${response.avgEng}</span><br>
			There are a total of ${response.num} entries by this publisher.`
	}
	else
	{
		document.getElementById("pubInfoText").innerHTML = "There are no entries with this publisher!"
	}

}



authSuggestClick = (str) =>
{
	document.getElementById("authSuggest").style = "display: none";
	document.getElementById("author").value = str;
}


authInfoChange = async () =>
{
	const authSuggest = document.getElementById("authSuggest");

	const query = document.getElementById("author");

	const suggestions = getSuggestions(authors, query.value);

	if (query.value == "")
	{
		authSuggest.style = "display: none";
		authSuggest.innerHTML = "";
	}
	else
	{
		authSuggest.style = "";
		authSuggest.innerHTML = "";
		for (let i = 0; i < suggestions.html.length; i++)
		{
			authSuggest.innerHTML = authSuggest.innerHTML + `<span onClick="authSuggestClick('${suggestions.rawstr[i]}')" class="suggestionSpan">${suggestions.html[i]}</span>`;
		}
	}
}

authInfoClick = async () =>
{
	document.getElementById("authInfoText").innerHTML = "Waiting...";

	const author = document.getElementById("author").value;

	//console.log(publisher);

	let response = await fetch("/entries/insights/forauthor/" + author);

	response = await response.json();

	if (response.num != 0)
	{
		document.getElementById("authInfoText").innerHTML = `
			<span class="pubStatement">${author}</span> Average Engagement Score is <span class="engagementScoreInsightFound">${response.avgEng}</span><br>
			There are a total of ${response.num} entries by this author.`
	}
	else
	{
		document.getElementById("authInfoText").innerHTML = "There are no entries with this author!"
	}

}



getAllInsights = async () =>
{
	document.getElementById('all-msg').innerHTML = "Status: Waiting for data...";

	let insights = await fetch('/entries/insights/all');
	insights = await insights.json();


	//console.log(insights);

	document.getElementById('all-msg').innerHTML = "Status: OK";

	document.getElementById('qty-all').innerHTML = insights.all.quantity;
	document.getElementById('eng-all').innerHTML = Math.round(insights.all.avgEng);

	document.getElementById('qty-news').innerHTML = insights.news.quantity;
	document.getElementById('eng-news').innerHTML = Math.round(insights.news.avgEng);

	document.getElementById('qty-opinion').innerHTML = insights.opinion.quantity;
	document.getElementById('eng-opinion').innerHTML = Math.round(insights.opinion.avgEng);

	document.getElementById('qty-fiction').innerHTML = insights.fiction.quantity;
	document.getElementById('eng-fiction').innerHTML = Math.round(insights.fiction.avgEng);

	document.getElementById('qty-marketing').innerHTML = insights.marketing.quantity;
	document.getElementById('eng-marketing').innerHTML = Math.round(insights.marketing.avgEng);

	document.getElementById('qty-business').innerHTML = insights.business.quantity;
	document.getElementById('eng-business').innerHTML = Math.round(insights.business.avgEng);

	document.getElementById('qty-legal').innerHTML = insights.legal.quantity;
	document.getElementById('eng-legal').innerHTML = Math.round(insights.legal.avgEng);

	document.getElementById('qty-technical').innerHTML = insights.technical.quantity;
	document.getElementById('eng-technical').innerHTML = Math.round(insights.technical.avgEng);

	document.getElementById('qty-academic').innerHTML = insights.academic.quantity;
	document.getElementById('eng-academic').innerHTML = Math.round(insights.academic.avgEng);

	document.getElementById('qty-oratory').innerHTML = insights.oratory.quantity;
	document.getElementById('eng-oratory').innerHTML = Math.round(insights.oratory.avgEng);

	document.getElementById('qty-other').innerHTML = insights.other.quantity;
	document.getElementById('eng-other').innerHTML = Math.round(insights.other.avgEng);
}







// authorInfoClick = async () =>
// {
// 	document.getElementById("authorInfoText").innerHTML = "Waiting...";

// 	const author = document.getElementById("author").value;

// 	//console.log(publisher);

// 	let response = await fetch("/entries/insights/forauthor/" + author);

// 	response = await response.json();

// 	if (response.num != 0)
// 	{
// 		document.getElementById("authorInfoText").innerHTML = `
// 			<span class="pubStatement">${author}</span> Average Engagement Score is <span class="engagementScoreInsightFound">${response.avgEng}</span><br>
// 			There are a total of ${response.num} entries by this author.`
// 	}
// 	else
// 	{
// 		document.getElementById("authorInfoText").innerHTML = "There are no entries with this author!"
// 	}

// }


getAuthPub = async () =>
{
	document.getElementById('msg').innerHTML = "Status: Getting list of authors...";

	authors = await fetch('/entries/authors');
	authors = await authors.json();

	document.getElementById('msg').innerHTML = "Status: Getting list of publishers...";

	publishers = await fetch('/entries/publishers');
	publishers = await publishers.json();

	document.getElementById('msg').innerHTML = "Status: OK";
}




//MAIN CODE that runs when the page is loaded:

//Get author and publisher names from the database:

getAuthPub();
