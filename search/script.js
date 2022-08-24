// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
    let user1 = "physics"
    let user2 = "chemistry"
    let user3 = "Mathematics"
    let user35 = "Maths"
    let user4 = "Electrical"
    let user45 = "BEE"
    let user5 = "Mechanics"
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if (userData) {
        console.log(user5.includes(userData.toLocaleLowerCase()))
        icon.onclick = () => {
            //webLink = `https://www.google.com/search?q=${userData}`;
            //linkTag.setAttribute("href", webLink);
            //linkTag.click();
        }
        if (user1.includes(userData.toLocaleLowerCase()) && userData.length >= 3) {
            emptyArray = psuggestions
        }
        else if (user2.includes(userData.toLocaleLowerCase()) && userData.length >= 3) {
            emptyArray = csuggestions
        }
        else if ((user3.includes(userData.toLocaleLowerCase()) || user35.includes(userData.toLocaleLowerCase())) && userData.length >= 3) {
            emptyArray = msuggestions
        }
        else if ((user4.includes(userData.toLocaleLowerCase()) || user45.includes(userData.toLocaleLowerCase())) && userData.length >= 3) {
            emptyArray = bsuggestions
        }
        else if (user5.includes(userData.toLocaleLowerCase()) && userData.length >= 3) {
            emptyArray = mesuggestions
        }
        else if(userData.length >= 3){
            emptyArray = suggestions.filter((data) => {
                //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                return data.toLocaleLowerCase().includes(userData.toLocaleLowerCase());
            });
        }
        else {
            emptyArray = suggestions.filter((data) => {
                //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
                return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
            });
        }
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        //webLink = `https://www.google.com/search?q=${selectData}`;
        //linkTag.setAttribute("href", webLink);
        //linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}