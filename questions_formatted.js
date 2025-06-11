const questions = [
  {
    "number": 1,
    "question": "When Testing the Water Distribution System, you must test the system to a pressure of",
    "options": {
      "a": "10 PSI",
      "b": "125 PSI",
      "c": "3 PSI",
      "d": "5 PSI"
    },
    "answer": "b"
  },
  {
    "number": 2,
    "question": "Waste outlets serving shower stalls and compartments that are not part of bathtubs shall be no less than in diameter.",
    "options": {
      "a": "3\"",
      "b": "1 1/2\"",
      "c": "1 1/4\"",
      "d": "2\""
    },
    "answer": "d"
  },
  {
    "number": 3,
    "question": "A Bathtub trip waste and overflow must be (when made of metal) non-corrosive and have a thickness greater than or equal to gauge.",
    "options": {
      "a": "20",
      "b": "12",
      "c": "17",
      "d": "16"
    },
    "answer": "c"
  },
  {
    "number": 4,
    "question": "If a Toilet Flange is composed of Cast Iron, the flange shall have a minimum thickness of inch.",
    "options": {
      "a": "1/8",
      "b": "1/4",
      "c": "3/8",
      "d": "1/2"
    },
    "answer": "b"
  },
  {
    "number": 5,
    "question": "Dishwashing pre-rinse sinks installed in combination with a commercial dishwasher, pot sinks, scullery sinks and other sinks must",
    "options": {
      "a": "be Indirectly Wasted",
      "b": "have an air break",
      "c": "be Directly Connected to the Sanitary",
      "d": "have an air gap"
    },
    "answer": "c"
  },
  {
    "number": 6,
    "question": "A combination plumbing fixture may be installed on one trap provided one compartment is not more than inches deeper than the other and the waste outlets are not more than inches apart.",
    "options": {
      "a": "12 & 30",
      "b": "10 & 24",
      "c": "10 & 30",
      "d": "12 & 24"
    },
    "answer": "c"
  },
  {
    "number": 7,
    "question": "When using PEX, all the joints shall be made with fittings that are joined in the following manner.",
    "options": {
      "a": "cold expansion fittings with (PEX) reinforcing rings",
      "b": "metal insert fittings with copper crimp rings",
      "c": "compression fittings (with formed gaskets) or mechanical joints",
      "d": "stainless steel press sleeves",
      "e": "All of the above",
      "f": "Both A & C"
    },
    "answer": "e"
  },
  {
    "number": 8,
    "question": "Commercial buildings that incorporate patron areas for the purpose of serving _ where this liquid waste shall drain directly into a floor sink or floor drain.",
    "options": {
      "a": "Soda only",
      "b": "all carbonated type beverages",
      "c": "Juices",
      "d": "alcohol only"
    },
    "answer": "b"
  },
  {
    "number": 9,
    "question": "Connections from Water Distributions System. Indirect waste connections shall be provided for drains, overflows, or relief lines from the water distribution system by means of",
    "options": {
      "a": "Indirect Waste",
      "b": "Air Break",
      "c": "Indirect Stand Pipe",
      "d": "Air Gap"
    },
    "answer": "d"
  },
  {
    "number": 10,
    "question": "Back-siphonage",
    "options": {
      "a": "occurs when the system pressure is below atmospheric pressure or a negative gauge pressure exists",
      "b": "occurs when the system pressure is above atmospheric pressure or a positive gauge pressure exists",
      "c": "occurs when the normal direction of flow in a piping system is reversed"
    },
    "answer": "a"
  },
  {
    "number": 11,
    "question": "Water Service Piping Outside of a building shall be _",
    "options": {
      "a": "Material Specified by the local Municipality",
      "b": "Type K or L copper Tubing",
      "c": "Cast Iron Water Pipe",
      "d": "Pex Tubing"
    },
    "answer": "a"
  },
  {
    "number": 12,
    "question": "The use of a Product-Approved polypropylene homopolymer drain tube assembly that is designed to be vertically mounted in the downturned outlet of a horizontally mounted relief valve provided that the capacity of the relief valve served by the approved drain assembly does not exceed ___ BTU per hour.",
    "options": {
      "a": "10,000",
      "b": "100,000",
      "c": "200,000",
      "d": "50,000"
    },
    "answer": "b"
  },
  {
    "number": 13,
    "question": "A Trough is defined as an open ___________",
    "options": {
      "a": "Gutter",
      "b": "Channel",
      "c": "Drain",
      "d": "Trench",
      "e": "Conduit",
      "f": "All of the Above"
    },
    "answer": "f"
  },
  {
    "number": 14,
    "question": "In areas where there is no municipal sewer connection to receive the discharge from a Separator, it shall be:",
    "options": {
      "a": "discharged to and held in a holding tank",
      "b": "discharged to a leaching field",
      "c": "discharged to a dry well"
    },
    "answer": "a"
  },
  {
    "number": 15,
    "question": "Supports for horizontal runs of PVC pipe ____ inches or less in diameter shall be at three-foot centers as a maximum",
    "options": {
      "a": "3",
      "b": "1 1/2",
      "c": "1 1/4",
      "d": "2"
    },
    "answer": "b"
  },
  {
    "number": 16,
    "question": "A permanently mounted emergency shower shall be capable of a continuous spray rate of ___ GPM",
    "options": {
      "a": "40",
      "b": "12.5",
      "c": "30",
      "d": "20"
    },
    "answer": "c"
  },
  {
    "number": 17,
    "question": "The minimum size for the safe waste discharge is __________",
    "options": {
      "a": "1 1/2\"",
      "b": "1\"",
      "c": "2\"",
      "d": "1 1/4\""
    },
    "answer": "d"
  },
  {
    "number": 18,
    "question": "An example of a common air gap would be:",
    "options": {
      "a": "A T&P Valve on a Water Heater",
      "b": "A Garden Hose",
      "c": "A Vacuum Breaker on a Water Heater",
      "d": "A Tub Spout"
    },
    "answer": "d"
  },
  {
    "number": 19,
    "question": "Principal #17 'Prevent Sewer Flooding' \u2014 the appropriate appurtenance to install to prevent this from happening would be a:",
    "options": {
      "a": "Back Water Valve",
      "b": "Check Valve",
      "c": "Back Flow Valve",
      "d": "Relief Valve"
    },
    "answer": "a"
  },
  {
    "number": 20,
    "question": "Water hammer arrestors shall be placed ______________",
    "options": {
      "a": "on the main immediately after the meter",
      "b": "buried in a wall",
      "c": "as close to the quick acting valve as possible and be accessible",
      "d": "within the same room"
    },
    "answer": "c"
  },
  {
    "number": 21,
    "question": "The piping shall be connected to cast iron soil pipe hubs using oakum and no less than of molten lead.",
    "options": {
      "a": "1/2\u201d",
      "b": "1\u201d",
      "c": "2\u201d",
      "d": "3/4\u201d"
    },
    "answer": "b"
  },
  {
    "number": 22,
    "question": "A Sacrarium (Baptismal Pool):",
    "options": {
      "a": "All of the Above",
      "b": "In no case shall the waste from a Sacrarium be connected to the building storm drainage, or sanitary drainage waste and vent system.",
      "c": "The liquid discharge from a Sacrarium shall be conducted separately and directly to a dry well in the ground, and shall not be used for any other drainage purpose.",
      "d": "The waste from a Sacrarium shall not be trapped or vented."
    },
    "answer": "a"
  },
  {
    "number": 23,
    "question": "Trap size for Residential Food Waste Grinder",
    "options": {
      "a": "1 1/2\u201d",
      "b": "1 1/4\u201d",
      "c": "3\u201d",
      "d": "2\u201d"
    },
    "answer": "a"
  },
  {
    "number": 24,
    "question": "Only pedestal urinals and wall hung urinals with ______ shall be used.",
    "options": {
      "a": "2.0 gpf",
      "b": "Flushometers",
      "c": "White China",
      "d": "Integral Traps"
    },
    "answer": "d"
  },
  {
    "number": 25,
    "question": "For permanent residences or buildings in which people are employed, _ shall be provided.",
    "options": {
      "a": "Air Conditioning",
      "b": "Hot Water",
      "c": "Heat",
      "d": "Filtered Water"
    },
    "answer": "b"
  },
  {
    "number": 26,
    "question": "Cleanout Clearances: Cleanouts smaller than_____ inch or smaller pipes shall be so installed that there is a clearance of not less than _____ inches for the purpose of clearing stoppages.",
    "options": {
      "a": "3 & 18",
      "b": "3 & 12",
      "c": "3 & 18",
      "d": "2 & 18"
    },
    "answer": "c"
  },
  {
    "number": 27,
    "question": "When installing potable water piping underground in a building, the pipe shall be joined by",
    "options": {
      "a": "Flared or Soldered",
      "b": "Soldered or Compression",
      "c": "Brazed or Flared",
      "d": "Brazed or Compression"
    },
    "answer": "c"
  },
  {
    "number": 28,
    "question": "A Toilet for public use shall be_______",
    "options": {
      "a": "White",
      "b": "Round",
      "c": "Elongated",
      "d": "Tamper Proof"
    },
    "answer": "c"
  },
  {
    "number": 29,
    "question": "Complete the Sentence.\nPVC ______ be used for drains, waste or vents in commercial kitchens, laundry rooms, public toilet facilities or other commercial areas located in assisted living facilities, hotels, motels, inns or similar establishments, except where provided for elsewhere in 248 CMR 10.06",
    "options": {
      "a": "may not",
      "b": "shall not",
      "c": "shall",
      "d": "may"
    },
    "answer": "b"
  },
  {
    "number": 30,
    "question": "Minimum size trap for a kitchen sink (domestic) is:",
    "options": {
      "a": "3/4\u201d",
      "b": "2\u201d",
      "c": "1 1/2\u201d",
      "d": "1 1/4\u201d"
    },
    "answer": "c"
  },
  {
    "number": 31,
    "question": "The Water Supply to a fixture may not exceed ________ PSI.",
    "options": {
      "a": "50",
      "b": "110",
      "c": "60",
      "d": "80"
    },
    "answer": "d"
  },
  {
    "number": 32,
    "question": "Expansion tanks, fire sprinkler systems, air conditioning equipment, drip or overflow pans, or similar devices that waste clear water only, shall discharge waste",
    "options": {
      "a": "into a Dry Well for Gray Water",
      "b": "into the Storm Drainage System",
      "c": "into a properly trapped and vented fixture.",
      "d": "into the Sanitary System"
    },
    "answer": "b"
  },
  {
    "number": 33,
    "question": "Lines conveying special hazardous wastes shall be painted",
    "options": {
      "a": "Blue",
      "b": "Yellow",
      "c": "Orange",
      "d": "Green"
    },
    "answer": "b"
  },
  {
    "number": 34,
    "question": "Trap size for Surgeon\u2019s Sink",
    "options": {
      "a": "4\u201d",
      "b": "2\u201d",
      "c": "1 1/2\u201d",
      "d": "3"
    },
    "answer": "c"
  },
  {
    "number": 35,
    "question": "Fluxes used with brazing filler metals or solder filler metals shall be",
    "options": {
      "a": "Water Soluable",
      "b": "Water Based",
      "c": "Lead Free",
      "d": "Heat Resistant"
    },
    "answer": "c"
  },
  {
    "number": 36,
    "question": "Emergency Wash Systems shall meet the following requirements: The systems shall be required in every school, college, university, or building laboratory newly constructed or renovated, or any room used for similar purposes wherein",
    "options": {
      "a": "both a & c",
      "b": "chemicals are stored or used",
      "c": "where open flame devices are used",
      "d": "None of the above",
      "e": "both a & b",
      "f": "corrosive or flammable liquids are handled",
      "g": "All of the above"
    },
    "answer": "g"
  },
  {
    "number": 37,
    "question": "The _______ may allow the extension, addition to or relocation of existing water, soil, waste and/or vent pipes with materials of like grade or quality as permitted under 248 CMR 10.04(6)(a)",
    "options": {
      "a": "Plumbing Inspector",
      "b": "Foreman",
      "c": "Plumbing Board",
      "d": "Building Inspector"
    },
    "answer": "a"
  },
  {
    "number": 39,
    "question": "Lavatory faucets in public toilet facilities shall limit the delivery of water to a maximum of _ GPM",
    "options": {
      "a": "2.5",
      "b": "1.0",
      "c": ".25",
      "d": ".5"
    },
    "answer": "d"
  },
  {
    "number": 40,
    "question": "Product-approved pipe compounds and tapes shall be used on",
    "options": {
      "a": "Male threads only",
      "b": "Female threads only",
      "c": "Male and Female threads",
      "d": "None of the above"
    },
    "answer": "a"
  },
  {
    "number": 41,
    "question": "The Stand Pipe Receptors. The stand pipe receptor for an automatic clothes washing machine shall be installed in one of the following ways:",
    "options": {
      "a": "The stand pipe receptor shall be individually trapped and vented.",
      "b": "All of the above",
      "c": "The stand pipe receptor shall be installed in the cover of a floor drain provided that the cover is properly tapped to receive the stand pipe.",
      "d": "None of the above",
      "e": "The floor drain or trench drain shall be sized based on the discharge rate of the automatic clothes washer.",
      "f": "The stand pipe shall be no more than 30 inches nor less than 18 inches above its trap and in no case shall the trap be installed below the floor."
    },
    "answer": "b"
  },
  {
    "number": 42,
    "question": "Installed grease traps and interceptors shall have a grease retention capacity of not less than __ of grease for each G.P.M (gallon-per-minute) of flow",
    "options": {
      "a": "12 Oz",
      "b": "16 Oz",
      "c": "32 oz",
      "d": "24 Oz"
    },
    "answer": "c"
  },
  {
    "number": 43,
    "question": "Which option is incorrect?\nEvery lead caulked joint for cast iron bell and spigot soil pipe shall:",
    "options": {
      "a": "be firmly packed with oakum or hemp;",
      "b": "be filled with molten lead that is not less than one inch-deep and does not extend more than 1/4 inch below the rim of the hub",
      "c": "not have paint, varnish, or other coatings on the jointing material until after the joint has been tested and approved",
      "d": "have lead run in one continuous pour and shall have the lead caulked tight"
    },
    "answer": "b"
  },
  {
    "number": 44,
    "question": "When using CPVC for hot and cold water distribution that is located in an approved dwelling, the building cannot be more than _______ stories or _________ feet in height",
    "options": {
      "a": "10 & 100",
      "b": "5 & 50",
      "c": "6 & 60",
      "d": "3 & 30"
    },
    "answer": "c"
  },
  {
    "number": 45,
    "question": "Tubing traps made of brass or copper shall be of a thickness equal to a minimum ________________ gauge.",
    "options": {
      "a": "18",
      "b": "24",
      "c": "17",
      "d": "16"
    },
    "answer": "c"
  },
  {
    "number": 46,
    "question": "Any pipe that passes through or under a masonry product, or similar potentially corrosive material shall be protected. Which of the following are acceptable forms of protection?",
    "options": {
      "a": "Any means to prevent corrosion",
      "b": "Coating",
      "c": "Sleeve",
      "d": "Wrapping",
      "e": "All of the above",
      "f": "None of the above",
      "g": "Both A&B"
    },
    "answer": "e"
  },
  {
    "number": 47,
    "question": "All concealed tub or shower valves shall be provided with _____________",
    "options": {
      "a": "a Diverter",
      "b": "Renewable seats",
      "c": "Shower Trim",
      "d": "Integral Stops"
    },
    "answer": "b"
  },
  {
    "number": 48,
    "question": "Shower valves \u2014 the device shall incorporate a design that limits the maximum deliverable temperature of _____________",
    "options": {
      "a": "100 degrees Fahrenheit",
      "b": "120 degrees Fahrenheit",
      "c": "112 degrees Fahrenheit",
      "d": "130 degrees Fahrenheit"
    },
    "answer": "b"
  },
  {
    "number": 49,
    "question": "For buildings with concrete floors (slabs) or with less than __ inches of crawl space under the floor, or where a stack cleanout is not easily accessible, special provisions will be made.",
    "options": {
      "a": "36",
      "b": "12",
      "c": "24",
      "d": "18"
    },
    "answer": "d"
  },
  {
    "number": 50,
    "question": "Within _ days after receiving a request for a final inspection, the inspector shall proceed with the inspection and examine the work with the water turned on to the fixtures.",
    "options": {
      "a": "2",
      "b": "3",
      "c": "4",
      "d": "5"
    },
    "answer": "a"
  },
  {
    "number": 51,
    "question": "Strainer plates on drain inlets shall be designed and installed so the diameter of the opening is not greater than or equal to",
    "options": {
      "a": "3/4\u201d",
      "b": "1/4\u201d",
      "c": "1/2\u201d",
      "d": "3/8\u201d"
    },
    "answer": "c"
  },
  {
    "number": 52,
    "question": "The maximum height of a stack under peppermint test shall not exceed _______ height in feet or ______________ branch intervals (including the basement).",
    "options": {
      "a": "40 & 5",
      "b": "20 & 4",
      "c": "10 & 3",
      "d": "50 & 5"
    },
    "answer": "d"
  },
  {
    "number": 53,
    "question": "In a room that accommodates more than one toilet, or that incorporates a urinal and a toilet, each toilet must:",
    "options": {
      "a": "Have locking doors",
      "b": "Have Automatic Flushing",
      "c": "Be Enclosed",
      "d": "Be side shielded"
    },
    "answer": "c"
  },
  {
    "number": 54,
    "question": "No Trap shall be ______ than the drainage pipe into which it discharges.",
    "options": {
      "a": "same size",
      "b": "larger",
      "c": "smaller",
      "d": "none of the above"
    },
    "answer": "b"
  },
  {
    "number": 55,
    "question": "A Domestic Laundry standpipe shall extend to a minimum height of ______ above the base of the machine.",
    "options": {
      "a": "30\u201d",
      "b": "12\u201d",
      "c": "24\u201d",
      "d": "36\u201d"
    },
    "answer": "a"
  },
  {
    "number": 56,
    "question": "When Trenching, Tunneling, or Backfilling which of the following is not a true statement",
    "options": {
      "a": "Shall be of sufficient width to permit proper installation of pipe.",
      "b": "If the base of the trench is of poor bearing qualities a concrete foundation shall be poured and bedded with sand.",
      "c": "When a trench is excavated below grade where the bottom of the pipe does not form the bed for the pipe, the trench shall be backfilled with sand tamped in place",
      "d": "When a rock is encountered, must be removed to a point of at least 6 inches"
    },
    "answer": "d"
  },
  {
    "number": 57,
    "question": "Surfaces to be soldered shall be;",
    "options": {
      "a": "Returned to Full Bore",
      "b": "Properly Cleaned",
      "c": "Reamed",
      "d": "Both A & B",
      "e": "All of the Above"
    },
    "answer": "e"
  },
  {
    "number": 58,
    "question": "The maximum temperature of the domestic hot water in residential buildings shall not exceed degrees Fahrenheit",
    "options": {
      "a": "112",
      "b": "120",
      "c": "110",
      "d": "130"
    },
    "answer": "d"
  },
  {
    "number": 59,
    "question": "Flushometer toilets that are floor mounted or wall mounted shall be low consumption toilets which use a maximum of _____________ gallons per flush",
    "options": {
      "a": "2.0",
      "b": "1.6",
      "c": "2.5",
      "d": "1.0"
    },
    "answer": "b"
  },
  {
    "number": 60,
    "question": "Every urinal shall be ___________",
    "options": {
      "a": "Waterless",
      "b": "Handicapped height",
      "c": "Side Shielded",
      "d": "White"
    },
    "answer": "c"
  },
  {
    "number": 61,
    "question": "Cleanout Clearances: Cleanouts on ________ inch or larger pipes shall be so installed that there is a clearance of not less than _______ inches for the purpose of clearing stoppages",
    "options": {
      "a": "3 & 18",
      "b": "4 & 24",
      "c": "2 & 18",
      "d": "4 & 18"
    },
    "answer": "a"
  },
  {
    "number": 62,
    "question": "When piping a Church Sacrarium the drain may be ___________ \u201d in diameter",
    "options": {
      "a": "2",
      "b": "1.25",
      "c": "1.5",
      "d": "3"
    },
    "answer": "a"
  },
  {
    "number": 63,
    "question": "When installing a fitting or inserting piping into an existing portion of a soil stack, waste stack, vent stack or drain, the fitting or piping shall be",
    "options": {
      "a": "of the same size",
      "b": "made of Cast Iron",
      "c": "of the same material",
      "d": "made of PVC or Cast Iron"
    },
    "answer": "c"
  },
  {
    "number": 64,
    "question": "Floor / Trough drains shall have integral or separate traps providing a minimum water seal of inches.",
    "options": {
      "a": "3",
      "b": "64",
      "c": "1 1/2",
      "d": "2"
    },
    "answer": "a"
  },
  {
    "number": 65,
    "question": "When color marking is employed, potable water lines shall be painted",
    "options": {
      "a": "Green",
      "b": "Yellow",
      "c": "Blue",
      "d": "Red"
    },
    "answer": "a"
  },
  {
    "number": 66,
    "question": "Faucets that incorporate a hose thread outlet must ___________",
    "options": {
      "a": "Have a Check Valve",
      "b": "Be Brass",
      "c": "Have a Vacuum Breaker or Backflow Device",
      "d": "Have a Back Water Valve"
    },
    "answer": "c"
  },
  {
    "number": 67,
    "question": "When it is called for a hot water line to be recirculated, a ______ may be used in lieu of installing a full re-circulating line",
    "options": {
      "a": "Heat Tracing",
      "b": "Self Regulating Heat Cable",
      "c": "Indirect Heater",
      "d": "Tankless Heater"
    },
    "answer": "b"
  },
  {
    "number": 68,
    "question": "Cleanouts shall meet which of the following standards",
    "options": {
      "a": "Shall have raised or countersunk square or hexagon heads",
      "b": "Shall meet the latest standards",
      "c": "A plastic cleanout shall be of the same material to which it connects",
      "d": "Composed of Brass or Plastic",
      "e": "If there is a tripping hazard only a countersunk head shall be used",
      "f": "A, B, & C only",
      "g": "None Of the Above",
      "h": "All of the Above"
    },
    "answer": "h"
  },
  {
    "number": 69,
    "question": "A Flow Control Device for a Grease Separator / Interceptor must be placed _____________",
    "options": {
      "a": "After the Interceptor",
      "b": "Before the Trap",
      "c": "Where the Interceptor connects to the sanitary system",
      "d": "After the Fixture and before the trap / interceptor"
    },
    "answer": "d"
  },
  {
    "number": 70,
    "question": "In the DWV system, Unions may be used  ________ and __________",
    "options": {
      "a": "trap seal and inlet side of the trap",
      "b": "anywhere and everywhere",
      "c": "down stream of the trap and under the sink",
      "d": "on branch arms and after the gas valve"
    },
    "answer": "a"
  },
  {
    "number": 71,
    "question": "Cleanouts shall not be placed more than 50 feet apart in all horizontal drainage piping and branch drain piping that is _____ inch nominal diameter or less.",
    "options": {
      "a": "4",
      "b": "3",
      "c": "1 1/2",
      "d": "2"
    },
    "answer": "a"
  },
  {
    "number": 72,
    "question": "Interceptors and separators shall be so designed that they will not ______ when closed covers are used.",
    "options": {
      "a": "explode",
      "b": "become air bound",
      "c": "be vented",
      "d": "leak"
    },
    "answer": "b"
  },
  {
    "number": 73,
    "question": "The produce preparation label must be a laminated sign with letters _________ in height that reads: 'This Compartment ONLY Is Designated For Produce Preparation.'",
    "options": {
      "a": "2\u201d",
      "b": "1\u201d",
      "c": "3\u201d",
      "d": "4\u201d"
    },
    "answer": "a"
  },
  {
    "number": 74,
    "question": "All sillcocks, hose bibs and wall hydrants shall be ____________ by a shutoff valve inside the building.",
    "options": {
      "a": "Drained",
      "b": "Frost Proof",
      "c": "Solenoid Controlled",
      "d": "Separately Controlled"
    },
    "answer": "d"
  },
  {
    "number": 75,
    "question": "Sumps or ejectors, in other than one or two family houses or residences, receiving the discharge of ________ or more toilets shall be provided with duplex pumping equipment.",
    "options": {
      "a": "2",
      "b": "4",
      "c": "5",
      "d": "6"
    },
    "answer": "d"
  },
  {
    "number": 76,
    "question": "Where street main pressures fluctuate, the building water distribution system shall be designed for the ____________ pressure available",
    "options": {
      "a": "average",
      "b": "minimum",
      "c": "maximum"
    },
    "answer": "b"
  },
  {
    "number": 77,
    "question": "Clear water condensate waste that is produced in cumulative amounts of ____ gallons per hour or ______ gallons per day or less",
    "options": {
      "a": "12.5 & 300",
      "b": "12.5 & 250",
      "c": "10 & 240",
      "d": "12.5 & 350"
    },
    "answer": "a"
  },
  {
    "number": 78,
    "question": "Painting / Marking of special hazard wastes must be made with _____ inch letters and at intervals of not more than _______ feet.",
    "options": {
      "a": "4 & 20",
      "b": "1 & 20",
      "c": "3 & 25",
      "d": "2 & 10"
    },
    "answer": "c"
  },
  {
    "number": 79,
    "question": "The minimum required air gap when effected by a near wall shall be a minimum of _______ the effective opening of a potable water outlet.",
    "options": {
      "a": "3 Times",
      "b": "2 Times",
      "c": "1 Time",
      "d": "2.5 Times"
    },
    "answer": "a"
  },
  {
    "number": 80,
    "question": "Not more than ______ fixture(s) may be served by a single flushometer valve.",
    "options": {
      "a": "four",
      "b": "one",
      "c": "three",
      "d": "two"
    },
    "answer": "b"
  },
  {
    "number": 81,
    "question": "Single compartment culinary/produce sinks or individual culinary/produce sink compartments specifically designated and labeled for produce preparation shall convey the waste from these fixtures or compartments __________________:",
    "options": {
      "a": "indirectly to a floor drain",
      "b": "indirectly to a floor sink",
      "c": "indirectly to a stand pipe",
      "d": "directly to the sanitary"
    },
    "answer" : "b"
  }
];