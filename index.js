const load = async () => {
    const response = await fetch('http://localhost:8000/articles');
    return response.json();
}

const timout = (delay) => new Promise(res => {
    setTimeout(res, delay);
});

// timout(3000).then(() => console.log('Timeout'))

const print = (str) => {
    console.log(str.split(''));
}


const init = async () => {
    console.log('Start');
    
    // const res1 = await load();

    // await timout(3000);

    // const res2 = await load();

    // console.log(res1, res2);


    // const res = await Promise.all([load(), load()]);

    // console.log(res);


    // await timout(3000);
    // await timout(3000);
    // await timout(3000);

    // console.log('Sync timout');

    // await Promise.all([timout(3000), timout(3000), timout(3000)]);

    // console.log('Paralel timout')

};

// init();

// const laodArticle = (id) => {
//     if (!id) {
//         throw new Error('Id is required');
//     }

//     return fetch(`http://localhost:8000/articles/${id}`);
// }

// laodArticle('ergergf')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


// throw new Error('Custom error');
// null.toString();


const laodArticle = async (id) => {
    try {
        const response = await fetch(`http://localhost:8000/articles/${id}`);
        const arcticle = await response.json();

        console.log(arcticle)
    } catch(error) {
        console.log('Catch')
        console.log(error)
    } finally {
        console.log('Finally')
    }
}

laodArticle('werf');


// const laodArticle = async (id) => {
//     const response = await fetch(`http://localhost:8000/articles/${id}`);
//     const arcticle = await response.json();

//     return arcticle;
// }

// laodArticle('weferg')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

console.log('Sync code');



// document.querySelector('button').addEventListener('click', () => {
//     window.scrollTo({
//         top: 200,
//         behavior: 'smooth'
//     })
// })