const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library bodyparser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

app.get("/test",(req,res)=>{
    let response ={
        message: "Ini end-point pertamaku",
        method: req.method,
        code: res.statusCode
    }
    res.json(response)
})
 
   app.get("/profil/:name/:age", (req,res)=>{
    let name = req.params.name
    let age = req.params.age
    let response ={
        nama: name,
        umur: age
    }
    res.json(response)
})

app.post("/bujur_sangkar", (req,res)=> {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang*lebar
    let keliling = 2*(panjang + lebar)
    let response ={
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
})

app.post("/bangun_ruang/kubus", (req,res)=> {
    let sisi = Number(req.body.sisi)
    let luas_permukaan = 6*sisi*sisi
    let volume = sisi*sisi*sisi
    let response ={
       sisi: sisi,
       luas_permukaan: luas_permukaan,
       volume: volume
    }
    res.json(response)
})

app.post("/bangun_ruang/balok", (req,res)=> {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let tinggi = Number(req.body.tinggi)
    let luas_permukaan =(2*panjang*lebar)+(2*lebar*tinggi)+(2*panjang*tinggi)
    let volume = panjang*lebar*tinggi
    let response ={
       panjang: panjang,
       lebar: lebar,
       tinggi: tinggi,
       luas_permukaan: luas_permukaan,
       volume: volume
    }
    res.json(response)
})

app.post("/bangun_ruang/tabung", (req,res)=> {
    let r = Number(req.body.r)
    let tinggi = Number(req.body.tinggi)
    let luas_permukaan =(2*3.14*r*r)+(2*3.14*r*tinggi)
    let volume = 3.14*r*r*tinggi
    let response ={
       r: r,
       tinggi: tinggi,
       luas_permukaan: luas_permukaan,
       volume: volume
    }
    res.json(response)
})

app.post("/bangun_ruang/kerucut", (req,res)=> {
    let r = Number(req.body.r)
    let s = Number(req.body.s)
    let tinggi = Number(req.body.tinggi)
    let luas_permukaan =(3.14*r*s)+(3.14*r*r)
    let volume = 1/3*3.14*r*r*tinggi
    let response ={
       r: r,
       s: s,
       tinggi: tinggi,
       luas_permukaan: luas_permukaan,
       volume: volume
    }
    res.json(response)
})

app.get("/convert/celcius/:temp", (req,res) => { 
    let temp = Number(req.params.temp) 
    let reamur=temp*4/5 
    let farenheit=(9/5)*temp+32 
    let kelvin=temp+273
    let result ={
        reamur,
        farenheit,
        kelvin
    }

    let response = {
        celcius:temp,
        result
        }
        res.json(response)
})

app.get("/convert/reamur/:temp", (req,res) => { 
    let temp = Number(req.params.temp) 
    let celcius=5/4*temp
    let farenheit=9/4*temp+32 
    let kelvin= celcius+273
    let result ={
        celcius,
        farenheit,
        kelvin
    }

    let response = {
        reamur:temp,
        result
        }
        res.json(response)
})

app.get("/convert/kelvin/:temp", (req,res) => { 
    let temp = Number(req.params.temp) 
    let celcius=temp-273
    let farenheit=9/5*(temp-273)+32 
    let reamur= 4/5*(temp-273)
    let result ={
        celcius,
        farenheit,
        reamur
    }

    let response = {
        kelvin:temp,
        result
        }
        res.json(response)
})     

app.get("/convert/fahrenheit/:temp", (req,res) => { 
    let temp = Number(req.params.temp) 
    let celcius=5/9*(temp-32)
    let kelvin=5/9*(temp-32)+273
    let reamur= 4/9*(temp-32)
    let result ={
        celcius,
        kelvin,
        reamur
    }

    let response = {
        fahrenheit:temp,
        result
        }
        res.json(response)
})

app.post("/konversi_bilangan/desimal", (req,res)=> {
    let bil = Number(req.body.bil)
    let biner = bil.toString(2)
    let octal = bil.toString(8)
    let heksadesimal = bil.toString(16)
    let response ={
       biner: biner,
       octal: octal,
       heksadesimal: heksadesimal
    }
    res.json(response)
})

app.post("/konversi_bilangan/biner", (req,res)=> {
    let bil = Number(req.body.bil)
    let desimal = parseInt(bil, 2)
    let octal = parseInt(bil,2).toString(8)
    let heksadesimal = parseInt(bil,2).toString(16)
    let response ={
       desimal: desimal,
       octal: octal,
       heksadesimal: heksadesimal
    }
    res.json(response)
})

app.post("/konversi_bilangan/octal", (req,res)=> {
    let bil = Number(req.body.bil)
    let desimal = parseInt(bil, 8)
    let biner = parseInt(bil,8).toString(2)
    let heksadesimal = parseInt(bil,8).toString(16)
    let response ={
       desimal: desimal,
       biner: biner,
       heksadesimal: heksadesimal
    }
    res.json(response)
})

app.post("/konversi_bilangan/heksadesimal", (req,res)=> {
    let bil = Number(req.body.bil)
    let desimal = parseInt(bil, 16)
    let biner = parseInt(bil,16).toString(2)
    let octal = parseInt(bil,16).toString(8)
    let response ={
       desimal: desimal,
       biner: biner,
       octal: octal
    }
    res.json(response)
})

app.post("/bmi" , (req,res)=>{
    let t=Number(req.body.tinggi)
    let b=Number(req.body.berat)

    let bmi=b/t^2
    let response

    if(bmi<18.5){
        response={
            tinggi:t,
            berat:b,
            bmi:bmi,
            status:"Kekurangan berat badan"

        }
    }
    else if(18.5<=bmi<=24.9){
        response={
            tinggi:t,
            berat:b,
            bmi:bmi,
            status:"Normal (ideal)"

        }
    }
    else if(25.0<=bmi<=29.9){
        response={
            tinggi:t,
            berat:b,
            bmi:bmi,
            status:"Kelebihan berat badan"

        }
    }
    else if(30<=bmi){
        response={
            tinggi:t,
            berat:b,
            bmi:bmi,
            status:"Obesitas"

        }
    }
    
    res.json(response)
})

app.post("/ganjilgenap", (req,res)=> {
    let bil = Number(req.body.bil)
    
    let response
       if(bil%2 == 0){
       response={
        bil:bil,
        status: "Bilangan Genap"
       }
    }
        else{
        response={
           bil:bil,
           status:"Bilangan Ganjil" 

            }
        }
    res.json(response)
})

app.listen(8080, () => {
    console.log("Server run on port 8000");
   })