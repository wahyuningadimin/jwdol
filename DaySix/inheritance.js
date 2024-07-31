class Product {
    constructor(){
        this.productName;
        this.productPrice;
    }
    setProductName(name){
        this.product= name
    }
    setProductPrice(price){
        this.price= price
    }
}

class Book extends Product{ //janlup EXTENDS
    constructor(){
        super() //harus pake SUPER buat inheritance, kalo gak, gabisa ambil productName & productPrice
        this.author
    }
    setAuthor(authorName){
        this.author= authorName
    }
    getAuthor(){
        return this.author
    }
    getProductName(){
        return this.product
    }
    getProductPrice(){
        return this.price
    }
}

const book= new Book();
book.setAuthor("JK Rowling")
book.setProductName("Harry Potter")
book.setProductPrice(100000)
console.log(book);

const product= new Product()
//buat ngcheck object ini ada hubungan dengan class tersebut atau tidak
console.log(book instanceof Book)
console.log(book instanceof Product)
console.log(product instanceof Book)
console.log(product instanceof Product)


// const bookTwo= new Book();
// bookTwo.setAuthor("Einstein")
// bookTwo.setProductName("How to be smart?")
// bookTwo.setProductPrice(800000)
// console.log(bookTwo);