import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  { name: "Bronze", price: "50 Robux", description: "Bronze rank access", link: "https://www.roblox.com/game-pass/BRONZE" },
  { name: "Silver", price: "100 Robux", description: "Silver rank access", link: "https://www.roblox.com/game-pass/SILVER" },
  { name: "Gold", price: "200 Robux", description: "Gold rank access", link: "https://www.roblox.com/game-pass/GOLD" },
  { name: "Platinum", price: "400 Robux", description: "Platinum rank access", link: "https://www.roblox.com/game-pass/PLATINUM" },
  { name: "Diamond", price: "600 Robux", description: "Diamond rank access", link: "https://www.roblox.com/game-pass/DIAMOND" },
  { name: "Celestial", price: "800 Robux", description: "Celestial rank access", link: "https://www.roblox.com/game-pass/CELESTIAL" },
  { name: "Eternity", price: "1200 Robux", description: "Eternity rank access", link: "https://www.roblox.com/game-pass/ETERNITY" },
  { name: "Grandmaster", price: "1600 Robux", description: "Grandmaster rank access", link: "https://www.roblox.com/game-pass/GRANDMASTER" },
  { name: "One Above All", price: "2500 Robux", description: "Ultimate rank access", link: "https://www.roblox.com/game-pass/ONEABOVEALL" },
];

export default function MarketSite() {
  const clickSound = typeof Audio !== "undefined" ? new Audio("/click.mp3") : null;

  const handleBuy = (link) => {
    if (clickSound) clickSound.play();
    window.open(link, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-10"
      >
        🛒 Roblox Rank Market
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-xl">
              <CardContent className="p-6 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-zinc-400">{item.description}</p>
                <span className="text-xl font-bold">{item.price}</span>
                <Button
                  onClick={() => handleBuy(item.link)}
                  className="mt-4 flex gap-2 rounded-2xl text-lg"
                >
                  <ShoppingCart /> Buy Now
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center text-zinc-500 mt-16"
      >
        © 2025 Your Roblox Game | Not affiliated with Roblox
      </motion.footer>
    </div>
  );
}
