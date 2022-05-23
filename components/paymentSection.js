import { useState } from "react";
import { Section } from "./section";
import SectionTitle from "./sectionTitle";
import OrderItem from "./orderItem";
import {useDispatchPayment, usePayment } from "./paymentProvider";

import styles from './paymentSection.module.css';

export default function PaymentSection(props) {
  const { orders, 
    title,
    description,
    initiallyOpened,
    status } = props

  const payment = usePayment()
  const dispatch = useDispatchPayment()

  const [iniIndex, endIndex] = payment[status]

  const [isOpen, setIsOpen] = useState(initiallyOpened)
  return (
    <Section>
        <SectionTitle 
          title={title} 
          description={description}
          onOpen={()=> {setIsOpen(!isOpen)}}
          isOpen={isOpen}
            />
        <>
        {isOpen && iniIndex !== endIndex?
            orders.slice(iniIndex,endIndex).map((order, ind) => {
              return (
                <OrderItem
                  key={ind}
                  order={order}
                  index={iniIndex+ind}
                  />
              )
          }):
          <></>
        }
        </>
    </Section>
  )
}