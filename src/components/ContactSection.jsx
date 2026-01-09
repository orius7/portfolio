import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          <div className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">

            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 place-items-center text-center">
                <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium">Email</h4>
                    <a
                    href="mailto:aidanlei@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    >
                    aidanlei@gmail.com
                    </a>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">San Ramon, CA</p>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <div className="p-3 rounded-full bg-primary/10">
                        <a
                            href="https://www.linkedin.com/in/aidan-lei-807b49219"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="h-6 w-6 text-primary" />
                        </a>
                    </div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                    href="https://www.linkedin.com/in/aidan-lei-807b49219"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    >
                    Profile Link
                    </a>
                </div>
                </div>
          </div>
        </div>
      </div>
    </section>
  );
};