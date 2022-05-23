import { getMonthDifference } from "../libs/utils"
import { STATUS } from "./orderItem"


export default function DueDate({order}) {
  const date = order.status === STATUS.PAID
                    ? order.payin.created
                    : order.due

  // format date
  const parsedDate = new Date(date)

  // const stringDate = parsedDate.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 

  const stringDate = new Intl.DateTimeFormat('es-ES', { month: 'long', day: 'numeric'}).format(parsedDate)

  const monthDiff = getMonthDifference(parsedDate, new Date)
  // missing internationalization
  // create corresponding message
  let msg 
  if (order.status === STATUS.OUTSTANDING) {
    msg = monthDiff > 2 
      ? 'Ahorra hasta el ' + stringDate + '.'
      : 'Vence el ' + stringDate + '.'

  } else if (order.status === STATUS.DUE) {
    msg = 'Vencido el ' + stringDate + '.'
  } else {
    msg = 'Pagado el ' + stringDate + '.'
  }
      
  

       

  return (
    <div>
      {msg}
    </div>
  )
}
