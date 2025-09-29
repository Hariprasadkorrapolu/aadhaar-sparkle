import { useState } from "react";
import FlashCard from "@/components/FlashCard";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Globe, 
  Smartphone, 
  CheckCircle, 
  FileText, 
  CreditCard, 
  Phone,
  Clock,
  AlertCircle,
  Video,
  PlayCircle,
  Download
} from "lucide-react";

const CompleteGuide = () => {
  const [activeMethod, setActiveMethod] = useState<string>("branch");
  const [watchedVideos, setWatchedVideos] = useState<Set<string>>(new Set());

  const markVideoWatched = (videoId: string) => {
    setWatchedVideos(prev => new Set([...prev, videoId]));
  };

  const methods = {
    branch: {
      title: "Bank Branch Visit",
      icon: Building,
      difficulty: "Easy",
      time: "30-45 minutes",
      steps: [
        {
          title: "Documents Required",
          icon: FileText,
          details: [
            "Original Aadhaar Card (physical copy)",
            "Bank Passbook or Account Statement",
            "Registered Mobile Number",
            "PAN Card (if available)",
            "Identity Proof (Voter ID, Driving License)"
          ],
          tip: "Keep all documents ready before visiting the branch"
        },
        {
          title: "Visit Your Bank Branch",
          icon: Building,
          details: [
            "Go to your home branch during working hours",
            "Take a token and wait for your turn",
            "Approach the customer service executive",
            "Request for Aadhaar seeding form"
          ],
          tip: "Visit during non-peak hours (10 AM - 12 PM) for faster service"
        },
        {
          title: "Fill the Aadhaar Seeding Form",
          icon: CreditCard,
          details: [
            "Provide your 12-digit Aadhaar number",
            "Write your name exactly as per Aadhaar",
            "Enter registered mobile number",
            "Sign the form clearly",
            "Double-check all information"
          ],
          tip: "Name should match exactly - even spelling mistakes can cause rejection"
        },
        {
          title: "Submit & Get Acknowledgment",
          icon: CheckCircle,
          details: [
            "Submit the form with required documents",
            "Get acknowledgment receipt with reference number",
            "Note down the reference number for tracking",
            "Ask for estimated completion time"
          ],
          tip: "Keep the receipt safe - you'll need it for follow-up"
        }
      ],
      video: {
        id: "branch-guide",
        title: "Branch Visit Complete Guide",
        duration: "5:30",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
      }
    },
    online: {
      title: "Online Banking",
      icon: Globe,
      difficulty: "Medium",
      time: "10-15 minutes",
      steps: [
        {
          title: "Login to Net Banking",
          icon: Globe,
          details: [
            "Visit your bank's official website",
            "Login with your credentials",
            "Ensure secure connection (https://)",
            "Navigate to customer services section"
          ],
          tip: "Always use official bank website - avoid third-party links"
        },
        {
          title: "Find Aadhaar Linking Section",
          icon: FileText,
          details: [
            "Look for 'Services' or 'Profile' menu",
            "Find 'Aadhaar Linking' or 'Link Aadhaar' option",
            "Some banks have it under 'Account Services'",
            "Click on the Aadhaar seeding option"
          ],
          tip: "Menu locations vary by bank - use search function if needed"
        },
        {
          title: "Enter Aadhaar Details",
          icon: CreditCard,
          details: [
            "Enter your 12-digit Aadhaar number",
            "Type name exactly as per Aadhaar",
            "Confirm registered mobile number",
            "Select the account to link",
            "Review all details carefully"
          ],
          tip: "Use copy-paste for Aadhaar number to avoid typing errors"
        },
        {
          title: "Submit & Verify",
          icon: CheckCircle,
          details: [
            "Click submit after reviewing details",
            "You'll receive OTP on registered mobile",
            "Enter OTP within time limit",
            "Get confirmation message with reference ID",
            "Print or save the confirmation"
          ],
          tip: "Process is completed immediately - no need to visit branch"
        }
      ],
      video: {
        id: "online-guide",
        title: "Online Banking Aadhaar Linking",
        duration: "4:15",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
      }
    },
    mobile: {
      title: "Mobile Banking",
      icon: Smartphone,
      difficulty: "Easy",
      time: "5-10 minutes",
      steps: [
        {
          title: "Open Mobile Banking App",
          icon: Smartphone,
          details: [
            "Download official bank app from Play Store/App Store",
            "Login with your mobile banking credentials",
            "Ensure app is updated to latest version",
            "Check for biometric login option"
          ],
          tip: "Enable notifications to get instant updates on linking status"
        },
        {
          title: "Navigate to Services",
          icon: Globe,
          details: [
            "Look for 'More Services' or 'Account Services'",
            "Find 'Profile' or 'Personal Details' section",
            "Search for 'Aadhaar' or 'KYC' options",
            "Tap on 'Link Aadhaar' or similar option"
          ],
          tip: "Use in-app search to quickly find Aadhaar linking feature"
        },
        {
          title: "Complete Aadhaar Linking",
          icon: CreditCard,
          details: [
            "Enter 12-digit Aadhaar number carefully",
            "Confirm name as per Aadhaar document",
            "Verify mobile number registration",
            "Select account for linking",
            "Tap 'Submit' or 'Link Now'"
          ],
          tip: "Most apps auto-fill some details - verify accuracy before submitting"
        },
        {
          title: "Confirmation & Tracking",
          icon: CheckCircle,
          details: [
            "Receive instant confirmation on screen",
            "Get SMS confirmation on registered mobile",
            "Note down reference number for tracking",
            "Check linking status in app after 24 hours"
          ],
          tip: "Screenshot the confirmation page for your records"
        }
      ],
      video: {
        id: "mobile-guide",
        title: "Mobile Banking Aadhaar Seeding",
        duration: "3:45",
        thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
      }
    }
  };

  const troubleshooting = [
    {
      issue: "Aadhaar number not accepted",
      solutions: [
        "Verify 12-digit Aadhaar number is correct",
        "Ensure name matches exactly with Aadhaar card",
        "Check if mobile number is registered with Aadhaar",
        "Contact bank if issue persists"
      ]
    },
    {
      issue: "OTP not received",
      solutions: [
        "Check mobile number is registered with both bank and Aadhaar",
        "Ensure good network connectivity",
        "Wait 2-3 minutes before requesting new OTP",
        "Contact customer care if multiple attempts fail"
      ]
    },
    {
      issue: "Linking process failed",
      solutions: [
        "Try again after 24 hours",
        "Ensure all details are exactly as per Aadhaar",
        "Clear browser cache (for online banking)",
        "Visit branch if online methods fail repeatedly"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-accent text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-flash-in">
              Complete Aadhaar Seeding Guide
            </h1>
            <p className="text-xl mb-8 opacity-90 animate-flash-in" style={{ animationDelay: "200ms" }}>
              Step-by-step instructions for all methods with video tutorials and troubleshooting
            </p>
          </div>
        </div>
      </section>

      {/* Method Selection */}
      <section className="py-12 container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Choose Your Preferred Method</h2>
          <p className="text-muted-foreground">Select the method that's most convenient for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {Object.entries(methods).map(([key, method]) => (
            <FlashCard 
              key={key}
              variant={activeMethod === key ? "success" : "default"}
              className={`cursor-pointer transition-all duration-300 ${
                activeMethod === key ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveMethod(key)}
            >
              <method.icon className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Difficulty: {method.difficulty}</span>
                <span>Time: {method.time}</span>
              </div>
            </FlashCard>
          ))}
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Video Tutorial */}
            <FlashCard variant="gradient" className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Video Tutorial</h3>
                  <p className="opacity-90">{methods[activeMethod as keyof typeof methods].video.title}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{methods[activeMethod as keyof typeof methods].video.duration}</span>
                </div>
              </div>
              
              <div className="relative bg-black/20 rounded-lg overflow-hidden mb-4">
                <div className="aspect-video flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    onClick={() => markVideoWatched(methods[activeMethod as keyof typeof methods].video.id)}
                  >
                    <PlayCircle className="w-6 h-6 mr-2" />
                    Watch Tutorial
                  </Button>
                </div>
              </div>
              
              {watchedVideos.has(methods[activeMethod as keyof typeof methods].video.id) && (
                <div className="flex items-center text-sm opacity-90">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Video completed! Follow the steps below.
                </div>
              )}
            </FlashCard>

            {/* Step by Step Guide */}
            <div className="space-y-6">
              {methods[activeMethod as keyof typeof methods].steps.map((step, index) => (
                <FlashCard key={index} delay={index * 100}>
                  <div className="flex items-start mb-4">
                    <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <step.icon className="w-5 h-5 mr-2 text-primary" />
                        <h4 className="text-lg font-semibold">{step.title}</h4>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 text-success flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-accent/10 border-l-4 border-accent p-3 rounded">
                        <div className="flex items-start">
                          <AlertCircle className="w-4 h-4 mr-2 text-accent flex-shrink-0 mt-0.5" />
                          <p className="text-sm font-medium">Tip: {step.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FlashCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Troubleshooting Common Issues</h2>
            <p className="text-muted-foreground">Solutions to frequently encountered problems</p>
          </div>

          <div className="space-y-4">
            {troubleshooting.map((item, index) => (
              <FlashCard key={index} delay={index * 100}>
                <h4 className="font-semibold mb-3 text-destructive flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  {item.issue}
                </h4>
                <ul className="space-y-2">
                  {item.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-start text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-success flex-shrink-0 mt-0.5" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </FlashCard>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <FlashCard variant="gradient" className="text-center max-w-2xl mx-auto">
            <Download className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Download Complete Guide</h3>
            <p className="mb-6 opacity-90">
              Get the complete Aadhaar seeding guide as a PDF for offline reference
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF Guide
            </Button>
          </FlashCard>
        </div>
      </section>
    </div>
  );
};

export default CompleteGuide;