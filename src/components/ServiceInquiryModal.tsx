import React, { useState } from "react";
import Modal from "@/components/ui/modal";

type Props = {
  open: boolean;
  onClose: () => void;
};

const services = [
  "Logo Design",
  "Website Design & Development",
  "Ecommerce Solution",
  "Mobile Application",
  "Custom Software Development",
  "Animation",
  "Business Branding",
  "Digital Marketing",
];

const ServiceInquiryModal: React.FC<Props> = ({ open, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
  });

  const toggleService = (label: string) => {
    setForm((f) =>
      f.services.includes(label)
        ? { ...f, services: f.services.filter((s) => s !== label) }
        : { ...f, services: [...f.services, label] }
    );
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to your API route or service
    console.log("Inquiry:", form);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} ariaLabel="Select Service">
      <div className="inquiry-card">
        <button className="inquiry-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <h2 className="inquiry-title">SELECT SERVICE &amp; LET US HANDLE</h2>

        <form onSubmit={submit} className="inquiry-form">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="inquiry-input"
            required
          />
          <input
            type="email"
            placeholder="Enter Email Adress"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="inquiry-input"
            required
          />
          <input
            type="tel"
            placeholder="Enter Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="inquiry-input"
            required
          />

          <div className="inquiry-checkboxes">
            {services.map((label) => (
              <label key={label} className="inquiry-check">
                <input
                  type="checkbox"
                  checked={form.services.includes(label)}
                  onChange={() => toggleService(label)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>

          <button type="submit" className="inquiry-submit">SEND</button>
        </form>
      </div>
    </Modal>
  );
};

export default ServiceInquiryModal;
