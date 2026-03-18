import styles from './page.module.css';

const applications = [
    'Green Hydrogen',
    'PV & Energy Storage Test Solutions',
    'Battery Test Solutions',
    'Electrical Vehicle Test Solutions',
    'Fuel Cell Test Solutions',
    'Electrolyzer Test Solutions',
    'Power Semiconductor Test Solutions',
    'Smart Grid Testing',
    'INDUSTRY 4.0',
    'AI Server Power Supply',
    'BMS/Battery Protection Board',
    '3C Electronics',
    'Automotive Electronics',
    'Clean Energy Power Generation',
    'Energy Storage',
    'Semiconductor/IC',
    'Motor Drives',
    'More Electric Aircraft (MEA)',
    'Battery and Powertrain validation',
    'eVTOL development',
    'Battery management systems',
    'Powertrain Systems',
    'Motor emulation',
    'Microgrid & renewable energy',
    'Distribution automation',
    'Datacenters',
    'Modular multilevel converters',
    'MIL STD810 Test',
    'DO160G Test',
    'Explosion-proof lighting'
];

export default function Applications() {
    return (
        <main className={styles.main}>
            <section className={styles.hero}>
                <div className={styles.container}>
                    <h1>Applications</h1>
                    <p>Serving a wide range of industries with specialized testing solutions.</p>
                </div>
            </section>

            <section className={styles.content}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {applications.map((app, index) => (
                            <div key={index} className={styles.card}>
                                <h2>{app}</h2>
                                <p>Advanced testing and validation for {app.toLowerCase()}.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
