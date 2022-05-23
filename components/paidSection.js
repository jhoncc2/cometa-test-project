import { useState } from "react";
import { Section } from "../components/section";
import SectionTitle from "../components/sectionTitle";
import OrderItem from "./orderItem";

import styles from './paidSection.module.css';

export default function PaidSection({ orders, initiallyOpened }) {
  const [isOpen, setIsOpen] = useState(initiallyOpened)
  return (
    <Section>
        <SectionTitle 
          title={'Cuotas Pagadas'} 
          description={'description'}
          onOpen={()=> {setIsOpen(!isOpen)}}
            />
        <>
        {isOpen? 
            orders.map((order, ind) => {
              return (
                <OrderItem
                  key={ind}
                  order={order}
                  />
              )
          }):
          <></>
        }
        </>
    </Section>
  )
}