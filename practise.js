
// Zoho Toolkit

var url = "https://jsonplaceholder.typicode.com/users";

async function fetchData(){

    await fetch(url).then(res => { 
        res.json().then(data => {
            
            const html = data.map(user => {
                return `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.username}</td>
                </tr>`
            }).join('');

            document.getElementById("userdata").insertAdjacentHTML("beforeend", html);
            
            } 
        )
    })
}

var btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    btn.disabled = true;
})