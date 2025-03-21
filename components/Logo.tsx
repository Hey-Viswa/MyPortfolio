export default function TheOptivusLogo() {
    return (
      <>
        {/* Desktop Version (visible on md screens and up) */}
        <div className="hidden md:inline-block drop-shadow-lg">
          <span
            className="
              text-4xl 
              md:text-6xl 
              font-extrabold 
              tracking-tight 
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r 
              from-blue-600 
              via-indigo-500 
              to-orange-500
            "
          >
            theoptivus
          </span>
        </div>
  
        {/* Mobile Version (visible on screens below md) */}
        <div className="md:hidden drop-shadow-lg">
          <span
            className="
              text-2xl
              font-extrabold 
              tracking-tight 
              text-transparent 
              bg-clip-text 
              bg-gradient-to-r 
              from-blue-600 
              via-indigo-500 
              to-orange-500
            "
          >
            theoptivus
          </span>
        </div>
      </>
    );
  }
  