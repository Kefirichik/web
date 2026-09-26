const shape = [
    {width: 50, height: 40},
    {width: 60, height: 30},
    {width: 40, height: 50},
    {width: 25, height: 40},
    {width: 50, height: 50},
]

const root = document.getElementById("root")

for (i of shape){
    const new_div = document.createElement('div')
    new_div.classList.add("block")

    new_div.style.width = `${i.width}px`
    new_div.style.height = `${i.height}px`

    root.appendChild(new_div)
}