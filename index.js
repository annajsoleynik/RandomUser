const user = document.getElementById('user');

function getUser() {
    setTimeout(() => {
        axios.get('https://randomuser.me/api')
            .then(function (response) {
                console.log (response);
                render(response.data.results[0]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, 1000);

}
 function render(e) {
     user.innerHTML = '';
     let image = document.createElement('img');
     image.setAttribute('src', e.picture.large);
     user.appendChild(image);
     let name = document.createElement('p');
     let userName = `${e.name.first[0].toUpperCase()}${e.name.first.slice(1)} ${e.name.last[0].toUpperCase()}${e.name.last.slice(1)}`
     name.innerText = userName;
     user.appendChild(name);
    }

