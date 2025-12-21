export default function Skills() {
  const categories = [
    {
      title: "Languages",
      color: "blue",
      icons: [
        "devicon-cplusplus-plain colored",
        "devicon-java-plain colored",
        "devicon-python-plain colored",
      ],
    },
    {
      title: "Frameworks",
      color: "purple",
      icons: [
        "devicon-spring-plain colored",
        "devicon-tailwindcss-original colored",
      ],
    },
    {
      title: "Data Analyst Tools",
      color: "green",
      icons: ["devicon-mysql-plain colored"],
      extras: [
        {
          name: "Power BI",
          color: "#F2C811",
          svg: (
            <path d="M3.27 10.31h2.18v9.38H3.27zm4.12-3.44h2.18v12.82H7.39zM11.5 12.9h2.18v7.4H11.5zm4.12-7.3h2.18v14.7h-2.18zm4.12-2.87h2.18v17.57h-2.18z" />
          ),
        },
        {
          name: "Tableau",
          color: "#E97627",
          svg: (
            <path d="M11.225 24v-3.232h1.55V24zm0-20.768V0h1.55v3.232zm8.213 7.71h3.26v1.55h-3.26zm-20.747 0h3.26v1.55h-3.26zM16.63 18.613v-2.687h-2.76v-2.352h2.76v-2.687h2.45v2.687h2.76v2.352h-2.76v2.687zm-9.26-5.339v-2.356h2.76V8.23h2.45v2.688h2.76v2.356h-2.76v2.688h-2.45v-2.688zm0 8.435v-2.687h-2.76v-2.352h2.76v-2.687h2.45v2.687h2.76v2.352h-2.76v2.687zm9.26-15.174V3.848h-2.76V1.496h2.76V-1.19h2.45v2.687h2.76v2.352h-2.76v2.688z" />
          ),
        },
      ],
    },
    {
      title: "Web Technologies",
      color: "red",
      icons: [
        "devicon-react-original colored",
        "devicon-nodejs-plain colored",
        "devicon-express-original colored",
        "devicon-html5-plain colored",
        "devicon-css3-plain colored",
        "devicon-javascript-plain colored",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-20 px-4 md:px-6 bg-gray-900 relative z-20 animate-fade"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 gradient-text">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`bg-gray-800/80 border border-gray-700 hover:border-${cat.color}-500 hover:shadow-${cat.color}-500/40 transition-all duration-300 hover:-translate-y-2 rounded-2xl p-6 flex flex-col items-center text-center`}
            >
              <h3
                className={`text-lg md:text-xl font-semibold text-${cat.color}-400 mb-4`}
              >
                {cat.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-4 text-4xl">
                {cat.icons.map((icon, idx) => (
                  <i key={idx} className={`${icon} hover:scale-110 transition-transform`}></i>
                ))}

                {/* Custom Tools (like Power BI, Tableau) */}
                {cat.extras &&
                  cat.extras.map((tool, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-2 bg-gray-700/40 border border-gray-600 px-3 py-1 rounded-lg text-sm hover:scale-105 transition-transform"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill={tool.color}
                      >
                        {tool.svg}
                      </svg>
                      <span className="text-gray-200 font-medium">
                        {tool.name}
                      </span>
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
