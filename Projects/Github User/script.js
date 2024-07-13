const btn = document.querySelector("button");

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const input = document.querySelector('#input').value;
    console.log(input);
    const requestURL = `https://api.github.com/users/${input}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestURL);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            const followers = data.followers; // Extracting the followers field
            const followerCount=document.querySelector(".followerCount");
            followerCount.innerHTML=` ${followers}`;
            const imgDiv=document.querySelector(".img");
            imgDiv.innerHTML='';
            const img=document.createElement("img");
            img.src=data.avatar_url;
            imgDiv.appendChild(img);



        }
    };

    xhr.send();
});
