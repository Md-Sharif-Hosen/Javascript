class Printer{
    constructor(data){
        this.data=data;
    }
    log(){
        console.log(this.data);
    }
    print(){
        console.log('Printing ' + this.data);
    }
}
class PdfPrinter extends Printer{
    constructor(data){
        super(data);
    }
    log(){
        console.log(this.data);
    }
    print(){
        console.log('PdfPrinter '+ this.data);
    }
}
class HTMLPrinter extends Printer{
    constructor(data){
        super(data);
    }
    Print(){
        console.log(`HTMLPrinter`+ this.data);
    }

}
const Printer1 = new Printer('Invoice');
Printer1.log();
Printer1.print();

const Printer2 = new PdfPrinter('Document');
Printer2.log();
Printer2.print();

const Printer3 = new HTMLPrinter('Report');
Printer3.log();
Printer3.print();