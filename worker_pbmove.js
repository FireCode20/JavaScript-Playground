/* Worker file
Workers allow for multi threading. WOOO
*/ 

//Import this function
//*************************DANGER*************************************
//THIS IS BAD, TRY NOT TO USE IT. IT MIGHT BREAK THINGS!!! BE CARFUL!!
//This could crash your browser, unlikely but possable!!!
//THIS CODE WILL SLEEP IN MILLISECONDS!!!!!
//ie. 1000ms = 1s

function sleep(milliseconds) {
  var start = new Date().getTime(); // get the time
  for (var i = 0; i < 1e7; i++) { //loop indefinately
    if ((new Date().getTime() - start) > milliseconds){ //check if time has past
      break; //if so stop the loop
    }
  }
}
//*************************DANGER-OVER*********************************

for (var sty = 540; sty > 0; sty--){ //
	postMessage(sty);
	sleep(50);
}