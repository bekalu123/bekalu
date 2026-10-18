const SUPPLIERS_MASTER = [
  {
    "code": 25,
    "name": "arsnal",
    "lots": {
      "Lot 1": 1,
      "Lot 2": 0,
      "Lot 3": 1
    }
  },
  {
    "code": 26,
    "name": "man united",
    "lots": {
      "Lot 1": 0,
      "Lot 2": 0,
      "Lot 3": 1
    }
  },
  {
    "code": 27,
    "name": "leverpoo",
    "lots": {
      "Lot 1": 1,
      "Lot 2": 1,
      "Lot 3": 1
    }
  },
  {
    "code": 28,
    "name": "juventus",
    "lots": {
      "Lot 1": 0,
      "Lot 2": 1,
      "Lot 3": 0
    }
  },
  {
    "code": 29,
    "name": "inter",
    "lots": {
      "Lot 1": 0,
      "Lot 2": 1,
      "Lot 3": 0
    }
  },
  {
    "code": 30,
    "name": "acimilan",
    "lots": {
      "Lot 1": 1,
      "Lot 2": 0,
      "Lot 3": 0
    }
  },
  {
    "code": 31,
    "name": "porto",
    "lots": {
      "Lot 1": 0,
      "Lot 2": 0,
      "Lot 3": 0
    }
  },
  {
    "code": 32,
    "name": "congo",
    "lots": {
      "Lot 1": 1,
      "Lot 2": 1,
      "Lot 3": 1
    }
  },
  {
    "code": 33,
    "name": "ethiopia",
    "lots": {
      "Lot 1": 0,
      "Lot 2": 0,
      "Lot 3": 1
    }
  },
  {
    "code": 34,
    "name": "somaliya",
    "lots": {
      "Lot 1": 1,
      "Lot 2": 1,
      "Lot 3": 0
    }
  },
  {
    "code": 35,
    "name": "egypt",
    "lots": {
      "Lot 1": 0,
      "Lot 2": 1,
      "Lot 3": 1
    }
  },
  {
    "code": 36,
    "name": "senegal",
    "lots": {
      "Lot 1": 1,
      "Lot 2": 0,
      "Lot 3": 1
    }
  },
  {
    "code": 37,
    "name": "cameron",
    "lots": {
      "Lot 1": 0,
      "Lot 2": 0,
      "Lot 3": 0
    }
  },
  {
    "code": 38,
    "name": "jebuti",
    "lots": {
      "Lot 1": 0,
      "Lot 2": 1,
      "Lot 3": 1
    }
  },
  {
    "code": 39,
    "name": "afar",
    "lots": {
      "Lot 1": 1,
      "Lot 2": 0,
      "Lot 3": 0
    }
  },
  {
    "code": 40,
    "name": "shashemena",
    "lots": {
      "Lot 1": 0,
      "Lot 2": 1,
      "Lot 3": 1
    }
  },
  {
    "code": 41,
    "name": "diradwa",
    "lots": {
      "Lot 1": 1,
      "Lot 2": 0,
      "Lot 3": 1
    }
  },
  {
    "code": 42,
    "name": "soimaliya",
    "lots": {
      "Lot 1": 0,
      "Lot 2": 1,
      "Lot 3": 1
    }
  }
];

