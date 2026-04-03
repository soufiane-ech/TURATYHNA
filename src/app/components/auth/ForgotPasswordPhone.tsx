import { useState, FormEvent } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Phone } from "lucide-react";
import { IllustrationCard } from "../onboarding/IllustrationCard";

export default function ForgotPasswordPhone() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send SMS code
    navigate("/forgot-password/code", { state: { phone } });
  };

  return (
    <div className="min-h-screen flex items-start justify-center px-6 py-8" style={{ backgroundColor: "#FAF6EF" }}>
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
            imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxOXx8Zm9nJTIwbWVtb3J5fGVufDB8fHx8MTc3NDgzMjI2Mw&ixlib=rb-4.1.0&q=80&w=1080"
            gradientFrom="#C0622A"
            gradientTo="#8B3D15"
            height={180}
          />
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#8B3D15" }}>
            Mot de passe oublié ?
          </h1>
          <p className="text-sm px-4" style={{ color: "#5D4E37" }}>
            Entrez votre numéro de téléphone et recevez un code de vérification par SMS.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="tel"
              placeholder="Numéro de téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-14 pl-12 pr-4 bg-white rounded-xl border border-[#E5DED3] text-base outline-none focus:ring-2 focus:ring-[#C0622A] transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-[52px] rounded-2xl text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: "linear-gradient(135deg, #C0622A 0%, #8B3D15 100%)" }}
          >
            Envoyer le code
          </button>
        </form>
      </div>
    </div>
  );
}
