
class Mkulima{
constructor (listoffarms,groceryvendor,products){
this.listoffarms=[];
this.products=[];
this.groceryvendor=[];
}
}
class Addfarm extends Mkulima{
constructor(farmid,name,farmer,phonenumber ,address){
super(farmid,name,farmer,phonenumber ,address) 
console.log(this.listoffarms.push(farmid,name,farmer,phonenumber ,address))
   
   }
}
let farmlist1= new Addfarm(5555,"Dairy","June Muhonja","0714451127",54555900);
console.log(farmlist1);
let farmlist2=new Addfarm("Delamaire","Ruth Makenzi",5667,"0789654300",999900);
console.log(farmlist2);
let farmlist3=new Addfarm("Sitolia","wato wato",567890,"0723456780",900000)
console.log(farmlist3)
//removefarmid
class removefarmid extends Mkulima{
removefarmid(farmid){
var prduce=this.getFarm(farmid)
var rid=  this.product.shift(farmlist1)
   }
}
console.log(farmlist1)

 //Updating the farm
const newfarm={
farmid:"70000",
 name:"Demark",
phonenumber:"0789654377",
address:99956,
set setnewfarm(updatefarm){
return this.setnewfarm=updatefarm;
}
}
console.log(newfarm)

//get the farmid
const farm={
farmid:"5667",
name:"Delamair",
phonenumber:"0789654300",
address:999900,
get  getFarm(){
return this.farmid
 }
};
console.log(farm.farmid);
console.log(farm.getfarm)


class Product extends Mkulima{
constructor(id,name,price){
super(id ,name,price)
console.log(this.products.push(id ,name,price))
   
 }  
}
let advancedproduct= new Product(120,"kales",100);
console.log(advancedproduct);
//removeproductid
class removeproductid extends Mkulima{
   removeproductid(productid){
   var product=this.getproduct(productid)
   var temper= this.product.shift(advancedproduct)
      }
   }

//updating a product
const newProducts={
productId:"120",
name:"cabbages",
price:100,
set setproduct(updateproduct){
return this.setproduct=updateproduct;
}
}
console.log(newProducts)

 //get productid
const product={
productId:"120",
name:"kales",
price:100,
get  getProduct(){
return this.productId
}
};
console.log(product.productId);
//console.log(product.getProduct)

//productlist with their items
function productslist(){
var basket=""
return basket;
}
const favouritefruits=["mango:20, orange:10, apple:30, watermelon:50"]
console.log(favouritefruits);
var get=productslist(favouritefruits);
console.log(get);

