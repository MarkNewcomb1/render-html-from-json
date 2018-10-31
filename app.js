// Given the following JSON payload, 
// dynamically create and render the HTML for a menu bar. 
// The menu bar should render the children when the 
// mouse is moved over an element.
const nav = document.querySelector('nav');
fetch('./payload.json')
    .then(res => res.json())
    .then(data => {
        for (let i in data) {
            let menuItem = document.createElement('a');
            menuItem.innerHTML = data[i].title;
            menuItem.href = data[i].href;

            if (data[i].children) {
                menuItem.classList.add('dropdown');
                var div = document.createElement('div');
                div.classList.add('dropdown-content');

                for (let j in data[i].children) {
                    var childItem = document.createElement('a');
                    childItem.innerHTML = data[i].children[j].title;
                    childItem.href = data[i].children[j].href;
                    div.appendChild(childItem);

                    if (data[i].children[j].children) {
                        childItem.classList.add('dropdown');
                        var div2 = document.createElement('div');
                        div2.classList.add('dropdown-content');
                        
                        for (let h in data[i].children[j].children) {
                            let grandChildItem = document.createElement('a');
                            grandChildItem.innerHTML = data[i].children[j].children[h].title;
                            grandChildItem.href = data[i].children[j].children[h].href;
                            div2.appendChild(grandChildItem);
                            childItem.appendChild(div2);
                        }
                    }
                }
                div.appendChild(childItem);
            }
            nav.appendChild(menuItem);

            if (data[i].children) {
                if (data[i].children.children) {
                    div.appendChild(div2);
                }
                nav.appendChild(div);
            }
        }
    });