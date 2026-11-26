// Base de datos inicial.
// Se crea con 2 usuarios (1 administrador y un usuario)

db.users.insertMany(
    [{
        "_id": "6b05840036626f6c9887fc54",
        "username": "admin",
        "email": "admin@my-chemical-playbook.com",
        "password": "$2a$10$zySATX6EVjoVvNl30uTkK.euha3PBmqqW8edDA.QdzFm2zgl3hRwG",
        "admin": true
    },
    {
        "_id": "6b05850236626f6c9887fc55",
        "username": "eneko",
        "email": "ecg@fakemail.com",
        "password": "$2a$10$9uegu1X4TawMtTAC2WvnOOUdjpRibZSeGOp8cTazwrvN2v9uba/mG",
        "admin": false
    }]
);

db.experiments.insertMany(
    [{
        "_id": "6b05a3ac36626f6c9887fc5b",
        "title": "Valoración ácido-base de ácido clorhídrico con hidróxido de sodio",
        "description": "Determinación volumétrica de la concentración de una disolución de HCl mediante neutralización con una disolución patrón de NaOH usando fenolftaleína.",
        "instructions": "1. Enjuagar y llenar la bureta con disolución patrón de NaOH 0.1 M.\n2. Transferir 25 mL de la muestra de HCl a un matraz Erlenmeyer con una pipeta.\n3. Añadir 3 gotas de fenolftaleína al matraz y agitar.\n4. Añadir NaOH gota a gota desde la bureta hasta observar un viraje a rosa pálido persistente durante 30 segundos.\n5. Anotar el volumen consumido y calcular la molaridad del ácido.",
        "chemical_products": [
            {
                "name": "Ácido clorhídrico",
                "formula": "HCl",
                "cas": "7647-01-0",
                "ce": "231-595-7",
                "molecularWeight": 36.46,
                "quantity": 25
            },
            {
                "name": "Hidróxido de sodio",
                "formula": "NaOH",
                "cas": "1310-73-2",
                "ce": "215-185-5",
                "molecularWeight": 40,
                "quantity": 50
            },
            {
                "name": "Fenolftaleína",
                "formula": "C20H14O4",
                "cas": "77-09-8",
                "ce": "201-004-7",
                "molecularWeight": 318.32,
                "quantity": 1
            }
        ],
        "instruments": [
            {
                "name": "Bureta graduada de 50 mL",
                "quantity": 1
            },
            {
                "name": "Matraz Erlenmeyer de 250 mL",
                "quantity": 2
            },
            {
                "name": "Pipeta aforada de 25 mL",
                "quantity": 1
            },
            {
                "name": "Soporte universal con pinza",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a3ac36626f6c9887fc5c",
        "title": "Síntesis de sulfato de cobre(II) pentahidratado a partir de óxido de cobre(II)",
        "description": "Obtención de cristales azules de sulfato de cobre(II) pentahidratado mediante reacción ácido-base en caliente seguida de filtración y cristalización.",
        "instructions": "1. Calentar 40 mL de ácido sulfúrico diluido en un vaso de precipitados sin llegar a ebullición.\n2. Añadir poco a poco óxido de cobre(II) negro agitando con varilla de vidrio hasta que quede un ligero exceso sin disolver.\n3. Filtrar la disolución caliente por gravedad para retirar el óxido sobrante.\n4. Concentrar el filtrado azul por evaporación suave y dejar enfriar a temperatura ambiente para que crezcan los cristales.",
        "chemical_products": [
            {
                "name": "Óxido de cobre(II)",
                "formula": "CuO",
                "cas": "1317-38-0",
                "ce": "215-269-1",
                "molecularWeight": 79.55,
                "quantity": 5
            },
            {
                "name": "Ácido sulfúrico",
                "formula": "H2SO4",
                "cas": "7664-93-9",
                "ce": "231-639-5",
                "molecularWeight": 98.08,
                "quantity": 40
            }
        ],
        "instruments": [
            {
                "name": "Vaso de precipitados de 250 mL",
                "quantity": 2
            },
            {
                "name": "Placa calefactora con agitación",
                "quantity": 1
            },
            {
                "name": "Embudo cónico de vidrio",
                "quantity": 1
            },
            {
                "name": "Varilla de vidrio agitadora",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a3ac36626f6c9887fc5d",
        "title": "Precipitación de yoduro de plomo(II) (Lluvia de oro)",
        "description": "Reacción de doble desplazamiento entre nitrato de plomo(II) y yoduro de potasio con recristalización térmica para observar láminas cristalinas doradas.",
        "instructions": "1. Disolver por separado el nitrato de plomo(II) y el yoduro de potasio en agua destilada en dos tubos de ensayo.\n2. Verter lentamente una disolución sobre la otra observando la formación inmediata de un precipitado amarillo intenso.\n3. Calentar suavemente la mezcla al baño María hasta disolver el precipitado por completo.\n4. Dejar enfriar lentamente sin agitar para observar la cristalización en escamas brillantes.",
        "chemical_products": [
            {
                "name": "Nitrato de plomo(II)",
                "formula": "Pb(NO3)2",
                "cas": "10099-74-8",
                "ce": "233-245-9",
                "molecularWeight": 331.21,
                "quantity": 1.5
            },
            {
                "name": "Yoduro de potasio",
                "formula": "KI",
                "cas": "7681-11-0",
                "ce": "231-659-4",
                "molecularWeight": 166,
                "quantity": 1.5
            }
        ],
        "instruments": [
            {
                "name": "Tubo de ensayo de borosilicato",
                "quantity": 3
            },
            {
                "name": "Gradilla para tubos de ensayo",
                "quantity": 1
            },
            {
                "name": "Balanza analítica de precisión",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a5f336626f6c9887fc5f",
        "title": "Síntesis de ácido acetilsalicílico (Aspirina)",
        "description": "Esterificación del ácido salicílico con anhídrido acético en medio ácido para obtener ácido acetilsalicílico cristalino.",
        "instructions": "1. Pesar 2 g de ácido salicílico e introducirlos en un matraz Erlenmeyer seco.\n2. Añadir 5 mL de anhídrido acético y 5 gotas de ácido fosfórico concentrado como catalizador.\n3. Calentar el matraz en baño María a 80 °C durante 15 minutos agitando suavemente.\n4. Retirar del baño, añadir 20 mL de agua destilada fría para hidrolizar el exceso de anhídrido y enfriar en baño de hielo hasta precipitación.\n5. Filtrar al vacío en embudo Büchner y lavar los cristales con agua fría.",
        "chemical_products": [
            {
                "name": "Ácido salicílico",
                "formula": "C7H6O3",
                "cas": "69-72-7",
                "ce": "200-712-3",
                "molecularWeight": 138.12,
                "quantity": 2
            },
            {
                "name": "Anhídrido acético",
                "formula": "C4H6O3",
                "cas": "108-24-7",
                "ce": "203-564-8",
                "molecularWeight": 102.09,
                "quantity": 5
            },
            {
                "name": "Ácido fosfórico",
                "formula": "H3PO4",
                "cas": "7664-38-2",
                "ce": "231-633-2",
                "molecularWeight": 98,
                "quantity": 0.5
            }
        ],
        "instruments": [
            {
                "name": "Matraz Erlenmeyer de 100 mL",
                "quantity": 1
            },
            {
                "name": "Embudo Büchner con matraz Kitasato",
                "quantity": 1
            },
            {
                "name": "Baño termostático",
                "quantity": 1
            },
            {
                "name": "Balanza analítica de precisión",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a5f336626f6c9887fc60",
        "title": "Construcción de una pila Daniell (Celda galvánica Zn-Cu)",
        "description": "Montaje de una celda electroquímica espontánea de zinc y cobre para medir su fuerza electromotriz mediante un voltímetro.",
        "instructions": "1. Verter 100 mL de sulfato de zinc 1 M en un vaso de precipitados e introducir una lámina de zinc limpia.\n2. Verter 100 mL de sulfato de cobre(II) 1 M en otro vaso e introducir una lámina de cobre.\n3. Conectar ambos vasos mediante un puente salino relleno de cloruro de potasio saturado.\n4. Conectar los electrodos a un multímetro digital y registrar el potencial generado (aprox. 1.10 V).",
        "chemical_products": [
            {
                "name": "Sulfato de zinc heptahidratado",
                "formula": "ZnSO4·7H2O",
                "cas": "7446-20-0",
                "ce": "231-793-3",
                "molecularWeight": 287.56,
                "quantity": 28.75
            },
            {
                "name": "Sulfato de cobre(II) pentahidratado",
                "formula": "CuSO4·5H2O",
                "cas": "7758-99-8",
                "ce": "231-847-6",
                "molecularWeight": 249.68,
                "quantity": 24.97
            },
            {
                "name": "Cloruro de potasio",
                "formula": "KCl",
                "cas": "7447-40-7",
                "ce": "231-211-8",
                "molecularWeight": 74.55,
                "quantity": 15
            }
        ],
        "instruments": [
            {
                "name": "Vaso de precipitados de 250 mL",
                "quantity": 2
            },
            {
                "name": "Tubo en U para puente salino",
                "quantity": 1
            },
            {
                "name": "Multímetro digital",
                "quantity": 1
            },
            {
                "name": "Cables con pinzas de cocodrilo",
                "quantity": 2
            }
        ]
    },
    {
        "_id": "6b05a5f336626f6c9887fc61",
        "title": "Saponificación: obtención de jabón a partir de aceite vegetal",
        "description": "Hidrólisis alcalina de triglicéridos mediante hidróxido de sodio en medio hidroalcohólico para obtener sales sódicas de ácidos grasos.",
        "instructions": "1. Mezclar 20 mL de aceite de oliva con 15 mL de etanol en un vaso de precipitados.\n2. Disolver 5 g de hidróxido de sodio en 15 mL de agua destilada y añadirlo lentamente a la mezcla anterior.\n3. Calentar suavemente a 60 °C durante 30 minutos con agitación constante hasta formar una pasta homogénea.\n4. Verter sobre una disolución saturada de cloruro de sodio para precipitar el jabón (salado) y filtrar.",
        "chemical_products": [
            {
                "name": "Hidróxido de sodio",
                "formula": "NaOH",
                "cas": "1310-73-2",
                "ce": "215-185-5",
                "molecularWeight": 40,
                "quantity": 5
            },
            {
                "name": "Etanol",
                "formula": "C2H6O",
                "cas": "64-17-5",
                "ce": "200-578-6",
                "molecularWeight": 46.07,
                "quantity": 15
            },
            {
                "name": "Cloruro de sodio",
                "formula": "NaCl",
                "cas": "7647-14-5",
                "ce": "231-598-3",
                "molecularWeight": 58.44,
                "quantity": 30
            }
        ],
        "instruments": [
            {
                "name": "Vaso de precipitados de 250 mL",
                "quantity": 2
            },
            {
                "name": "Placa calefactora con agitación magnética",
                "quantity": 1
            },
            {
                "name": "Termómetro de laboratorio",
                "quantity": 1
            },
            {
                "name": "Varilla de vidrio agitadora",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a5f336626f6c9887fc62",
        "title": "Determinación de la entalpía de neutralización HCl-NaOH",
        "description": "Medición calorimétrica del calor liberado en una reacción ácido-base fuerte a presión constante.",
        "instructions": "1. Medir 50 mL de ácido clorhídrico 1 M en un calorímetro y registrar su temperatura inicial.\n2. Medir 50 mL de hidróxido de sodio 1 M a la misma temperatura.\n3. Verter el hidróxido de sodio rápidamente sobre el ácido dentro del calorímetro, tapar y agitar.\n4. Registrar la temperatura máxima alcanzada cada 15 segundos y calcular el calor de reacción.",
        "chemical_products": [
            {
                "name": "Ácido clorhídrico",
                "formula": "HCl",
                "cas": "7647-01-0",
                "ce": "231-595-7",
                "molecularWeight": 36.46,
                "quantity": 50
            },
            {
                "name": "Hidróxido de sodio",
                "formula": "NaOH",
                "cas": "1310-73-2",
                "ce": "215-185-5",
                "molecularWeight": 40,
                "quantity": 50
            }
        ],
        "instruments": [
            {
                "name": "Calorímetro adiabático escolar",
                "quantity": 1
            },
            {
                "name": "Probeta graduada de 100 mL",
                "quantity": 2
            },
            {
                "name": "Termómetro digital de alta precisión",
                "quantity": 1
            },
            {
                "name": "Cronómetro",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a5f336626f6c9887fc63",
        "title": "Reloj de yodo (Cinética química de oxidación de yoduro)",
        "description": "Estudio del efecto de la concentración sobre la velocidad de reacción mediante el cambio brusco de color del complejo almidón-yodo.",
        "instructions": "1. Preparar la disolución A mezclando yoduro de potasio, tiosulfato de sodio y disolución de almidón.\n2. Preparar la disolución B con peroxodisulfato de potasio.\n3. Verter la disolución B sobre la A poniendo en marcha el cronómetro simultáneamente y agitar.\n4. Detener el cronómetro en el instante exacto en que la mezcla vire de incolora a azul oscuro intenso.",
        "chemical_products": [
            {
                "name": "Yoduro de potasio",
                "formula": "KI",
                "cas": "7681-11-0",
                "ce": "231-659-4",
                "molecularWeight": 166,
                "quantity": 3.32
            },
            {
                "name": "Peroxodisulfato de potasio",
                "formula": "K2S2O8",
                "cas": "7727-21-1",
                "ce": "231-781-8",
                "molecularWeight": 270.32,
                "quantity": 2.7
            },
            {
                "name": "Tiosulfato de sodio pentahidratado",
                "formula": "Na2S2O3·5H2O",
                "cas": "10102-17-7",
                "ce": "231-867-5",
                "molecularWeight": 248.18,
                "quantity": 0.5
            }
        ],
        "instruments": [
            {
                "name": "Vaso de precipitados de 100 mL",
                "quantity": 3
            },
            {
                "name": "Pipeta graduada de 10 mL",
                "quantity": 3
            },
            {
                "name": "Cronómetro",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a5f336626f6c9887fc64",
        "title": "Ensayos a la llama para identificación de cationes metálicos",
        "description": "Análisis cualitativo basado en los espectros de emisión atómica característicos de sales de sodio, potasio, calcio y cobre al excitarlas con llama.",
        "instructions": "1. Limpiar el asa de nicromo sumergiéndola en ácido clorhídrico concentrado y llevándola a la llama azul del mechero hasta que no emita color.\n2. Tomar una pequeña muestra de cloruro de sodio con el asa húmeda e introducirla en la base de la llama.\n3. Observar el color amarillo intenso emitido y anotar el resultado.\n4. Repetir el procedimiento limpiando el asa entre muestras para cloruro de potasio, cloruro de calcio y cloruro de cobre(II).",
        "chemical_products": [
            {
                "name": "Cloruro de sodio",
                "formula": "NaCl",
                "cas": "7647-14-5",
                "ce": "231-598-3",
                "molecularWeight": 58.44,
                "quantity": 1
            },
            {
                "name": "Cloruro de potasio",
                "formula": "KCl",
                "cas": "7447-40-7",
                "ce": "231-211-8",
                "molecularWeight": 74.55,
                "quantity": 1
            },
            {
                "name": "Cloruro de calcio",
                "formula": "CaCl2",
                "cas": "10043-52-4",
                "ce": "233-140-8",
                "molecularWeight": 110.98,
                "quantity": 1
            },
            {
                "name": "Cloruro de cobre(II)",
                "formula": "CuCl2",
                "cas": "7447-39-4",
                "ce": "231-210-2",
                "molecularWeight": 134.45,
                "quantity": 1
            }
        ],
        "instruments": [
            {
                "name": "Mechero Bunsen",
                "quantity": 1
            },
            {
                "name": "Asa de siembra de nicromo",
                "quantity": 2
            },
            {
                "name": "Vidrio de reloj",
                "quantity": 4
            }
        ]
    },
    {
        "_id": "6b05a5f336626f6c9887fc65",
        "title": "Descomposición catalítica del peróxido de hidrógeno",
        "description": "Aceleración de la descomposición del agua oxigenada en agua y oxígeno gaseoso empleando dióxido de manganeso como catalizador heterogéneo.",
        "instructions": "1. Verter 30 mL de peróxido de hidrógeno al 30% en un matraz Erlenmeyer alto.\n2. Añadir 1 g de dióxido de manganeso en polvo en el interior del matraz.\n3. Observar la rápida liberación de oxígeno gaseoso y vapor de agua.\n4. Acercar una astilla de madera con punto de ignición a la boca del matraz para comprobar la reavivación de la llama por presencia de O2.",
        "chemical_products": [
            {
                "name": "Peróxido de hidrógeno",
                "formula": "H2O2",
                "cas": "7722-84-1",
                "ce": "231-765-0",
                "molecularWeight": 34.01,
                "quantity": 30
            },
            {
                "name": "Dióxido de manganeso",
                "formula": "MnO2",
                "cas": "1313-13-9",
                "ce": "215-202-6",
                "molecularWeight": 86.94,
                "quantity": 1
            }
        ],
        "instruments": [
            {
                "name": "Matraz Erlenmeyer de 500 mL",
                "quantity": 1
            },
            {
                "name": "Probeta graduada de 50 mL",
                "quantity": 1
            },
            {
                "name": "Espátula metálica de laboratorio",
                "quantity": 1
            },
            {
                "name": "Pinzas de madera para crisol",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a65236626f6c9887fc67",
        "title": "Volumetría redox: determinación de agua oxigenada con permanganato de potasio",
        "description": "Valoración óxido-reducción en medio ácido para determinar la riqueza de una disolución comercial de peróxido de hidrógeno sin necesidad de indicador externo.",
        "instructions": "1. Llenar la bureta con disolución patrón de permanganato de potasio 0.02 M.\n2. Pipetear 10 mL de muestra diluida de peróxido de hidrógeno en un matraz Erlenmeyer.\n3. Añadir 15 mL de ácido sulfúrico 1 M para acidificar el medio.\n4. Valorar gota a gota agitando continuamente hasta que aparezca una coloración rosa pálido persistente durante 30 segundos.",
        "chemical_products": [
            {
                "name": "Permanganato de potasio",
                "formula": "KMnO4",
                "cas": "7722-64-7",
                "ce": "231-760-3",
                "molecularWeight": 158.03,
                "quantity": 0.32
            },
            {
                "name": "Peróxido de hidrógeno",
                "formula": "H2O2",
                "cas": "7722-84-1",
                "ce": "231-765-0",
                "molecularWeight": 34.01,
                "quantity": 10
            },
            {
                "name": "Ácido sulfúrico",
                "formula": "H2SO4",
                "cas": "7664-93-9",
                "ce": "231-639-5",
                "molecularWeight": 98.08,
                "quantity": 15
            }
        ],
        "instruments": [
            {
                "name": "Bureta graduada de 50 mL",
                "quantity": 1
            },
            {
                "name": "Matraz Erlenmeyer de 250 mL",
                "quantity": 2
            },
            {
                "name": "Pipeta aforada de 10 mL",
                "quantity": 1
            },
            {
                "name": "Soporte universal con pinza",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a65236626f6c9887fc68",
        "title": "Síntesis del complejo sulfato de tetraamincobre(II) monohidratado",
        "description": "Formación de un compuesto de coordinación de color azul intenso mediante reacción entre sulfato de cobre(II) y amoníaco acuoso con precipitación por etanol.",
        "instructions": "1. Disolver 4 g de sulfato de cobre(II) pentahidratado en 10 mL de agua destilada en un vaso de precipitados.\n2. En vitrina de gases, añadir lentamente 12 mL de amoníaco concentrado agitando hasta disolver el precipitado inicial y obtener un líquido azul oscuro.\n3. Añadir cuidadosamente 15 mL de etanol frío por las paredes del vaso y dejar reposar en baño de hielo.\n4. Filtrar al vacío los cristales formados y lavar con etanol frío.",
        "chemical_products": [
            {
                "name": "Sulfato de cobre(II) pentahidratado",
                "formula": "CuSO4·5H2O",
                "cas": "7758-99-8",
                "ce": "231-847-6",
                "molecularWeight": 249.68,
                "quantity": 4
            },
            {
                "name": "Amoníaco en disolución acuosa",
                "formula": "NH3",
                "cas": "7664-41-7",
                "ce": "231-635-3",
                "molecularWeight": 17.03,
                "quantity": 12
            },
            {
                "name": "Etanol",
                "formula": "C2H6O",
                "cas": "64-17-5",
                "ce": "200-578-6",
                "molecularWeight": 46.07,
                "quantity": 15
            }
        ],
        "instruments": [
            {
                "name": "Vaso de precipitados de 100 mL",
                "quantity": 1
            },
            {
                "name": "Embudo Büchner con matraz Kitasato",
                "quantity": 1
            },
            {
                "name": "Probeta graduada de 25 mL",
                "quantity": 2
            },
            {
                "name": "Varilla de vidrio agitadora",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a65236626f6c9887fc69",
        "title": "Equilibrio químico y principio de Le Châtelier: sistema hierro(III)-tiocianato",
        "description": "Observación cualitativa del desplazamiento del equilibrio químico al modificar las concentraciones de reactivos y productos en el complejo rojo sangre [Fe(SCN)]2+.",
        "instructions": "1. Mezclar 2 mL de cloruro de hierro(III) 0.1 M con 2 mL de tiocianato de potasio 0.1 M y diluir con 40 mL de agua destilada hasta obtener un tono ámbar.\n2. Repartir la disolución en 4 tubos de ensayo (usando el primero como testigo).\n3. Al segundo tubo añadir gotas de cloruro de hierro(III), al tercero tiocianato de potasio y al cuarto fosfato de sodio para complejar el hierro.\n4. Comparar la intensidad del color rojo de cada tubo frente al testigo.",
        "chemical_products": [
            {
                "name": "Cloruro de hierro(III) hexahidratado",
                "formula": "FeCl3·6H2O",
                "cas": "10025-77-1",
                "ce": "231-729-4",
                "molecularWeight": 270.3,
                "quantity": 2
            },
            {
                "name": "Tiocianato de potasio",
                "formula": "KSCN",
                "cas": "333-20-0",
                "ce": "206-370-1",
                "molecularWeight": 97.18,
                "quantity": 2
            },
            {
                "name": "Fosfato trisódico",
                "formula": "Na3PO4",
                "cas": "7601-54-9",
                "ce": "231-509-8",
                "molecularWeight": 163.94,
                "quantity": 1
            }
        ],
        "instruments": [
            {
                "name": "Tubo de ensayo de borosilicato",
                "quantity": 4
            },
            {
                "name": "Gradilla para tubos de ensayo",
                "quantity": 1
            },
            {
                "name": "Pipeta Pasteur graduada",
                "quantity": 4
            }
        ]
    },
    {
        "_id": "6b05a65236626f6c9887fc6a",
        "title": "Síntesis interfacial de nailon 6,6 (Polimerización por condensación)",
        "description": "Obtención de una fibra de poliamida en la interfase entre una disolución acuosa de hexametilendiamina y una fase orgánica de cloruro de adipoílo.",
        "instructions": "1. Preparar en un vaso de precipitados una disolución acuosa de hexametilendiamina e hidróxido de sodio.\n2. Verter lentamente por las paredes del vaso una disolución de cloruro de adipoílo en ciclohexano para formar dos fases sin mezclar.\n3. Con unas pinzas metálicas, sujetar la película de polímero formada en la interfase entre ambos líquidos.\n4. Tirar suavemente hacia arriba enrollando el hilo continuo de nailon en una varilla de vidrio.",
        "chemical_products": [
            {
                "name": "Hexametilendiamina",
                "formula": "C6H16N2",
                "cas": "124-09-4",
                "ce": "204-679-6",
                "molecularWeight": 116.21,
                "quantity": 1.5
            },
            {
                "name": "Cloruro de adipoílo",
                "formula": "C6H8Cl2O2",
                "cas": "111-50-2",
                "ce": "203-876-4",
                "molecularWeight": 183.03,
                "quantity": 1.5
            },
            {
                "name": "Ciclohexano",
                "formula": "C6H12",
                "cas": "110-82-7",
                "ce": "203-806-2",
                "molecularWeight": 84.16,
                "quantity": 25
            },
            {
                "name": "Hidróxido de sodio",
                "formula": "NaOH",
                "cas": "1310-73-2",
                "ce": "215-185-5",
                "molecularWeight": 40,
                "quantity": 0.5
            }
        ],
        "instruments": [
            {
                "name": "Vaso de precipitados de 100 mL",
                "quantity": 2
            },
            {
                "name": "Pinzas de disección de punta fina",
                "quantity": 1
            },
            {
                "name": "Varilla de vidrio agitadora",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6b05a65236626f6c9887fc6b",
        "title": "Separación de pigmentos fotosintéticos por cromatografía en papel",
        "description": "Extracción y separación de clorofilas, xantofilas y carotenos de hojas vegetales mediante cromatografía ascendente en fase móvil orgánica.",
        "instructions": "1. Triturar hojas verdes frescas en un mortero con 15 mL de acetona y un poco de arena de mar hasta obtener un extracto verde intenso.\n2. Filtrar el extracto y aplicar varias gotas concentradas sobre una línea marcada a 2 cm del borde inferior de una tira de papel cromatográfico.\n3. Introducir la tira en una cámara cromatográfica con 10 mL de éter de petróleo como eluyente sin que el líquido toque la mancha.\n4. Retirar el papel antes de que el frente alcance el borde superior y medir los factores de retención (Rf) de cada banda.",
        "chemical_products": [
            {
                "name": "Acetona",
                "formula": "C3H6O",
                "cas": "67-64-1",
                "ce": "200-662-2",
                "molecularWeight": 58.08,
                "quantity": 15
            },
            {
                "name": "Éter de petróleo",
                "formula": "C5H12",
                "cas": "8032-32-4",
                "ce": "232-453-7",
                "molecularWeight": 72.15,
                "quantity": 10
            }
        ],
        "instruments": [
            {
                "name": "Mortero con pistilo de porcelana",
                "quantity": 1
            },
            {
                "name": "Cámara cromatográfica de vidrio con tapa",
                "quantity": 1
            },
            {
                "name": "Embudo cónico de vidrio",
                "quantity": 1
            },
            {
                "name": "Capilar de vidrio",
                "quantity": 2
            }
        ]
    }]
);

print("✅ My Chemical Playbook: datos iniciales cargados (2 usuarios y 15 experimentos)");