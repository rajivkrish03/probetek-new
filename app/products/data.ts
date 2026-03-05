export type ProductItem = {
    name: string;
    link: string;
};

export type ProductCategory = {
    id: string;
    category: string;
    icon: string;
    description: string;
    items: ProductItem[];
};

export const productsData: ProductCategory[] = [
    {
        category: 'Power Electronics Test Solutions',
        id: 'power-electronics',
        icon: '⚡',
        description: 'Advanced AC/DC power sources, electronic loads, and automated test systems for power electronics validation.',
        items: [
            { name: 'AC Power Source', link: 'https://www.ngi-tech.com' },
            { name: 'DC Power Supply', link: 'https://www.ngi-tech.com/Dc-power-supplies?_gl=1*ihdzu*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
            { name: 'Regenerative Power Supply', link: 'https://www.ngi-tech.com' },
            { name: 'AC/DC Electronic Load', link: 'https://www.ngi-tech.com/Dc-electronic-loads?_gl=1*ihdzu*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
            { name: 'Regenerative AC/DC Load', link: 'https://www.ngi-tech.com/' },
            { name: 'Digital Power Meter', link: 'https://www.ngi-tech.com/' },
            { name: 'Automatic Test System (ATS)', link: 'https://www.ngi-tech.com/' },
            { name: 'Battery Simulator', link: 'https://www.ngi-tech.com/Battery-simulators?_gl=1*x30pwn*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
            { name: 'Electrical Safety Analyzer', link: 'https://www.ngi-tech.com/' },
            { name: 'Power Analyzer', link: 'https://www.ngi-tech.com/' },
            { name: 'Fuel Cell Test Systems', link: 'https://www.ngi-tech.com/Fuel-cell-test-series?_gl=1*16wwr7y*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
            { name: 'Supercapacitor and Battery Test Systems', link: 'https://www.ngi-tech.com/Supercapacitor-and-battery-test-series?_gl=1*16wwr7y*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
            { name: 'Modular Instruments (DAQ)', link: 'https://www.ngi-tech.com/Modular-instruments?_gl=1*16wwr7y*_up*MQ..*_gs*Z29vZ2xl&gclid=Cj0KCQiA0KrJBhCOARIsAGIy9wCf8ZjBUhUvDWL4T87dL57QBis4nifNsCMGq3mjk8FCOq3x_5kQzdsaAhE9EALw_wcB&gbraid=0AAAAABMLPHfeLS45e-FnWSKt10y7heOSQ' },
        ],
    },
    {
        category: 'Environmental Chambers / Climatic Test Chambers',
        id: 'environmental-chambers',
        icon: '🌡️',
        description: 'Full range of temperature, humidity, UV, and environmental testing chambers for product reliability and compliance testing.',
        items: [
            { name: 'Temperature Humidity Test Chambers', link: 'https://www.sanwood.cc/Temperature-Humidity-Test-Chamber-pl577699.html' },
            { name: 'Battery Test Chambers', link: 'https://www.sanwood.cc/Battery-Test-Chambers-pd46791355.html' },
            { name: 'Rapid Temperature Change Test Chambers', link: 'https://www.sanwood.cc/Rapid-Temperature-Change-Test-Chamber-pl514009.html' },
            { name: 'Thermal Shock Chambers', link: 'https://www.sanwood.cc/Thermal-Shock-Chamber-pl30121.html' },
            { name: 'UV Accelerated Aging Test Chambers', link: 'https://www.sanwood.cc/UV-Lamp-Weathering-Test-Chamber-pl585009.html' },
            { name: 'Xenon Test Chambers', link: 'https://www.sanwood.cc/Xenon-Lamp-Weathering-Test-Chamber-pl525009.html' },
            { name: 'Altitude Test Chambers', link: 'https://www.sanwood.cc/Altitude-Test-Chamber-pl20121.html' },
            { name: 'Precision High Temperature Ovens', link: 'https://www.sanwood.cc/' },
            { name: 'Accelerated Aging Test Chambers', link: 'https://www.sanwood.cc/' },
            { name: 'Sand Dust test chambers', link: 'https://www.sanwood.cc/Dust-Test-Chamber-pl565009.html' },
            { name: 'Rain Test Chambers', link: 'https://www.sanwood.cc/Rain-Test-Chamber-pl545009.html' },
        ],
    },
    {
        category: 'Electric Power System Testing',
        id: 'electric-power-system-testing',
        icon: '🔌',
        description: 'Comprehensive power system test solutions including relay protection testing, IEC61850 substation testing, and EV charging verification.',
        items: [
            { name: 'IEC61850 Digital Substation Testing', link: 'https://www.ponovo.net/iec61850-digital-substation-testing/' },
            { name: 'Relay and Protection Testing', link: 'https://www.ponovo.net/relay-and-protection-testing/' },
            { name: 'Primary Injection Testing', link: 'https://www.ponovo.net/primary-injection-testing/' },
            { name: 'UHVDC(Untro High Voltage DC) Testing', link: 'https://www.ponovo.net/uhvdc-untro-high-voltage-dc-testing/' },
            { name: 'EV & Recharging Testing', link: 'https://www.ponovo.net/ev-recharging-testing/' },
            { name: 'Railway Testing', link: 'https://www.ponovo.net/railway-testing/' },
        ],
    },
    {
        category: 'Power Electronics Research Products',
        id: 'power-electronics-research',
        icon: '🔬',
        description: 'Cutting-edge research-grade power electronics equipment and modular systems for advanced academic and industrial R&D.',
        items: [
            { name: 'PLUGY HP | Power Modules', link: 'https://www.pemodule.com/plugy-hp' },
            { name: 'PLUGY HP | Control Boards', link: 'https://www.pemodule.com/plugy-system-controller-modules' },
            { name: 'LEG Inverter', link: 'https://www.pemodule.com/Plugy%20Discovery/discovery-system-leg-inverter' },
            { name: 'Buck Converter', link: 'https://www.pemodule.com/Plugy%20Discovery/buck-converter' },
            { name: 'Boost Converter', link: 'https://www.pemodule.com/Plugy%20Discovery/boost-converter' },
            { name: 'Buck Boost Converter', link: 'https://www.pemodule.com/Plugy%20Discovery/buck-boost-converter' },
            { name: 'Gate Driver and Transducer', link: 'https://www.pemodule.com/Plugy%20Discovery/gate-driver-and-transducer' },
            { name: 'Intelligent Power Modules', link: 'https://www.pemodule.com/Plugy%20Discovery/intelligent-power-modules' },
            { name: 'BLDC Motor', link: 'https://www.pemodule.com/Plugy%20Discovery/bldc-motor-driver' },
            { name: 'Rack Mount Resistive Load', link: 'https://www.pemodule.com/Rack%20Mount%20Loads/rack-mount-resistive-load' },
            { name: 'Rack Mount Inductive Load 6L', link: 'https://www.pemodule.com/Rack%20Mount%20Loads/rack-mount-inductive-load-6l' },
            { name: 'Rack Mount Inductive Load 9L', link: 'https://www.pemodule.com/Rack%20Mount%20Loads/rack-mount-inductive-load-9l' },
            { name: 'Rack Mount Capacitive Load 18C', link: 'https://www.pemodule.com/Rack%20Mount%20Loads/rack-mount-capacitive-load-18c' },
            { name: 'Rack Mount Inductive Capacitive Load', link: 'https://www.pemodule.com/Rack%20Mount%20Loads/rack-mount-inductive-capacitive-load' },
            { name: 'pemsense', link: 'https://www.pemodule.com/pemsense-module' },
        ],
    },
    {
        category: 'Power Electronics Educational Products',
        id: 'power-electronics-education',
        icon: '🎓',
        description: 'Dedicated educational tools and training systems for power electronics, enabling hands-on learning in academic environments.',
        items: [
            { name: 'PE training kit', link: 'https://www.pemodule.com/training-kits-system' },
            { name: 'PLUGY education system', link: 'https://www.pemodule.com/plugy-edu-system' },
        ],
    },
];

export function getProductCategory(id: string): ProductCategory | undefined {
    return productsData.find((cat) => cat.id === id);
}
