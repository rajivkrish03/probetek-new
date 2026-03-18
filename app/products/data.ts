export type ProductItem = {
    name: string;
    link: string;
};

export type ProductSubCategory = {
    id: string;
    name: string;
    description?: string;
    icon?: string;
    items: ProductItem[];
};

export type ProductCategory = {
    id: string;
    category: string;
    icon: string;
    description: string;
    subCategories?: ProductSubCategory[];
    items?: ProductItem[];
};

export const productsData: ProductCategory[] = [
    {
        category: 'Education & Training',
        id: 'education-training',
        icon: '🎓',
        description: 'Comprehensive educational tools and training systems for power electronics and engineering disciplines.',
        items: [
            { name: 'Power Electronics Training kit', link: 'https://www.pemodule.com/training-kits-system' },
            { name: 'Power Electronics Education Modules', link: 'https://www.pemodule.com/plugy-edu-system' },
            { name: 'Physics', link: 'https://www.edibon.com/en/physics' },
            { name: 'Electronics', link: 'https://www.edibon.com/en/electronics' },
            { name: 'Communications', link: 'https://www.edibon.com/en/communications' },
            { name: 'Electricity', link: 'https://www.edibon.com/en/electricity' },
            { name: 'Energy', link: 'https://www.edibon.com/en/energy' },
            { name: 'Mechatronics & automation', link: 'https://www.edibon.com/en/mechatronics-automation' },
            { name: 'Mechanics', link: 'https://www.edibon.com/en/mechanics' },
            { name: 'Fluid mechanics', link: 'https://www.edibon.com/en/fluid-mechanics' },
            { name: 'Thermodynamics & thermotechnics', link: 'https://www.edibon.com/en/thermodynamics-thermotechnics' },
            { name: 'Process control', link: 'https://www.edibon.com/en/process-control' },
            { name: 'Chemical engineering', link: 'https://www.edibon.com/en/chemical-engineering' },
            { name: 'Food & water technologies', link: 'https://www.edibon.com/en/food-water-technologies' },
            { name: 'Environment', link: 'https://www.edibon.com/en/environment' },
            { name: 'Biomedical engineering', link: 'https://www.edibon.com/en/biomedical-engineering' },
        ],
    },
    {
        category: 'Research & Test Solutions',
        id: 'research-test-solutions',
        icon: '🔬',
        description: 'Advanced testing and research solutions for power electronics, electric power systems, and real-time simulation.',
        subCategories: [
            {
                id: 'power-electronics-test-solutions',
                name: 'Power Electronics Test Solutions',
                items: [
                    { name: 'Battery Simulator', link: 'https://www.ngi-tech.com/Battery-simulators' },
                    { name: 'DC Power Supply', link: 'https://www.ngi-tech.com/Dc-power-supplies' },
                    { name: 'DC Electronic Load', link: 'https://www.ngi-tech.com/Dc-electronic-loads' },
                    { name: 'Semiconductor Test Series', link: 'https://www.ngi-tech.com/Semiconductor-Test-Series' },
                    { name: 'Fuel Cell Test Systems', link: 'https://www.ngi-tech.com/Fuel-cell-test-series' },
                    { name: 'Supercapacitor and Battery Test Systems', link: 'https://www.ngi-tech.com/Supercapacitor-and-battery-test-series' },
                    { name: 'Modular Instruments (DAQ)', link: 'https://www.ngi-tech.com/Data-acquisition-and-measurement407' },
                    { name: 'AC Power Source / Power Amplifier', link: 'https://probetek.ae/contact' },
                    { name: 'Regenerative / Bidirectional Power Supply', link: 'https://probetek.ae/contact' },
                    { name: 'Regenerative AC/DC Load', link: 'https://probetek.ae/contact' },
                    { name: 'Automatic Test System (ATS)', link: 'https://probetek.ae/contact' },
                ]
            },
            {
                id: 'power-electronics-research-solutions',
                name: 'Power Electronics Research Solutions',
                items: [
                    { name: 'PLUGY System', link: 'https://www.pemodule.com/plugy-system' },
                    { name: 'PLUGY HP', link: 'https://www.pemodule.com/plugy-hp' },
                    { name: 'PLUGY Discovery System', link: 'https://www.pemodule.com/plugy-discovery-system' },
                    { name: 'Rack Mount Loads', link: 'https://www.pemodule.com/rack-mount-loads' },
                    { name: 'PEMsense', link: 'https://www.pemodule.com/pemsense-module' },
                ]
            },
            {
                id: 'power-system-test-solutions',
                name: 'Power System Test Solutions',
                items: [
                    { name: 'IEC61850 Digital Substation Testing', link: 'https://www.ponovo.net/iec61850-digital-substation-testing/' },
                    { name: 'Relay and Protection Testing', link: 'https://www.ponovo.net/relay-and-protection-testing/' },
                    { name: 'Primary Injection Testing', link: 'https://www.ponovo.net/primary-injection-testing/' },
                    { name: 'UHVDC(Untro High Voltage DC) Testing', link: 'https://www.ponovo.net/uhvdc-untro-high-voltage-dc-testing/' },
                    { name: 'EV &Recharging Testing', link: 'https://www.ponovo.net/ev-recharging-testing/' },
                    { name: 'Railway Testing', link: 'https://www.ponovo.net/railway-testing/' },
                ]
            },
            {
                id: 'real-time-simulation',
                name: 'Real-Time Simulation',
                items: [
                    { name: 'Hardware-In-the-Loop (HIL)', link: 'https://probetek.ae/contact' },
                    { name: 'Rapid Control Prototyping(RCP)', link: 'https://probetek.ae/contact' },
                ]
            }
        ]
    },
    {
        category: 'Environmental Test Solutions',
        id: 'environmental-test-solutions',
        icon: '🌡️',
        description: 'Full range of temperature, humidity, UV, and environmental testing chambers for product reliability.',
        items: [
            { name: 'Temperature Humidity Test Chambers', link: 'https://www.sanwood.cc/Temperature-Humidity-Test-Chamber-pl577699.html' },
            { name: 'Battery Test Chambers', link: 'https://www.sanwood.cc/Battery-Test-Chambers-pd46791355.html' },
            { name: 'Rapid Temperature Change Test Chambers', link: 'https://www.sanwood.cc/Rapid-Temperature-Change-Test-Chamber-pl514009.html' },
            { name: 'Thermal Shock Chambers', link: 'https://www.sanwood.cc/Thermal-Shock-Chamber-pl30121.html' },
            { name: 'UV Accelerated Aging Test Chambers', link: 'https://www.sanwood.cc/UV-Lamp-Weathering-Test-Chamber-pl585009.html' },
            { name: 'Xenon Test Chambers', link: 'https://www.sanwood.cc/Xenon-Lamp-Weathering-Test-Chamber-pl525009.html' },
            { name: 'Altitude Test Chambers', link: 'https://www.sanwood.cc/Altitude-Test-Chamber-pl20121.html' },
            { name: 'Vibration Testing', link: 'https://www.sanwood.cc/Vibration-Testing-pl00121.html' },
            { name: 'Accelerated Aging Test Chambers', link: 'https://www.sanwood.cc/HAST-Acceelerated-Aging-Test-Chamber-pl566599.html' },
            { name: 'Sand Dust test chambers', link: 'https://www.sanwood.cc/Dust-Test-Chamber-pl565009.html' },
            { name: 'Rain Test Chambers', link: 'https://www.sanwood.cc/Rain-Test-Chamber-pl545009.html' },
            { name: 'Athletic Environmental Chamber', link: 'https://www.sanwood.cc/Athletic-Environmental-Chamber-pd6234344.html' },
        ],
    },
    {
        category: 'Pilot Plants',
        id: 'pilot-plants',
        icon: '🏭',
        description: 'Customized pilot plants for process engineering and chemical industry research.',
        items: [
            { name: 'Customized Pilot Plants', link: 'https://www.edibon.com/en/customized-pilot-plants' },
        ],
    },
    {
        category: 'Oil & Gas Industry',
        id: 'oil-gas-industry',
        icon: '🛢️',
        description: 'Specialized explosion-proof solutions for hazardous environments in the oil and gas sector.',
        items: [
            { name: 'Ex-proof Battery Monitoring System', link: 'https://probetek.ae/contact' },
            { name: 'Ex-proof Lighting System', link: 'https://probetek.ae/contact' },
        ],
    }
];

export function getProductCategory(id: string): ProductCategory | undefined {
    return productsData.find((cat) => cat.id === id);
}

export function getProductSubCategory(categoryId: string, subCategoryId: string): ProductSubCategory | undefined {
    const category = getProductCategory(categoryId);
    if (!category || !category.subCategories) return undefined;
    return category.subCategories.find((cat) => cat.id === subCategoryId);
}
