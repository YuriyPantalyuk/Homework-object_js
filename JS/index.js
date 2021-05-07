
let question = prompt(' 25 + 5 / 5 = ?')

const iconBox1 = document.getElementById('bench')
const iconBox2 = document.getElementById('building')
const iconBox3 = document.getElementById('fountain')
const iconBox4 = document.getElementById('bicycle')

if (question === '26') {

    const demo1 = document.getElementById('one')
    const demo2 = document.getElementById('two')
    const demo3 = document.getElementById('three')
    const demo4 = document.getElementById('four')

    const iconImg1 = document.createElement('img')
    iconImg1.src = data.icons[0].svg
    const iconText1 = document.createElement('span')
    iconText1.innerText = data.icons[0].title
    iconBox1.append(iconImg1, iconText1)

    const iconImg2 = document.createElement('img')
    iconImg2.src = data.icons[1].svg
    const iconText2 = document.createElement('span')
    iconText2.innerText = data.icons[1].title
    iconBox2.append(iconImg2, iconText2)

    const iconImg3 = document.createElement('img')
    iconImg3.src = data.icons[2].svg
    const iconText3 = document.createElement('span')
    iconText3.innerText = data.icons[2].title
    iconBox3.append(iconImg3, iconText3)

    const iconImg4 = document.createElement('img')
    iconImg4.src = data.icons[3].svg
    const iconText4 = document.createElement('span')
    iconText4.innerText = data.icons[3].title
    iconBox4.append(iconImg4, iconText4)

    const img1 = document.createElement('img')
    img1.src = data.apartaments[0].image
    const text1 = document.createElement('span')
    text1.innerText = data.apartaments[0].title
    demo1.append(img1, text1)

    const img2 = document.createElement('img')
    img2.src = data.apartaments[1].image
    const text2 = document.createElement('span')
    text2.innerText = data.apartaments[1].title
    demo2.append(img2, text2)

    const img3 = document.createElement('img')
    img3.src = data.apartaments[0].image
    const text3 = document.createElement('span')
    text3.innerText = data.apartaments[0].title
    demo3.append(img3, text3)

    const img4 = document.createElement('img')
    img4.src = data.apartaments[1].image
    const text4 = document.createElement('span')
    text4.innerText = data.apartaments[1].title
    demo4.append(img4, text4)
} else {
    const alternative = alert('Введите правильный ответ!')
    window.location.reload();
}