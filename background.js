chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.name == "fetchWords"){
        const apiKey = "sswzcdqg4exlz7l6e2sh5ga5qvj0di0lr6nt332752bqoeyxl";
        const dateStr = new Date().toISOString().slice(0,10); //2020-01-01
        const apiCall = 'https://api.wordnik.com/v4/words.json/wordOfTheDay?date='+dateStr+'&api_key='+apiKey;
        
        //call api
        fetch(apiCall).then(function(res) {
            //wait for response
            if(res.status !== 200) {
                response({word: 'Error', desc: 'There was a problem loading the word of the day'});
                return;
            }
            res.json().then(function(data) {
                //send the response
                response({word: data.word, desc: data.note});
            });
        }).catch(function(err) {
            response({word: 'Error', desc: 'There was a problem loading the word of the day'});
        });
    }
    return true;
});