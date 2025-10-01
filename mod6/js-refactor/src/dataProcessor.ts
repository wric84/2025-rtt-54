import _ from 'lodash'

interface Data {
    id: string,
    name: string,
    price: number,
    discountedPrice: number
}
 
export function processData(data: Data[]) {
  let result = [];
 
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
 
    if (!item) {
      throw new Error('Item is undefined');
    }
 
    let processedItem = {
      id: item.id,
      name: item.name || 'Unknown',
      price: item.price || 0,
      discountedPrice: item.discountedPrice || item.price || 0,
    };
 
    result.push(processedItem);
  }
 
  return _.orderBy(result, ['discountedPrice'], ['asc']);
}
 
