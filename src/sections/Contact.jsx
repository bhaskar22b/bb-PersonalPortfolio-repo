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

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Don't allow multiple clicks
    if (isLoading) return;

    console.log(formData);

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

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

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Allow another message after 5 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    } catch (err) {
      console.error("EmailJS error:", err);

      setSubmitStatus({
        type: "error",
        message:
          err?.text || "Failed to send message. Please try again later.",
      });

      setIsLoading(false);
    }
  };

  return (
    <section
      id="contactbtn"
      className="py-20 sm:py-24 lg:py-32 relative overflow-hidden fade-up"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 sm:left-1/4 sm:translate-x-0 w-64 h-64 sm:w-96 sm:h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-[var(--color-highlight)]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">

          <span className="text-[var(--color-secondary-foreground)] text-xs sm:text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-[var(--color-secondary-foreground)] leading-tight">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[var(--color-muted-foreground)] px-2">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto">

          {/* Form */}
          <div className="glass p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-[var(--color-primary)]/30">

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>

              {/* Name */}
              <input
                type="text"
                placeholder="Your name..."
                value={formData.name}
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all"
              />

              {/* Message */}
              <textarea
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                required
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full px-4 py-3 sm:py-3.5 text-sm sm:text-base bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] outline-none transition-all resize-none"
              />

              {/* Button */}
              <Button
                className="w-full flex items-center justify-center gap-2 text-sm sm:text-base"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </Button>

              {/* Status */}
              {submitStatus.type && (
                <div
                  className={`flex items-start sm:items-center gap-3 p-3 sm:p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <FaCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                  ) : (
                    <FaExclamationCircle className="w-5 h-5 flex-shrink-0 mt-0.5 sm:mt-0" />
                  )}

                  <p className="text-xs sm:text-sm break-words">
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">

            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">

              <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
                Contact Information
              </h3>

              <div className="space-y-2 sm:space-y-4">

                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-[var(--color-surface)] transition"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-primary)]" />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm text-[var(--color-muted-foreground)]">
                        {item.label}
                      </div>

                      <div className="font-medium text-sm sm:text-base break-all">
                        {item.value}
                      </div>
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