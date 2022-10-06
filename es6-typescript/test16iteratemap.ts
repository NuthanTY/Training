let mymap = new Map([
    ['n','N'],
    ['o','O']
])

for(let entry of mymap.entries()){
    console.log(`${entry[0]} ---${entry[1]}`)
}

