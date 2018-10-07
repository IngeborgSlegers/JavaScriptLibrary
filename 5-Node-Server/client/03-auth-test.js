function fetchAllFromAuthRoute() {
    const fetch_url = `http://localhost:3000/authtest/getall`
    const accessToken = localStorage.getItem('SessionToken') //1

    const response = fetch(fetch_url, {
        method: 'GET', //2
        headers: {
            'Content-Type': 'application/json', //3
            'Authorization': accessToken //4
        }
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}

/***************************************
 * FETCH/POST to Auth/Create
***************************************/
function postToAuthRouteCreate(){
    const fetch_url = `http://localhost:3000/authtest/create`
    const accessToken = localStorage.getItem('SessionToken')

    let authTestDataInput = document.getElementById('authTestData').value; //5

    let authInputData = { authtestdata: { item: authTestDataInput } }; //6

    const response = fetch(fetch_url, {
        method: 'POST', //7
        headers: {
            'Content-Type': 'application/json', 
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData) //8
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
}

/***************************************
 * GET ITEM BY USER
***************************************/
function getOneByUser() {

    let postIdNumber = document.getElementById("getNumber").value; //9

    const fetch_url = `http://localhost:3000/authtest/${postIdNumber}` //10
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
            let myItem = document.getElementById('getItemValue'); //11
            myItem.innerHTML = response.authtestdata; //12
        })
}

/***************************************
 * PUT to authtest/update/:id
***************************************/
function updateItem() {
    let postIdNumber = document.getElementById('updateNumber').value;
    let authTestDataInput = document.getElementById('updateValue').value;

    const fetch_url = `http://localhost:3000/authtest/update/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    let authInputData = { authtestdata: { item: authTestDataInput } };
    const response = fetch(fetch_url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        },
        body: JSON.stringify(authInputData)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        let myItem = document.getElementById('newItemValue')
        myItem.innerHTML = data.authtestdata;
        fetchAllFromAuthRoute();
    })
}

function showCurrentData(e) {
    const fetch_url = `http://localhost:3000/authtest/${e.value}`
    const accessToken = localStorage.getItem('SessionToken')

    fetch(fetch_url, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
    .then(response => {
        return response.json();
    })
    .then(function (response) {
        console.log(response);
        let myItem = document.getElementById('updateValue');
        if (!response) return;
        else myItem.value = response.authtestdata;
    })
}

function deleteItem() {
    let postIdNumber = document.getElementById("deleteNumber").value;

    const fetch_url = `http://localhost:3000/authtest/delete/${postIdNumber}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'DELETE',
        headers: {
            'Content-Type': "application/json",
            'Authorization': accessToken
        }
    })
    .then(response => {
        console.log(response);
        fetchAllFromAuthRoute()
    })
}

function fetchFromOneDisplayData() {
    const url = 'http://localhost:3000/authtest/getall'
    const accessToken = localStorage.getItem('SessionToken')

    fetch(url, {
        method: 'GET', 
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization' : accessToken
        })
    })
    .then(
        function(response) {
            return response.json()
        })
    .catch(
        function (error) {
        console.error('Error:', error)
        })
    .then(
        function (response) {
            let text = '';
            let myList = document.querySelector('ul#fourteen');
            while (myList.firstChild) {
                myList.removeChild(myList.firstChild)
            }

            console.log(response);
            for (r of response) {
                let listItem = document.createElement('li');
                let textData = r.id + '' + r.authtestdata;
                listItem.innerHTML = textData;
                listItem.setAttribute('id', r.id);
                myList.appendChild(listItem);
                myList.addEventListener('click', removeItem);
            }
        })
}

function deleteItemById(paramNum) {
    const fetch_url = `http://localhost:3000/authtest/delete/${paramNum}`
    const accessToken = localStorage.getItem('SessionToken')

    const response = fetch(fetch_url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': accessToken
        }
    })
        .then(response => {
            console.log(response);
            fetchAllFromAuthRoute();
        })
}

function removeItem(e) {
    console.log(e);
    let target = e.target;
    if (target.tagName !== 'LI') return;
    else target.parentNode.removeChild(target);

    let x = target.getAttribute("id");
    deleteItemById(x);
    // console.log("The id number for this item is " + x );
}


//1. Since we stored our token in  localStorage  , we can access it by using the getItem method to get it back from localStorage and put it in a variable. Note that we could also use our  getSessionToken() method for this task.

//2. By default, fetch runs a GET request. We can use the  method  property to send other requests. In this case, we;re still sending a  GET. 

//3. The  Content-Type  header tells the server what kind of data is being sent in our PreFlight request, if any.

//4. The  Authorization  header provides some sort of encrypted data allowing access to the server, in this case our token.

//5. We will be using an input field in the DOM for this exercise, so we will grab whatever string that a user passes into that field.

//6. We package that value up into an object. Notice that this object is similar in syntax to what we did with Postman when posting data.

//7. Note that we are identifying this methode as a POST request. If you are struggling with request problems, it's a good idea to take a look at your HTTP verb and make sure that you are using the right one. Since the server endpoint requires a POST request, we have to send the data as a POST request. GET would not work because we did not write our server endpoint as a GET request.

//8. We package up the object as a JSON string and add it to the body of our request. The  JSON.stringify()  method will take a JS object and convert it into JSON.

//9. We get the  postIDNumber  provided in the  getNumber  field. Because we are making an authenticated request, this  id  has to exist in the database, as well as match the  user.id  from the database for the user that you are using currently logged in as.

//10. We pass the  postIdNumber  into the url with a template literal.

//11. We target an element called  getItemValue.  It's a label tag.

//12. We set the value of the label to the value of  response.authtestdata. This means that the data will be populated in the label when the DOM loads.

//13. We get the value of the input provided from the user for both the  updateNumber  and  updateValue  fields and assign each to a variable.

//14. Like before, we pass in the input from the user to the url with a template literal.

//15. We create an object that packages up our request. We capture the value of  authTestDataInput  and store it in the variable  authInputData  variable.

//16. We are doing an update method, so this will be our PUT request.

//17. Just like we did in the past  POST  methods, we use the stringidy method to convert the object to a JSON object.

//18. We print the response to our fetch to the console.

//19. We make a reference to the <label> in the step12 (Update Single Item), then set its value to the data we put in the database.

//20. We run the  getall  function again and print the new contents of the database to the console.