let url = "https://leahjkh.github.io/mikuviteInfo/"
let folder = ["json", "images"]
let jsonfile = ["FunFactsMiku.json", "mikuVersions.json"]

let imagefile = ["cosplay", "vocaloids"]
let filenumber = ["vo"]


const fetchData = async (url, folder, file, Nmb, objS) => {
    if (folder === "json") {
        try {
            
            let newUrl = url + `${folder}/${file}`
            const response = await fetch(newUrl)
            const data = await response.json()

            if (objS === "name") {
                let text = document.createTextNode(data[Nmb].name)
                createTxt(text)
            } else if (objS === "image") {
                let img = document.createElement("img")
                img.src = data[Nmb].image
                createImg(img)
            } else if (objS === "codename") {
                let text = document.createTextNode(data[Nmb].codename)
                createTxt(text)
            }
        } catch {
            console.error("does not work")
        }
    } else if (folder === "images") {
        try {
            let newUrl = url + `${folder}/${file}/${filenumber[0]}${Nmb}.webp`
            let img = document.createElement("img")
            img.src = newUrl
            document.body.appendChild(img)   
        } catch {
            console.error("does not work")
        }
    }
}




let newObject = fetchData(url, folder[0], jsonfile[1], 12, "name")

function createTxt(data) {
    document.body.appendChild(data)
} 
function createImg(data) {
    let p = document.createElement("p")
    p.append(data)
    document.body.appendChild(p)   
}
// fetchData(url, folder[1], imagefile[1], 12)