import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: false,
    honeypot: '', // Hidden field for bot detection
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length <= 3) {
      return phoneNumber;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    // Apply phone formatting for phone field
    if (name === 'phone' && type !== 'checkbox') {
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        phone: formattedPhone,
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Check honeypot field - if filled, it's a bot
    if (formData.honeypot) {
      // Silently fail - pretend it worked but don't send anything
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false,
        honeypot: '',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Send form data to webhook
      const response = await fetch('https://services.leadconnectorhq.com/hooks/10LCZDnUvwfyH3005w5r/webhook-trigger/4848fb32-c55a-4923-8645-e31688d687a4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          consent: formData.consent,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        consent: false,
        honeypot: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field - hidden from humans, bots will fill it */}
      <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }} aria-hidden="true">
        <input
          type="checkbox"
          id="robot_check"
          name="honeypot"
          tabIndex={-1}
          checked={formData.honeypot === 'checked'}
          onChange={(e) => setFormData(prev => ({ ...prev, honeypot: e.target.checked ? 'checked' : '' }))}
          autoComplete="off"
        />
        <label htmlFor="robot_check">I am not a robot</label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2 font-heading">
            Name *
          </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#2E2E2E]/50 border border-[#2E2E2E]/50 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all font-heading font-normal placeholder:text-[#999999]"
                    placeholder="Jane Smith"
                  />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2 font-heading">
            Email *
          </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#2E2E2E]/50 border border-[#2E2E2E]/50 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all font-heading font-normal placeholder:text-[#999999]"
                    placeholder="example@example.com"
                  />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2 font-heading">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            pattern="^\(\d{3}\) \d{3}-\d{4}$"
            className="w-full px-4 py-3 bg-[#2E2E2E]/50 border border-[#2E2E2E]/50 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all font-heading font-normal placeholder:text-[#999999]"
            placeholder="(123) 456-7890"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-white mb-2 font-heading">
            Subject *
          </label>
          <select
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-[#2E2E2E]/50 border border-[#2E2E2E]/50 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all font-heading font-normal [&>option]:bg-gray-800"
          >
            <option value="">Select a subject</option>
            <option value="Discovery Flight">Discovery Flight</option>
            <option value="Private Pilot Training">Private Pilot Training</option>
            <option value="Instrument Rating">Instrument Rating</option>
            <option value="Commercial License">Commercial License</option>
            <option value="CFI Training">CFI Training</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2 font-heading">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-[#2E2E2E]/50 border border-[#2E2E2E]/50 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-white outline-none transition-all resize-none font-heading placeholder:text-[#999999] min-h-[100px]"
          placeholder="I need..."
        />
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 w-4 h-4 rounded cursor-pointer appearance-none border-2 border-gray-600 bg-gray-700/50 checked:bg-white checked:border-white focus:ring-2 focus:ring-white focus:ring-offset-0 transition-all flex-shrink-0 relative after:content-[''] after:absolute after:top-[1px] after:left-[5px] after:w-[6px] after:h-[10px] after:border-r-2 after:border-b-2 after:border-black after:rotate-45 after:opacity-0 checked:after:opacity-100"
        />
        <label htmlFor="consent" className="text-xs text-gray-400 font-heading leading-snug">
          I consent to receive SMS/calls from Centerline Aviation INC. Msg & data rates may apply. Reply STOP to opt-out. Not a condition of purchase. *
        </label>
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-900/30 border border-green-500/50 rounded-lg">
          <p className="text-green-300 font-heading">
            Thank you! Your message has been sent. We'll get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-900/30 border border-red-500/50 rounded-lg">
          <p className="text-red-300 font-heading">
            There was an error sending your message. Please try again or call us directly.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="cta-button w-full disabled:opacity-50 disabled:cursor-not-allowed font-heading"
      >
        <span className="flex-1 text-center">{isSubmitting ? 'Sending...' : 'Submit form'}</span>
      </button>
    </form>
  );
}

