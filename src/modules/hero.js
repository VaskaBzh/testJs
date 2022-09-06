const hero = () => {
    const heroBlock = document.querySelector('.hero')

    console.log(heroBlock);

    heroBlock.addEventListener('keydown', (e) => {
        console.log(`${e.code}`);
    })
}

export default hero