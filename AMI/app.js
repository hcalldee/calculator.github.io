const strtBtn = document.querySelector('#start')
// const stpBtn = document.querySelector('#stop')
// const spkBtn = document.querySelector('#speak')

const Spc = 
window.SpeechRecognition || window.webkitSpeechRecognition;

const recog = new Spc();

recog.onstart = function(){
    console.log('Vr active')  
}
// https://www.youtube.com/
// https://www.youtube.com/results?search_query=music

// recog.continuous=true

recog.onresult = function(event) {
    let current = event.resultIndex
    let transcript = event.results[current][0].transcript
    job(transcript.toLowerCase())
}

function job(transcript) {
    console.log(transcript)
    if(transcript.includes('hi')){
        readOut("Hallo, How was your day ?");
    }else if(transcript.includes('deactivate')){
        readOut("deactivating");
        recog.stop();
    }else if(transcript.includes('humidity report')){
        readOut("Openning Weather Forcast");
        window.open("https://www.google.com/search?q=weather")
    }else if(transcript.includes('open youtube')){
        readOut("Openning Youtube sir");
        window.open("https://www.youtube.com")
    }else if(transcript.includes('open google')){
        readOut("Openning Youtube sir");
        window.open("https://www.google.com")
    }else if(transcript.includes('open my github')){
        readOut("Openning your Github sir");
        window.open("https://github.com/hcalldee/")
    }else if(transcript.includes('on youtube')){
        if(transcript.includes('search')){
            console.log(transcript.split(" "))
            word = transcript.split(" ")
            keyword = word.slice(word.indexOf("search")+1,word.indexOf("on"))
            if(keyword.length>1){
                word = keyword.join(" ")
                keyword = keyword.join(" ");
            }else{
                word = keyword
            }
            readOut("Searching "+word+" on Youtube sir");
            window.open("https://www.youtube.com/results?search_query="+keyword)
        }
    }
    else if(transcript.includes('on google')){
        if(transcript.includes('search')){
            word = transcript.split(" ")
            keyword = word.slice(word.indexOf("search")+1,word.indexOf("on"))
            if(keyword.length>1){
                word = keyword.join(" ")
                keyword = keyword.join(" ");
            }else{
                word = keyword
            }
            readOut("Searching "+word+" on Google sir");
            window.open("https://www.google.com/search?q="+word)
        }
    }
}

recog.onend = function(){
    // console.log(event) 
    console.log('Vr deactive')
    // recog.start();
}

strtBtn.addEventListener("click",()=>{
    recog.start();
})

// stpBtn.addEventListener("click",()=>{
//     recog.stop();
// })

// spkBtn.addEventListener("click",()=>{
// })

function readOut(message) {
    var timer = setInterval(function() {
        var voices = speechSynthesis.getVoices();
        if (voices.length !== 0) {
        var msg = new SpeechSynthesisUtterance(message);
        msg.voice = voices[28];        
        speechSynthesis.speak(msg);
        clearInterval(timer);
        }
    }, 1);
}
