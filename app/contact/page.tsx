import type { Metadata } from "next"
import { ContactPageContent } from "./contact-page-content"

export const metadata: Metadata = {
  title: "Contact Alex Rivera | 90-Day Executive Rebuild",
  description:
    "Get in touch with Alex Rivera to discuss your performance coaching goals. Start your 90-Day Executive Rebuild today.",
}

export default function ContactPage() {
  return <ContactPageContent />
}
