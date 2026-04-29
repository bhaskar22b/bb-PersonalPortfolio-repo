import React, { useState } from "react";
import Button from "../Components/Button";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "bhaskarbhushan55@gmail.com",
    href: "mailto:bhaskarbhushan55@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 7717491129",
    href: "tel:+91 7717491129",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "India, chandigarh",
    href: "#",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // show diff ui when i click on submit
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

  const handleSubmit = async (e) => { 
  e.preventDefault();
  console.log(formData); // test

  //cannot send email repeacted (bar bar)
  setIsLoading(true);
  setSubmitStatus({ type: null, message: "" });

  try {
    //import env , emailjs ids
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    //if somthing went wrong throung error
    if (!serviceId || !templateId || !publicKey) {
      throw new Error(
        "EmailJS configuration is missing. Please check your environment variables."
      );
    }

    //call id, temp, user data, key 
    await emailjs.send(
      serviceId,
      templateId,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      publicKey
    );

    //shoe user everything go right
    setSubmitStatus({
      type: "success",
      message: "Message sent successfully! I'll get back to you soon.",
    });

    //reset form after sending mail
    setFormData({ name: "", email: "", message: "" });

  } catch (err) {
    //show error on console
    console.error("EmailJS error:", err);   

    //show erroe on screen
    setSubmitStatus({
      type: "error",
      message:
        err?.text || "Failed to send message. Please try again later.", 
    });

  } finally {
    setIsLoading(false);
  }
};


  return (
    <section id="contactbtn" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[var(--color-highlight)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-secondary-foreground)] text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[var(--color-secondary-foreground)]">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="text-[var(--color-muted-foreground)]">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Form */}
          <div className="glass p-8 rounded-3xl border border-[var(--color-primary)]/30">
            <form className="space-y-6" onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your name..."
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all"
              />

              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all"
              />

              <textarea
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all resize-none"
              />

              <Button
                className="w-full flex items-center justify-center gap-2"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${
                       submitStatus.type === "success"
                         ? "bg-green-500/10 border border-green-500/20 text-green-400"
                         : "bg-red-500/10 border border-red-500/20 text-red-400"
                     }`}
                >
                  {submitStatus.type === "success" ? (
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <FaExclamationCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}

            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-[var(--color-surface)] transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>

                    <div>
                      <div className="text-sm text-[var(--color-muted-foreground)]">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;