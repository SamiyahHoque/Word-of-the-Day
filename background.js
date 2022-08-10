function getRandomNumber(number) {
    var max = (number + 1)
    return Math.floor(Math.random() * Math.floor(max))
}

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if(msg.name == "fetchWords"){
            //call API
        //const apiKey = "OUR-API-KEY"
        //const dateStr = new Date().toISOString().slice(0,10) //2020-01-01
        //const apiCall = 'https://api.wordnik.com/x4/words.json/wordOfTheDay?date='+dateStr+'&api_key='+apiKey
        //wait for response
        //send the response
        
        const wordsObj = [
            "hello",
            "hey",
            "mom",
            "dad",
            "done"
        ]
        const wordsDesc = [
            "hello d",
            "hey d",
            "mom d",
            "dad d",
            "done d"
        ]

        var number = getRandomNumber(4)
        
        response({word: wordsObj[number], desc: wordsDesc[number]})

        //response({api: apiCall, date: dateStr})
    }
})