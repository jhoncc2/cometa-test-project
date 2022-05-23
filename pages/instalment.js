import Head from "next/head";
import { PaymentProvider } from "../components/paymentProvider";
import InstalmentForm from "../components/instalmentForm";
import { Section } from "../components/section";
import StudentInfo from "../components/studentInfo";

export default function Instalment({student, orders}) {
  return (
    <>
      <Head>
        <title>School Instalment</title>
      </Head>
      <PaymentProvider>
        <Section>
          <StudentInfo student={student} orders={orders}/>
        </Section>
      
        <InstalmentForm orders={orders}/>
      </PaymentProvider>
      
    </>
  );
}

/**
 * Get information from server side and attach it to props
 **/
export async function getServerSideProps() {
  // Fetch data from external API
  // 'http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/' \
  // --header 'hash: OcJn4jYChW'
  const studentUrl = 'http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/'
  const studentRes = await fetch(studentUrl, {
    method: 'GET',
    headers: {
      hash: 'OcJn4jYChW'
    }
  })

  const orderUrl = 'http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/orders/'
  const orderRes = await fetch(orderUrl, {
    method: 'GET',
    headers: {
      hash: 'OcJn4jYChW'
    }
  })

  const student = await studentRes.json()
  const orders = await orderRes.json()

  // Pass data to the page via props
  return { 
    props: { 
      student,  // student information
      orders,  // order 
      // ordersSorted: arrangeOrders(orders) // custom order
    } 
  }
}

