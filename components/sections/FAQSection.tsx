"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div id="faq" className="min-h-screen py-12 flex items-center justify-center gap-12">
      <div className="max-w-5xl w-full flex flex-col gap-4 px-4 md:px-8 xl:px-12">
        <p className="text-xl md:text-2xl font-bold text-[#000091]">FAQ</p>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg">Is Hack The Fork free to attend?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Yes! Food will be provided for the duration of the event. We will also have swag and prizes!</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg">Where is the event? Is it in person or virtual? Where can I park?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>The event will probably be in person at Albert School.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg">Who can attend? What if I don&apos;t have any experience? Do I have to be 18?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>This event is open to any students. It is beginner friendly, with workshops to help you learn during the event, and mentors available to help you as you work on your project.</p>
              <p>Attendees must be at least 13 years old due to child privacy laws. If under 18, you will need to fill out this liability form from the university to participate - <a href="https://lu.ma/6vtlc0y1" target="_blank" rel="noopener noreferrer">https://lu.ma/6vtlc0y1</a>.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg">What is the team size limit?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Teams should be between 1 and 4 people. We will have a team building activity right after opening ceremony if you&apos;d like to find team members!</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg">Are there travel reimbursements?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>We are not able to provide travel reimbursements at this time.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-lg">What should I bring?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Your laptop, charger, headphones, deodorant, and a pillow/blanket.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-lg">When can we start working on our project? Can I work on a previous project?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>You cannot start until after opening ceremony. You may come up with ideas, but are not allowed to start coding. You cannot work on a previous project, but can use frameworks if you clearly credit them in your readme and differentiate what you made vs what you used.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger className="text-lg">How many challenges can I apply for?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>As many as you want!</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger className="text-lg">Do I have to stay overnight?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>No, you can leave and come back if you would prefer.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger className="text-lg">What kind of activities will there be?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>We will post the schedule closer to the event. There will be workshops and activities to take a break and meet other hackers and our wonderful sponsors.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger className="text-lg">What is a hackathon?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>A hackathon is an event where students &quot;hack&quot; together and create an app, website, game, etc. in 24-48 hours. There will be no malicious &quot;hacking&quot;.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger className="text-lg">Will hardware be available?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>We do not have hardware available, but you are welcome to bring your own. Due to building fire codes, soldering kits are not allowed in the venue.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger className="text-lg">Are you sending out acceptances? Is there a deadline to apply? Is there a waitlist?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>We will send out acceptances 7 days before the event. If you need earlier confirmation to book travel, please reach out to our team at contact@hackthefork.com. Applications will close once we reach the maximum amount of hackers we can support, but we will open a waitlist on the day of the event for any local hackers who want to fill the spots of any accepted hackers who do not end up attending.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-14">
            <AccordionTrigger className="text-lg">How do I sign up to be a mentor/judge/volunteer?</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>You can email us at contact@hackthefork.com</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-15">
            <AccordionTrigger className="text-lg">I have a different question!</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>Email us at contact@hackthefork.com</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
} 