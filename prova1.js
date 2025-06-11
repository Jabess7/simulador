const questions1 = [
  {
    "number": 1,
    "question": "At what pressure does gas piping need to be welded?",
    "options": {
      "a": "Over ½ PSI",
      "b": "Over 2 PSI",
      "c": "Over 4 PSI",
      "d": "Over 5 PSI"
    },
    "answer": "d"
  },
  {
    "number": 2,
    "question": "Elevated pressure gas piping must be labeled at?",
    "options": {
      "a": "a minimum of every six feet",
      "b": "a minimum of every eight feet",
      "c": "a minimum of every ten feet",
      "d": "a minimum of every twelve feet"
    },
    "answer": "c"
  },
  {
    "number": 3,
    "question": "When gas is above what pressure is it no longer considered to be low pressure?",
    "options": {
      "a": "0.5 P.S.I.G",
      "b": "1 P.S.I.G",
      "c": "2 P.S.I.G",
      "d": "5 P.S.I.G"
    },
    "answer": "a"
  },
  {
    "number": 4,
    "question": "Installation of unlisted gas appliances, equipment and accessories is only allowed?",
    "options": {
      "a": "with approval of the local inspector",
      "b": "with a variance issued by the plumbing board",
      "c": "with approval by the state inspector",
      "d": "if allowed by the equipment manufacturer"
    },
    "answer": "b"
  },
  {
    "number": 5,
    "question": "When installing a gas line underground inside a building, what is not required with the conduit installed around the gas line?",
    "options": {
      "a": "It must terminate a minimum of 4’ above grade",
      "b": "It must be of the same material as the gas pipe",
      "c": "It terminates outside of the building",
      "d": "The conduit vent must be sized at least 50% of the gas line"
    },
    "answer": "b"
  },
  {
    "number": 6,
    "question": "When testing a low pressure gas piping system in excess of one million BTU per hour, what is not a requirement?",
    "options": {
      "a": "The minimum test pressure will be at least 100 PSI",
      "b": "test must be ten times the working pressure of the system",
      "c": "maximum test duration is 24 hours",
      "d": "test duration must be one hour for every 100’ of piping"
    },
    "answer": "d"
  },
  {
    "number": 7,
    "question": "Gas regulator vent lines terminating outside of a building must be located no less than:",
    "options": {
      "a": "two feet away from any building opening or air intake",
      "b": "four feet away from any building opening or air intake",
      "c": "six feet away from any building opening or air intake",
      "d": "eight feet away from any building opening or air intake"
    },
    "answer": "b"
  },
  {
    "number": 8,
    "question": "Flexible gas hoses used to connect portable and mobile industrial appliances shall not exceed:",
    "options": {
      "a": "5 feet",
      "b": "10 feet",
      "c": "15 feet",
      "d": "20 feet"
    },
    "answer": "d"
  },
  {
    "number": 9,
    "question": "Copper and brass tubing shall not be used if the gas contains more than an average of how much Mercaptan or Hydrogen Sulfide per 100 square feet of gas?",
    "options": {
      "a": ".3 grains",
      "b": ".6 grains",
      "c": ".9 grains",
      "d": ".12 grains"
    },
    "answer": "a"
  },
  {
    "number": 10,
    "question": "Which of the following gas appliance do not require 'Product Acceptance' from the Board:",
    "options": {
      "a": "Stove",
      "b": "Boiler",
      "c": "Outdoor Fire Pit",
      "d": "Swimming Pool Heater"
    },
    "answer": "c"
  },
  {
    "number": 11,
    "question": "Exposed PVC piping used for combustion air or to discharge flue gases must be labeled every:",
    "options": {
      "a": "four feet",
      "b": "Six feet",
      "c": "Eight feet",
      "d": "Ten feet"
    },
    "answer": "d"
  },
  {
    "number": 12,
    "question": "Manually operated dampers are allowed in what type of gas appliances",
    "options": {
      "a": "Incinerators",
      "b": "Steam boilers",
      "c": "Ranges",
      "d": "No gas appliances"
    },
    "answer": "d"
  },
  {
    "number": 13,
    "question": "What BTU input threshold do the requirements of 248 CMR 7.00 begin?",
    "options": {
      "a": "300,000 BTU",
      "b": "400,000 BTU",
      "c": "500,000 BTU",
      "d": "1,000,000 BTU"
    },
    "answer": "b"
  },
  {
    "number": 14,
    "question": "The maximum horizontal length of a single-wall connector shall not exceed what percent of the height of the chimney?",
    "options": {
      "a": "25 percent",
      "b": "50 percent",
      "c": "75 percent",
      "d": "100 percent"
    },
    "answer": "c"
  },
  {
    "number": 15,
    "question": "Gas piping systems with an operating pressure greater than 10 PSI and less than or equal to 70 PSI shall be tested at:",
    "options": {
      "a": "75 PSIG",
      "b": "100 PSIG",
      "c": "125 PSIG",
      "d": "150 PSIG"
    },
    "answer": "b"
  },
  {
    "number": 16,
    "question": "Before a gas piping system is put into operation, it must be pressure tested for a period of:",
    "options": {
      "a": "5 Minutes",
      "b": "10 Minutes",
      "c": "15 Minutes",
      "d": "20 Minutes"
    },
    "answer": "b"
  },
  {
    "number": 17,
    "question": "When installing plastic gas piping outside underground it must be:",
    "options": {
      "a": "installed in a trench separate from all other utilities",
      "b": "transitioned to steel above ground before entering a building",
      "c": "installed a minimum of 30 inches below grade",
      "d": "installed with a corrosion resistant tracer wire"
    },
    "answer": "d"
  },
  {
    "number": 18,
    "question": "When installing CSST outside underground, marking tape must be placed no more than:",
    "options": {
      "a": "6 inches below grade",
      "b": "8 inches below grade",
      "c": "10 inches below grade",
      "d": "12 inches below grade"
    },
    "answer": "a"
  },
  {
    "number": 19,
    "question": "What is the minimum depth for installation of CSST outside underground:",
    "options": {
      "a": "12 inches below grade",
      "b": "18 inches below grade",
      "c": "24 inches below grade",
      "d": "30 inches below grade"
    },
    "answer": "b"
  },
  {
    "number": 20,
    "question": "In a gas piping system, cast iron is allowed for:",
    "options": {
      "a": "Fittings over 4” IPS",
      "b": "valves",
      "c": "piping",
      "d": "Commercial installation"
    },
    "answer": "b"
  },
  {
    "number": 21,
    "question": "When replacing a gas fryer under a hood system in a commercial kitchen, what is not required:",
    "options": {
      "a": "a solenoid valve or a draft proving switch",
      "b": "a carbon monoxide detector",
      "c": "a test of the building’s complete gas system",
      "d": "Product Acceptance for the fryer"
    },
    "answer": "c"
  },
  {
    "number": 22,
    "question": "Plastic pipe and fittings used to vent gas appliances must:",
    "options": {
      "a": "be pitched away from the equipment",
      "b": "have a condensate pump installed",
      "c": "terminate at least 3 feet above grade",
      "d": "be installed as per the appliance manufacturer's installation instructions"
    },
    "answer": "d"
  },
  {
    "number": 23,
    "question": "Which is not an allowance when utilizing an unlined chimney for the replacement of a gas appliance:",
    "options": {
      "a": "a category I Vented Appliance is being installed",
      "b": "a vent cap is installed on the chimney top",
      "c": "the appliance must draft properly",
      "d": "the interior area of the chimney is no greater than seven times the area of the smallest flue to be connected to that chimney"
    },
    "answer": "b"
  },
  {
    "number": 24,
    "question": "A gas appliance shall not be connected to a chimney flue serving a separate appliance designed to burn:",
    "options": {
      "a": "Solid fuel",
      "b": "Natural gas",
      "c": "Propane gas",
      "d": "oil"
    },
    "answer": "a"
  },
  {
    "number": 25,
    "question": "A chimney for medium-heat equipment shall extend at least how much higher than any portion of a building within 25 feet?",
    "options": {
      "a": "4 feet",
      "b": "6 feet",
      "c": "8 feet",
      "d": "10 feet"
    },
    "answer": "d"
  },
  {
    "number": 26,
    "question": "The remaining space surrounding a chimney liner, gas vent, special gas vent, or plastic piping installed within a masonry chimney:",
    "options": {
      "a": "Shall not be used to vent another appliance unless allowed by the authority having jurisdiction",
      "b": "May be used to vent another appliance",
      "c": "Shall not be used to vent another appliance",
      "d": "May be used to vent a solid fuel burning appliance"
    },
    "answer": "c"
  },
  {
    "number": 27,
    "question": "When using the gas venting tables, extrapolation beyond the table entries:",
    "options": {
      "a": "Shall be permitted for sizing two or more appliances",
      "b": "Shall be permitted when sizing one appliance only",
      "c": "May be permitted using a 10% reduction in vent size",
      "d": "Shall not be permitted"
    },
    "answer": "d"
  },
  {
    "number": 28,
    "question": "What is required prior to installing a vent connector in a chimney that was previously used to vent a liquid fuel burning appliance?",
    "options": {
      "a": "Obtain written approval from the local building official",
      "b": "Obtain written approval from the local gas inspector",
      "c": "Have the chimney lined",
      "d": "Have the chimney cleaned"
    },
    "answer": "d"
  },
  {
    "number": 29,
    "question": "When installing a gas appliance on a roof, what is the minimum distance from the appliance to the edge of the roof?",
    "options": {
      "a": "4 feet",
      "b": "6 feet",
      "c": "8 feet",
      "d": "10 feet"
    },
    "answer": "b"
  },
  {
    "number": 30,
    "question": "When positive means of supplying air for combustion to a burner is used, the following shall be provided:",
    "options": {
      "a": "An oversized fan",
      "b": "A burner full modulating control",
      "c": "A damper on the boiler with an automatic actuator",
      "d": "An interlock to prevent the flow of gas if the fan is not working"
    },
    "answer": "d"
  },
  {
    "number": 31,
    "question": "In gas equipment over 400,000 BTU, the safety control for the burner must be what voltage:",
    "options": {
      "a": "208 three phase",
      "b": "220 volt with a separate disconnect",
      "c": "150 volts or less",
      "d": "480 volts"
    },
    "answer": "c"
  },
  {
    "number": 32,
    "question": "Burners with a firing rate of 1,000,000 BTU shall be equipped with the following:",
    "options": {
      "a": "A proven low-fire start",
      "b": "An industrial risk gas train",
      "c": "A full modulating control",
      "d": "A 3rd manually operated safety control"
    },
    "answer": "a"
  },
  {
    "number": 33,
    "question": "When two or more vents connectors enter a common gas vent or chimney flue, the smaller of the two shall enter the vertical:",
    "options": {
      "a": "Below the larger",
      "b": "At the same level",
      "c": "Above the larger",
      "d": "Not allowed"
    },
    "answer": "c"
  },
  {
    "number": 34,
    "question": "When two or more appliances are connected to a vertical vent or Chimney, the flow area of the largest section of the vertical vent shall not exceed how many times the smallest?",
    "options": {
      "a": "3 times",
      "b": "5 times",
      "c": "7 times",
      "d": "9 times"
    },
    "answer": "c"
  },
  {
    "number": 35,
    "question": "The maximum horizontal length of a single wall connector shall not exceed more than what percent of the height of the chimney or vent?",
    "options": {
      "a": "25 percent",
      "b": "50 percent",
      "c": "75 percent",
      "d": "100 percent"
    },
    "answer": "c"
  },
  {
    "number": 36,
    "question": "The maximum horizontal length of a Type B double-wall connector shall not exceed more than what percent of the height of the chimney or vent?",
    "options": {
      "a": "25 percent",
      "b": "50 percent",
      "c": "75 percent",
      "d": "100 percent"
    },
    "answer": "d"
  },
  {
    "number": 37,
    "question": "Vent Connections serving equipment vented by natural draft shall not be connected into the following:",
    "options": {
      "a": "Type B double-wall pipe connecting to a masonry chimney",
      "b": "Any portion of the mechanical draft system operating under positive pressure",
      "c": "A masonry chimney used for venting of oil fired equipment",
      "d": "Factory built, Board approved metal chimney"
    },
    "answer": "b"
  },
  {
    "number": 38,
    "question": "Corrugated vent connectors for gas appliances shall not be :",
    "options": {
      "a": "larger than the flue collar diameter",
      "b": "smaller than the flue collar diameter",
      "c": "larger than the draft hood outlet diameter",
      "d": "larger than the listed appliance vent damper"
    },
    "answer": "b"
  },
  {
    "number": 39,
    "question": "When removing a solid or liquid fuel appliance from a chimney and replacing it with a gas appliance, what needs to be installed?",
    "options": {
      "a": "A smoke detector",
      "b": "An accessible cleanout",
      "c": "A chimney liner",
      "d": "A secondary gas shut off valve"
    },
    "answer": "b"
  },
  {
    "number": 40,
    "question": "A vent connector shall be installed without any dips or sags and have a slope of:",
    "options": {
      "a": "0 in per foot sloped upward toward the vent or chimney",
      "b": "1/8 in per foot sloped upward toward the vent or chimney",
      "c": "1/4 in per foot sloped upward toward the vent or chimney",
      "d": "1/2 in per foot sloped upward toward the vent or chimney"
    },
    "answer": "c"
  },
  {
    "number": 41,
    "question": "When a double acting barometric is used, it shall be equipped with a device to automatically shut off fuel to the burner in case of flue gas spillage in what period of time?",
    "options": {
      "a": "30 seconds",
      "b": "60 seconds",
      "c": "90 seconds",
      "d": "120 seconds"
    },
    "answer": "b"
  },
  {
    "number": 42,
    "question": "When induced or forced draft devices are used to insure proper combustion, what provisions must be made to prevent the flow of gas to the burner:",
    "options": {
      "a": "Provide a manually operated cast iron damper",
      "b": "Increase the size of the breeching by a minimum of fifteen percent",
      "c": "Provide a secondary manual shut off",
      "d": "Provide a device to prevent the flow of gas upon failure of forced draft device"
    },
    "answer": "d"
 },
  {
    "number": 43,
    "question": "Which gas equipment is not required to be vented?",
    "options": {
      "a": "Commercial duct furnace",
      "b": "Residential incinerator",
      "c": "Direct gas-fired make-up air heater",
      "d": "Category IV condensing furnace"
    },
    "answer": "c"
  },
  {
    "number": 44,
    "question": "Vented gas fireplaces that are installed in bedrooms or bathrooms shall:",
    "options": {
      "a": "be equipped with an oxygen depletion sensor",
      "b": "require a carbon monoxide detector installed in the same room",
      "c": "obtain all air for combustion directly from outdoors",
      "d": "obtain all air for combustion from another room"
    },
    "answer": "c"
  },
  {
    "number": 45,
    "question": "When installing CSST for a fireplace log, which of the following is required?",
    "options": {
      "a": "protection of the CSST piping within the fire box",
      "b": "a proper termination fitting at the entrance to the fire box",
      "c": "proper support for the CSST piping within the fire box",
      "d": "installation of a carbon monoxide detection device"
    },
    "answer": "b"
  },
  {
    "number": 46,
    "question": "When a vented decorative appliance is installed in a vented fireplace, the flue damper must be:",
    "options": {
      "a": "Screwed in place",
      "b": "removed or welded in the open position",
      "c": "anchored with stainless steel rods",
      "d": "secured open with a factory supplied clip"
    },
    "answer": "b"
  },
  {
    "number": 47,
    "question": "A chimney for residential-type or low-heat gas equipment shall extend through the roof at least how far above the highest point and how much higher than any portion of the building at least 10 feet away?",
    "options": {
      "a": "2.5 feet and 2.5 feet",
      "b": "3 feet and 2 feet",
      "c": "3.5 feet and 3 feet",
      "d": "4 feet and 2 feet"
    },
    "answer": "b"
  },
  {
    "number": 48,
    "question": "Mechanical draft systems when exiting above a public walkway shall be a minimum of how many feet above finish grade?",
    "options": {
      "a": "4 feet",
      "b": "5 feet",
      "c": "6 feet",
      "d": "7 feet"
    },
    "answer": "d"
  },
  {
    "number": 49,
    "question": "When installing two 45 degree elbows in a vertical common gas vent, the capacity of that vent drops by what percent?",
    "options": {
      "a": "five",
      "b": "ten",
      "c": "fifteen",
      "d": "twenty"
    },
    "answer": "b"
  },
  {
    "number": 50,
    "question": "Single wall metal flue pipe shall not originate in:",
    "options": {
      "a": "A concealed space",
      "b": "A crawl space",
      "c": "A basement",
      "d": "An occupied space"
    },
    "answer": "a"
  },
  {
    "number": 51,
    "question": "No portion of a venting system shall extend or pass through:",
    "options": {
      "a": "any concealed space",
      "b": "A combustible exterior wall",
      "c": "A basement",
      "d": "A circulating air duct"
    },
    "answer": "d"
  },
  {
    "number": 52,
    "question": "The gas train for a 950,000 BTU gas boiler must have",
    "options": {
      "a": "a firing rate control",
      "b": "a high pressure switch",
      "c": "a low pressure switch",
      "d": "a safety shut off valve"
    },
    "answer": "a"
  },
  {
    "number": 53,
    "question": "The gas train on boiler rated at 800,000 BTU per hour must have",
    "options": {
      "a": "a pressure regulator",
      "b": "a high pressure switch",
      "c": "a low pressure switch",
      "d": "two safety shut off valves"
    },
    "answer": "a"
  },
  {
    "number": 54,
    "question": "For other than LP gas systems the point of delivery, where no meter is provided shall be at:",
    "options": {
      "a": "The outlet of the first stage regulator",
      "b": "the point of entry into the building",
      "c": "the outlet of the service shut off valve",
      "d": "within 10' of the service regulator"
    },
    "answer": "c"
  },
  {
    "number": 55,
    "question": "A gas heater in a commercial repair garage must be at least how high off the floor to the bottom of the unit?",
    "options": {
      "a": "7’",
      "b": "8’",
      "c": "9’",
      "d": "10’"
    },
    "answer": "b"
  },
  {
    "number": 56,
    "question": "When combustion air is supplied to a confined space, the openings must begin within how many inches of the floor and ceiling?",
    "options": {
      "a": "6 inches",
      "b": "12 inches",
      "c": "18 inches",
      "d": "24 inches"
    },
    "answer": "b"
  },
  {
    "number": 57,
    "question": "What is the minimum vertical height a type B-Vent may terminate above an appliance draft hood?",
    "options": {
      "a": "3 feet",
      "b": "4 feet",
      "c": "5 feet",
      "d": "6 feet"
    },
    "answer": "c"
  },
  {
    "number": 58,
    "question": "Gas equipment installed in residential garages must be installed so that the ignition device is a minimum of how many inches above the floor?",
    "options": {
      "a": "12 inches",
      "b": "18 inches",
      "c": "24 inches",
      "d": "30 inches"
    },
    "answer": "b"
  },
  {
    "number": 59,
    "question": "What is the maximum distance from a gas cock to the appliance it serves?",
    "options": {
      "a": "2’",
      "b": "4’",
      "c": "6’",
      "d": "8’"
    },
    "answer": "c"
  },
  {
    "number": 60,
    "question": "Exposed or visible plastic gas vent piping for a side wall vented appliance must be labeled at a minimum of every ____ feet?",
    "options": {
      "a": "5’",
      "b": "10’",
      "c": "15’",
      "d": "20’"
    },
    "answer": "b"
  },
  {
    "number": 61,
    "question": "At what height would you not need to hang a gas vent sign when installing a sidewall vented appliance?",
    "options": {
      "a": "48”",
      "b": "60”",
      "c": "72”",
      "d": "84”"
    },
    "answer": "d"
  },
  {
    "number": 62,
    "question": "CSST may be directly connected to an interior gas meter that is securely affixed to the building as long as the CSST is secured to the building and at least how many inches of the tubing is exposed?",
    "options": {
      "a": "12”",
      "b": "18”",
      "c": "20”",
      "d": "24”"
    },
    "answer": "d"
  },
  {
    "number": 63,
    "question": "When testing a gas system with a maximum operating pressure of ½ PSI, what is the correct pressure and length on test?",
    "options": {
      "a": "3 PSIG for 5 minutes",
      "b": "3 PSIG for 10 minutes",
      "c": "5 PSIG for 5 minutes",
      "d": "5 PSIG for 10 minutes"
    },
    "answer": "b"
  },
  {
    "number": 64,
    "question": "Decorative fireplace appliances installed in bedrooms or bathrooms must:",
    "options": {
      "a": "Vented into a fireplace",
      "b": "Obtain combustion air from outside the bedroom",
      "c": "Be a direct vented appliance",
      "d": "Be a category III appliance"
    },
    "answer": "c"
  },
  {
    "number": 65,
    "question": "Unvented gas room heaters shall have a maximum BTU input of:",
    "options": {
      "a": "20,000 BTU",
      "b": "30,000 BTU",
      "c": "40,000 BTU",
      "d": "50,000 BTU"
    },
    "answer": "c"
  },
  {
    "number": 66,
    "question": "An appliance that operates with a positive vent static pressure and with a vent gas temperature that can cause excessive condensate:",
    "options": {
      "a": "Category I",
      "b": "Category II",
      "c": "Category III",
      "d": "Category IV"
    },
    "answer": "d"
  },
  {
    "number": 67,
    "question": "An appliance that operates with a non-positive vent static pressure and with a vent gas temperature that avoids excessive condensate :",
    "options": {
      "a": "Category I",
      "b": "Category II",
      "c": "Category III",
      "d": "Category IV"
    },
    "answer": "a"
  },
  {
    "number": 68,
    "question": "An appliance that operates with a non-positive vent static pressure and with a vent gas temperature that can cause excessive condensate.",
    "options": {
      "a": "Category I",
      "b": "Category II",
      "c": "Category III",
      "d": "Category IV"
    },
    "answer": "b"
  },
  {
    "number": 69,
    "question": "An appliance that operates with a positive vent static pressure and with a vent gas temperature that avoids excessive condensate",
    "options": {
      "a": "Category I",
      "b": "Category II",
      "c": "Category III",
      "d": "Category IV"
    },
    "answer": "c"
  },
  {
    "number": 70,
    "question": "Plastic gas pipe and fittings may only be used:",
    "options": {
      "a": "Concealed in a wall",
      "b": "In a crawl space",
      "c": "In unoccupied areas of a building",
      "d": "Outside underground"
    },
    "answer": "d"
  },
  {
    "number": 71,
    "question": "A residential gas appliance connector shall not exceed what length?",
    "options": {
      "a": "24”",
      "b": "36”",
      "c": "48”",
      "d": "60”"
    },
    "answer": "c"
  },
  {
    "number": 72,
    "question": "When purging gas to an outside location from a piping system, how far away from a source of ignition must the termination be?",
    "options": {
      "a": "5 feet",
      "b": "10 feet",
      "c": "15 feet",
      "d": "20 feet"
    },
    "answer": "b"
  },
  {
    "number": 73,
    "question": "How far away from a forced air intake does the discharge vent line from a gas pressure regulator need to be terminated?",
    "options": {
      "a": "5 feet",
      "b": "10 feet",
      "c": "15 feet",
      "d": "20 feet"
    },
    "answer": "b"
  },
  {
    "number": 74,
    "question": "How far through the roof does the termination point from a gas pressure regulator need to be extended?",
    "options": {
      "a": "12 inches",
      "b": "18 inches",
      "c": "24 inches",
      "d": "30 inches"
    },
    "answer": "b"
  },
  {
    "number": 75,
    "question": "How far through a side wall does the termination point from a gas pressure regulator vent need to be extended?",
    "options": {
      "a": "6 inches",
      "b": "12 inches",
      "c": "18 inches",
      "d": "To a safe location"
    },
    "answer": "d"
  },
  {
    "number": 76,
    "question": "What needs to be installed upstream of a gas regulator in a gas piping system?",
    "options": {
      "a": "An appliance",
      "b": "A Solenoid valve",
      "c": "A union",
      "d": "A manual shut off valve"
    },
    "answer": "d"
  },
  {
    "number": 77,
    "question": "Can liquid household soap be used to test for a leak on a CSST piping system?",
    "options": {
      "a": "No",
      "b": "YES"
    },
    "answer": "a"
  },
  {
    "number": 78,
    "question": "Can vents from appliance regulators be manifolded together before venting to the outside?",
    "options": {
      "a": "No",
      "b": "YES"
    },
    "answer": "a"
  },
  {
    "number": 79,
    "question": "The acceptable range for a ph adjustment tank in an acid neutralization system is?",
    "options": {
      "a": "Five to nine",
      "b": "Six to nine",
      "c": "Six to ten",
      "d": "Seven to ten"
    },
    "answer": "b"
  },
  {
    "number": 80,
    "question": "When installing a water heater that has a capacity of 6 gallons or more in a closet on the second floor of a residence, you must:",
    "options": {
      "a": "install a safe waste pan",
      "b": "locate the heater a minimum of 12 inches from combustible walls",
      "c": "install shut off valves on both hot and cold lines",
      "d": "install a recirculating line"
    },
    "answer": "a"
  }
]