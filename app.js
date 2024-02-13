    // Words Input Code
    let words = document.getElementById('words')
    let wordList = []
    words.addEventListener("submit", (e) => {
        e.preventDefault();
        let word = document.getElementById('word')
        wordList.push(word.value)
        console.log(wordList)
        // Generate List On Submit
        if(document.getElementById('JSON').checked){
            let list = document.getElementById("myList");
            list.innerText = ''
            for (let i = 0; i < wordList.length; i++){
                let li = document.createElement('li')
                li.innerText = `${i + 1} - ${wordList[i]}`
                list.appendChild(li)
            }
        }
        else{
            let list = document.getElementById("myList");
            list.innerText = ''
            for (let i = 0; i < wordList.length; i++){
                let li = document.createElement('li')
                li.innerText = `${wordList[i]}`
                list.appendChild(li)
            }
        }
    })

    // Number Input Code
    let userNumbers = document.getElementById("userNumber")
    let userNumber = 0
    userNumbers.addEventListener("submit", (e) => {
        e.preventDefault();
        newNumber = document.getElementById('userNumbers')
        userNumber = newNumber.value
        console.log(userNumber)
    })

    // JSON Generation Code
    let generation = document.getElementById("generate")
    generation.addEventListener("submit", (e) => {
        e.preventDefault();
        if(userNumber == 0){
            alert(`Please specify how many words you need`)
        }
        else if(wordList.length < userNumber){
            alert(`Please Input at Least ${userNumber} words`)
        }
        else{
            console.log(JSONGenerate(wordList))
        }
    })

function JSONGenerate(list){
    let wordsArrayOfObjects = []
if(document.getElementById('JSON').checked){
    for(let i = 0; i < list.length; i++){
        let obj = {"name": list[i]}
        wordsArrayOfObjects.push(obj)
    }
    
}
else {
    for(let i = 0; i < list.length; i++){
        let obj = list[i]
        wordsArrayOfObjects.push(obj)
    }
}
document.getElementById('json').innerText = JSON.stringify(wordsArrayOfObjects)
return JSON.stringify(wordsArrayOfObjects)

}