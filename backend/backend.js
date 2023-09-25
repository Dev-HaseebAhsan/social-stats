//I dont know what naming schemes we should use here
//Everything here is still just theory
//Let me know if I am a dumbass

//Function 1 (Request)
//Gets data from API/Scraper and sends to Formater
function getData(data){
    //Probobly gonna just: formatData(twitterData(user));
}

//Function 2 (Format)
//Formats Data into object and turn object into JSON so it can be sent to frontend
function formatData(user, icon, followers, e1, e2, e3, e4, e5){

    const subjectdata = {username:username, pfp:icon, extra1:e1, extra2:e2, extra3:e3, extra:e4, extra5:e5};
    const data =  JSON.parse(subjectdata);

    sendData(data);
}

//Function 3 (Send)
//Recives data JSON and send it to frontend
function sendData(data){

}