//make an image
function newImage(name, pathName, left, bottom) {
    name = document.createElement('img')
    name.src = `assets/${pathName}`
    name.style.position = 'fixed'
    name.style.left = `${left}px`
    name.style.bottom = `${bottom}px`
    document.body.append(name)
    return name
}

//make an item
function newItem(name, pathName, left, bottom) {
    let item = newImage(name, pathName, left, bottom)
    item.addEventListener('dblclick', function () {
        item.remove()
    })
}

//make a background
let lotOfPixels = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500]
function newBackground(name, pathName, repeatUp) {
    let x = 0
    let y = 0
    for (let i = 0; i <= repeatUp; i++) {
        for (let i = 0; i < lotOfPixels.length; i++) {
            newImage(name, pathName, x, y)
            x = lotOfPixels[i]
        }
        y = lotOfPixels[i]
    }
}

//background
let sky;
newBackground(sky, 'sky.png', lotOfPixels.length)
let grass;
newBackground(grass, 'grass.png', 5)

//images
let greenCharacter;
newImage(greenCharacter, 'green-character.gif', 100, 100)

let pineTree;
newImage(pineTree, 'pine-tree.png', 450, 200)

let tree;
newImage(tree, 'tree.png', 200, 300)
let pillar;
newImage(pillar, 'pillar.png', 350, 100)
let crate;
newImage(crate, 'crate.png', 150, 200)
let well;
newImage(well, 'well.png', 500, 425)

//items
let sword;
newItem(sword, 'sword.png', 500, 405)
let shield;
newItem(shield, 'shield.png', 165, 185)
let staff;
newItem(staff, 'staff.png', 600, 100)




