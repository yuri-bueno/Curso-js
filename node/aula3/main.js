const fs = require("fs").promises
const path = require("path")

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const pastas = await fs.readdir(rootDir)
    walk(pastas, rootDir)
}

async function walk(pastas, rootDir) {
    for (const pasta of pastas) {
        const fileFullPath = path.resolve(rootDir, (pasta));
        const stats = await fs.stat(fileFullPath);

        if (/node_modules/g.test(fileFullPath)) continue


        if (stats.isDirectory()) {
            readdir(fileFullPath)
            continue;
        }
        if (!/\.css$/g.test(fileFullPath)) continue
        console.log(pasta, stats.isDirectory())

    }
}
readdir(path.resolve(__dirname, (".."), ("..")));