import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FlashCard from "@/components/FlashCard";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Users, 
  Star,
  TrendingUp,
  Shield,
  Zap,
  ChevronRight,
  Building,
  Smartphone,
  Globe
} from "lucide-react";

const successStories = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    benefit: "Scholarship",
    amount: "₹50,000",
    story: "Received my college scholarship directly in my account within 2 days of DBT activation!",
    avatar: "P"
  },
  {
    name: "Rajesh Kumar",
    location: "Patna, Bihar",
    benefit: "LPG Subsidy",
    amount: "₹2,400",
    story: "No more waiting in queues! My cooking gas subsidy is automatically credited every month.",
    avatar: "R"
  },
  {
    name: "Anita Devi",
    location: "Jaipur, Rajasthan",
    benefit: "MGNREGA",
    amount: "₹8,500",
    story: "Direct payment for my work under MGNREGA scheme. No middleman, no delays!",
    avatar: "A"
  }
];

const Index = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-flash-in">
              {t.hero.title} <span className="text-glow">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-flash-in" style={{ animationDelay: "200ms" }}>
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-flash-in" style={{ animationDelay: "400ms" }}>
              <Link to="/quiz">
                <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30 btn-flash">
                  {t.hero.takeQuiz}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/dbt-status">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 btn-flash">
                  {t.hero.checkStatus}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.comparison.title}</h2>
          <p className="text-muted-foreground">{t.comparison.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FlashCard className="relative">
            <div className="flex items-center mb-4">
              <XCircle className="w-8 h-8 text-muted-foreground mr-3" />
              <h3 className="text-xl font-semibold">{t.comparison.normalAccount}</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t.comparison.normalFeature1}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t.comparison.normalFeature2}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t.comparison.normalFeature3}
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-muted-foreground rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {t.comparison.normalFeature4}
              </li>
            </ul>
          </FlashCard>

          <FlashCard variant="success" delay={200}>
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 mr-3" />
              <h3 className="text-xl font-semibold">{t.comparison.dbtAccount}</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                {t.comparison.dbtFeature1}
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                {t.comparison.dbtFeature2}
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                {t.comparison.dbtFeature3}
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0" />
                {t.comparison.dbtFeature4}
              </li>
            </ul>
          </FlashCard>
        </div>
      </section>

      {/* Scholarship Matching Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.scholarships.title}</h2>
            <p className="text-muted-foreground">{t.scholarships.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
            {[
              { 
                category: t.scholarships.schoolStudents, 
                amount: "₹10,000 - ₹50,000", 
                schemes: ["PM YASASVI", "Merit Scholarship", "SC/ST Scholarship"],
                eligibility: t.scholarships.schoolEligibility,
                link: "https://scholarships.gov.in/"
              },
              { 
                category: t.scholarships.collegeStudents, 
                amount: "₹25,000 - ₹1,00,000", 
                schemes: ["Post Matric Scholarship", "Merit-cum-Means", "Professional Course"],
                eligibility: t.scholarships.collegeEligibility,
                link: "https://www.scholarships.reliancefoundation.org/UG_Scholarship.aspx"
              },
              { 
                category: t.scholarships.researchStudents, 
                amount: "₹50,000 - ₹2,00,000", 
                schemes: ["JRF", "SRF", "Research Fellowship"],
                eligibility: t.scholarships.researchEligibility,
                link: "https://www.primeministerfellowshipscheme.in/"
              }
            ].map((scholarship, index) => (
              <FlashCard key={index} delay={index * 100} variant="success">
                <h3 className="text-xl font-semibold mb-3">{scholarship.category}</h3>
                <div className="text-2xl font-bold mb-3">{scholarship.amount}</div>
                <div className="space-y-2 mb-4">
                  {scholarship.schemes.map((scheme, idx) => (
                    <div key={idx} className="bg-white/20 rounded px-3 py-1 text-sm">
                      {scheme}
                    </div>
                  ))}
                </div>
                <p className="text-sm opacity-90">{scholarship.eligibility}</p>
                <a href={scholarship.link} target="_blank" rel="noopener noreferrer" className="block mt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    {t.common.checkEligibility}
                  </Button>
                </a>
              </FlashCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.benefits.title}</h2>
            <p className="text-muted-foreground">{t.benefits.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Users, title: t.benefits.scholarships, desc: t.benefits.scholarshipsDesc, amount: "₹10K-₹2L" },
              { icon: Shield, title: t.benefits.lpgSubsidies, desc: t.benefits.lpgSubsidiesDesc, amount: "₹200/cylinder" },
              { icon: TrendingUp, title: t.benefits.mgnrega, desc: t.benefits.mgnregaDesc, amount: "₹300/day" },
              { icon: Star, title: t.benefits.pensions, desc: t.benefits.pensionsDesc, amount: "₹3K-₹5K/month" }
            ].map((benefit, index) => (
              <FlashCard key={index} delay={index * 100} className="text-center">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{benefit.desc}</p>
                <div className="text-lg font-bold text-success">{benefit.amount}</div>
              </FlashCard>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16 bg-muted/30 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.guide.title}</h2>
          <p className="text-muted-foreground">{t.guide.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {/* Branch Visit */}
          <FlashCard variant="gradient" delay={0}>
            <div className="flex items-center justify-between mb-4">
              <Building className="w-12 h-12" />
              <div className="text-right">
                <div className="text-xs bg-white/30 px-2 py-1 rounded">30-45 min</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">{t.guide.bankBranch}</h3>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">1</span>
                <span>Carry original Aadhaar card and bank passbook</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</span>
                <span>Fill the Aadhaar seeding form at the bank</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</span>
                <span>Submit with registered mobile number</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">4</span>
                <span>Receive confirmation within 1-2 days</span>
              </div>
            </div>
            <div className="bg-white/20 rounded p-2 text-xs">
              <strong>Tip:</strong> Best for first-time users who need personal assistance
            </div>
          </FlashCard>

          {/* Online Banking */}
          <FlashCard variant="success" delay={200}>
            <div className="flex items-center justify-between mb-4">
              <Globe className="w-12 h-12" />
              <div className="text-right">
                <div className="text-xs bg-white/30 px-2 py-1 rounded">10-15 min</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">{t.guide.onlineBanking}</h3>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">1</span>
                <span>Login to your net banking account</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</span>
                <span>Navigate to "Services" or "Profile" section</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</span>
                <span>Find "Aadhaar Linking" or "Link Aadhaar" option</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">4</span>
                <span>Enter Aadhaar details and submit</span>
              </div>
            </div>
            <div className="bg-white/20 rounded p-2 text-xs">
              <strong>Tip:</strong> Fastest method if you have active net banking
            </div>
          </FlashCard>

          {/* Mobile Banking */}
          <FlashCard variant="accent" delay={400}>
            <div className="flex items-center justify-between mb-4">
              <Smartphone className="w-12 h-12" />
              <div className="text-right">
                <div className="text-xs bg-white/30 px-2 py-1 rounded">5-10 min</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">{t.guide.mobileBanking}</h3>
            <div className="space-y-3 text-sm mb-4">
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">1</span>
                <span>Open your bank's mobile app</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</span>
                <span>Go to "More Services" or "Account Services"</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</span>
                <span>Select "Aadhaar Linking" option</span>
              </div>
              <div className="flex items-start">
                <span className="bg-white/30 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">4</span>
                <span>Follow the on-screen instructions</span>
              </div>
            </div>
            <div className="bg-white/20 rounded p-2 text-xs">
              <strong>Tip:</strong> Most convenient for mobile users
            </div>
          </FlashCard>
        </div>

        <div className="text-center">
          <Link to="/complete-guide">
            <Button size="lg" variant="outline" className="bg-primary/10 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              {t.guide.viewCompleteGuide}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t.successStories.title}</h2>
            <p className="text-muted-foreground">{t.successStories.subtitle}</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <FlashCard variant="gradient" key={currentStory} className="text-center animate-bounce-in">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
                  {successStories[currentStory].avatar}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{successStories[currentStory].name}</h4>
                  <p className="text-sm opacity-90">{successStories[currentStory].location}</p>
                </div>
              </div>
              
              <div className="bg-white/20 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{successStories[currentStory].benefit}</span>
                  <span className="text-xl font-bold">{successStories[currentStory].amount}</span>
                </div>
              </div>
              
              <p className="text-lg italic mb-4">"{successStories[currentStory].story}"</p>
              
              <div className="flex justify-center space-x-2">
                {successStories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStory(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentStory ? "bg-white w-6" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </FlashCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 container mx-auto px-4">
        <FlashCard variant="gradient" className="text-center max-w-3xl mx-auto">
          <Zap className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-lg mb-8 opacity-90">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                {t.common.startQuiz}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/dbt-status">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                {t.hero.checkStatus}
              </Button>
            </Link>
            <Link to="/helpline">
              <Button size="lg" variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                {t.nav.helpline}
              </Button>
            </Link>
          </div>
        </FlashCard>
      </section>
    </div>
  );
};

export default Index;