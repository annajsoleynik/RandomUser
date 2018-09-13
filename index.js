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
    let image = document.createElement('img');
    image.setAttribute('src', e.picture.large);
    user.appendChild(image);


 }