
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RequestForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    purpose: "",
    datetime: "",
    message: ""
  });

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
    if (!formData.name || !formData.email || !formData.purpose || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, Email, Meeting Purpose, and Message are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/manjenwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization || "Not provided",
          phone: formData.phone || "Not provided",
          purpose: formData.purpose,
          datetime: formData.datetime || "To be discussed",
          message: formData.message
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "✅ Thanks! Your request has been received. I'll get back to you shortly.",
          description: "Form submitted successfully.",
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          organization: "",
          phone: "",
          purpose: "",
          datetime: "",
          message: ""
        });
      } else {
        throw new Error("Submission failed");
      }
      
    } catch (error) {
      toast({
        title: "Submission failed. Please try again or contact directly via email.",
        description: "Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      organization: "",
      phone: "",
      purpose: "",
      datetime: "",
      message: ""
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8 sm:py-12">
        <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 break-words">✅ Thanks! Your request has been received. I'll get back to you shortly.</h3>
        <p className="text-gray-600 mb-6 text-sm sm:text-base break-words">Your form has been submitted successfully.</p>
        <Button 
          onClick={resetForm}
          className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white min-h-[44px]"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700 font-medium text-sm sm:text-base">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[44px] text-sm sm:text-base"
            placeholder="Your full name"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium text-sm sm:text-base">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[44px] text-sm sm:text-base"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="organization" className="text-gray-700 font-medium text-sm sm:text-base">
            Institution/Organization
          </Label>
          <Input
            id="organization"
            name="organization"
            type="text"
            value={formData.organization}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[44px] text-sm sm:text-base"
            placeholder="Your institution or organization"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700 font-medium text-sm sm:text-base">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[44px] text-sm sm:text-base"
            placeholder="Your phone number (optional)"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="purpose" className="text-gray-700 font-medium text-sm sm:text-base">
            Meeting Purpose *
          </Label>
          <Select onValueChange={handleSelectChange} value={formData.purpose} required>
            <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[44px] text-sm sm:text-base">
              <SelectValue placeholder="Select meeting purpose" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="speaker-session">Speaker Session</SelectItem>
              <SelectItem value="general-collaboration">General Collaboration</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="datetime" className="text-gray-700 font-medium text-sm sm:text-base">
            Preferred Date & Time
          </Label>
          <Input
            id="datetime"
            name="datetime"
            type="datetime-local"
            value={formData.datetime}
            onChange={handleInputChange}
            className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 min-h-[44px] text-sm sm:text-base"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-700 font-medium text-sm sm:text-base">
          Message / Description *
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={4}
          className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none text-sm sm:text-base"
          placeholder="Tell me more about what you'd like to discuss..."
        />
      </div>
      
      <Button 
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50 min-h-[44px]"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
};

export default RequestForm;
