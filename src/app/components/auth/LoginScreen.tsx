import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router";
import { Mail, Lock } from "lucide-react";
import { IllustrationCard } from "../onboarding/IllustrationCard";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Navigate to home on login
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-start justify-center px-6 py-8" style={{ backgroundColor: "#FAF6EF" }}>
      <div className="w-full max-w-[375px]">
        {/* Illustration Card */}
        <div className="mb-8">
          <IllustrationCard
            imageUrl="https://images.unsplash.com/photo-1527960299979-ae13298358b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JvY2NhbiUyMHplbGxpZ2UlMjBhcmNoaXRlY3R1cmUlMjBoZXJpdGFnZSUyMHRyYXZlbGVyfGVufDF8fHx8MTc3NDgxOTI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            gradientFrom="#C0622A"
            gradientTo="#8B3D15"
            height={180}
          />
        </div>

        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-3" style={{ color: "#8B3D15" }}>
            Bienvenue
          </h1>
          <p className="text-sm px-4" style={{ color: "#5D4E37" }}>
            Connectez-vous pour continuer à explorer le patrimoine marocain.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4 mb-6">
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

          {/* Forgot Password Link */}
          <div className="text-right">
            <a 
              href="/forgot-password" 
              className="text-sm hover:underline"
              style={{ color: "#C0622A" }}
            >
              Mot de passe oublié ?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full h-[52px] rounded-2xl text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #C0622A 0%, #8B3D15 100%)"
            }}
          >
            Se connecter
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center">
          <p className="text-sm" style={{ color: "#5D4E37" }}>
            Vous n'avez pas de compte ?{" "}
            <Link 
              to="/signup" 
              className="font-semibold hover:underline"
              style={{ color: "#C0622A" }}
            >
              Créer un compte
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
