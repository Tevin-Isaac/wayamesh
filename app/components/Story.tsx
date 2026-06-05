export default function Story() {
  const stories = [
    {
      icon: "ti-wifi-off",
      title: "The problem",
      points: [
        "Governments shut down the internet. Sudan (2023), Myanmar (2021), Hong Kong (2019), Iran (2022), Egypt (2011).",
        "Your money becomes trapped. Your family can't send help. No banks work. Digital payments die."
      ]
    },
    {
      icon: "ti-wifi",
      title: "The solution",
      points: [
        "Wayamesh lets you send USDC via Bluetooth mesh. Works without internet. Agents relay your money through the network. Settlement happens on Arc in the background.",
        "You control your wallet. Your family receives USDC. Your freedom is unstoppable."
      ]
    }
  ];

  return (
    <section id="story" className="py-24 border-t border-[rgba(62,217,184,0.1)] max-w-4xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {stories.map((story, idx) => (
          <div
            key={idx}
            className="bg-[rgba(62,217,184,0.05)] border border-[rgba(62,217,184,0.15)] rounded-xl p-8 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6 text-2xl font-bold">
              <i className={`ti ${story.icon} text-[var(--accent)]`} />
              {story.title}
            </div>
            {story.points.map((point, pidx) => (
              <p key={pidx} className="text-[var(--text)] leading-relaxed opacity-90 mb-4 text-sm">
                {point}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
