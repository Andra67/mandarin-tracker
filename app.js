const logList = document.getElementById("logList")
const logForm = document.getElementById("logForm")
const submitBtn = document.getElementById("submitBtn")
const logDate = document.getElementById("logDate")
const logInput= document.getElementById("logInput")

let logs = JSON.parse(localStorage.getItem("mandarinLogs"))||[]

