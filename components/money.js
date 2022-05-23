

export default function Money({value, currency, label}) {
  const realValue = parseFloat(value)
  // temporal formater (missing internationalization)
  const formated = new Intl.NumberFormat('en-US', 
      { style: 'currency'
      , currency: 'USD' // small fix to get the visual requirement of currency
      // ,currency : currency // uncomment to get the currecy prefix
    })
      .format(realValue)

  return (
    <div>
      {label} {formated}
    </div>
  )
}
