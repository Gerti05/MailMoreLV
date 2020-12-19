import React from "react"
import Container from "react-bootstrap/Container"

import "../styles/footer.css"

export default function footer() {
  let d = new Date()
  let currentYear = d.getFullYear()

  return (
    <footer className="bgColorFooter text-center">
      <Container>
        <small>
          <div className="mb-3">
            Copyright &copy; {currentYear}, MailMoreLV. All Rights Reserved
          </div>
        </small>
      </Container>
    </footer>
  )
}
