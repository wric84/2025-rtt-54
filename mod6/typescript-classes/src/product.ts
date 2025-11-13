export default class Product {
  private sku: string;
  public name: string;
  protected price: number;
  public taxRate: number

constructor(sku: string, name: string, price: number) {
this.sku = sku;
this.name = name;
this.price = price;
this.taxRate = 0.8
}

get readPrice(): number{
    return this.price
}

get fullPrice(): number{
    return this.price * (this.taxRate+1)
}

set newPrice(newPrice: number){
    if(newPrice > 0){
        this.price = newPrice
    }
}

set newFullPrice(newPrice: number, newTaxRate: number){
    if(newPrice>0 && newTaxRate > 0){
        
    }
}

protected displayDetails(): string {
return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
}
}