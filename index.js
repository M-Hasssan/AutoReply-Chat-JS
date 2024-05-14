var chatmsg = [
    {Name: "User", Msg: "Hi?"},
    {Name: "endUser", Msg: "Who??"},
    {Name: "User", Msg: "I'm nobody"},
    {Name: "endUser", Msg: "?"},
    {Name: "User", Msg: "I'm from Mars"},
    {Name: "endUser", Msg: "Ohh, then take me there pls:)"},
    {Name: "User", Msg: "Why??"},
    {Name: "endUser", Msg: "You start messaging first though"},
    {Name: "User", Msg: "Ahhh, Have you got cash with you rn?"},
    {Name: "endUser", Msg: "What cash has to do with my trip to Mars?"},
    {Name: "User", Msg: "Ummmm, Mars attracts person having cash around 1M$"},
    {Name: "endUser", Msg: "Are you crazy??"},
    {Name: "User", Msg: "Open the door! I'm outside to pick you"},
    {Name: "endUser", Msg: "Wait Im cominggg"},

]

const ul = document.getElementsByTagName("ul")[0]
const message = document.getElementsByTagName("input")[0]

for (let i = 0; i < chatmsg.length; i++) {

        ul.innerHTML += 
        `<li id=${chatmsg[i].Name === "User" ? "User" : ""}>
        ${chatmsg[i].Msg}</li>`
    
}

function handleSend() {
    ul.innerHTML += `<li id="User">${message.value}</li>`
    message.value = ""
    setTimeout(()=>autoreply(), 1000);
}

function autoreply() {
    var automsg = [
        {Name: "endUser", Msg: "I'm good, How about you?"},
        {Name: "endUser", Msg: "Jennifer"},
        {Name: "endUser", Msg: "Your good name?"},
        {Name: "endUser", Msg: "I have heard this name before"},
        {Name: "endUser", Msg: "Yes"},
        {Name: "endUser", Msg: "Maybe in my college"},
        {Name: "endUser", Msg: "I'm doing Bachelor in CS"},
        {Name: "endUser", Msg: "You?"},
        {Name: "endUser", Msg: "Great"},
        {Name: "endUser", Msg: "US"},
        {Name: "endUser", Msg: "Boston"},
        {Name: "endUser", Msg: "Nice"},
    ]

    var MsgNum = Math.round(Math.random() * automsg.length)
    ul.innerHTML += `<li>${automsg[MsgNum].Msg}</li>`;
}

