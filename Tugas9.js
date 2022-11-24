function panggilObject(){
    var buku = {
        judul: "The Lawys of Simplicity",
        author: "John Maeda",
        tahun: 2005,
        tebal: 100,
    }

    for(var x in buku){
        console.log(buku[x])
    }

}

panggilObject()