function convert(e){return e.replace(/\.wxss(["'])/g,(e,r)=>".css"+r).replace(/url\(['"](\/\/[^'"]+)['"]\)/gi,e=>e.replace(/\/\//g,e=>`https:${e}`)).replace(/url\((\/\/[^'"]+)\)/gi,e=>e.replace(/\/\//g,e=>`https:${e}`)).replace(/[,}\n]+[\s]*image[,\s{]/gi,e=>e.replace(/image/g,".fix-image-cls"))}module.exports=convert;