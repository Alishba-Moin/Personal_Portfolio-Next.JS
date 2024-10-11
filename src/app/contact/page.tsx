"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone-no",
    description: "+92 317 245 567",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "alishbamoin797@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Hyderabad, Sindh",
  },
];

export default function Contact() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">

        {/* Contact Info */}
        <div className="flex flex-1 items-center xl:justify-start mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => (
              <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Form */}
        <div className="flex-1 xl:w-[70%]">
          <form className="flex flex-col gap-4 p-6 bg-[#27272c] rounded-xl">
            <h3 className="text-3xl font-extrabold text-accent">Let's work together!</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="text" placeholder="Firstname" />
              <Input type="text" placeholder="Lastname" />
              <Input type="email" placeholder="Email Address" />
              <Input type="tel" placeholder="Phone number" />
            </div>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="web-dev">Web Development</SelectItem>
                  <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                  <SelectItem value="ai-integration">AI Integration & Automation</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Textarea className="h-[150px]" placeholder="Type your message here" />
            <Button size="md">Send message</Button>
          </form>
        </div>

      </div>
    </div>
  );
}
