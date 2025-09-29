import FlashCard from "@/components/FlashCard";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  ChevronDown,
  HelpCircle,
  Clock,
  Globe
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the difference between Aadhaar linking and DBT enabling?",
    answer: "Aadhaar linking connects your Aadhaar number to your bank account for identification. DBT (Direct Benefit Transfer) enabling allows you to receive government benefits directly into your account. DBT enabling requires Aadhaar linking first."
  },
  {
    question: "How long does it take to enable DBT on my account?",
    answer: "Once you submit your Aadhaar details for linking, it typically takes 1-2 working days for the linking to be completed. After that, your account becomes eligible for DBT benefits immediately."
  },
  {
    question: "Can I link multiple bank accounts to the same Aadhaar?",
    answer: "Yes, you can link multiple bank accounts to your Aadhaar number. However, for DBT purposes, you should designate one primary account where you want to receive government benefits."
  },
  {
    question: "What documents do I need for Aadhaar seeding?",
    answer: "You need your original Aadhaar card (or Aadhaar number), your bank account details, and the registered mobile number associated with your Aadhaar. Some banks may ask for additional KYC documents."
  },
  {
    question: "Why am I not receiving my scholarship/subsidy even after linking Aadhaar?",
    answer: "There could be several reasons: 1) Aadhaar seeding might not be complete, 2) Name mismatch between bank account and Aadhaar, 3) Inactive bank account, 4) Pending verification by the benefit-providing department. Contact your bank or the concerned department for assistance."
  },
  {
    question: "Is it safe to share my Aadhaar number for linking?",
    answer: "Yes, sharing your Aadhaar number with your bank for linking purposes is safe and necessary. However, never share your Aadhaar details on unofficial websites or with unauthorized persons. Always verify the authenticity of the service provider."
  },
  {
    question: "Can I change my linked mobile number later?",
    answer: "Yes, you can update your mobile number both in your Aadhaar record and with your bank. Visit an Aadhaar enrollment center to update your mobile number in Aadhaar, and inform your bank about the change for their records."
  },
  {
    question: "What should I do if my Aadhaar seeding request is rejected?",
    answer: "Common reasons for rejection include name mismatch, incorrect Aadhaar number, or inactive account. Visit your bank branch with original documents to understand the specific reason and get it resolved."
  }
];

const contactChannels = [
  {
    icon: Phone,
    title: "Helpline Number",
    description: "Call our dedicated support line",
    contact: "1800-111-999",
    hours: "Available 24/7",
    action: "Call Now",
    variant: "gradient" as const
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Chat with our support team",
    contact: "+91 9876543210",
    hours: "Mon-Fri, 9 AM - 6 PM",
    action: "Chat Now",
    variant: "success" as const
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us your queries",
    contact: "support@aadhaar-awareness.gov.in",
    hours: "Response within 24 hours",
    action: "Send Email",
    variant: "accent" as const
  }
];

const Helpline = () => {
  const handleContact = (type: string, contact: string) => {
    switch (type) {
      case "Call Now":
        window.open(`tel:${contact.replace(/\s+/g, '')}`);
        break;
      case "Chat Now":
        window.open(`https://wa.me/${contact.replace(/\D/g, '')}`);
        break;
      case "Send Email":
        window.open(`mailto:${contact}`);
        break;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Need Help? We're Here for You!</h1>
          <p className="text-muted-foreground">
            Get assistance with Aadhaar linking, DBT enabling, and government benefits
          </p>
        </div>

        {/* Contact Channels */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactChannels.map((channel, index) => (
            <FlashCard
              key={index}
              variant={channel.variant}
              delay={index * 200}
              className="text-center cursor-pointer"
              onClick={() => handleContact(channel.action, channel.contact)}
            >
              <channel.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{channel.title}</h3>
              <p className="text-sm opacity-90 mb-3">{channel.description}</p>
              <div className="bg-white/20 rounded-lg p-3 mb-4">
                <p className="font-medium">{channel.contact}</p>
                <p className="text-xs opacity-75 mt-1">{channel.hours}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                {channel.action}
              </Button>
            </FlashCard>
          ))}
        </div>

        {/* Quick Help Section */}
        <FlashCard className="mb-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Clock className="w-8 h-8 mx-auto mb-2 text-primary" />
              <h4 className="font-semibold mb-1">Quick Response</h4>
              <p className="text-sm text-muted-foreground">Most queries resolved within 24 hours</p>
            </div>
            <div>
              <HelpCircle className="w-8 h-8 mx-auto mb-2 text-success" />
              <h4 className="font-semibold mb-1">Expert Support</h4>
              <p className="text-sm text-muted-foreground">Trained professionals to help you</p>
            </div>
            <div>
              <Globe className="w-8 h-8 mx-auto mb-2 text-accent" />
              <h4 className="font-semibold mb-1">Multi-language</h4>
              <p className="text-sm text-muted-foreground">Support available in multiple languages</p>
            </div>
          </div>
        </FlashCard>

        {/* FAQ Section */}
        <FlashCard>
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FlashCard>

        {/* Emergency Notice */}
        <FlashCard variant="accent" className="mt-8 text-center">
          <h3 className="font-semibold text-lg mb-2">⚠️ Important Notice</h3>
          <p className="text-sm opacity-90">
            For immediate assistance with Aadhaar-related issues, you can also contact the official 
            UIDAI helpline at <strong>1947</strong> or visit your nearest Aadhaar enrollment center.
          </p>
        </FlashCard>
      </div>
    </div>
  );
};

export default Helpline;