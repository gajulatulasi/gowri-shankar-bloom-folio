
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Download, Calendar, QrCode, MapPin, Github, Linkedin, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    purpose: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      purpose: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, Email, and Message are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`${formData.purpose || 'Contact Form'} - ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Organization: ${formData.organization || 'Not provided'}
Purpose: ${formData.purpose || 'Not specified'}

Message:
${formData.message}

Submission Time: ${new Date().toLocaleString()}
      `);
      
      const mailtoLink = `mailto:allamgowrishankar28@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      // Show success message
      setIsSubmitted(true);
      toast({
        title: "Thanks! I'll get back to you shortly.",
        description: "Your message has been prepared. Please send the email from your email client.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        purpose: "",
        message: ""
      });
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResumeDownload = () => {
    window.open("https://drive.google.com/file/d/16ChmYTlJLlqbCGG36_diO92NQNuxMkMd/view?usp=drive_link", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Let's Collaborate
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              I'd love to work with your institution or team!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 mb-4">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Email</div>
                      <div className="text-gray-600 text-sm">allamgowrishankar28@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">Location</div>
                      <div className="text-gray-600 text-sm">Palamaner, Chittoor Dist, Andhra Pradesh</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">LinkedIn</div>
                      <a 
                        href="https://www.linkedin.com/in/allamgowrishankar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                      >
                        linkedin.com/in/allamgowrishankar
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-teal-600 to-blue-600 text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">GitHub</div>
                      <a 
                        href="https://github.com/GowriShankarAllam" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors"
                      >
                        github.com/GowriShankarAllam
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 mb-4">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    onClick={handleResumeDownload}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Button>
                  
                  <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  
                  <div className="text-center pt-4">
                    <div className="flex justify-center items-center space-x-2 text-gray-600">
                      <QrCode className="w-4 h-4" />
                      <span className="text-sm">Scan for Resume</span>
                    </div>
                    <div className="w-24 h-24 bg-gray-200 rounded-lg mx-auto mt-2 flex items-center justify-center">
                      <QrCode className="w-8 h-8 text-gray-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div id="form" className="lg:col-span-2">
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800 mb-2">Request a Workshop or Session</CardTitle>
                  <p className="text-gray-600">Fill out the form below and I'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Thanks! I'll get back to you shortly.</h3>
                      <p className="text-gray-600 mb-6">Your message has been prepared for sending.</p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-gray-700 font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-700 font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-700 font-medium">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your phone number (optional)"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="organization" className="text-gray-700 font-medium">
                            Institution/Organization Name
                          </Label>
                          <Input
                            id="organization"
                            name="organization"
                            type="text"
                            value={formData.organization}
                            onChange={handleInputChange}
                            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Your institution or organization"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="purpose" className="text-gray-700 font-medium">
                          Select Purpose
                        </Label>
                        <Select onValueChange={handleSelectChange} value={formData.purpose}>
                          <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                            <SelectValue placeholder="What can I help you with?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="workshop-request">Workshop Request</SelectItem>
                            <SelectItem value="speaker-session">Speaker Session</SelectItem>
                            <SelectItem value="general-query">General Query</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          Message / Workshop Topic Description *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                          placeholder="Tell me more about your workshop requirements, event details, or any questions you have..."
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50"
                      >
                        {isSubmitting ? "Preparing..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
