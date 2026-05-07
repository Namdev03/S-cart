export default function Loadingpage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <h1 className="text-3xl font-semibold text-black flex items-center">
        Loading
        <span className="flex ml-1">
          <span className="animate-[blink_1.4s_infinite]">.</span>
          <span className="animate-[blink_1.4s_infinite_0.2s]">.</span>
          <span className="animate-[blink_1.4s_infinite_0.4s]">.</span>
          <span className="animate-[blink_1.4s_infinite_0.6s]">.</span>
          <span className="animate-[blink_1.4s_infinite_0.8s]">.</span>
        </span>
      </h1>

      <style jsx>{`
        @keyframes blink {
          0%,
          20% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}