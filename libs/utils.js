export function sum(a, b) {
  return a + b
}

/**
 * function that group orders by status
 **/
export function arrangeOrders(orders) {
  const res = orders.reduce((acc, e) => {
    const key = e.status.toLowerCase()
    // console.log('-',acc, key)
    acc[key] = [...acc[key], e]
    return acc
  }, 
  // static default/definied status (for this excercise) 
  {paid: [], due: [], outstanding: []})

  return res
}

/**
 * (This code works under the assumption that we know ALL the status in the app)
 * PAID | DUE | OUTSTANDING
 * 
 * returns an object where the attributes are the status
 * of orders (e.g. status=DUE).
 * The attibutes are an array with a pair of indexes (integers).
 * Such that they surround the elements in the array 'orders'
 * @param orders - array
 * @returns - {<order.status>: [iniIndex<int>, endIndex<int>]}
 **/
 export function arrangeStateIndex(orders) {
  const res = orders.reduce((acc, e, index) => {
    const key = e.status.toLowerCase()
    // 
    acc[key] = acc[key].length > 0 
          ? [acc[key][0], index+1]
          : [index, index+1]
    return acc
  }, 
  // static default/definied status (for this excercise) 
  {paid: [], due: [], outstanding: []})

  return res
}

