﻿//swagbot version 2.0.0 fixed all bug
const qrcode = require("qrcode-terminal");
const moment = require("moment");
const cheerio = require("cheerio");
const get = require('got')
const fs = require("fs");
const dl = require("./lib/downloadImage.js");
const fetch = require('node-fetch');
const urlencode = require("urlencode");
const axios = require("axios");
const imageToBase64 = require('image-to-base64');
const infocovid = require("./lib/infocovid.js");
const buffer = require("buffer")
//
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const tobzkey = 'apitobz';
const BotName = 'SWAG BOT 🤖';//this script made by swagcode @All Rights Reserved
const instagramlu = 'https://instagram.com/swagcode_';
const whatsapplu = '6281337632063';
const kapanbotaktif = '24 Jam';
//
const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys");
var jam = moment().format("HH:mm");

function foreach(arr, func)
{
   for (var i in arr)
   {
      func(i, arr[i]);
   }
}
const conn = new WAConnection()
conn.on('qr', qr =>
{
   qrcode.generate(qr,
   {
      small: true
   });
   console.log(`[ ${moment().format("HH:mm:ss")} ] scan your qr code`);
});
conn.on('credentials-updated', () =>
{
   // save credentials whenever updated
   console.log(`credentials updated!`)
   const authInfo = conn.base64EncodedAuthInfo() // get all the auth info we need to restore this session
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t')) // save this info to a file
})
fs.existsSync('./session.json') && conn.loadAuthInfo('./session.json')
// uncomment the following line to proxy the connection; some random proxy I got off of: https://proxyscrape.com/free-proxy-list
//conn.connectOptions.agent = ProxyAgent ('http://1.0.180.120:8080')
conn.connect();

conn.on('user-presence-update', json => console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @swagcode_`))
conn.on('message-status-update', json =>
{
   const participant = json.participant ? ' (' + json.participant + ')' : '' // participant exists when the message is from a group
   console.log(`[ ${moment().format("HH:mm:ss")} ] => bot by @swagcode_`)
})

conn.on('message-new', async(m) =>
{
   const messageContent = m.message
   const text = m.message.conversation
   let id = m.key.remoteJid
   const messageType = Object.keys(messageContent)[0] // message will always contain one key signifying what kind of message
   let imageMessage = m.message.imageMessage;
   console.log(`[ ${moment().format("HH:mm:ss")} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);


// CMD
if (text.includes("!wallpaper"))
   {
    var items = ["wallpaper aesthetic", "wallpaper tumblr"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(id, buf, MessageType.image, { quoted : m } )
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    });
    }

if (text.includes("!twitter"))
   {
    var items = ["twitter bucin", "twitter harian", "twitter receh indonesia"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(id, buf, MessageType.image, { quoted: m } )
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    
    });
    }
if (text.includes("!infogempa")){
   axios.get(`https://st4rz.herokuapp.com/api/infogempa`).then ((res) =>{
   let hasil = ` *INFO GEMPA*\n*Lokasi* : _${res.data.lokasi}_\n *Kedalaman* : _${res.data.kedalaman}_\n*Koordinat* : _${res.data.koordinat}_\n*Magnitude* : _${res.data.magnitude}_\n*Waktu* : _${res.data.waktu}_\n${res.data.potensi}`;
   conn.sendMessage(id, hasil, MessageType.text, { quoted: m } );
 })
 }

if (text.includes("!seberapacinta")){
   const teks = text.replace(/!seberapacinta /, "")
   axios.get(`https://arugaz.herokuapp.com/api/howbucins`).then((res) => {
       let hasil = `*seberapa cinta:* `+teks+`\n*persentase:* ${res.data.persen}% \n_${res.data.desc}_ `;
       conn.sendMessage(id, hasil ,MessageType.text, {quoted: m});
   })
   }

if (text.includes('!map')){
   var teks = text.replace(/!map /, '')
     axios.get('https://mnazria.herokuapp.com/api/maps?search='+teks)
     .then((res) => {
       imageToBase64(res.data.gambar)
         .then(
           (ress) => {
             var buf = Buffer.from(ress, 'base64')
             conn.sendMessage(id, buf, MessageType.image, {quoted: m})
         })
     })
 }

