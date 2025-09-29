import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FlashCard from "@/components/FlashCard";
import { CheckCircle, XCircle, Search, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DBTStatus = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [status, setStatus] = useState<"checking" | "linked" | "not-linked" | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateAadhaar = (number: string) => {
    const cleaned = number.replace(/\s/g, "");
    return /^\d{12}$/.test(cleaned);
  };

  const formatAadhaar = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const limited = cleaned.slice(0, 12);
    return limited.replace(/(\d{4})(\d{4})(\d{4})/, "$1 $2 $3").trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatAadhaar(e.target.value);
    setAadhaarNumber(formatted);
  };

  const checkStatus = async () => {
    if (!validateAadhaar(aadhaarNumber)) {
      toast({
        title: "Invalid Aadhaar Number",
        description: "Please enter a valid 12-digit Aadhaar number.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setStatus("checking");

    // Simulate API call with mock data
    setTimeout(() => {
      const cleanNumber = aadhaarNumber.replace(/\s/g, "");
      // Mock logic: numbers ending with even digits are "linked"
      const isLinked = parseInt(cleanNumber.slice(-1)) % 2 === 0;
      setStatus(isLinked ? "linked" : "not-linked");
      setIsLoading(false);
    }, 2000);
  };

  const resetCheck = () => {
    setStatus(null);
    setAadhaarNumber("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Check Your DBT Status</h1>
          <p className="text-muted-foreground">
            Enter your Aadhaar number to check if your account is DBT-enabled
          </p>
        </div>

        <FlashCard className="mb-6">
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Aadhaar Number
              </label>
              <Input
                type="text"
                placeholder="XXXX XXXX XXXX"
                value={aadhaarNumber}
                onChange={handleInputChange}
                className="text-lg text-center tracking-wider"
                maxLength={14}
              />
              <p className="text-xs text-muted-foreground mt-1">
                Your Aadhaar information is secure and not stored
              </p>
            </div>

            <Button
              onClick={checkStatus}
              disabled={!validateAadhaar(aadhaarNumber) || isLoading}
              size="lg"
              className="w-full btn-flash"
            >
              <Search className="w-4 h-4 mr-2" />
              {isLoading ? "Checking..." : "Check DBT Status"}
            </Button>
          </div>
        </FlashCard>

        {status === "checking" && (
          <FlashCard variant="gradient" className="animate-bounce-in">
            <div className="flex items-center justify-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span>Checking your DBT status...</span>
            </div>
          </FlashCard>
        )}

        {status === "linked" && (
          <FlashCard variant="success" className="animate-bounce-in mb-6">
            <div className="text-center">
              <CheckCircle className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Great News! ✅</h3>
              <p className="text-lg mb-4">
                Your account is DBT-enabled and ready to receive government benefits directly.
              </p>
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <h4 className="font-semibold mb-2">You can now receive:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Scholarships and educational benefits</li>
                  <li>• LPG subsidies</li>
                  <li>• MGNREGA payments</li>
                  <li>• Pension payments</li>
                  <li>• Other government scheme benefits</li>
                </ul>
              </div>
              <Button
                onClick={resetCheck}
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                Check Another Number
              </Button>
            </div>
          </FlashCard>
        )}

        {status === "not-linked" && (
          <div className="space-y-6">
            <FlashCard variant="accent" className="animate-bounce-in">
              <div className="text-center">
                <XCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Action Required ⚠️</h3>
                <p className="text-lg mb-4">
                  Your account is not yet DBT-enabled. You're missing out on direct government benefits.
                </p>
                <Button
                  onClick={resetCheck}
                  variant="outline"
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                >
                  Check Another Number
                </Button>
              </div>
            </FlashCard>

            <FlashCard>
              <h4 className="font-semibold text-lg mb-4 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2 text-accent" />
                How to Enable DBT on Your Account
              </h4>
              <div className="space-y-4">
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h5 className="font-semibold text-primary mb-2">Method 1: Visit Bank Branch</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Carry original Aadhaar card</li>
                    <li>• Fill the Aadhaar seeding form</li>
                    <li>• Provide registered mobile number</li>
                  </ul>
                </div>
                
                <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                  <h5 className="font-semibold text-success mb-2">Method 2: Online Banking</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Login to your net banking</li>
                    <li>• Find "Aadhaar Linking" section</li>
                    <li>• Enter Aadhaar details and submit</li>
                  </ul>
                </div>
                
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                  <h5 className="font-semibold text-accent mb-2">Method 3: Mobile Banking</h5>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Open your bank's mobile app</li>
                    <li>• Navigate to "Services" or "Profile"</li>
                    <li>• Select "Link Aadhaar" option</li>
                  </ul>
                </div>
              </div>
            </FlashCard>
          </div>
        )}

        <FlashCard className="mt-6">
          <div className="bg-muted/50 rounded-lg p-4">
            <h4 className="font-semibold mb-2 flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 text-primary" />
              Important Note
            </h4>
            <p className="text-sm text-muted-foreground">
              This is a demo status checker. In a real implementation, this would connect to 
              the official government DBT portal for accurate status verification. Always use 
              official government websites for actual status checks.
            </p>
          </div>
        </FlashCard>
      </div>
    </div>
  );
};

export default DBTStatus;