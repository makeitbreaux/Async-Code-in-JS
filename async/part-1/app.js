//Part 1: Number Facts
let favNumber = 4;
//1.
async function favNumAsync(num){
    let baseURL = `http://numbersapi.com/${num}?json/`
    let res = await axios.get(baseURL);
    console.log(res.data);
}

//2.
async function multiNumAsync(min, max) {
    let baseURL = `http://numbersapi.com`
    let res = await axios.get(`${baseURL}/${min}..${max}?json`);
    console.log(res);
}

//3.
async function part3() {
    let baseURL = `http://numbersapi.com`
    let text = await Promise.all(
      Array.from({ length: 4 }, () => axios.get(`${baseURL}/${favNumber}?json`))
    );
    text.forEach(data => {
      $('body').append(`<p>${data}</p>`);
    });
  }
  part3();