if (text.includes("!foto"))
   {
    var teks = text.replace(/!foto /, "");
    var items = [`${teks}`];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
    conn.sendMessage(id, buf ,MessageType.image, { quoted: m } )
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
            });
    }

if (text.includes('!Fakta')){
   conn.sendMessage(id, 'Silakan ulangi command dengan huruf kecil',MessageType.text, { quoted: m } );
   }
   if (messageType === MessageType.text)
      {
         let is = m.message.conversation.toLocaleLowerCase()
         if (is == '!fakta')
         {
            fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/faktaunix.txt')
               .then(res => res.text())
               .then(body =>
               {
                  let tod = body.split("\n");
                  let pjr = tod[Math.floor(Math.random() * tod.length)];
                  let pantun = pjr.replace(/pjrx-line/g, "\n");
                  conn.sendMessage(id, pantun, MessageType.text, { quoted: m } )
               });
         }
   
      };
   
if (text.includes("!neko"))
   {
    var items = ["anime neko"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
              conn.sendMessage(id, buf ,MessageType.image, { caption: `👉👈`, quoted: m } )
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    });
    }

if (text.includes("!loli"))
   {
    var items = ["anime loli"];
    var nime = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + nime;
    
    axios.get(url)
      .then((result) => {
        var n = JSON.parse(JSON.stringify(result.data));
        var nimek =  n[Math.floor(Math.random() * n.length)];
        imageToBase64(nimek) 
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); 
    conn.sendMessage(id, buf ,MessageType.image, { caption: `👉👈`, quoted: m } )
            }
        )
        .catch(
            (error) => {
                console.log(error);
            }
        )
    });
    }

if (text.includes('!Meme')){
   conn.sendMessage(id, 'Silakan ulangi command dengan huruf kecil',MessageType.text, { quoted: m } );
   }
   if (text.includes("!meme"))
      {
       var items = ["meme indonesia","meme indo","foto lucu","meme spongebob"];
       var nime = items[Math.floor(Math.random() * items.length)];
       var url = "https://api.fdci.se/rep.php?gambar=" + nime;
       
       axios.get(url)
         .then((result) => {
           var n = JSON.parse(JSON.stringify(result.data));
           var nimek =  n[Math.floor(Math.random() * n.length)];
           imageToBase64(nimek) 
           .then(
               (response) => {
      var buf = Buffer.from(response, 'base64'); 
                 conn.sendMessage(id, buf, MessageType.image, { quoted: m } )
               }
           )
           .catch(
               (error) => {
                   console.log(error);
               }
           )
       });
       }

