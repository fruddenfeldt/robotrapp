const audio = document.querySelector('audio')
const page = document.querySelector('.head')

page.addEventListener('click', () => {
    console.log("click")
    audio.play()
})