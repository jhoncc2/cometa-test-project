import { useEffect } from "react";
import OrderItem, { STATUS } from "./orderItem";
import { useDispatchPayment, usePayment } from "./paymentProvider";
import PaymentSection from "./paymentSection";
import { arrangeStateIndex } from "../libs/utils";
import { Button } from "@mui/material";
import styles from "./instalmentForm.module.css";

export default function InstalmentForm({orders}) {
  const payment = usePayment()
  const dispatch = useDispatchPayment()

  const handleUpdate = (data) =>
    dispatch({
      type: 'UPDATE_INDEXES',
      data: data
    })

    useEffect(() =>{
      handleUpdate(arrangeStateIndex(orders))
    }, [orders])
  

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
      <div className={styles.submitButton}>
        <Button className={styles.Button} variant="contained">IR A PAGAR</Button>
      </div>
    </>
  );
}

