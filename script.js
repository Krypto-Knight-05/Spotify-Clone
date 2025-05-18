const audio = document.getElementsByTagName('audio')
console.log(audio)

const song1 = document.getElementById('1')
const song2 = document.getElementById('2')
const song3 = document.getElementById('3')
const song4 = document.getElementById('4')
const song5 = document.getElementById('5')
const song6 = document.getElementById('6')
const song7 = document.getElementById('7')
const song8 = document.getElementById('8')
const song9 = document.getElementById('9')
const song10 = document.getElementById('10')

const songs = [
    {path: './songs/song1.mp3'},
    {path: './songs/song2.mp3'},
    {path: './songs/song3.mp3'},
    {path: './songs/song4.mp3'},
    {path: './songs/song5.mp3'},
    {path: './songs/song6.mp3'},
    {path: './songs/song7.mp3'},
    {path: './songs/song8.mp3'},
    {path: './songs/song9.mp3'},
    {path: './songs/song10.mp3'},
]

song1.addEventListener('click', () => {
    audio[0].src = songs[0].path
    audio[0].play()
})

song2.addEventListener('click', () => {
    audio[0].src = songs[1].path
    audio[0].play()
})

song3.addEventListener('click', () => {
    audio[0].src = songs[2].path
    audio[0].play()
})

song4.addEventListener('click', () => {
    audio[0].src = songs[3].path
    audio[0].play()
})

song5.addEventListener('click', () => {
    audio[0].src = songs[4].path
    audio[0].play()
})

song6.addEventListener('click', () => {
    audio[0].src = songs[5].path
    audio[0].play()
})

song7.addEventListener('click', () => {
    audio[0].src = songs[6].path
    audio[0].play()
})

song8.addEventListener('click', () => {
    audio[0].src = songs[7].path
    audio[0].play()
})

song9.addEventListener('click', () => {
    audio[0].src = songs[8].path
    audio[0].play()
})

song10.addEventListener('click', () => {
    audio[0].src = songs[9].path
    audio[0].play()
})