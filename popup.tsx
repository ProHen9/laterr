import { motion } from "framer-motion"
import { useState } from "react"
import Header from "~components/Header"
function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: "500px",
        height: "500px"
      }}>
        <Header />

        <motion.div className="">

        </motion.div>

      </div>
  )
}

export default IndexPopup
