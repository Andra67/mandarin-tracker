const logList = document.getElementById("logList")
const logForm = document.getElementById("logForm")
const submitBtn = document.getElementById("submitBtn")
const logDate = document.getElementById("logDate")
const logInput= document.getElementById("logInput")

let logs = JSON.parse(localStorage.getItem("mandarinLogs"))||[]


const displayLog = () => {
    logList.innerHTML = ""
    
    logs.forEach(log => {
        const li = document.createElement("li");
        const delBtn = document.createElement("button")
        delBtn.innerText = "Delete Log"        
        li.innerText = `${log.date}: ${log.input}`;

        delBtn.addEventListener("click", ()=> {
            logs = logs.filter(data => !(data.input === log.input && data.date === log.date))
            localStorage.setItem("mandarinLogs", JSON.stringify(logs))
            displayLog();
        })

        li.appendChild(delBtn)
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
        const delBtn = document.createElement("button")

        delBtn.innerText = "Delete Log"
        li.innerText = `${date}: ${input}`;

        li.appendChild(delBtn)
        logList.appendChild(li)

        logs.push({date, input})
        localStorage.setItem("mandarinLogs", JSON.stringify(logs))

        logInput.value = ""
        logDate.value = ""
    }

}
displayLog()
logForm.addEventListener("submit", addLog)