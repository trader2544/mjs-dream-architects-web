import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAIL_SERVICE_ID = 'service_kw8yt7l';
const EMAIL_PUBLIC_KEY = 'MhpE0wC1iYVt1PhFu';

// Initialize EmailJS
emailjs.init(EMAIL_PUBLIC_KEY);

export interface QuoteRequestData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  servicesNeeded: string[];
  projectPlan?: File | null;
}

export const sendQuoteRequest = async (data: QuoteRequestData): Promise<boolean> => {
  try {
    console.log('Sending quote request via EmailJS:', data);

    // Prepare the email template parameters
    const templateParams = {
      from_name: data.fullName,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      services: data.servicesNeeded.join(', '),
      to_name: 'MJS Products Team',
      reply_to: data.email,
      // You can add more params here if your template expects them
    };

    // Send the email using the new template_id
    const result = await emailjs.send(
      EMAIL_SERVICE_ID,
      'template_i836dq5', // Updated to new template ID
      templateParams
    );

    console.log('EmailJS result:', result);
    return result.status === 200;
  } catch (error) {
    console.error('EmailJS error:', error);
    return false;
  }
};