const CATALOG_ITEMS = {
  "Lot 1": [
    {
      "num": "1",
      "name": "Desktop Computer",
      "spec": "Processor (CPU):Intel Core i5 (14th generation) Operating System: Microsoft Windows 10 x64 Memory:8GB RAM Storage:1TB internal storage drive HDD Compatible with Monitor Size 20inchBrand new with full accessories",
      "unit": "Pcs",
      "qty": "185",
      "marketPrice": 354000.0
    },
    {
      "num": "2",
      "name": "Wirless access point",
      "spec": "Power:9v Model :archer c50 AC 1200 dual band wi-fi-Router",
      "unit": "Pcs",
      "qty": "5",
      "marketPrice": 645487.0
    },
    {
      "num": "3",
      "name": "Projector",
      "spec": "Hardware interface: VGA, USB, HDMI , Lamp Life Expectancy:- 5,000 / 10,000 Hours (Normal /Eco) , Mounting type: Floor Mount, Tabletop Mount , Controller type: Button Control and Remote control , Display resolution: 1024 x 768 , Light source wattage: 200 Watts",
      "unit": "Pcs",
      "qty": "5",
      "marketPrice": 65478.0
    },
    {
      "num": "4",
      "name": "HAMMER ( መዶሻ )",
      "spec": "Hammer, Claw, Steel Shaft, 16oz",
      "unit": "Pcs",
      "qty": "5",
      "marketPrice": 6547.0
    },
    {
      "num": "5",
      "name": "Magnetic Screwdriver Set with Case",
      "spec": "Packaged :- 22 pcs , Contains:- slotted, star, square, Philips and double-end heads",
      "unit": "Pcs",
      "qty": "5",
      "marketPrice": 21478.0
    },
    {
      "num": "6",
      "name": "Modern Color Printer, machine",
      "spec": "Color Multifunction Printer, Print/Copy/Scan/Email/Fax, letter/legal, up to Product Dimensions 22.8 x 25 x 25.9 inches (57.9 x 63.5 x 65.8 cm) Item Weight 81.6 pounds (36.72 kg)",
      "unit": "Pcs",
      "qty": "5",
      "marketPrice": 1250000.0
    },
    {
      "num": "7",
      "name": "A4 Monochrome Network Multifunction Printer (Print/Copy/Scan)",
      "spec": "Type: Monochrome Laser Multifunction Printer Functions: Print, Copy & Scan Paper Size: A4 Print Speed: Minimum 40 ppm Duplex Printing: Automatic two-sided printing Network: Built-in Ethernet 10/100/1000 Mbps ADF: Minimum 50 sheets Duplex Scan: Automatic duplex scanning Print Resolution: Minimum 1200 × 1200 dpi Monthly Duty Cycle: Minimum 100,000 pages/month Paper Capacity: Minimum 500 sheets, expandable Toner: High/Extra-high yield, minimum 10,000 pages Display: LCD/Color touchscreen Scan Features: PC, USB, Email & Network Folder Security: User authentication / secure printing Connectivity: Ethernet & USB; Wi-Fi preferred Operating System: Windows 10/11 compatible Warranty: Minimum 1 year Spare Parts: Readily available in Ethiopia Toner Availability: Readily available in Ethiopia Service: Local technical support and maintenance Installation: Installation, configuration and user training included",
      "unit": "Pcs",
      "qty": "16",
      "marketPrice": 0.0
    },
    {
      "num": "8",
      "name": "Laptop charger",
      "spec": "Connectivity technology : 4.5 x 3.0mm Blue tip Connector type : 4.5 x 3.0mm Blue-L tip Compatible devices : HP Stream laptop charger, HP Elite Book laptop charger, HP Probook laptop charger, hp elite book charger, hp pavilion charger Input voltage : 100-240volts,60hz,1.8A Output Voltage : 19.5 volts,3.33A It supports both 65W and 45W power outputs",
      "unit": "Pcs",
      "qty": "5",
      "marketPrice": 0.0
    },
    {
      "num": "9",
      "name": "Power supply for DEELL OptiPlex 790",
      "spec": "input voltage:100v & 240v---5A፣50-60HZ Output current 5A Output power 90W Output voltage:3.3V 5V 12V",
      "unit": "Pcs",
      "qty": "5",
      "marketPrice": 0.0
    },
    {
      "num": "10",
      "name": "Laptop",
      "spec": "Processor(CPU): Intel coeri-i5 Generation : 13th generation Operating system: Microsoft Windows 10*64 Memory:8GB DDR4 RAM Storage: 512 SSD drive Screen size: 15.6 inches",
      "unit": "Pcs",
      "qty": "28",
      "marketPrice": 510000.0
    },
    {
      "num": "11",
      "name": "Digital DC Power supply",
      "spec": "Output type: DC, Multiple Input voltage: 220V Output power:401-500W Output Current: 0.5A-2.1A Output voltage: 0-15V Output Frequency: 50HZ Ripple Noise: <1MVRMS",
      "unit": "Pcs",
      "qty": "5",
      "marketPrice": 10000.0
    },
    {
      "num": "12",
      "name": "LCD Digital Network Cable Tester NF-8508 Optical Network Line Finder Rechargeable",
      "spec": "Material: ABS Cable Type: CAT5/CAT6 Voltage: 60V Package Weight: 586g / 20.67oz Package Size: 24 * 16.5 * 5.5cm / 9.45 * 6.50 * 2.17in Package List: Transmitter, Receiver, RJ45 Adapter Line, RJ11 Adapter Line, Crocodile Clip Test Line, Type-C Data Cable, Earphone, Carry Bag, Manual (English)",
      "unit": "Pack",
      "qty": "5",
      "marketPrice": 55555.0
    },
    {
      "num": "13",
      "name": "Digital Millimeter",
      "spec": "Powered source : Battery powered Item dimension L x W x H: 7.28 x 3.43 x 1.57 inches AC Voltage TO DC Voltage, AC Current TO DC Current, Resistance, Capacitance, Frequency, Duty Cycle, and Temperature. Backlit LCD display. Wrong-Terminal Indicator: Convenient Features: Hold Function, Auto/Manual Transmission, Min/Max Value, Tilt Stand, Test Lead Storage Slots, and Pre-Installed Battery.",
      "unit": "Pcs",
      "qty": "5",
      "marketPrice": 66616.0
    },
    {
      "num": "14",
      "name": "Cable Tracer, Network Cable Tester Wire Tracker with 8 Far-End Jacks Finder",
      "spec": "Batteries: 2 9V batteries required. Power Source: Corded Electric Functions :- Cable tester tests voice (RJ11/12), data (RJ45) and video (coax F-connector) terminated cables with clearly defined results Measure cable length up to 2000 feet (610 m) Test for Open, Short, Miswire or Split-Pair faults Backlit LCD screen displays cable length, wiremap, cable ID and test results Includes a professional grade tone generator and tracing probe for non-energized wiring Toner-Pro features 5 distinct tone cadences, transmits 1,000+ feet Rugged Angled Bed of Nails (ABN) clips securely attach to wires RJ11 plug easily connects to telephone and RJ45 data jacks to tone wire pair",
      "unit": "Pack",
      "qty": "15",
      "marketPrice": 25467.0
    },
    {
      "num": "15",
      "name": "Laptop battery for hp elitbook 840 g4",
      "spec": "HP CS03XL Battery Model: CS03XL Battery Type: Li-ion (Lithium-Ion) Voltage: 11.4 V Capacity: 4035 mAh Energy: 46 Wh Cells: 3-cell Compatible with: HP EliteBook 840 G3/G4, 745 G3/G4, 755",
      "unit": "PCS",
      "qty": "10",
      "marketPrice": 29300.0
    },
    {
      "num": "16",
      "name": "Network Toolkit",
      "spec": "Network Toolkit full set",
      "unit": "pcs",
      "qty": "10",
      "marketPrice": 35000.0
    },
    {
      "num": "17",
      "name": "Maintenance Toolkit",
      "spec": "Maintenance Toolkit full set",
      "unit": "pcs",
      "qty": "10",
      "marketPrice": 42000.0
    },
    {
      "num": "18",
      "name": "Microprocessor trainer Kit",
      "spec": "Kit8085/6 Microprocessor trainer Kit",
      "unit": "pcs",
      "qty": "6",
      "marketPrice": 65100.0
    },
    {
      "num": "19",
      "name": "USP trainer Kit",
      "spec": "Universal Programming trainer Kit",
      "unit": "pcs",
      "qty": "6",
      "marketPrice": 67854.0
    },
    {
      "num": "20",
      "name": "Microcomputer trainer Kit",
      "spec": "Microcomputer Principles and Interface Experiment trainer Kit.",
      "unit": "pcs",
      "qty": "6",
      "marketPrice": 365447.0
    },
    {
      "num": "21",
      "name": "Server",
      "spec": "Server-grade CPUs, ECC RAM, RAID-configured enterprise-class drives, Gigabit Ethernet, and redundant PSUs with remote management.",
      "unit": "pcs",
      "qty": "2",
      "marketPrice": 35478.0
    },
    {
      "num": "22",
      "name": "Router",
      "spec": "Wifi Router",
      "unit": "pcs",
      "qty": "2",
      "marketPrice": 654789.0
    },
    {
      "num": "23",
      "name": "Network switch",
      "spec": "24 Port Manageable Switch",
      "unit": "pcs",
      "qty": "10",
      "marketPrice": 13457.0
    },
    {
      "num": "24",
      "name": "Network switch",
      "spec": "48 Port Manageable Switch",
      "unit": "pcs",
      "qty": "10",
      "marketPrice": 45789.0
    },
    {
      "num": "25",
      "name": "Rack6U",
      "spec": "Rack6U with PDU",
      "unit": "pcs",
      "qty": "10",
      "marketPrice": 64578.0
    },
    {
      "num": "26",
      "name": "Rack12u",
      "spec": "12U Mobile Rolling Server Rack (with Integrated UPS & PDU)",
      "unit": "pcs",
      "qty": "3",
      "marketPrice": 65487.0
    },
    {
      "num": "27",
      "name": "Fiber Optic Training Kit",
      "spec": "Basic Fiber Optic Training Kit",
      "unit": "pcs",
      "qty": "10",
      "marketPrice": 45879.0
    },
    {
      "num": "28",
      "name": "Fiber Optic Training Kit",
      "spec": "Advanced Fiber Optic Training Kit",
      "unit": "pcs",
      "qty": "10",
      "marketPrice": 65478.0
    },
    {
      "num": "29",
      "name": "1G SFP Modules",
      "spec": "1000Mbps Single Mode SFP, LC connector, 1310nm, 10km",
      "unit": "pcs",
      "qty": "10",
      "marketPrice": 36547.0
    },
    {
      "num": "30",
      "name": "Fiber Patch Cables",
      "spec": "Single Mode OS2, LC-LC duplex, 3 meters",
      "unit": "pcs",
      "qty": "10",
      "marketPrice": 64587.0
    },
    {
      "num": "31",
      "name": "Fiber Connectors",
      "spec": "LC/SC fiber connectors for termination practice",
      "unit": "pcs",
      "qty": "50",
      "marketPrice": 65478.0
    },
    {
      "num": "32",
      "name": "Fiber Cable(sample)",
      "spec": "Single Mode Fiber (SMF), OS2, 9/125µm",
      "unit": "meter",
      "qty": "50",
      "marketPrice": 65478.0
    },
    {
      "num": "33",
      "name": "Cleaning Tools",
      "spec": "Fiber cleaning pen, wipes, cleaning cassette",
      "unit": "set",
      "qty": "1",
      "marketPrice": 64251.0
    },
    {
      "num": "34",
      "name": "Desktop Computer",
      "spec": "",
      "unit": "Pcs",
      "qty": "50",
      "marketPrice": 12478.0
    }
  ],
  "Lot 2": [
    {
      "num": "1",
      "name": "ኡሁ",
      "spec": "ፈሳሸ",
      "unit": "በእሸግ",
      "qty": "718",
      "marketPrice": 10230.0
    },
    {
      "num": "2",
      "name": "ሸራ ኘላስተር",
      "spec": "ትልቁ",
      "unit": "በቁጥር",
      "qty": "262",
      "marketPrice": 9874.0
    },
    {
      "num": "3",
      "name": "የፋይል ኬንት ብረቱ",
      "spec": "ፋይል ማስቀመጫ",
      "unit": "በቁጥር",
      "qty": "320",
      "marketPrice": 6547.0
    },
    {
      "num": "4",
      "name": "የእስቴኘለር ሽቦ",
      "spec": "ትንሹ",
      "unit": "በፓኬት",
      "qty": "60",
      "marketPrice": 7584.0
    },
    {
      "num": "5",
      "name": "እስክሪብቶ",
      "spec": "ሰማያዊ",
      "unit": "በፓኬት",
      "qty": "120",
      "marketPrice": 1456.0
    },
    {
      "num": "6",
      "name": "እስክሪብቶ",
      "spec": "ጥቁር",
      "unit": "በፓኬት",
      "qty": "192",
      "marketPrice": 3214.0
    },
    {
      "num": "7",
      "name": "ወረቀት",
      "spec": "80 ግራም",
      "unit": "በካርቶን",
      "qty": "621",
      "marketPrice": 7894.0
    },
    {
      "num": "8",
      "name": "ፍሉድ",
      "spec": "ፈሳሽ",
      "unit": "በእሽግ",
      "qty": "675",
      "marketPrice": 6500.0
    },
    {
      "num": "9",
      "name": "የዉሃ ፕላስተር",
      "spec": "ትልቁ",
      "unit": "በቁጥር",
      "qty": "92",
      "marketPrice": 4510.0
    },
    {
      "num": "10",
      "name": "የዉሃ ፕላስተር",
      "spec": "ትንሹ",
      "unit": "በቁጥር",
      "qty": "7",
      "marketPrice": 3517.0
    },
    {
      "num": "11",
      "name": "ሀርድ ከቨር",
      "spec": "የወረቀት መጠረዣ",
      "unit": "በደስታ",
      "qty": "7",
      "marketPrice": 3254.0
    },
    {
      "num": "12",
      "name": "የወረቀት መቀስ",
      "spec": "የወረቀት መቁረጫ",
      "unit": "በቁጥር",
      "qty": "43",
      "marketPrice": 2147.0
    },
    {
      "num": "13",
      "name": "የእስቴኘለር መምቻ",
      "spec": "ትልቁ",
      "unit": "በቁጥር",
      "qty": "74",
      "marketPrice": 2145.0
    },
    {
      "num": "14",
      "name": "የእስቴኘለር መምቻ",
      "spec": "መካከለኛዉ",
      "unit": "በቁጥር",
      "qty": "22",
      "marketPrice": 23145.0
    },
    {
      "num": "15",
      "name": "ካርቦን",
      "spec": "ደረጃውን የጠበቀ",
      "unit": "በደስታ",
      "qty": "20",
      "marketPrice": 21457.0
    },
    {
      "num": "16",
      "name": "ፓንቸር",
      "spec": "ትልቁ",
      "unit": "በቁጥር",
      "qty": "13",
      "marketPrice": 32154.0
    },
    {
      "num": "17",
      "name": "እስቴፕለር ሽቦ",
      "spec": "ትልቁ",
      "unit": "በፓኬት",
      "qty": "5",
      "marketPrice": 6584.0
    },
    {
      "num": "18",
      "name": "የሽቦ መንቀያ",
      "spec": "ደረጃውን የጠበቀ",
      "unit": "በቁጥር",
      "qty": "20",
      "marketPrice": 7855.0
    },
    {
      "num": "19",
      "name": "አጀንዳ",
      "spec": "ባላሪንግ",
      "unit": "በቁጥር",
      "qty": "78",
      "marketPrice": 5555.0
    },
    {
      "num": "20",
      "name": "አጀንዳ",
      "spec": "2027",
      "unit": "በቁጥር",
      "qty": "3",
      "marketPrice": 25444.0
    },
    {
      "num": "21",
      "name": "የፕሪንተር ቀለም",
      "spec": "85 A",
      "unit": "በቁጥር",
      "qty": "38",
      "marketPrice": 6600.0
    },
    {
      "num": "22",
      "name": "የፕሪንተር ቀለም",
      "spec": "Sharp Toner",
      "unit": "በቁጥር",
      "qty": "20",
      "marketPrice": 294000.0
    },
    {
      "num": "23",
      "name": "የፕሪንተር ቀለም",
      "spec": "17 A",
      "unit": "በቁጥር",
      "qty": "178",
      "marketPrice": 6550.0
    },
    {
      "num": "24",
      "name": "የፕሪንተር ቀለም 19ኤ",
      "spec": "19 A",
      "unit": "በቁጥር",
      "qty": "33",
      "marketPrice": 7800.0
    },
    {
      "num": "25",
      "name": "ፕሪንተር ቀለም",
      "spec": "59 A",
      "unit": "በቁጥር",
      "qty": "35",
      "marketPrice": 19800.0
    },
    {
      "num": "26",
      "name": "የኘሪንተር ቀለም",
      "spec": "Kyocera FS2100DN",
      "unit": "በቁጥር",
      "qty": "20",
      "marketPrice": 20000.0
    },
    {
      "num": "27",
      "name": "የፕሪንተር ቀለም",
      "spec": "Laserjet pro 400 m401d",
      "unit": "በቁጥር",
      "qty": "45",
      "marketPrice": 64000.0
    },
    {
      "num": "28",
      "name": "የፕሪነተር ቀለም",
      "spec": "HPLaserjet pro MFD M130 a",
      "unit": "በቁጥር",
      "qty": "45",
      "marketPrice": 6711.0
    },
    {
      "num": "29",
      "name": "መዝገብ",
      "spec": "መካከለኛ",
      "unit": "በቁጥር",
      "qty": "35",
      "marketPrice": 23100.0
    },
    {
      "num": "30",
      "name": "እርሳስ",
      "spec": "ጥራቱን የጠበቀ",
      "unit": "በእሽግ",
      "qty": "32",
      "marketPrice": 56400.0
    },
    {
      "num": "31",
      "name": "ማርከር",
      "spec": "ፐርማነንት",
      "unit": "በእሽግ",
      "qty": "200",
      "marketPrice": 400000.0
    },
    {
      "num": "32",
      "name": "White Board marker",
      "spec": "Line width 2.0mm Quaickly dry and easly erasable Available with 4 colour",
      "unit": "በቁጥር",
      "qty": "1500",
      "marketPrice": 640000.0
    },
    {
      "num": "33",
      "name": "ካኪ ፖስታ",
      "spec": "ኤ4",
      "unit": "በደስታ",
      "qty": "31",
      "marketPrice": 240000.0
    },
    {
      "num": "34",
      "name": "ካኪ ፖስታ",
      "spec": "ኤ5",
      "unit": "በደስታ",
      "qty": "32",
      "marketPrice": 333333.0
    },
    {
      "num": "35",
      "name": "ካኪ ፖስታ",
      "spec": "ኤ3",
      "unit": "በደስታ",
      "qty": "22",
      "marketPrice": 4581.0
    },
    {
      "num": "36",
      "name": "ከለር ወረቀት",
      "spec": "ኤ4",
      "unit": "በደስታ",
      "qty": "24",
      "marketPrice": 3147.0
    },
    {
      "num": "37",
      "name": "ፍሊፕ ቻርት",
      "spec": "ደረጃውን የጠበቀ",
      "unit": "በቁጥር",
      "qty": "60",
      "marketPrice": 6174.0
    },
    {
      "num": "38",
      "name": "የፕሪንተር ቀለም ከለር",
      "spec": "በጥንድ",
      "unit": "ጥራቱን የጠበቀ",
      "qty": "10",
      "marketPrice": 5647.0
    },
    {
      "num": "39",
      "name": "የሰርተፍኬት ወረቀት ፍሬም ያለው",
      "spec": "160 ግራም",
      "unit": "በደስታ",
      "qty": "20",
      "marketPrice": 5480.0
    },
    {
      "num": "40",
      "name": "የሰርተፍኬት ወረቀት",
      "spec": "160 ግራም",
      "unit": "በደስታ",
      "qty": "20",
      "marketPrice": 5000.0
    }
  ],
  "Lot 3": [
    {
      "num": "1",
      "name": "Food Texture analyzer",
      "spec": "Measurementrange0~5000g Accuracy 0.001g Deformationdisplacementrange0~120mm Displacement accuracy: 0.001mm MEASUREMENT speed range0.01mm/s~10mm/s Speed resolution accuracy 0.01mm/s Operatingincompressionandtractionwith7’’ touch screen Choice of sensors:  10N(1kg),Resolution 0.001N(0.1g) 20N(2kg),Resolution0.001N(0.1g)  Accuracy : +/- 0.05%of the full scale Speed range : from 0.1 to 10 mm/s+/- 0.2% Motion height:240mm/Resolution:0.1mm Temperature:TheTX-700hasPT100sensor to measurethesample’stemperaturefrom-500Cto+ 300 0C Display: Force-speed –distance-temperature-time- levelofsensitivity–Date/hour-Choiceofforceunits: gram or Newton Compatible Accessories: All probes and cells Supply voltage: 90-240 VAC 50/60Hz PC Connections: RS232 Port and USB printer connection. USB Host Port – Compatible PCL/5 Dimensions andWeight:D610W340XH650mm Weight: 22-25 kg",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 6500.0
    },
    {
      "num": "2",
      "name": "Kjeldahl distiller",
      "spec": "Variablesteampower10-100% Sizeof Display 7inch,480x800pixel,touchscreen Stand-By-Mode Distillation time /sampleapprox.3.5 min Recovery>99.5 % Reproducibility± 1 % Detection limit 0.1mgNabsolute Safety door KJELDATHERM-tubeKTG250/300ml volume፡ Standard configuration Different sizes of digestion tubes can be used Different sizes of Kjeldahl-flasks can be used Connection to level control Level sensors for tanks Optional Cooling water pressure፡1 -6 bar Voltage*፡230V,50Hz Nominal wattage፡2200W Weight approx.34 kg Dimensions (WxDxH)፡527x390x697 mm and Pump calibration",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 7000.0
    },
    {
      "num": "3",
      "name": "Essential oil extraction machine",
      "spec": "Capacity:10(L/3-4hr) Power:4.5(KW/H) SupplyPower:v380/220voltage Phase: 3p Dimension(L*W*H):(1300*550*1800mm) PLC control, touch screen operation Equipment must be suitable for the co-water or water-proof distillation extraction process of conventional oils and aromatic oils in plant branches, spices and herbs, flowers, grasses and animal materials with higher oil content. The structure of the extraction equipment is exquisite And the operation is very simple.",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 98000.0
    },
    {
      "num": "4",
      "name": "Twin screw extruder",
      "spec": "EnginePower5.5 KW Engine speed-control Frequency speed control Screw diameter 30mm Screwcentraldistance26mm Speed range 0-500rpm Screw mode Building block combined First series L/D 11.6 12.7 23 Second Series L/D 9.3 15 20.6 Heating way: Heating ring Cooling way: Water Temperature scope: 20℃- 300℃Temperature precision:±1.0℃ Number of measuring temperature point Output10-25KG/H Working principle Automatic Parameter Specification Engine Power 5.5 kW Speed Control Variable Frequency Drive (VFD) Speed Control Screw Diameter 30 mm Screw Center Distance 26 mm Screw Speed Range 0–500 rpm Screw Type Modular (Building Block Combined) Twin Screw First Series L/D Ratio 11.6, 12.7, 23 Second Series L/D Ratio 9.3, 15, 20.6 Heating Method Electric Heating Ring Cooling Method Water Cooling Temperature Range 20°C–300°C Temperature Control Accuracy±1.0°C Number of Temperature Measuring Points 4 Production Capacity 10–25 kg/h",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 23000.0
    },
    {
      "num": "5",
      "name": "CO2andN2cylinder",
      "spec": "Wallthickness5.2mmto5.8mmTest pressure: 250bar/300bar Weight: 48kg/52kg Material: Steel with full gas",
      "unit": "pcs",
      "qty": "2",
      "marketPrice": 65000.0
    },
    {
      "num": "6",
      "name": "Falling number apparatus",
      "spec": "Power:600W Spec.viscositytube:internaldiameter21mm, external diameter 23mm, internal wall height22omm. PowersupplyAC22OV,50Hz Weight : 22.5 kg Overall dimension:180mm x440mm x515mm",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 23000.0
    },
    {
      "num": "7",
      "name": "Atomic absorption spectroscopy",
      "spec": "Wavelength Range: 190-900mm Wavelength Repeatability:≤0.04nm(single direction) Lampstand:8 Size: 1220*770*730mm; 800*400*900mm Focal Length: 0.1,0.2,0.4,1.0 and 2.0nm spectralBandwidth:0.1,0.2,0.4,1.0and2.0nm Wavelength accuracy: ≤±0.15nm Weight:160Kg;65Kg",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 65000.0
    },
    {
      "num": "8",
      "name": "Bench top Digital alcohol meter",
      "spec": "Range Based on density 0%v/vto100%v/vor%w/w Based on sound velocity 50 %w/w to 100 %w/w Based on refractive index 0 %w/w to 40 %w/w Accuracy Based on density 0.05%w/w (0% to90 %) 0.03%w/w (90%to100%) Based on sound velocity 0.1 %w/w Based on refractive index 0.23 %w/w Measuring temperature Based on density 0 °C to +40 °C Based on sound velocity 10 °C to +50 °C Based on refractive index 10 °C to +50 °C",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 36000.0
    },
    {
      "num": "9",
      "name": "Two side Laboratory bench with shelf and sink",
      "spec": "Heavy duty modular bench with a chemical resistant stainless steel laminated top high pressure post forming horizontal grade laminates. It shall be most suitable laboratory surface which is heat, shock, impact resistant and impervious to liquids. Modular units shall be suitable for peninsula or island configurations. The laboratory Bench shall consist of tables with tops made of 1” thick black phenolic or epoxy resin laminate that withstands moisture and resists chemicals, suitable for heavy duty lab use(Top lab plus). The chemical resistance shall show excellent resistance against acids, alkaline solutions, coloring and corrosive substances, ketones, alcohols, esters, aromatics, chlorinated and aliphatic hydrocarbons, oxidizing and bleaching substances. The benches shall also be impact resistant with rounded safety edge. 1. Bench system shall be assembled to adjustable steel or aluminum frame with slotted uprights which will support the upper shelving and work surface table frame. 2. Tubular Frames: Vertical support structure for tables, shelves and service chase designed for service lines, data and electrical cables a) Electric/data, outlets, and service supply lines are contained in the tubular frame serving as a utility chase. b) The vertical height of table shelves shall be adjustable on 1” increments and two layers of shelves above the table. c) Services including electric/data, phone, and plumbing; all terminate at the top of the vertical support/chase. d) The bench system shall be modular type 3. The benches need to be fitted (on site) to a metal carrying frame made of steel tubing in shape of 60 x 30mm with 2 mm thickness. The perpendicular steel frames shall have steel horizontal base as a feet and shall be free standing. All metal parts shall be coated with epoxy-resin powder with the most modern processes of anti-rust protection and chemical resistant. 4. The chemical resistance of the frames like the tables shall include acids, alkaline solutions, coloring and corrosive substances, ketones, alcohols, esters, aromatics, chlorinated and aliphatic hydrocarbons, oxidizing and bleaching substances. Samples shall pass test for these chemicals before delivery. The table frames shall be of modular work surface support structures allowing mechanically fastened height adjustability. That is, it shall be free standing and adjustable height work surface frames equipped with leveling device. 5. The benches shall be aesthetically appealing and durable with at least three years warranty 6. Steel ball-bearing drawer slides, multi-circuit power management, heavy-duty work surface construction, and fully welded steel assemblies are critically required in all of the cases. 7.Three drawers, modular and mountable base cabinets coated with chemical resistant epoxy resin powder. These Cabinets shall be constructed from0.8mmthickelectrogalvanized plate. All joints are welded to ensure rigidity of the cabinet carcass. The entire cabinet shall be coated with baked epoxy powder. Hinged doors and drawers shall be provided with silence pads to reduce noise during closure. 8.Ceiling panels shall have junction boxes factory a ttached for Electrical outlets, data cover plates and service fixtures attachment and field outlets, installed. 9. Size: The size of the tables shall be in three categories a) Modulartypetablesof1.83x 0.92m sized with stainless steel coated frame with chemical resistant epoxy resins, heavy duty frame to support the table Quantity: 8 tables Stand Double sided work station starter and adder for each One Back panel for each Two Top support Bracket LT and Two RT for each stand Bolts and washers to fix the frame, top support bracketsLength:2.14m Width:0.30mQuantity: 8 Shelf Phenolic resin coated shelf with steel (stainless) frame to be mounted above each table shall be of b. Material manufactured by Top Lab Plus. b. Shelf platforms shall be available in phenolic resin, or epoxy powder coated cold rolled steel with rims size: 1.77 x 0.36 m Quantity: 10 over bench shelves 4 under bench shelves c) Modular type tables of 1.22 x 0.92 m sized with stainless steel frames laminated with chemical resistant epoxy resins, Quantity: 8 tables Stand Two Top support Bracket Left Triangle and Two Top support Bracket Right Triangle for each stand. Bolts and washers to fix the frame, top support brackets Back panel for each. Length:2.14m Width: 0.30m Quantity: 8 Shelf Phenolic resin coated shelf with steel (stainless) frame to be mounted above each table shall be of • Material manufactured by Top Lab Plus standard. • Shelf platforms shall be available in phenolic resin, or epoxy powder coated cold rolled steel with rims size: 1.16 x 0.36 m (should fit in to table specification) Quantity:8 over bench shelves 4under bench shelves Modular type tables of 0.94 x 0.94m sized with a stainless steel frames laminated with chemical resistant epoxy. This is to join two sets of Benches to make peninsular type of layout. Quantity:8 tables Adjustable leg support sub-assembly to support the tables a tone corner with inserts in the underside of the corner work surface to fix the adjustable leg support With shelves and sink and all accessories are mandatory 1. Worktop 2. Drip cup with water outlet 3. Service panel with sockets 4. Service panel with corner valves 5. Storage area, service duct 6. Service duct element 7. Multipurpose upright 8. Media supply duct Suspended under bench unit",
      "unit": "pcs",
      "qty": "2",
      "marketPrice": 27000.0
    },
    {
      "num": "10",
      "name": "Turnable spiral dough mixer",
      "spec": "- Type: Spiral mixer with turnable bowl - Capacity:250 Liters - FlourCapacity:150kgDoughcapacity:Upto240kg(with60%hydration) Batch duration: 8–15minutes per cycle Material Construction MixingBowl:SS304 SpiralArm:SS304orSS316 Machine Frame: Epoxy-coated steel or full SS304 (optional) SafetyGuard:SS304withtransparent polycarbonate cover Gaskets/Seals:Food-grade rubber or silicone Mixing Type Spiral with rotating bowl Spiral Speeds: 2speeds(Slow:~100 RPM/Fast: ~200RPM) BowlSpeed:2speeds(Slow:~10RPM/Fast: ~20 RPM) Timer: Dual timers for low and high speed SpiralMotorPower:5.5–7.5kW(customizable) BowlMotorPower:1.5–2.2 kW Hydraulic Lifting Power:1.1 1.5kW(for turnable lift table bowl) Voltage/Frequency:380V,3Phase,50/60Hz (other options available) Total Power:~10–12 kW Dimensions (L×W×H) Approx.1600mm× 1050 mm × 1600 mm NetWeight~850–1100kg Control Panel Digital control with touch interface or electro-mechanical timers Independent timers for1stand2nd speed Emergency stop button Reverse bowl rotation function(optional) Manual/automatic operation modes Turnable Bowl System Bowl Movement 180°or360° rotation (mechanical/hydraulic) Compatibility Dough divider/lifter interface ready Locking Mechanism Automatic bowl lock during mixing",
      "unit": "Pcs",
      "qty": "1",
      "marketPrice": 7950000.0
    },
    {
      "num": "11",
      "name": "Belt connected Dough Cutter/ divider/and rounding machine",
      "spec": "Continuous cutting machine Dough Weight Range: 50–1000grams(adjustable) Capacity1,200–2,500pieces/hour(depending on weight and dough type) Dough Type Compatibility: Soft, medium, and semi-hard dough(hydration: 55%–70%) Voltage:380V Power: 1.5kw Dimension: 880*1200* 1500mm Hopper Capacity60–80 kg of dough Accuracy±2–5%dependingondoughconsistency Divider Control PLC-controlled with HMI for weight and speed adjustment Conveyor belt transfer system from cutter to conical rounder machine Construction Material: Food-grade stainless steel (AISI304), with Anodized aluminum and hygienic plastic parts. Dough Conveyor System Type Food-grade PU or PVC belt with stainless steel frame Belt Width 400–600 mm Conveyor Length Customizable: typically 2–3 meters Speed Control: Variable frequency drive (VFD) Safety Emergency stop switches, sensors, and protective guards Conical rounding machine Capacity:50-500g;2500pcs/h Voltage: 380V Power: 0.5kw Dimension:850*850*1450mmMachine function Cutting, transferring and rounding Providing together those listed above in Number 18.1 and 18.2 Machines is mandatory not acceptable to provide apart.",
      "unit": "Pcs",
      "qty": "1foreach",
      "marketPrice": 7950000.0
    },
    {
      "num": "12",
      "name": "Gluten tester (gluten washing apparatus",
      "spec": "SampleSize:10 gor 25g Gluten Extraction Method: Mechanical washing using salt solution (2% NaCl) GlutenSeparationSieveMeshsize:710microns Control System Timer: 0–10 min Start/Stop functions Manual or automatic cycle options WaterTankCapacity:1–2liters(for salt solution preparation) Construction Material Body: Powder-coated mild steel or stainless steel Contact parts: Food-grade stainless steel(AISI 304) and BPA-free plastic Power Supply:220–240V,50/60Hz(single phase) Optional Add-ons Gluten index centrifuge(3000 ±10 rpm) Drying oven for dry gluten content Balance(0.001g readability) Dimensions: Approx. 450×300×400 mm Weight:~15–20kg(depending on model)",
      "unit": "Pcs",
      "qty": "1",
      "marketPrice": 3500.0
    },
    {
      "num": "13",
      "name": "Farinograph",
      "spec": "Type: Digital / Computer-controlled / Touch screen interface (modern models) Capacity50gor300gfloursample(standard mixing bowl sizes) Measurement Units: Farinograph Units(FU);1 FU = 1 Brabender Unit = 1 g∙cm torque Torque Range0–1000 FU Mixing Speed63 ± 2 rpm (standard) Temperature Control30±0.2°C(via integrated water jacket system) Water Addition Manual or Automatic burette system Power Supply 220V/50Hz/Single Phase(typical) Display &SoftwarePC-based software for curve plotting and result calculation (modern digital models) Test Parameters Measured Water absorption%, Dough development time, Dough stability, Softening, MTI (Mixing Tolerance Index) Data Output: Graphical (Farinogram), PDF/CSV export Material: Mixing bowl and blades: Stainless steel",
      "unit": "Pcs",
      "qty": "1",
      "marketPrice": 12000.0
    },
    {
      "num": "14",
      "name": "Coffee cup for cup testing",
      "spec": "Capacity 250ml Ceramic",
      "unit": "pcs",
      "qty": "25",
      "marketPrice": 55500.0
    },
    {
      "num": "15",
      "name": "Food grade plastic coffee Collecting tools for coffee bean cupping",
      "spec": "Material: Plastic Dimension L*W: 220mmx142mm Color: different color",
      "unit": "pcs",
      "qty": "50",
      "marketPrice": 67000.0
    },
    {
      "num": "16",
      "name": "Coffee beans round vibrating screen machine rotary separator for sieving and grading",
      "spec": "Transmission Structure: Vibrating Screen Works: Vibration Motor Material: Carbon Steel/Stainless Steel304/316 Layer(S):1-4Layers Feature: High precision/low noise Mesh Size: 2-500mesh Capacity:10kg-1tons/H",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 3500.0
    },
    {
      "num": "17",
      "name": "Laboratory scale coffee roaster",
      "spec": "Technical Specifications Capacity 100-500g/ batch /drum Roasting time 05 –15 minutes per batch Velocity of roasting drum 60 RPM Power installed Power source 50-60Hz/220-240V Single phase Motor: 25 W Suction fan: 370W Heat lamp: 3000W/ 6pcs Dimensions (mm) L x W x H: 560 x 430 x 560 Net Weight 25 kg two or couple drum (mandatory) Note: Control system must be digital or touch screen Body Stainless steel with full accessories (e.g. Tasting cup, Spoon Etc",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 27000.0
    },
    {
      "num": "18",
      "name": "Coffee filling and sealing machine",
      "spec": "Machine Type Vertical Form Fill Seal Product Ground coffee or whole coffee beans Packaging Speed 15 – 60 bags per minute (depending on weight & bag size) Filling Range 10 g – 1,000 g (adjustable) Packaging Material Laminated film, aluminum foil, kraft paper, PET/PE, etc. Bag Type Pillow bag, gusseted bag, quad seal, flat bottom Bag Size Width: 80–250 mm; Length: 100–350 mm Weighing System Auger filler (ground coffee) or multi-head scale (beans) Sealing System: Heat sealing with PID temperature control Power Supply 220V / 380V, 50/60Hz (single or three-phase) Power Consumption 2.5 – 6 kW Control Panel PLC with touch screen interface (mandatory Construction Material Stainless steel (SS 304) Compressed Air Required: 0.6 – 0.8 MPa Dimensions Approx. 1500 × 1200 × 2000 mm Weight 350 – 600 kg",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 66300.0
    },
    {
      "num": "19",
      "name": "Fully automated yogurt processing machine",
      "spec": "Capacity150L Materialsus304stainlesssteel Heating power 380V/12kw Mixing speed 2300 (r/min) Temperature control range adjustable from40 to 90 ℃ Single filter Voltage::380V,50hzPower: 1.1kw Weight: 20kg Milk Homogenizer Materials Inlet and Outlet(mm):40 Rated Milk Flow:200L/h Maximum pressure :25MPa Weight :500kg Dimension:1010*616*975mm Power: 4kwVoltage::380V,50hz Pasteurization Tank 150L Tank Volume 150L Capacity100kg/time Sterilizationtemperature45-90degrees(adjustable) Power9KW Voltage::380V,50hz Dimensions 800*750*1230mm Weight 100kg Yogurt Fermenter Tank 150L Tank Volume 150L Capacity 100kg/time Sterilization temperature 45-90 degrees (adjustable) Power 9KW Voltage:380V, 50hz Dimensions 800*750*1230mm Weight 100kg Milk Cooling Tank Tank Volume 150L Material: SUS304 Power : 2kwVoltage::380V,50hz WithstirringSpeed:36r/min Insulation layer 5mm Dimension :1500*1000*1350mm Milk pump Flow :1t/h Material:304stainlesssteel Size: 400*180*240mm Material: SUS304 Carbide mechanical seal Power: 1.5kw Pipes, valves, bases Equipment base Stainless steel pipes Stainless steel elbows and tees Stainless steel connecting clamps and gaskets Stainless steel manual quick installation clamp butterfly valve Filling and packaging Machine Type: Automatic Filling Capacity: 500mL (adjustable); Optionalupto1Liter Filling Speed:20–60cups/min(depends on machine and volume) Container Type: Plastic cups, bottles, pouches, or glass jars Filling Mechanism: Piston pump/Servo-driven / Volumetric dosing No. of Filling Heads:1 to 4 heads (depending on capacity and automation) Material of Construction: Food-grade Stainless Steel (SS304/SS316); GMP compliant HopperCapacity:20–50liters(jacketed hopper with agitation optional) Sealing System: Heat sealing (for cups with foil); screw capping (for bottles) Accuracy: ±1–2% of filling volume Control System: Digital PLC with HMI Touch screen (for automatic models) PowerRequirement:220V/50Hz/Single phase or 380V / Food-grade Stainless Steel (SS304/SS316); GMP compliant Dimensions:Approx.1200×800×1600mm",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 75000.0
    },
    {
      "num": "20",
      "name": "Cheese making machine /mozzarella",
      "spec": "Function: Complete processing of mozzarella: curd heating, stretching, kneading, forming Capacity:20–100kg/batch(customizable models) Material: Food-grade Stainless Steel(SS304orSS316) Main Components : Curd cooker-stretcher, kneading chamber, cheese former, and hot water jacket Stretching Type: Mechanical or paddle-type (automatic or semi-auto) Heating System: Hot water jacket (electric/steam);Temprange:40°C–90°C Agitation/Kneading: Paddle or screw type; Variable speed motor (0.5–1.5 kW) Cheese FormingManual mould filling or integrated forming head (balls, blocks) Water Inlet/Drain Yes–for heating water circulation and whey removal Control Panel Digital or analog control for temp, mixing, and timing PowerRequirement:220V/50HzSinglePhaseor 380V Three Phase Hopper Volume 50–150L Cleaning CIP compatible; Easy-to-dismantle parts",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 96780.0
    },
    {
      "num": "21",
      "name": "Spray dryer",
      "spec": "Application: Converts liquid/slurry food into powder form using hot air EvaporationCapacity:2000mL/hr(lab-scale) Drying and product collection Chamber Material shall be SS304 (for food-grade use) Feed Flow Rate: 300 – 2000 mL/h (adjustable via peristaltic pump) Drying Chamber Material:SS304(for food-grade use) glass is unacceptable FeedFlowRate:300–2000mL/h(adjustable via peristaltic pump) Inlet Temperature 100–300°C(digitally adjustable) OutletTemperature:50–140°C(varies with product and inlet temp) Heating System: Electric heater(1–3kW);PID temperature control Atomization Type Two-fluid nozzle or centrifugal disc (depends on model) ParticleSizeRange:1–25microns(adjustable with air and feed rate) PowerSupply:220V/50Hz/ Single Phase -Control Interface: Touch screen PLC or digital display (temperature, air flow, feed rate) -Dryer Dimensions~650×500×1200mm (compact lab bench model) -Weight:40–80kg(approx. ,depending on build) -Collection System Cyclone separator with powder collector flask -Safety Features: Over-temperature protection, emergency stop, leakage detection",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 222300.0
    },
    {
      "num": "22",
      "name": "Portable PH meter",
      "spec": "pH Range:-2.00 to20.00pH pH Resolution: 0.1 pH,0.01 pH pH Accuracy:±0.01pH IP65waterproof. Support for USB communication. 15points calibrationwithStandardRecognition. typical floor model)",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 500000.0
    },
    {
      "num": "23",
      "name": "Slice bread baking pan",
      "spec": "Carbon coated Strong Standard",
      "unit": "pcs",
      "qty": "12",
      "marketPrice": 63200.0
    },
    {
      "num": "24",
      "name": "Water Deionizer/ Purifier -10L/H",
      "spec": "Model: SCSJ-I-10L Water Output Type: RO water outlet*1 and DI water outlet*1 Water Output Speed: 10L/H Purifying Procedure: PF + AC + RO + DI Water Supply Requirement: Inlet water pressure 0.1~0.3Mpa; water quality meets GB5749; temperature 5~45℃ Environmental Requirements: Temperature 15~35℃; Relative Humidity ≤80% Purification System: 10\" PP filter *1 10\" active carbon filter *2 50GPD RO membrane *1 Deionization purification column *2 DI Water Quality: Resistivity: 10~18.25MΩ•cm Conductivity: 0.055~0.1μs/cm Heavy Metal: <0.1ppb Particle: <1/ml Bacteria: <0.1cfu/ml RO Water Quality: Ion Rejection Rate: 96%~99% Organic Rejection Rate: >99% Particles and Bacteria Rejection Rate: >99% Flow Rate: 167ml/min Consumption: 46W Power Supply: AC220V, 50Hz; 110V, 60Hz (Standard); AC220V, 60Hz; 110V, 50Hz (Optional) Standard Configuration: Main body Instrument Size (W×D×H): 390×400×503mm Package Size (W×D×H): 500×520×650mm Gross Weight: 27kg",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 27100.0
    },
    {
      "num": "25",
      "name": "Bostwick Consistometer",
      "spec": "Portable and easy to clean Stainless steel construction Corrosion resistant Engravedscalewith0.5cmgraduations Ensures accurate results Spring-loaded door prevents premature sample flow",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 66000.0
    },
    {
      "num": "26",
      "name": "Micro plate reader, elisa plate reader, vertical 8 optical channels",
      "spec": "Measurement Channel: Vertical 8 optical channels Plate Type: 96-well micro plate Wavelength Range: 340~850nm Filter: Standard 5 wavelengths of 340, 405, 450, 492, 630nm Optional: Up to 10 wavelengths Linear Range: 0.000~3.000Abs Reading Range: 0.000~4.500Abs Resolution: 0.0001Abs Repeatability: CV≤0.2% Stability: ≤±0.003Abs/10min Sensitivity: ≥0.01L/mg Channel Difference: ≤0.02Abs Vibration Plate Function: 5 kinds of vibration plate function, adjustable 0~255s Incubation Function: Time Range: 0~60min Incubation Temp. Range: RT+4℃~50℃ Software: Standard Detection Mode: Single/double wavelength Qualitative: Open CUT-OFF decision formula, supports judgment condition input, validity condition input, grey area setting, etc. Quantitative: Supports linear, semi-log, natural log, log-log, point-to-point, four-parameter fitting, etc. Display: 10.1 inch color touch capacitive screen Operating Mode: Touch screen with capacitive stylus, supports external keyboard and mouse Printer (Optional): Supports external USB, RJ45, and other universal interface printers (A4 printer optional) Interface: USB2.0*4, RJ45 network port*1, RS-232*1 Power Supply: AC100~240V, 50/60Hz Instrument Size (W*D*H): 495*340*370mm Package Size (W*D*H): 610*440*475mm Net/Gross Weight: 12/14kg",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 70000.0
    },
    {
      "num": "27",
      "name": "Vortex Mixer, Speed Range 0~2800rpm",
      "spec": "Model BK-VX1 Shaking Mode Orbital Orbital Diameter 4mm Motor Type Shaded pole motor Speed Range 0~2800rpm Operation Mode Jog, continuous, adjust the speed. Rotation Control Step less speed regulation Power Consumption 40W ℃; Working Environment Temperature: 5-40Humidity:≤80% Power supply 220V, 50/60Hz; 110V,60Hz Standard Accessory Bowl adapter, Flat type adapter Optional Accessory 60micro tube plate, Microplate adapter, Tray type adapter(9*50ml or 11*50ml) External Size (W*D*H) 152*152*185mm Package Size (W*D*H) 250*230*220mm Gross Weight 3.8kg",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 3000.0
    },
    {
      "num": "28",
      "name": "Tray dryer",
      "spec": "Type: Commercial Air Convection Tray Dryer. Capacity: 24 trays – 48 trays (~50–100 kg batch loading). Tray Size: ~400 x 600 mm or 600 x 800 mm. Trays Material: SS304 mesh or perforated trays. Heating Source: Electrical heating elements (options for steam/gas). Temp Range: Ambient to ~150°C (Adjustable PID control). Airflow: Recalculating cross-flow air circulation. Cabinet: Double-wall insulated cabinet. Material: Inner and outer SS304.",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 4000.0
    },
    {
      "num": "29",
      "name": "Yogurt making incubator",
      "spec": "Type: Specialized Yoghurt Incubation Cabinet/Chamber. Capacity: 100 L per batch Temp Range: Precise incubation (~35°C to 45°C) and option for automatic rapid cooling (~4°C) after fermentation. Accuracy: PID micro-controller with ±0.1°C accuracy. Uniformity: Integrated forced air circulation for even temp distribution. Trays/shelves: Multiple SS304 wire shelves or option for pot-crate tracks. Material: Stainless steel interior and exterior.",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 67000.0
    },
    {
      "num": "30",
      "name": "Yogurt capping machine",
      "spec": "Type: Semi-Automatic Hand-Operated/Pneumatic Capping Machine. Capping Type: Screw cap or foil-sealing (Specify style). Cap Diameter: Adjustable to standard yogurt pot sizes (~30–90 mm). Features: Automatic induction heat sealing (if foil sealing). Motor: 0.5 kW",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 33000.0
    },
    {
      "num": "31",
      "name": "Moisture analyzer, Range 120g",
      "spec": "Maximum Sample Weight: 120 g Readability: 0.1% Calibration: External weight calibration Dimensions: (W×D×H) 310 mm × 205 mm × 200 mm Operating Temperature: 13°C to 25°C Heating Source: Halogen Lamp (Ring 450 W) Measuring Disc: Diameter 90 mm",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 2000.0
    },
    {
      "num": "32",
      "name": "Bench top PH meter",
      "spec": "Type: Multi-Parameter Bench top Meter. Accuracy: ±0.01 pH. PH Range: -2.00 to 16.00 pH. Resolution: 0.01 pH. Features: ATC (Automatic Temperature Compensation) probe (0°C to 100°C), 1- to 5-point calibration, backlit LCD, USB data export. Probes: Combined glass pH electrode and temperature probe",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 4600.0
    },
    {
      "num": "33",
      "name": "Bench top bomb calorimeter",
      "spec": "Type: Isoperibol Automated Bomb Calorimeter. Resolution: 0.0001 K temperature resolutions. Analysis Time: ~15–25 min Reproducibility: RSD ≤ 0.15% (benzoic acid test). Range: 0–50,000 J energy measurement Oxygen Filling: Semi-automatic/automatic.",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 200.0
    },
    {
      "num": "34",
      "name": "Laboratory microwave oven",
      "spec": "Technical Parameter / Feature System Specifications & Data Details Equipment Type Industrial Microwave Drying Equipment Model Dimensions (L × W × H) 11,000 × 1,680 × 1,800 mm Total Equipment Weight 800 kg Material of Construction SUS304L Stainless Steel (High-grade corrosion and heat resistant) Operating Voltage Options 110 V / 220 V / 380 V / 480 V (Configurable to regional power grids) Power Output Range 10 kW – 200 kW (Scalable/Adjustable Capacity) Primary Heating Method Electric Heating / Microwave Electromagnetic Field Alternation Core Components Included PLC (Programmable Logic Controller), Motor, Gearbox, Gear, Pump, Bearing, Engine Target Industrial Applications: Food Processing",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 1000.0
    },
    {
      "num": "35",
      "name": "Food image analyzer",
      "spec": "Equipment Name Food Image Analyzer Equipment Type Laboratory Digital Food Image Analysis System Application Food quality evaluation, research, quality control, and teaching laboratories Operating Principle High-resolution digital imaging combined with artificial intelligence (AI) and computer vision algorithms Image Sensor 24 MP CMOS Color Camera Camera Resolution 6000 × 4000 pixels Lens Type Industrial Auto-Focus Macro Lens (12–50 Lighting System Integrated Adjustable LED Ring Light (5500 K Daylight) Sample Stage Matte Black Anti-Reflective Platform (300 × 300 mm) Maximum Sample Size 300 × 300 × 150 mm Minimum Detectable Particle Size 0.05 mm Image Acquisition Time <2 seconds Analysis Time 2–10 seconds per sample Measured Parameters Size, Shape, Color (RGB, HSV, Lab*), Surface Defects, Particle Count, Foreign Material Detection, Uniformity, Texture Optional Analysis Modules Grain grading, Fruit quality, Vegetable defect detection, Meat Measurement Accuracy ±0.1 mm (dimensional analysis) Repeatability ≥99% Software Platform Windows-Based Food Vision Analysis Software Artificial Intelligence Functions Automatic food classification, defect recognition, grading, and quality prediction Touch screen Display 15.6-inch Full HD Capacitive Touch Screen Operating Languages English, Spanish, French, German, Chinese Data Storage1 TB SSD Internal Storage Connectivity USB 3.0, Ethernet, Wi-Fi, HDMI Output Formats PDF, Excel, CSV, JPEG, PNG Power Supply 100–240 VAC, 50/60 Hz Power Consumption 150–300 W Dimensions (L × W × H) 650 × 500 × 700 mm Equipment Weight 35–45 kg Construction Material SUS304 Stainless Steel and Powder-Coated Aluminum Frame Environmental Conditions 10–35°C; Relative Humidity: 20–80% (Non-condensing)",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 6100.0
    },
    {
      "num": "36",
      "name": "Vacuum steam sterilizer",
      "spec": "• Chamber Capacity 100 Liters • Chamber Dimensions Φ350 × 570 mm • Maximum Working Pressure 0.22 MPa • Maximum Working Temperature 134°C • Temperature Selection Range 105°C to 134°C • Sterilization Timer Range 0–99 minutes • Drying Timer Range0–99 minutes • Temperature Uniformity≤ ±1°C • Ultimate Vacuum Pressure−0.08 MPa (−0.8 bar) • Power Supply RequirementsAC220 V, 50 Hz • Power Consumption2.0 kW • Overall Dimensions (D × W × H)680 × 480 × 455 mm • Net Weight 53kg Weight 57kg",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 81000.0
    },
    {
      "num": "37",
      "name": "Bowl /container/ stainless steel",
      "spec": "Capacity 30 litter Material Composition food-grade SUS304 or SUS316L Stainless Steel Finish Type High-glass mirror polish (interior and exterior) for easy cleaning and corrosion resistance Lid Design Removable, close-fitting flat drop-on lid with a welded center utility handle grab handles for secure lifting Handling Setup Dual heavy-gauge, spot-welded side Base Construction Reinforced, stepped-base rim design for added structural rigidity and heat distribution",
      "unit": "pcs",
      "qty": "4",
      "marketPrice": 97100.0
    },
    {
      "num": "38",
      "name": "Peanut butter grinder",
      "spec": "Capacity: 500 Kg/Hour Motor power: 25 HP Operation mode: Automatic Usage/application: Grinding of peanut butter Electricity connection: Three Phase Material of construction (MoC): Full AISI 304 or AISI 316 stainless steel structure to comply with strict food safety standards Rotational speed: Approx. 2,800-3,600RPM handled via a variable frequency drive (VFD) for precision speed control. Output product texture: Continuous adjustment from coarse/crunchy paste down to ultra-smooth, homogenized liquid peanut butter. Grinding gap precision: Micrometric adjustment wheel ranging from 0.05 mm (50 μm to 2.0 mm). Cooling system: Integrated double-walled water cooling jacket around the grinding chamber. Inlet feed: Conical oversized hopper with safety grate, option for an integrated screw feeder to force-feed dense materials evenly. Outlet discharge: Hygienic recirculation loop and direct-out pipe with standard sanitary fittings. Seal system: Food-grade double mechanical seal with water flushing capabilities to completely prevent product leakage into the motor bearing housing. Operator control panel: Touch screen HMI Panel ] ---> [ PLC Logic Controller ]",
      "unit": "pcs",
      "qty": "2",
      "marketPrice": 27810.0
    },
    {
      "num": "39",
      "name": "Multi-purpose automatic Coffee packaging machine",
      "spec": "Production Capacity: 50bag/min Weight (KG)：2000 Controlling system Programmable Logic Controllers (PLC) Voltage: 220V Material: Stainless Steel (Food grade) Feature: Automatic Flexible Nitrogen Usage bag sealing",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 33333.0
    },
    {
      "num": "40",
      "name": "Coffee grinder specifications",
      "spec": "Blade: 200 mm Steel Body material: Cast aluminum Dimensions: 63*45*160 cm Weight: 230 Kg Cooling System: Double Sided Capacity scales with target particle size (micron range); finer grinding results in lower throughput. Motor Power4.0–5.5 kW (7.5 HP) Heavy-duty, continuous-duty industrial induction motor designed for prolonged operation Power Supply380–400 V, 50–60 Hz Three-Phase (3 Ph) Requires industrial three-phase electrical infrastructure to provide high starting torque and stable operation. Grinding Disc (Burr) Type Flat Disc Burrs (Horizontal or Vertical Axle Configuration) Precision-engineered cutting tooth profile ensures uniform particle size distribution and consistent grinding performance. Disc DiameterØ180–Ø200 mm Large grinding surface increases throughput while minimizing heat generation during operation. Disc Material AISI 4140 Alloy Steel or Hardened Chrome Steel Heat-treated to50–55 HRC hardness; wear-resistant and suitable for sharpening to extend service life. Cooling System Active Dual Air Cooling (Turbine or Twin Fans) Forced-air ventilation prevents overheating, preserving coffee aroma and flavor during continuous grinding. Hopper Capacity15–25 kg Food-grade hopper equipped with a manual slide gate/valve for controlled been feeding. Adjustment Mechanism Step less / Micrometric Grinding Adjustment Enables precise and continuous adjustment from ultra-fine Net Weight 230 kg, Heavy-duty cast aluminum or steel frame minimizes vibration and enhances grinding stability. Overall Dimensions (W × D × H) 600 × 500 × 1500 mm (63*45*160 cm) Compact industrial foot print suitable for commercial coffee roasting Operating system: Programmable Logic Controller (PLC)/automatic",
      "unit": "pcs",
      "qty": "1",
      "marketPrice": 555555.0
    },
    {
      "num": "41",
      "name": "Pain strip",
      "spec": "2 ዓመትበላይአገልግሎትዘመንያለው",
      "unit": "vial",
      "qty": "100",
      "marketPrice": 64000.0
    },
    {
      "num": "42",
      "name": "Multivitamin",
      "spec": "2 ዓመትበላይአገልግሎትዘመንያለው",
      "unit": "Vial",
      "qty": "50",
      "marketPrice": 250000.0
    },
    {
      "num": "43",
      "name": "Invermectin",
      "spec": "2 ዓመትበላይአገልግሎትዘመንያለው",
      "unit": "vial",
      "qty": "30",
      "marketPrice": 47000.0
    },
    {
      "num": "44",
      "name": "Oxy 20 percent",
      "spec": "2 ዓመትበላይአገልግሎትዘመንያለው",
      "unit": "vial",
      "qty": "50",
      "marketPrice": 40000.0
    },
    {
      "num": "45",
      "name": "Procainpercline",
      "spec": "2 ዓመትበላይአገልግሎትዘመንያለው",
      "unit": "vial",
      "qty": "50",
      "marketPrice": 60000.0
    },
    {
      "num": "46",
      "name": "Iodine tincture",
      "spec": "2 ዓመትበላይአገልግሎትዘመንያለው",
      "unit": "Liter",
      "qty": "5",
      "marketPrice": 7894.0
    },
    {
      "num": "47",
      "name": "Balling gun",
      "spec": "2 ዓመትበላይአገልግሎትዘመንያለው",
      "unit": "Number",
      "qty": "2",
      "marketPrice": 64711.0
    },
    {
      "num": "48",
      "name": "Fortified Calcium powder",
      "spec": "2 ዓመትበላይአገልግሎትዘመንያለው",
      "unit": "Kg",
      "qty": "25",
      "marketPrice": 6478.0
    },
    {
      "num": "49",
      "name": "Calcium fluid",
      "spec": "2 ዓመትበላይአገልግሎትዘመንያለው",
      "unit": "Liter",
      "qty": "3",
      "marketPrice": 56444.0
    },
    {
      "num": "50",
      "name": "Nitrogen container",
      "spec": "2 ዓመትበላይአገልግሎትዘመንያለው",
      "unit": "Number",
      "qty": "2",
      "marketPrice": 470000.0
    }
  ]
};