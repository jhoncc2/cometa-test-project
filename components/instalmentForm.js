import Head from "next/head";
import { useMemo, useState } from "react";
import OrderItem, { STATUS } from "./orderItem";
import { PaymentProvider, useDispatchPayment, usePayment } from "./paymentProvider";
import PaymentSection from "./paymentSection";
import { arrangeStateIndex } from "../libs/utils";

export default function InstalmentForm({orders}) {
  const payment = usePayment()
  const dispatch = useDispatchPayment()

  const handleUpdate = (data) =>
    dispatch({
      type: 'UPDATE_INDEXES',
      data: data
    })

  useMemo(() => handleUpdate(arrangeStateIndex(orders)), [orders])

  return (
    <>
      <div>
          <PaymentSection 
            orders={orders}
            title={'Cuotas pagadas'}
            description={'Dale click para expandir'} 
            initiallyOpened={false}
            status={STATUS.PAID.toLocaleLowerCase()}
          />
          <PaymentSection 
            orders={orders} 
            title={'Cuotas pendientes'}
            description={'Puedes seleccionar mas de uno'} 
            initiallyOpened={true}
            status={STATUS.DUE.toLocaleLowerCase()}
          />
          <PaymentSection 
            orders={orders} 
            title={'Cuotas futuras'}
            description={''} 
            initiallyOpened={true}
            status={STATUS.OUTSTANDING.toLocaleLowerCase()}
          />
      </div>
    </>
  );
}

