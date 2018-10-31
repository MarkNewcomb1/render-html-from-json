# The task

-Given the included JSON payload, 
dynamically create and render the HTML for a menu bar. 
The menu bar should render the children when the 
mouse is moved over an element.

## Deployed Link
[Render HTML from JSON](https://render-html-from-json.firebaseapp.com/)

## Server used

- http-server


### Notes/Feedback from this code

1. record any questions/thoughts you had: "could a child at any level have children?" "should this have a customizable look/feel?" these show your thought process and how you would work within the team (do you make assumptions, do you ask the questions our team needs, etc).
2. `nav = document.querySelector('nav');` I would have preferred a document.getElementById since you're targeting a very specific element on the page. Obviously `querySelector` works fine!
3. `fetch('./payload.json').then` you're up to date with latest best practices :+1: (a comment with "I'd use async/await if this went through babel" would help show thought process [if you had a thought like that] and continue showing your knowledge of an ever-changing language)
4. `for (let i in data) {` a for-in loop should always have an `if (data.hasOwnProperty(i))` check - weird bugs can and will bite you, almost always in production
5. `for (let i in data) {` it's uncommon to use `i` for the variable in a for-in, I'd prefer something like `key`
6. `menuItem.innerHTML = data[i].title;` prefer `textContent` (see also `innerText` and their differences https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText)
7. `if (data[i].children) {` for same reasons as the for-in loop, use `data[i].hasOwnProperty('children')`
8. `var div2 = document.createElement('div');` (line 27) `div.appendChild(div2); (line 45)` takes advantage of (I'd argue abuses) the scope-hoisting nature of `var`; I'd prefer to see `div2` defined as a `let` at the top of the scope it's used in
9. expandability, the next thing I'd throw at you is how would you make this work for children at any depth (edited)
in terms of importance,
1 & 9 are at the top; 3 would start a conversation to see how up to date you are with JavaScript changes; depending on how conversation flow is going I would probably try to see if you're aware of issues around 4 and 8
The rest I would simply note you haven't written a library like React so why should you even care; those provide small details about your experience though, and I now have a conversation around your experience to date and how you approach growth and personal development, to make sure you're a good team member, open to constructive feedback, and are going to grow (and help the rest of the team grow).
That last part is very important to me building a team, but all teams are different and will have different values.