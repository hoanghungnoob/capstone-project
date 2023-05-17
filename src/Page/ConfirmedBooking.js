import ConfirmedForm from "../Component/ConfirmForm"
import Header from "../Component/Header"
import Footer from "../Component/Footer"

export default function ConfirmedBooking() {
    return (
      <main className="confirmed-main">
        <Header />
        <ConfirmedForm />
        <Footer />
      </main>
    )
  }