if (text.includes('!Apakah')){
   conn.sendMessage(id, 'Silakan ulangi command dengan huruf kecil\n_contoh : !apakah aku cantik_',MessageType.text, {quoted: m});
   }
   if (text.includes('!Bolehkah')){
   conn.sendMessage(id, 'Silakan ulangi command dengan huruf kecil\n_contoh : !bolehkah aku mencintai dia_',MessageType.text, {quoted: m});
   }
   if (text.includes('!Kapan')){
   conn.sendMessage(id, 'Silakan ulangi command dengan huruf kecil\n_contoh : !kapan aku kaya_',MessageType.text, {quoted: m});
   }
   if (text.includes('!apakah')){
   const teks = text.replace(/./, '')
   const truth =[
   'Iya',
   'Tidak',
   'Bisa Jadi',
   'Coba tanyakan lagi',
   'Mungkin',
   '🤐']
   const ttrth = truth[Math.floor(Math.random() * truth.length)]
   conn.sendMessage(id, 'Pertanyaan : *'+teks+'*\n\nJawaban : '+ ttrth, MessageType.text, { quoted: m })
   }
   
   if (text.includes('!bolehkah')){
   const teks = text.replace(/./, '')
   const truth =[
   'Boleh',
   'Tidak boleh',
   'Sangat di anjurkan',
   'Coba tanyakan lagi',
   'Tidak',
   'Mungkin',
   'Jangan',
   '🤐']
   const ttrth = truth[Math.floor(Math.random() * truth.length)]
   conn.sendMessage(id, 'Pertanyaan : *'+teks+'*\n\nJawaban : '+ ttrth, MessageType.text, { quoted: m })
   }
   
   
   if (text.includes('!kapan')){
   const teks = text.replace(/./, '')
   const truth =[
   '1 Hari lagi',
   '2 hari lagi',
   '3 hari lagi',
   '4 hari lagi',
   '5 hari lagi',
   '6 hari lagi',
   '1 minggu lagi',
   '2 minggu lagi',
   '3 minggu lagi',
   '1 bulan lagi',
   '2 bulan lagi',
   '3 hari lagi',
   '4 bulan lagi',
   '5 bulan lagi',
   '6 hari lagi',
   '7 bulan lagi',
   '8 bulan lagi',
   '9 hari lagi',
   '10 bulan lagi',
   '11 bulan lagi',
   '1 tahun lagi',
   '2 tahun lagi',
   '3 tahun lagi',
   '4 tahun lagi',
   'Tidak akan',
   'Yakin bakal terjadi ?',
   'Aku meragukan nya',
   'Lusa',
   'Akhir bulan depan',
   'Awal bulan depan',
   'Tahun depan',
   'Bulan depan',
   'Sebentar lagi',
   '🤐']
   const ttrth = truth[Math.floor(Math.random() * truth.length)]
   conn.sendMessage(id, 'Pertanyaan : *'+teks+'*\n\nJawaban : '+ ttrth, MessageType.text, { quoted: m })
   }
   
if (text == '!infocovid'){
   const corohelp = await get.get('https://covid19.mathdro.id/api/countries/id').json()
   var date = new Date();
   var tahun = date.getFullYear();
   var bulan = date.getMonth();
   var tanggal = date.getDate();
   var hari = date.getDay();
   var jam = date.getHours();
   var menit = date.getMinutes();
   var detik = date.getSeconds();
   switch(hari) {
    case 0: hari = "Minggu"; break;
    case 1: hari = "Senin"; break;
    case 2: hari = "Selasa"; break;
    case 3: hari = "Rabu"; break;
    case 4: hari = "Kamis"; break;
    case 5: hari = "Jum'at"; break;
    case 6: hari = "Sabtu"; break;
   }
   switch(bulan) {
    case 0: bulan = "Januari"; break;
    case 1: bulan = "Februari"; break;
    case 2: bulan = "Maret"; break;
    case 3: bulan = "April"; break;
    case 4: bulan = "Mei"; break;
    case 5: bulan = "Juni"; break;
    case 6: bulan = "Juli"; break;
    case 7: bulan = "Agustus"; break;
    case 8: bulan = "September"; break;
    case 9: bulan = "Oktober"; break;
    case 10: bulan = "November"; break;
    case 11: bulan = "Desember"; break;
   }
   var tampilTanggal = "TANGGAL: " + hari + ", " + tanggal + " " + bulan + " " + tahun;
   var tampilWaktu = "JAM: " + jam + ":" + menit + ":" + detik;
   conn.sendMessage(id, infocovid.infocovid(id, BotName, corohelp, tampilTanggal, tampilWaktu) ,MessageType.text, { quoted: m } );
   }

   if (text.includes("!nulis")) //bug fixed, if u found a new bug please contact instagram: @swagcode_
   {
      const
      {
         spawn
      } = require("child_process");
      console.log("writing...")
      const teks = text.replace(/!nulis /, "")
      const split = teks.replace(/(\S+\s*){1,10}/g, "$&\n")
      const fixedHeight = split.split("\n").slice(0, 90).join("\\n")
      console.log(split)
      spawn("convert", [
            "./assets/paper.jpg",
            "-font",
            "Indie-Flower",
            "-size",
            "700x960",
            "-pointsize",
            "27",
            "-interline-spacing",
            "5",
            "-annotate",
            "+170+222",
            fixedHeight,
            "./assets/result.jpg"
         ])
         .on("error", () => console.log("error"))
         .on("exit", () =>
         {
            const buffer = fs.readFileSync("assets/result.jpg")
            conn.sendMessage(id, buffer, MessageType.image, { quoted: m } );
            console.log("done")
         })
      }
   
      if (text.includes("!quotes"))
      {
         var url = 'https://jagokata.com/kata-bijak/acak.html'
         axios.get(url)
            .then((result) =>
            {
               let $ = cheerio.load(result.data);
               var author = $('a[class="auteurfbnaam"]').contents().first().text();
               var kata = $('q[class="fbquote"]').contents().first().text();
               conn.sendMessage(
                  id,
                  `
        _${kata}_
           
       
      *~${author}*
            `, MessageType.text, { quoted: m } 
               );
            });
      }
      if (text.includes("!lirik")){
         const teks = text.split("!lirik")[1]
            axios.get(`http://scrap.terhambar.com/lirik?word=${teks}`).then ((res) => {
                   let hasil = `🎶lirik lagu: ${teks}🎶 \n\n ${res.data.result.lirik}`
               conn.sendMessage(id, hasil, MessageType.text, { quoted: m } );
      })
   }

   if (text.includes("!chord")){
      const teks = text.replace(/!chord /, "")
      axios.get(`https://arugaz.herokuapp.com/api/chord?q=${teks}`).then((res) => {
          let hasil = `*Judul* : ${teks}\n*chord* : ${res.data.result}`;
          conn.sendMessage(id, hasil ,MessageType.text, { quoted: m } );
      })
      }

