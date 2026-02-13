import styles from './Services.module.css';
import { FaTools, FaCogs, FaHardHat, FaFlask, FaDraftingCompass, FaProjectDiagram, FaCalendarCheck, FaIndustry } from 'react-icons/fa';
import { MdEngineering } from "react-icons/md";

const services = [
    {
        icon: <FaIndustry />,
        title: "Oil & Gas Specialists",
        description: "Specialist company serving the Oil & Gas and industrial sectors, with strong expertise in turnaround and shutdown projects."
    },
    {
        icon: <MdEngineering />,
        title: "Expert Engineering Team",
        description: "Supported by professionally trained service engineers delivering reliable and efficient technical solutions."
    },
    {
        icon: <FaTools />,
        title: "Comprehensive Maintenance",
        description: "Provides product installation, preventive maintenance, troubleshooting, and repair services to ensure optimal equipment performance."
    },
    {
        icon: <FaCogs />,
        title: "Multi-Disciplinary Expertise",
        description: "Specialized in handling equipment across Analytical, Electrical, Mechanical, and Instrumentation disciplines."
    },
    {
        icon: <FaFlask />,
        title: "Laboratory Relocation",
        description: "Offers laboratory relocation services with minimal downtime and maximum operational continuity."
    },
    {
        icon: <FaDraftingCompass />,
        title: "Lab Setup Consultation",
        description: "Acts as a laboratory setup consultant, supporting design, planning, and implementation."
    },
    {
        icon: <FaHardHat />,
        title: "Custom Engineering Solutions",
        description: "Delivers custom engineering solutions tailored to specific project requirements."
    },
    {
        icon: <FaProjectDiagram />,
        title: "End-to-End Project Execution",
        description: "Executes system-integrated projects with end-to-end responsibility."
    },
    {
        icon: <FaCalendarCheck />,
        title: "Annual Maintenance Contracts",
        description: "Provides Annual Maintenance Contracts (AMC) for long-term operational reliability."
    }
];


import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Services | Probetek Engineering',
    description: 'Expert engineering services including installation, commissioning, maintenance, and laboratory relocation in Abu Dhabi, UAE.',
    alternates: {
        canonical: 'https://rajivkrish03.github.io/probetek-new/services',
    },
};

export default function Services() {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>PROBETEK ENGINEERING Services</h1>
                <p className={styles.subtitle}>
                    Delivering excellence in engineering solutions, maintenance, and project execution for industrial sectors.
                </p>
            </header>

            <div className={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} className={`${styles.card} glass-panel`}>
                        <div className={styles.cardIcon}>
                            {service.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{service.title}</h3>
                        <p className={styles.cardText}>{service.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}
