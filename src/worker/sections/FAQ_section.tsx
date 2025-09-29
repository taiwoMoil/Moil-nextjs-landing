import { useState } from "react";
import Link from "next/link";
import FAQItem from "../../worker/components/faq_item";

export default function FAQSection() {

  const [active, setActive] = useState('');

  const FAQ = [
    {
      question: "What is Moil?",
      answer: "Moil is a platform designed to connect skilled professionals, such as carpenters, plumbers, and painters, with job opportunities. It uses AI-powered technology to match skilled workers with on-demand jobs."
    },
    {
      question: "How does Moil work?",
      answer: "Moil leverages AI to match skilled professionals with job opportunities posted by individuals or businesses in need of services. Users can sign up, create profiles, and start connecting with job opportunities or service providers."
    },
    {
      question: "How do I create a profile on Moil?",
      answer: "To create a profile, go to moilapp.com, sign up with your email or social media accounts, and fill in your details, including your skills, and your experience."
    },
    {
      question: "How can I find job opportunities on Moil?",
      answer: "Once your profile is set up, you can browse through available job listings, apply for jobs that match your skills, and connect with potential employers."
    },
    {
      question: "Is there a fee to use Moil as a job seeker?",
      answer: "Moil offers a free basic service for job seekers. There may be premium features available for an additional fee, providing enhanced visibility and access to exclusive job listings."
    },
    {
      question: "How secure is my data on Moil?",
      answer: (
        <span>
          Moil prioritizes the security of your data with robust encryption and regular security audits. For more information, refer to our <Link href="/privacy" className="text-blue-500 underline">privacy policy</Link>.
        </span>
      )
    },
    {
      question: "How do I report a problem or get support?",
      answer: (
        <span>
          If you encounter any issues or need support, you can contact our support team through the app or by emailing <a href="mailto:cs@moilapp.com" className="text-blue-500 underline">cs@moilapp.com</a>.
        </span>
      )
    },
    {
      question: "How can I provide feedback or suggest improvements?",
      answer: (
        <span>
          We value your feedback! You can provide feedback or suggest improvements by emailing <a href="mailto:cs@moilapp.com" className="text-blue-500 underline">cs@moilapp.com</a>.
        </span>
      )
    }
  ];


  const onClick = (question: string) => {
    if (active !== question) {
      setActive(question);
    } else {
      setActive('');
    }
  }
  return (
    <div className="flex justify-center flex-col gap-y-4 py-6">
      <p className="font-[800]  text-[20px] md:text-[32px] leading-normal text-center text-[#000000DE]">Frequently Asked Questions</p>
      <div className="flex w-full px-6 md:px-8 lg:px-0  self-center flex-col gap-y-4 container max-w-[540px] lg:max-w-[800px] xl:max-w-[950px] xtraxl:xl:max-w-[1152px]">
        {
          FAQ?.map((faq, i) => {
            return <FAQItem onClick={() => onClick(faq.question)} key={i} question={faq.question} answer={faq.answer} active={faq.question === active} />
          })
        }
      </div>
    </div>
  )
}