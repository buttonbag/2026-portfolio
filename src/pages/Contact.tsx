import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    body: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ fullName: '', email: '', subject: '', body: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 pb-8 border-b border-black">
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight">
            Contact Me
          </h1>
        </div>

        {/* Contact Info */}
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-6 text-gray-600">
            Get In Touch
          </h2>
          <p className="mb-6 leading-relaxed">
            Feel free to reach out for collaborations, opportunities, or just to say hello.
            I'll get back to you as soon as possible.
          </p>
          <div className="space-y-2 text-sm">
            <p>Email: email@example.com</p>
            <p>LinkedIn: linkedin.com/in/yourname</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-widest mb-6 text-gray-600">
            Send a Message
          </h2>

          {submitted && (
            <div className="mb-6 p-4 border border-green-600 bg-green-50 text-green-800 text-sm">
              Thank you for your message! I'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
            <div>
              <label htmlFor="fullName" className="block text-xs uppercase tracking-wider mb-2">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="body" className="block text-xs uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="body"
                name="body"
                value={formData.body}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white px-8 py-3 uppercase text-xs tracking-widest font-medium hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Contact