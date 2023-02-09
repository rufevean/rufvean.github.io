/* nav bar section */

// name 
let navderList = [
    "g/RUFEVEAN",
    "gi/RUFEVEAN",
    "git/RUFEVEAN",
    "gith/RUFEVEAN",
    "githu/RUFEVEAN",
    "github/RUFEVEAN",
    "github./RUFEVEAN",
    "github.c/RUFEVEAN",
    "github.co/RUFEVEAN",
    "github.com/RUFEVEAN",

];
let count = 0;
let navde1 = function () {
    
    document.getElementById("navder").innerHTML = navderList[count];
    if (count != navderList.length - 1) {
        count = count + 1;
    }
};
let in1;
let navde = function(){
    count= 0;
    in1 = setInterval(navde1,100);
}

let navdull = function(){
    clearInterval(in1);
    document.getElementById("navder").innerHTML = "/RUFEVEAN";
}







const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('input', (t) => {
	const isChecked = t.target.checked;
	
	if(isChecked) {
		body.classList.add('transition1');
	} else {
		body.classList.remove('transition1');
	}
});