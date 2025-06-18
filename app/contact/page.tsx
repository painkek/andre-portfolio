"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react"; // top of your file

import Navbar from "@/components/common/navbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!", {
      description: "I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-lime-50 p-6 flex items-center justify-center">
        <Card className="w-full max-w-xl shadow-md border-0 bg-white mb-18">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-light text-gray-800">
              Let&apos;s Connect
            </CardTitle>
            <p className="text-sm text-gray-500">
              I&apos;ll reply to your message within 24 hours
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-6 mt-6 text-brown">
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="hover:text-black transition" />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="hover:text-black transition" />
              </a>
              <a href="mailto:youremail@gmail.com">
                <Mail className="hover:text-black transition" />
              </a>
              <a
                href="https://m.me/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="hover:text-black transition" />
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="resize-none"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;
