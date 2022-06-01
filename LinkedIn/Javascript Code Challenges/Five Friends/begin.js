/*
  ## What You'll Do

You're working on a new component for"Your Space", a brand new social media application for finding friends. This component displays a user's top 
five friends.

Given some JSON, dynamically generate thumbnails for the top five friends. You can append these thumbnails to the `<div id="timeline"></div>`.

## Requirements

- Use the random user API: https://randomuser.me/api/?results=5
- Use async/await
- Use fetch()
- Use DOM manipulation to dynamically generate five medium-sized images for each person
*/

const timeline = document.getElementById('timeline');

async function getFriends() {
	try {
		const response = await fetch('https://randomuser.me/api/?results=5');
		const friends = await response.json();

		friends.results.forEach((friend) => {
			const node = document.createElement('img');
			node.src = friend.picture.medium;
			timeline.appendChild(node);
		});
	} catch (err) {
		console.log(`There was an error: ${err}`);
	}
}

getFriends();
