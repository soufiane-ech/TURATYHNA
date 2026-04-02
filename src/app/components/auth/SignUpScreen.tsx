import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { User, Mail, Lock } from "lucide-react";
import { IllustrationCard } from "../onboarding/IllustrationCard";

export default function SignUp() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    
    // Navigate to home on successful sign up
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-8" style={{ backgroundColor: "#FAF6EF" }}>
      <div className="w-full max-w-[375px]">
        {/* Illustration Card */}
        <div className="mb-8">
          <IllustrationCard
            imageUrl="https://images.unsplash.com/photo-1772411535061-0a03d24e3c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwbW9yb2NjbyUyMGFydGlzYW4lMjBjb21tdW5pdHklMjBjdWx0dXJlfGVufDF8fHx8MTc3NDgxOTI2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            gradientFrom="#C0622A"
            gradientTo="#8B3D15"
            overlayText="TURATHNA"
            height={180}
          />
        </div>

        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3" style={{ color: "#8B3D15" }}>
            Créer un compte
          </h1>
          <p className="text-sm px-4" style={{ color: "#5D4E37" }}>
            Rejoignez Turathna et découvrez le patrimoine marocain de manière interactive.
          </p>
        </div>

        {/* Sign Up Form */}
        <form onSubmit={handleSignUp} className="space-y-4 mb-6">
          {/* Full Name Field */}
          <div className="relative">
            <User 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
              size={20}
            />
            <input
              type="text"
              placeholder="Nom complet"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-white rounded-xl border border-[#E5DED3] text-base outline-none focus:ring-2 focus:ring-[#C0622A] transition-all"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <Mail 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
              size={20}
            />
            <input
              type="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-white rounded-xl border border-[#E5DED3] text-base outline-none focus:ring-2 focus:ring-[#C0622A] transition-all"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
              size={20}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-white rounded-xl border border-[#E5DED3] text-base outline-none focus:ring-2 focus:ring-[#C0622A] transition-all"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <Lock 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
              size={20}
            />
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-white rounded-xl border border-[#E5DED3] text-base outline-none focus:ring-2 focus:ring-[#C0622A] transition-all"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full h-[52px] rounded-2xl text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] mt-6"
            style={{
              background: "linear-gradient(135deg, #C0622A 0%, #8B3D15 100%)"
            }}
          >
            Créer mon compte
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-sm" style={{ color: "#5D4E37" }}>
            Vous avez déjà un compte ?{" "}
            <Link 
              to="/login" 
              className="font-semibold hover:underline"
              style={{ color: "#C0622A" }}
            >
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
