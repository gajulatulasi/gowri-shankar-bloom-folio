
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Clock } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

const ScheduleMeetingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    purpose: "",
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
    if (!formData.name || !formData.email || !formData.purpose) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, Email, and Meeting Purpose are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Format date and time
      const dateTimeString = selectedDate && selectedTime 
        ? `${format(selectedDate, 'PPP')} at ${selectedTime}`
        : 'To be discussed';

      // Create mailto link with form data
      const subject = encodeURIComponent(`Meeting Request - ${formData.purpose} - ${formData.name}`);
      const body = encodeURIComponent(`
Meeting Request Details:

Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}
Meeting Purpose: ${formData.purpose}
Preferred Date & Time: ${dateTimeString}

Message:
${formData.message || 'No additional message provided'}

Submission Time: ${new Date().toLocaleString()}
      `);
      
      const mailtoLink = `mailto:allamgowrishankar28@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      // Show success message
      setIsSubmitted(true);
      toast({
        title: "Thanks for scheduling! I'll get back to you shortly.",
        description: "Your meeting request has been prepared. Please send the email from your email client.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        organization: "",
        phone: "",
        purpose: "",
        message: ""
      });
      setSelectedDate(undefined);
      setSelectedTime("");
      
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

  const resetModal = () => {
    setIsSubmitted(false);
    setIsOpen(false);
    setFormData({
      name: "",
      email: "",
      organization: "",
      phone: "",
      purpose: "",
      message: ""
    });
    setSelectedDate(undefined);
    setSelectedTime("");
  };

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
        >
          <CalendarIcon className="w-4 h-4 mr-2" />
          Schedule Meeting
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-gray-800">Schedule a Meeting</DialogTitle>
        </DialogHeader>
        
        {isSubmitted ? (
          <div className="text-center py-12">
            <CalendarIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Thanks for scheduling! I'll get back to you shortly.</h3>
            <p className="text-gray-600 mb-6">Your meeting request has been prepared for sending.</p>
            <Button 
              onClick={resetModal}
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white"
            >
              Schedule Another Meeting
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
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

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="organization" className="text-gray-700 font-medium">
                  Institution/Organization
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
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="purpose" className="text-gray-700 font-medium">
                Meeting Purpose *
              </Label>
              <Select onValueChange={handleSelectChange} value={formData.purpose} required>
                <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="What would you like to discuss?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="workshop">Workshop</SelectItem>
                  <SelectItem value="talk">Talk/Presentation</SelectItem>
                  <SelectItem value="collaboration">General Collaboration</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal border-gray-300"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-700 font-medium">Preferred Time</Label>
                <Select onValueChange={setSelectedTime} value={selectedTime}>
                  <SelectTrigger className="border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-700 font-medium">
                Message / Description
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none"
                placeholder="Tell me more about what you'd like to discuss..."
              />
            </div>
            
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 disabled:opacity-50"
            >
              {isSubmitting ? "Scheduling..." : "Schedule Meeting"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleMeetingModal;
