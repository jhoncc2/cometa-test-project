import { arrangeStateIndex, arrangeOrders, sum, getMonthDifference } from '../../libs/utils'

describe('sum', () => {
  it('the sum', () => {
    expect(sum(1,3)).toBe(4)
  })
})

describe('arrangeOrders', () => {
  it('basic', () => {
    const res = arrangeOrders(mockOrders)
    res.paid.map(e => {
      expect(e.status).toBe('PAID');
    })

    res.due.map(e => {
      expect(e.status).toBe('DUE');
    })

    res.outstanding.map(e => {
      expect(e.status).toBe('OUTSTANDING');
    })
  })
})

describe('arrangeStateIndex', () => {
  it('basic', () => {
    const res = arrangeStateIndex(mockOrders)
    // PAID
    expect(res.paid[0]).toBe(0)
    expect(res.paid[1]).toBe(1)

    // DUE
    expect(res.due[0]).toBe(1)
    expect(res.due[1]).toBe(2)

    // OUTSTANDING
    expect(res.outstanding[0]).toBe(2)
    expect(res.outstanding[1]).toBe(mockOrders.length)
  })
})

describe('getMonthDifference', () => {
  it('same year', () => {
    const res = getMonthDifference(new Date('2022-01-15'), new Date('2022-03-16'))
    expect(res).toBe(2)
  })
  it('different year', () => {
    const res = getMonthDifference(new Date('2022-01-15'), new Date('2023-03-16'))
    expect(res).toBe(14)
  })
  it('reversed param dates', () => {
    const res = getMonthDifference(new Date('2023-03-16'), new Date('2022-01-15'))
    expect(res).toBe(14)
  })
})



const mockOrders = [
  {
      "id": "dc438d87-18fc-4f65-8927-d860d1496795",
      "concept": "MONTHLY",
      "name": "Colegiatura Enero 22",
      "price": "5000.00",
      "price_currency": "MXN",
      "due": "2022-01-05",
      "status": "PAID",
      "interest": "1000.00",
      "payin": {
          "id": "487244ce-9a64-4bf8-8feb-e9599f1a7ee3",
          "created": "2022-02-09T19:21:57.752070Z"
      }
  },
  {
      "id": "ac1d2527-a0ec-4d98-a981-7c97c50580cf",
      "concept": "MONTHLY",
      "name": "Colegiatura Febrero 22",
      "price": "5000.00",
      "price_currency": "MXN",
      "due": "2022-02-05",
      "status": "DUE",
      "interest": "500.00",
      "payin": null
  },
  {
      "id": "c2866664-020a-4df3-a078-f08337c3cb3a",
      "concept": "MONTHLY",
      "name": "Colegiatura Marzo 22",
      "price": "5000.00",
      "price_currency": "MXN",
      "due": "2022-03-05",
      "status": "OUTSTANDING",
      "interest": "None",
      "payin": null
  },
  {
      "id": "c25f618b-b6ad-4941-972c-0be4e1c659ab",
      "concept": "MONTHLY",
      "name": "Colegiatura Abril 22",
      "price": "5000.00",
      "price_currency": "MXN",
      "due": "2022-04-05",
      "status": "OUTSTANDING",
      "interest": "None",
      "payin": null
  },
  {
      "id": "25d4dd53-c45a-4e0a-afb7-fcff15b3a612",
      "concept": "MONTHLY",
      "name": "Colegiatura Mayo 22",
      "price": "5000.00",
      "price_currency": "MXN",
      "due": "2022-05-05",
      "status": "OUTSTANDING",
      "interest": "None",
      "payin": null
  },
  {
      "id": "bd394e6e-b322-49c8-9b3f-29931a978880",
      "concept": "MONTHLY",
      "name": "Colegiatura Junio 22",
      "price": "5000.00",
      "price_currency": "MXN",
      "due": "2022-06-05",
      "status": "OUTSTANDING",
      "interest": "None",
      "payin": null
  },
  {
      "id": "46d73bcf-e25d-4531-847d-8ccd5b1870cb",
      "concept": "MONTHLY",
      "name": "Colegiatura Julio 22",
      "price": "5000.00",
      "price_currency": "MXN",
      "due": "2022-07-05",
      "status": "OUTSTANDING",
      "interest": "None",
      "payin": null
  }
]