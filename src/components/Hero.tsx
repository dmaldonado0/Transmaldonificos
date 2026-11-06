
export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
        minHeight: "780px",
        paddingTop: "80px",
        overflow: "hidden",
        backgroundColor: "#111111",
        color: "#ffffff",
      }}
    >
      {/* Fondo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(90deg, rgba(10,10,10,.96), rgba(10,10,10,.75) 55%, rgba(10,10,10,.2)), url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2000&q=85')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 32px",
        }}
      >
        <div style={{ maxWidth: "850px" }}>
          <p
            style={{
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "5px",
              marginBottom: "30px",
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#C8102E" }}>━━━━</span> Transporte especializado
          </p>

          <h1
            style={{
              fontSize: "clamp(48px, 7vw, 88px)",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-3px",
              margin: 0,
            }}
          >
            MOVEMOS
            <br />
            VEHÍCULOS.
            <br />
            <span style={{ color: "#C8102E" }}>CONECTAMOS</span>
            <br />
            DESTINOS.
          </h1>

          <p
            style={{
              maxWidth: "550px",
              marginTop: "28px",
              color: "#dddddd",
              fontSize: "18px",
              lineHeight: 1.8,
            }}
          >
            Soluciones de transporte especializado de vehículos.
            Seguridad, compromiso y respaldo en cada recorrido.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px",
              marginTop: "35px",
            }}
          >
            <a
              href="#contacto"
              style={{
                background: "#C8102E",
                color: "white",
                padding: "19px 28px",
                fontSize: "13px",
                fontWeight: 800,
              }}
            >
              COTIZAR TRANSPORTE →
            </a>

            <a
              href="#servicios"
              style={{
                border: "1px solid white",
                color: "white",
                padding: "19px 28px",
                fontSize: "13px",
                fontWeight: 800,
              }}
            >
              CONOCER SERVICIOS
            </a>
          </div>

          <div
            style={{
              display: "flex",
              gap: "55px",
              marginTop: "65px",
              paddingTop: "25px",
              borderTop: "1px solid #ffffff40",
            }}
          >
            {["COMPROMISO", "SEGURIDAD", "CONFIANZA"].map((item, i) => (
              <div key={item}>
                <strong style={{ display: "block", fontSize: "27px" }}>
                  0{i + 1}
                </strong>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#aaaaaa",
                    letterSpacing: "2px",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "120px",
          height: "5px",
          background: "#C8102E",
        }}
      />
    </section>
  );
}
