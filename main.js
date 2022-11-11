let position = 0
const sliderImage = document.querySelector('.slider__image')
const sliderTrack = document.querySelector('.slider__track')

const prevBtn = document.querySelector('.slider__btn-prev')
const nextBtn = document.querySelector('.slider__btn-next')

prevBtn.addEventListener('click', () => {
    position += 600
    position > 0? position = -5400 : ''
    sliderTrack.style.left = position + 'px'
    
})

nextBtn.addEventListener('click', () => {
    position -= 600
    position < -5400? position = 0 : ''
    sliderTrack.style.left = position + 'px'
    
})