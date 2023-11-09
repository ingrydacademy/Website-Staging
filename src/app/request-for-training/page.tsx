"use client"

import Aside from "../request-for-staffing/containers/Aside"
import Form from "./container/Form"


const RequestForTraining = () => {
  return (
    <main className="flex h-full bg-secondary">
           <Aside />
           <Form/>
    </main>
  )
}

export default RequestForTraining