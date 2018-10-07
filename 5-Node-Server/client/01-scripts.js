function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', {  //1
        method: 'GET',
        headers: new Headers({ //2
            'Content-Type': 'application/json'
        })
    })
    .then(function (response) {
        console.log("Fetch response:", response)
        return response.text(); //3
    })
    .then(function (text) {
        console.log(text);
    });
}

/******************************
 * 2 POST long hand: /one 
 *****************************/
function postToOne(){
    let url = 'http://localhost:3000/test/one';

    fetch(url, {
        method: 'POST',             //4
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){         //5
            return response.text()
        })
    .catch(
        function(error){            //6
            console.error('Error:', error)
        })
    .then(
        function(response){         //7
            console.log('Success:', response);
        })
}

/***********************************
 * 3 POST /one : Arrow Function
***********************************/
function postToOneArrow(){
    let url = 'http://localhost:3000/test/one';

    fetch(url, {    //8
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(res => res.text())  //9
    .catch(error => console.error('Error:', error)) //10
    .then(response => console.log('Success:', response));   //11
}

function postData() {
    //12
    let content = { testdata: { item: 'This was saved!' } };

    //13
    let testDataAfterFetch = document.getElementById('test-data');
    let createdAtAfterFetch = document.getElementById('created-at');

    fetch('http://localhost:3000/test/seven', {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)   //14
    })
    .then(response => response.json())
    .then(function (text) {
        console.log(text);
        //15
        testDataAfterFetch.innerHTML = text.testdata.testdata;
        createdAtAfterFetch.innerHTML = text.testdata.createdAt;
    });
}

/***************************************
 * 4 GET FROM /ONE - Display Data
***************************************/
function fetchFromOneDisplayData(){
    //16
    let url = 'http://localhost:3000/test/one';
    let dataView = document.getElementById('display-one');

    //17
    fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){
            return response.json()
        })
    .catch(
        function(error){
            console.error('Error:', error)
        })
    .then(
        function(results){
            let myList = document.querySelector('#getjson'); //18

            for (r of results){ //19
                console.log('Response:', r.testdata); //20
                let listItem = document.createElement('li'); //21
                listItem.innerHTML = r.testdatal //22
                myList.appendChild(listItem); //23
            }
        })
}



//1. Test endpoint with fixed value to verify server works.

//2. Send our headers to the server with the Headers() constructor object.

//3. The value received is a string, not a JSON object, so .text() is used instead of .json()

//When a client and server are both running at the same time, they run on different ports. By default, a server won't recognize any transmission coming form a different URL than its own, and it will refuse to acknowledge the request. This is known as a CORS error, which stands for CROSS ORIGIN RESOURCE SHARING.

//4. We are fetching the url. The route in the server handles a POST request, so our method type is POST.

//5. We pass the response into a Promise that returns the response as plain text.

//6. We handle an error, if an error comes back.

//7. In the final then(), we simply print the plain text response to the console.

//8. We're reaching out to an endpoint with a POST request. We add the appropriate headers.

//9. We are asking for a plain text response.

//10. We handle an error, if there is one.

//11. In the end, we simply print the data to the console.

//12. We set up an object, just like we would have in Postman. We have a preset string as the value of the item property.

//13. We have target some specific ids in the DOM. These elements will hold the value of the response that comes back after the post is stored.

//14. We pass in our pre-defined object into the fetch call within the body property. Notice that the method property is now POST instead of GET.

//15. Our response comes back and is printed to the console, and it is also displayed to the user along with the timestamp. We access the separate values by calling text.testdata. In the DOM, the innerHTML property allows us to take the plain text that we get back and display it in the target element.

//16. We set up our URL in one variable and target the   data-one   id in the DOM in another one.

//17. We create a fetch() with Headers and the request method of GET. THere are also chained promises that handle the data when it returns or handle an error if one comes back.

//18. Inside the final .then(), we are going to work towards showing the returned data in the DOM. We start by targeting the   getjson  id in the DOM and attaching the value to the  myList variable.

//19. We set up a    for of   loop.

//20. We write a console.log() statement to show how we can access the values that come back in the object inside the response.

//21. We create another variable called listItem. The  createElement() method will create that type of element in the DOM. In this case, we create a list item, li, every time we iterate.

//22. Each time we iterate, we store the value of r.testdata in the newly created li.

//23. We call appendChild on myList, which means that each time we iterate we put the li into the unordered list.