// MODULE 1 - Speech Capture

function startSpeech(){

let recognition = new webkitSpeechRecognition()

recognition.lang = "en-US"

recognition.onresult = function(event){

let text = event.results[0][0].transcript

document.getElementById("speechInput").value = text

}

recognition.start()

}


// MODULE 2 - Semantic Analyzer

function analyzeIntent(text){

text = text.toLowerCase()

if(text.includes("prime"))
return "Mathematical Algorithm"

if(text.includes("login"))
return "Authentication System"

if(text.includes("sort"))
return "Sorting Algorithm"

return "General Programming Request"

}


// MODULE 3 - Conflict Resolution

function resolveDecision(intent){

if(intent==="Mathematical Algorithm")
return "Use loop and divisibility logic to detect prime numbers"

if(intent==="Authentication System")
return "Use secure password hashing"

return "Use standard programming logic"

}


// MODULE 5 - Code Generator

function generateCode(intent){

if(intent==="Mathematical Algorithm"){

return `num = int(input("Enter number: "))

for i in range(2,num):
    if num%i==0:
        print("Not Prime")
        break
else:
    print("Prime Number")`

}

if(intent==="Authentication System"){

return `function login(password){

let hash = bcrypt(password)

return authenticate(hash)

}`

}

return "// basic template"

}


// MODULE 6 - Explainability Engine

function generateExplanation(intent){

if(intent==="Mathematical Algorithm")
return "AI detected a request for a prime number algorithm. The system checks divisibility from 2 to n-1."

if(intent==="Authentication System")
return "AI detected a login system request and suggested password hashing for security."

return "Standard programming logic was used."

}


// MODULE 7 - Audio IDE for Blind Developers

function speakExplanation(){

let text = document.getElementById("explanation").innerText

let speech = new SpeechSynthesisUtterance(text)

speech.lang = "en-US"

speechSynthesis.speak(speech)

}


// MODULE 8 - Learning Mode

function askLearningQuestion(intent){

if(intent==="Mathematical Algorithm")
alert("Learning Question: Why does the loop start from 2 when checking for prime numbers?")

}


// MODULE 9 - Security Module

function storeDiscussion(text){

localStorage.setItem("lastDiscussion", text)

}


// MODULE 10 - Feedback Module

function saveFeedback(){

let feedback = confirm("Was this generated code helpful?")

if(feedback)
console.log("Positive feedback stored")

}


// MAIN SYSTEM CONTROLLER

function runSystem(){

let text = document.getElementById("speechInput").value


storeDiscussion(text)


let intent = analyzeIntent(text)

document.getElementById("intent").innerText = intent


let decision = resolveDecision(intent)

document.getElementById("decision").innerText = decision


let code = generateCode(intent)

document.getElementById("code").innerText = code


let explanation = generateExplanation(intent)

document.getElementById("explanation").innerText = explanation


askLearningQuestion(intent)

saveFeedback()

}