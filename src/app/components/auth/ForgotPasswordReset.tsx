import { useState, FormEvent } from "react";
import { useNavigate, useLocation } from "react-router";
import { ArrowLeft, Lock } from "lucide-react";
import { IllustrationCard } from "../onboarding/IllustrationCard";

export default function ForgotPasswordReset() {
  const navigate = useNavigate();
  const location = useLocation();
  const phone = (location.state as { phone?: string })?.phone || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // TODO: save new password
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-8" style={{ backgroundColor: "#FAF6EF" }}>
      <div className="w-full max-w-[375px]">
        <div className="mb-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1 text-[#8B3D15] font-medium hover:text-[#C0622A]"
          >
            <ArrowLeft className="w-4 h-4" /> Précédent
          </button>
        </div>
        <div className="mb-8">
          <IllustrationCard
            imageUrl="https://images.unsplash.com/photo-1519337265831-281ec6cc8514?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxzZWN1cml0eSUyMGxvY2t8ZW58MHx8fHwxNzc0ODMyMjYz&ixlib=rb-4.1.0&q=80&w=1080"
            gradientFrom="#C0622A"
            gradientTo="#8B3D15"
            overlayText="Nouveau mot de passe"
            height={180}
          />
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#8B3D15" }}>
            Créez un nouveau mot de passe
          </h1>
          <p className="text-sm px-4" style={{ color: "#5D4E37" }}>
            Choisissez un mot de passe sécurisé pour {phone || "votre compte"}.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-white rounded-xl border border-[#E5DED3] text-base outline-none focus:ring-2 focus:ring-[#C0622A] transition-all"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              placeholder="Confirmer le mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-white rounded-xl border border-[#E5DED3] text-base outline-none focus:ring-2 focus:ring-[#C0622A] transition-all"
              required
            />
          </div>

          <p className="text-xs text-[#8B3D15]">
            Le mot de passe doit contenir au moins 10 caractères, avec une majuscule et un chiffre.
          </p>

          <button
            type="submit"
            className="w-full h-[52px] rounded-2xl text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #C0622A 0%, #8B3D15 100%)" }}
          >
            Confirmer
          </button>
        </form>
      </div>
    </div>
  );
}
