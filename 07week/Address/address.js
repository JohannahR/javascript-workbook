'use strict'

import { POINT_CONVERSION_UNCOMPRESSED } from "constants";

document.getElementById('user').addEventListener('click', getUser)
function getUser(){
    fetch("https://randomuser.me/api/")
        .then((resp) => resp.json())
        .then((user) =>{
        let authors = data.results;
return authors.map(function(author) {
let li = createNode('li'),
img = createNode('img'),
span = createNode('span');
img.src = author.picture.medium;
span.innerHTML = ${author.name.first}, ${author.name.last};
append(li, img);
append(li, span);
append(ul, li);
})
})
.catch(function(error) {
console.log(JSON.stringify(error));
});
        console.log(user);
        let output =<h2>List of People</h2>
        user.results.forEach(function(getUser){
        output +=
            <ul>
                <li>${picture.thumbnail}</li>
                <li>Name: $(name.last), $(name.first)</li>
                <li>Location: $(location.city), $(location.state) </li>
            </ul>;
            }
        ,document.getElementById("input").innerHTML = output;        
    })
   