if (text.includes("!menu")){
   const teks = text.replace(/!menu /, "")
 conn.sendMessage(id, '*•Fitur Anime•*\n!anime\n!loli\n!neko\n\n*•Fitur Seru•*\n!katakan <text>\n!nulis <text>\n!foto <foto yang diinginkan>\n!seberapacinta <nama & nama>\n!meme\n!twitter\n!wallpaper\n\n*•Fitur Pintar•*\n!apaitu <pertanyaan>\n!map <nama lokasi>\n!quotes\n!fakta\n!infocovid\n!infogempa\n\n*•Fitur Musik•*\n!lirik <judul lagu>\n!chord <judul lagu>\n\n*•Fitur Kerang Ajaib•*\n!apakah <pertanyaan>\n!bolehkah <pertanyaan>\n!kapan <pertanyaan>\n\n_bot ini dibuat oleh *swagcode*_', MessageType.text, { quoted: m } );
}

if (text.includes("!katakan")){
   const teks = text.replace(/!katakan /, "")
 conn.sendMessage(id, teks, MessageType.text, { quoted: m } );
}

if (text.includes("!apaitu")){
const teks = text.replace(/!apaitu /, "")
axios.get(`https://st4rz.herokuapp.com/api/wiki?q=${teks}`).then((res) => {
    let hasil = `${res.data.result}`;
    conn.sendMessage(id, hasil ,MessageType.text, { quoted: m } );
})
}
if (text.includes("!anime"))
   {
    var items = ["anime girl", "anime cantik", "anime", "anime aesthetic"];
    var cewe = items[Math.floor(Math.random() * items.length)];
    var url = "https://api.fdci.se/rep.php?gambar=" + cewe;
    
    axios.get(url)
      .then((result) => {
        var b = JSON.parse(JSON.stringify(result.data));
        var cewek =  b[Math.floor(Math.random() * b.length)];
        imageToBase64(cewek) // Path to the image
        .then(
            (response) => {
	var buf = Buffer.from(response, 'base64'); // Ta-da	
              conn.sendMessage(
            id,
              buf,MessageType.image, { quoted: m } );
       
            }
        )
        .catch(
            (error) => {
                console.log(error); // Logs an error if there was one
            }
        )
    
    });
    }


   // end of file (script created by swagcode)


})
