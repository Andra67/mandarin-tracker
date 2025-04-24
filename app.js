const logList = document.getElementById("logList")
const logForm = document.getElementById("logForm")
const submitBtn = document.getElementById("submitBtn")
const logDate = document.getElementById("logDate")
const logInput= document.getElementById("logInput")

let logs = JSON.parse(localStorage.getItem("mandarinLogs"))||[]


const displayLog = () => {
    

    logs.forEach(log => {
        const li = document.createElement("li");
        li.innerText = `${log.date}: ${log.input}`;
        logList.appendChild(li)
    })
}

const addLog = (e) => {
    e.preventDefault() 

    const input = logInput.value;
    const date = logDate.value;

    if(!input || !date) {
        alert("Please fill the log")
    } else {
        const li = document.createElement("li")

        li.innerText = `${date}: ${input}`;
        logList.appendChild(li)

        logs.push({date, input})
        localStorage.setItem("mandarinLogs", JSON.stringify(logs))

        logInput.value = ""
        logDate.value = ""
    }

}
displayLog()
logForm.addEventListener("submit", addLog)