import awsOpsPdf from '../assets/certifications/AWS_Academy_Graduate___Cloud_Operations___Training_Badge_Badge20260811-21-suek8e.pdf';
import awsFoundationsPdf from '../assets/certifications/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20260811-20-x0xycl.pdf';
import scrumImg from '../assets/certifications/ScrumCertification.jpeg';
import netBasicsPdf from '../assets/certifications/NetworkingBasicsUpdate20260811-20-is07go.pdf';
import hardwarePdf from '../assets/certifications/ComputerHardwareBasicsUpdate20260811-20-l520jv.pdf';
import osBasicsPdf from '../assets/certifications/OperatingSystemsBasicsUpdate20260811-20-szq0oo.pdf';
import mobileDevicesPdf from '../assets/certifications/UsingComputersandMobileDevicesUpdate20260811-20-ftfvyp.pdf';
import ccnaItnPdf from '../assets/certifications/CCNAITNUpdated20260811-20-6ywwt1.pdf';

export const extras = [
  // ======================================================
  // 1. AWS (AMAZON WEB SERVICES)
  // ======================================================
  {
    id: 'aws-cloud-operations',
    title: 'AWS Academy Graduate · Cloud Operations',
    issuer: 'Amazon Web Services (AWS)',
    date: '2026',
    tag: 'Cloud & DevOps',
    description: 'Certificación oficial en operaciones de infraestructura en la nube AWS, monitoreo, seguridad y administración de recursos.',
    credlyBadgeId: '619ed864-e225-4e33-82ba-17d9f4c47a43',
    pdfUrl: awsOpsPdf,
  },
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Academy Graduate · Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: '2026',
    tag: 'Cloud Computing',
    description: 'Fundamentos de arquitectura de nube en AWS, servicios principales de cómputo, almacenamiento y seguridad serverless.',
    credlyBadgeId: '1d0a64a5-d4dd-4c83-a885-74024c2a58e7',
    pdfUrl: awsFoundationsPdf,
  },

  // ======================================================
  // 2. SCRUM / CERTIPROF
  // ======================================================
  {
    id: 'scrum-certification',
    title: 'Scrum Foundation Professional Certificate (SFPC)',
    issuer: 'CertiProf / Scrum',
    date: '2025',
    tag: 'Agile & Management',
    description: 'Certificación profesional en metodologías ágiles Scrum, facilitación de roles, sprints y entrega continua de software.',
    pdfUrl: scrumImg,
  },

  // ======================================================
  // 3. CISCO NETWORKING ACADEMY
  // ======================================================
  {
    id: 'networking-basics',
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    tag: 'Networks & Security',
    description: 'Fundamentos de redes de comunicación de datos, conceptos de capa física, enlaces de datos y direccionamiento inicial.',
    credlyBadgeId: '2b857e51-3dac-44df-ba96-c022ee35922b',
    pdfUrl: netBasicsPdf,
  },
  {
    id: 'computer-hardware-basics',
    title: 'Computer Hardware Basics',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    tag: 'Infrastructure & Hardware',
    description: 'Arquitectura de hardware de computadoras, componentes internos, ensamblaje y mantenimiento técnico de infraestructura.',
    credlyBadgeId: '2820222b-e813-40e1-b89f-0844ac407efb',
    pdfUrl: hardwarePdf,
  },
  {
    id: 'operating-systems-basics',
    title: 'Operating Systems Basics',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    tag: 'Systems & Admin',
    description: 'Fundamentos de sistemas operativos, comandos de consola, gestión de procesos, archivos y administración del sistema.',
    credlyBadgeId: 'b93b91ad-7c26-4c36-9bb8-c96d320e6845',
    pdfUrl: osBasicsPdf,
  },
  {
    id: 'using-computers-mobile-devices',
    title: 'Using Computers and Mobile Devices',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    tag: 'Digital Essentials',
    description: 'Uso esencial de dispositivos informáticos y móviles, conceptos de conectividad, configuración y seguridad digital.',
    credlyBadgeId: 'b25d1659-a04c-4660-a130-64a65dd0b883',
    pdfUrl: mobileDevicesPdf,
  },
  {
    id: 'ccna-itn',
    title: 'CCNA: Introduction to Networks (ITN)',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    tag: 'Networks & Security',
    description: 'Certificación CCNAv7 en arquitectura de redes, modelos OSI/TCP-IP, direccionamiento IPv4/IPv6 y configuración de switches.',
    credlyBadgeId: 'f9ca87ad-41e2-44d7-958e-08da8aab6115',
    pdfUrl: ccnaItnPdf,
  },

  // ======================================================
  // 4. GOOGLE CLOUD PLATFORM (SKILL BADGES)
  // ======================================================
  {
    id: 'google-cloud-badge-1',
    title: 'Build a Secure Google Cloud Network',
    issuer: 'Google Cloud',
    date: '2024',
    tag: 'Cloud Security',
    description: 'Principios de diseño, implementación y operación de redes seguras en Google Cloud Platform (GCP).',
    credlyBadgeId: 'dd88b49b-3b0a-4553-b2fb-159f96939a5c',
  },
  {
    id: 'google-cloud-badge-2',
    title: 'Google Cloud Computing Foundations Certificate',
    issuer: 'Google Cloud',
    date: '2024',
    tag: 'Cloud Computing',
    description: 'Fundamentos de infraestructura en Google Cloud: redes, seguridad, balanceo de carga y desarrollo cloud-native.',
    credlyBadgeId: 'c187db6e-c17e-4866-8fe4-76dd17df86a6',
  },
  {
    id: 'google-cloud-badge-3',
    title: 'Set Up an App Dev Environment',
    issuer: 'Google Cloud',
    date: '2024',
    tag: 'Cloud DevOps',
    description: 'Configuración de entornos de desarrollo cloud, gestión IAM, Cloud Storage, Cloud Functions y Pub/Sub.',
    credlyBadgeId: '8f62d8cb-d847-481b-8c06-d84607160acf',
  },
  {
    id: 'google-cloud-badge-4',
    title: 'Prepare Data for ML APIs on Google Cloud',
    issuer: 'Google Cloud',
    date: '2024',
    tag: 'ML & Data Engineering',
    description: 'Procesamiento y preparación de datos con Dataprep, Dataflow, Dataproc e integración con APIs de Machine Learning.',
    credlyBadgeId: '21b86d63-ea9c-4923-adf2-a037a69f0c62',
  },
  {
    id: 'google-cloud-badge-5',
    title: 'Implement Load Balancing',
    issuer: 'Google Cloud',
    date: '2024',
    tag: 'Cloud & DevOps',
    description: 'Gestión de infraestructura en Compute Engine y GKE, uso de Cloud Shell/gcloud, despliegue de contenedores y configuración de balanceadores de carga HTTP y de red.',
    credlyBadgeId: '792e7229-3532-491c-a414-ed6f8c18fae2',
  },
];
