// ==================== LOAD NAVBAR ====================
document.addEventListener('DOMContentLoaded', function () {
    // Create navbar directly (no fetch attempt)
    const mainContainer = document.querySelector('.main-container');

    // Create navbar element
    const navbar = document.createElement('nav');
    navbar.className = 'navbar';

    // Set navbar HTML
    navbar.innerHTML = `
        <a href="index.html" class="logo">
            <img src="./assets/name.webp" alt="" class="name">
        </a>

        <div class="hamburger-menu" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div class="nav-links">
            <a href="index.html" class="nav-link" data-page="index">Home</a>
            <a href="projects.html" class="nav-link" data-page="projects">Projects</a>
            <a href="tech.html" class="nav-link" data-page="tech">Tech Stack</a>
            <a href="certificates.html" class="nav-link" data-page="certificates">Certificates</a>
            <a href="resume.html" class="nav-link" data-page="resume">Resume</a>
            <a href="profile.html" class="nav-link" data-page="profile">Profile</a>
        </div>

        <div class="profile-icon">
            <a href="profile.html">
                <img src="./assets/profile.webp" alt="Profile">
            </a>
        </div>
    `;

    // Insert navbar at the beginning
    mainContainer.insertBefore(navbar, mainContainer.firstChild);

    // Set active class based on current page with page mapping
    setActiveNavLink();
});

// ==================== SET ACTIVE NAV LINK ====================
function setActiveNavLink() {
    // Get current page filename
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Map pages to navbar data-page attributes
    const pageMap = {
        'index.html': 'index',
        '': 'index',
        'projects.html': 'projects',
        'project-details.html': 'projects',
        'tech.html': 'tech',
        'certificates.html': 'certificates',
        'profile.html': 'profile',
        'resume.html': 'resume'
    };

    // Get the corresponding navbar page identifier
    const activePage = pageMap[currentPage] || 'index';

    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the matching nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.dataset.page === activePage) {
            link.classList.add('active');
        }
    });
}

// ==================== BACK BUTTON FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function () {
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.removeAttribute('href');
        backBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
        const icon = '<i class="fa-solid fa-arrow-left"></i> ';
        backBtn.innerHTML = window.history.length > 1 ?
            icon + 'Go Back' :
            icon + 'Back to Home';
    }
});

// ==================== PROJECTS DATA ====================
const projectsData = [
    {
        id: 1,
        title: "Nexus E-commerce Platform",
        category: "Web Development",
        categories: ["web", "testing"],
        date: "Spring 2024",
        team: "Group Project",
        description: "Hybrid e-commerce platform with comprehensive testing suite. Features include user authentication, product catalog, cart management, and wishlist. Implemented with 100% test coverage using JUnit and Selenium for end-to-end testing.",
        tech: ["Java", "Spring Boot", "JUnit", "Selenium", "REST API", "Docker"],
        features: [
            "Comprehensive testing (300+ tests, 100% pass rate)",
            "Hybrid console/web interface",
            "RESTful API with Spring Boot",
            "Docker containerization",
            "Cloud deployment on Render"
        ],
        stats: {
            tests: "300+",
            passRate: "100%",
            modules: "6"
        },
        images: [
            {
                url: "./assets/images/nexus-products.webp",
                caption: "Product Catalog"
            },
            {
                url: "./assets/images/nexus-dashboard.webp",
                caption: "Nexus Dashboard"
            },
            {
                url: "./assets/images/nexus-testing.webp",
                caption: "Testing Suite Results"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/Nexus_backend",
            liveDemo: "https://nexus-ecommerce-3nk0.onrender.com",
            documentation: "./assets/document/nexus-documentation.pdf"
        },
        details: {
            overview: "Nexus is a hybrid e-commerce application designed to operate as both a Console-based application (for local logic testing) and a robust RESTful Web API (for production). Built using Spring Boot (Java 21) for the backend and HTML/Tailwind CSS/JavaScript for the frontend, it provides a seamless shopping experience.",
            problem: "Need for a comprehensive e-commerce platform with thorough testing to ensure reliability and performance.",
            solution: "Developed a full-featured e-commerce platform with complete testing suite including unit tests, integration tests, and end-to-end Selenium tests.",
            technologies: ["Java 21", "Spring Boot", "JUnit 5", "Selenium WebDriver", "Docker", "Render Cloud"],
            testing: {
                strategy: "Comprehensive test strategy including unit testing, integration testing, and end-to-end testing",
                coverage: "~90% code coverage across all packages",
                tests: "25 test classes with ~300+ test methods",
                results: "100% pass rate with 0 failed tests"
            },
            deployment: {
                backend: "Render Web Service with Docker (OpenJDK 21)",
                frontend: "https://github.com/AsifxAsif/Nexus_frontend",
                live: "https://nexus-ecommerce-3nk0.onrender.com"
            },
            challenges: [
                "Implementing comprehensive testing suite",
                "Hybrid console/web architecture",
                "Cloud deployment configuration"
            ],
            achievements: [
                "100% test pass rate",
                "Complete CI/CD pipeline",
                "Production-ready deployment"
            ]
        }
    },
    {
        id: 2,
        title: "Lost & Found Android App",
        category: "Mobile Development",
        categories: ["mobile"],
        date: "Spring 2025",
        team: "Team: 3",
        description: "Mobile application for reporting and recovering lost items within a community. Features include Firebase authentication, real-time post updates, category filtering, and user profile management.",
        tech: ["Android", "XML", "Java", "Firebase", "Firestore", "Authentication"],
        features: [
            "Firebase Authentication & Firestore",
            "Real-time post updates",
            "Category-based filtering",
            "User profile management",
            "Image upload to Firebase Storage"
        ],
        stats: {
            team: "3",
            modules: "5",
            functional: "100%"
        },
        images: [
            {
                url: "./assets/images/lost-found-home.webp",
                caption: "Home Screen"
            },
            {
                url: "./assets/images/lost-found-posts.webp",
                caption: "Posts Listing"
            },
            {
                url: "./assets/images/lost-found-profile.webp",
                caption: "User Profile"
            }
        ],
        links: {
            sourceCode: "https://github.com/Nayma-Amin/Lost-and-Found",
            liveDemo: null,
            documentation: "./assets/document/lost-found-documentation.pdf"
        },
        details: {
            overview: "The Lost and Found Android App is a mobile platform developed using Java in Android Studio, aimed at helping users report and recover lost or found items. Integrated with Firebase Authentication, Firestore, and Storage.",
            problem: "Losing personal belongings has become common, and retrieving them is challenging due to lack of proper reporting systems.",
            solution: "Centralized platform where users can report lost/found items, view all posted items, and contact relevant users to reclaim or return items.",
            technologies: ["Android Studio", "Java", "XML", "Firebase Auth", "Firestore", "Firebase Storage"],
            features: {
                authentication: "Firebase Authentication for Email/Password and Google Sign-In",
                profile: "User profile section with edit/update capabilities",
                posts: "Create, view, edit, and delete lost/found item posts",
                filtering: "Category and location-based filtering",
                ui: "Tabbed view for All Posts, Lost Items, and Found Items"
            },
            challenges: [
                "Firebase Authentication session management",
                "Dependency management conflicts",
                "Asynchronous data handling",
                "Image upload optimization",
                "UI consistency across devices"
            ],
            businessModel: [
                "Freemium Model with advanced features",
                "In-App Advertising via Google AdMob",
                "Partnerships with institutions",
                "Local business promotions"
            ]
        }
    },
    {
        id: 3,
        title: "Leaf Disease Classification",
        category: "AI/ML",
        categories: ["ai"],
        date: "2024",
        team: "Team: 5",
        description: "Deep learning framework for classifying Hog Plum leaf diseases using ConvNeXt, ResNeXt, DenseNet, and NASNet-Large models. Achieved 96.74% accuracy with comprehensive evaluation metrics.",
        tech: ["Python", "TensorFlow", "ConvNeXt", "Deep Learning", "Computer Vision", "Grad-CAM"],
        features: [
            "6 deep learning models tested",
            "96.74% accuracy with NASNet-Large",
            "Data augmentation techniques",
            "Grad-CAM visualization",
            "Comprehensive performance metrics"
        ],
        stats: {
            accuracy: "96.74%",
            models: "6",
            images: "3782"
        },
        images: [
            {
                url: "./assets/images/leaf-disease-samples.webp",
                caption: "Leaf Disease Samples"
            },
            {
                url: "./assets/images/leaf-disease-gradcam.webp",
                caption: "Grad-CAM Visualization"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/Hog_plum_disease",
            liveDemo: null,
            documentation: "./assets/document/leaf-disease-paper.pdf"
        },
        details: {
            overview: "A deep learning framework for classifying Hog Plum leaf diseases with high accuracy. The system uses multiple modern architectures and provides interpretability through Grad-CAM visualizations.",
            methodology: "Data preprocessing → Augmentation → Feature selection → Model training → Evaluation → Visualization",
            dataset: {
                total: "3782 images",
                healthy: "2829 images",
                notHealthy: "953 images",
                augmented: "5657 images after augmentation"
            },
            models: [
                "ConvNeXt - 95.95% accuracy",
                "RegNet - 95.24% accuracy",
                "ResNeXt-50 - 95.68% accuracy",
                "DenseNet-201 - 95.51% accuracy",
                "EfficientNetV2-S - 95.51% accuracy",
                "NASNet-Large - 96.74% accuracy"
            ],
            evaluation: {
                metrics: ["Accuracy", "Precision", "Recall", "F1-score", "AUC", "Confusion Matrix"],
                bestModel: "NASNet-Large with 96.74% accuracy, 96.80% precision, 96.74% recall, 96.76% F1-score",
                visualization: "Grad-CAM for model interpretability"
            },
            results: "The framework demonstrates effectiveness for real-world agricultural applications in disease detection with high accuracy and interpretability."
        }
    },
    {
        id: 4,
        title: "Smart Energy Monitoring",
        category: "IoT System",
        categories: ["system"],
        date: "2024",
        team: "Solo Project",
        description: "IoT system for tracking electricity usage and calculating costs using Tuya smart devices. Features real-time data collection, MySQL database integration, CSV export, and energy calculation algorithms.",
        tech: ["Python", "Flask", "MySQL", "Tuya API", "IoT", "Data Visualization"],
        features: [
            "Real-time energy monitoring",
            "MySQL database integration",
            "CSV data export functionality",
            "Cost calculation algorithms",
            "Tuya smart device integration"
        ],
        stats: {
            real: "Time",
            database: "MySQL",
            integration: "IoT"
        },
        images: [
            {
                url: "./assets/images/energy-dashboard.webp",
                caption: "Energy Monitoring Dashboard"
            },
            {
                url: "./assets/images/energy-graphs.webp",
                caption: "Usage Graphs"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/Smart-Energy-Monitoring",
            liveDemo: "https://asifuzzaman.pythonanywhere.com/",
            documentation: "./assets/document/energy-monitoring-documentation.pdf"
        },
        details: {
            overview: "Energy monitoring system that connects to Tuya smart devices to track electricity usage in real-time, calculate costs, and provide data analytics.",
            architecture: {
                backend: "Python Flask server",
                database: "MySQL on PythonAnywhere",
                iot: "Tuya smart devices via Tuya Cloud API",
                frontend: "HTML/CSS/JavaScript dashboard"
            },
            features: {
                monitoring: "Real-time current, voltage, and wattage tracking",
                database: "Persistent storage of energy data",
                export: "CSV export with date range filtering",
                calculation: "Energy consumption and cost calculation",
                api: "REST API endpoints for data access"
            },
            configuration: {
                region: "EU",
                apiKey: "jpemtvy**********ywj",
                apiSecret: "bbe0b8e88********************e03",
                deviceId: "bf2ea6423*********0lt"
            },
            deployment: {
                host: "https://www.pythonanywhere.com/",
                database: "Asifuzzaman$default",
                live: "https://asifuzzaman.pythonanywhere.com/"
            }
        }
    },
    {
        id: 5,
        title: "Campus Network Design",
        category: "Networking",
        categories: ["network"],
        date: "Jan 2025",
        team: "Group Project",
        description: "Designed and simulated a secure university campus network using Cisco Packet Tracer. Implemented VLAN segmentation, OSPF routing, DHCP, and access control lists for enhanced security and efficiency.",
        tech: ["Cisco", "Networking", "VLAN", "OSPF", "DHCP", "Security"],
        features: [
            "VLAN segmentation for departments",
            "OSPF dynamic routing protocol",
            "DHCP for automatic IP allocation",
            "Access control lists (ACLs)",
            "Comprehensive network simulation"
        ],
        stats: {
            departments: "4",
            segmentation: "VLAN",
            design: "Secure"
        },
        images: [
            {
                url: "./assets/images/network-topology.webp",
                caption: "Network Topology Diagram"
            },
            {
                url: "./assets/images/simulation-panel.webp",
                caption: "Simulation Panel"
            },
            {
                url: "./assets/images/pc-pc-ping.webp",
                caption: "PC to PC Ping"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/Campus-Network-Design",
            liveDemo: null,
            documentation: "./assets/document/network-design-documentation.pdf"
        },
        details: {
            overview: "Enhanced University Network using Cisco Packet Tracer with dynamic IP allocation, VLAN segmentation, and robust routing protocols.",
            objectives: [
                "Design secure and scalable network for university campus",
                "Simulate network using Cisco Packet Tracer",
                "Integrate dynamic IP addressing and VLAN segmentation"
            ],
            components: [
                "Cisco 2911 Routers",
                "Layer 3 Switches",
                "VLAN-enabled Layer 2 Switches",
                "Dynamic Host Configuration Protocol (DHCP) servers"
            ],
            departments: [
                "Electrical Engineering",
                "Computer Science",
                "Mathematics",
                "Admissions Office"
            ],
            protocols: [
                "OSPF for dynamic routing",
                "DHCP for automatic IP allocation",
                "ACLs for enhanced security"
            ],
            simulation: {
                tool: "Cisco Packet Tracer",
                testing: "Ping command for accessibility testing",
                performance: "Optimal latency and packet delivery"
            },
            security: "VLAN segmentation, access control lists, port security measures"
        }
    },
    {
        id: 6,
        title: "Restaurant Management System",
        category: "Database System",
        categories: ["web", "system"],
        date: "Spring 2024",
        team: "Team: 5",
        description: "Full-featured restaurant management system built with Oracle APEX. Includes customer management, menu system, order processing, reservation system, and comprehensive reporting with multi-table queries.",
        tech: ["Oracle", "APEX", "SQL", "Database", "PL/SQL", "Reports"],
        features: [
            "Customer management with triggers",
            "Menu and order processing system",
            "Reservation management",
            "Multi-table aggregate queries",
            "User role-based authentication"
        ],
        stats: {
            team: "5",
            modules: "6",
            platform: "Oracle APEX"
        },
        links: {
            sourceCode: "https://github.com/yourusername/restaurant-management",
            liveDemo: "https://apex.oracle.com/yourworkspace/restaurant",
            documentation: "./assets/document/restaurant-management-documentation.pdf"
        },
        details: {
            overview: "Complete restaurant management system developed using Oracle Application Express (APEX) with comprehensive database design and reporting capabilities.",
            projectId: "128755",
            workspace: "ahanaf",
            authentication: "Custom authentication system",
            users: [
                "Admin: Asif (asif12)",
                "Admin: Ahanaf (ahanaf12)",
                "Admin: Nawal (nawal12)",
                "Viewer: Dracula (dracula12)",
                "Viewer: Rayhan (rayhan12)"
            ],
            features: {
                reports: "Restaurant table list, Menu list, Order list, Employee list, Reservation list, Customer list",
                forms: "Customer form, Menu form, Order form, Reservation form, Restaurant form, Employee form, User form",
                queries: "Multi-table and aggregate queries for reporting",
                trigger: "Customer form trigger to assign random value to customer points"
            },
            database: {
                tables: ["Usera", "Menu", "Order", "Reservation", "Restaurant_table", "Employee", "Customer"],
                relationships: "Properly normalized with foreign key constraints",
                queries: "Complex SQL queries with joins and aggregations"
            },
            deployment: "Oracle APEX cloud platform with custom authentication and role-based access control"
        }
    },
    {
        id: 7,
        title: "DropNova File Management",
        category: "Web Development",
        categories: ["web"],
        date: "2024",
        team: "Group Project",
        description: "File Management System with advanced features including multi-language support, collaborative file sharing, data analytics, file encryption, and admin panel for management.",
        tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Git"],
        features: [
            "Multi-language support (English/Bengali)",
            "Admin panel for user management",
            "Collaborative file sharing with permissions",
            "Data analytics and insights",
            "Secure file storage and encryption"
        ],
        stats: {
            features: "5",
            languages: "2",
            security: "High"
        },
        images: [
            {
                url: "./assets/images/dropnova-dashboard.webp",
                caption: "File Manager Dashboard"
            },
            {
                url: "./assets/images/dropnova-sharing.webp",
                caption: "File Sharing Interface"
            },
            {
                url: "./assets/images/dropnova-analytics.webp",
                caption: "Analytics Dashboard"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/CSE412_Group2",
            liveDemo: "https://asifxasif.github.io/CSE412_Group2/",
            documentation: "./assets/document/dropnova-documentation.pdf"
        },
        details: {
            overview: "DropNova is a comprehensive file management system that allows users to upload, organize, share, and manage files securely with advanced features.",
            technologies: {
                frontend: "HTML/CSS/JavaScript",
                backend: "PHP",
                database: "MySQL",
                tools: "Git, GitHub, VS Code, XAMPP/WAMP"
            },
            features: {
                multilingual: "Support for English and Bengali languages",
                admin: "Admin panel for managing users, files, and monitoring activity",
                collaboration: "File/folder sharing with permissions (view/edit/delete)",
                analytics: "Insights into uploaded files (downloads, uploads, interactions)",
                security: "Encrypted file storage and password protection"
            },
            outcomes: [
                "User-friendly experience through multi-language support",
                "Enhanced collaboration through secure file sharing",
                "User insights through data analytics",
                "Improved security with encrypted storage",
                "Efficient system management through admin panel"
            ]
        }
    },
    {
        id: 8,
        title: "Edmond Karp Algorithm",
        category: "Algorithms",
        categories: ["system"],
        date: "June 2024",
        team: "Individual Project",
        description: "Implementation of the Edmonds-Karp algorithm for computing maximum flow in flow networks. Includes theoretical foundations, algorithm steps, Java implementation, and real-world applications analysis.",
        tech: ["Java", "Algorithms", "Graph Theory", "BFS", "Network Flow"],
        features: [
            "Edmonds-Karp algorithm implementation",
            "BFS for shortest augmenting paths",
            "Time complexity analysis O(VE²)",
            "Graphical representation of flow",
            "Real-world applications analysis"
        ],
        stats: {
            complexity: "O(VE²)",
            implementation: "Java",
            applications: "6+"
        },
        images: [
            {
                url: "./assets/images/edmond-karp-graph.webp",
                caption: "Flow Network Visualization"
            },
            {
                url: "./assets/images/edmond-karp-residual.webp",
                caption: "Residual Graph"
            },
            {
                url: "./assets/images/edmond-karp-output.webp",
                caption: "Algorithm Output"
            }
        ],
        links: {
            sourceCode: "https://github.com/yourusername/edmond-karp-algorithm",
            liveDemo: null,
            documentation: "./assets/document/edmond-karp-documentation.pdf"
        },
        details: {
            overview: "The Edmonds-Karp algorithm is an implementation of the Ford-Fulkerson method for computing the maximum flow in a flow network, using BFS to find shortest augmenting paths.",
            algorithm: {
                steps: [
                    "Initialize flow to zero",
                    "Find augmenting path using BFS",
                    "Augment flow along the path",
                    "Repeat until no augmenting path exists"
                ],
                complexity: "O(VE²) where V = vertices, E = edges",
                advantage: "Polynomial time complexity, simplicity, general applicability"
            },
            implementation: {
                language: "Java",
                features: ["BFS for path finding", "Residual graph management", "Flow augmentation"],
                output: "Maximum flow value calculation"
            },
            applications: [
                "Network Design: Maximum data transfer capacity",
                "Image Segmentation: Graph-based segmentation",
                "Airline Scheduling: Flight routing optimization",
                "Traffic Routing: Vehicle flow management",
                "Water Distribution: Resource flow optimization",
                "Power Grid Management: Electricity flow balancing"
            ],
            limitations: [
                "High complexity for dense graphs",
                "Memory intensive for large networks",
                "Not suitable for real-time applications"
            ]
        }
    },
    {
        id: 9,
        title: "XTry: Visual Try-On App",
        category: "Mobile AR",
        categories: ["mobile", "ai"],
        date: "2025",
        team: "Team: 4",
        description: "AR-based visual try-on application for fashion accessories including glasses, jewelry, watches, and rings. Features hybrid architecture combining native Android capabilities with WebAR for real-time virtual try-on experiences.",
        tech: ["Android", "Java", "WebAR", "Firebase", "HTML/CSS/JS", "WebView"],
        features: [
            "Real-time AR try-on for glasses, jewelry, watches, and rings",
            "Hybrid three-layer architecture (Native container, Bridge, Web layer)",
            "Firebase authentication with email verification",
            "Contextual camera permission management",
            "Responsive UI with bottom navigation and side menu"
        ],
        stats: {
            team: "4",
            accuracy: "98%",
            categories: "4"
        },
        images: [
            {
                url: "./assets/images/xtry-login.webp",
                caption: "Login Page"
            },
            {
                url: "./assets/images/xtry-home.webp",
                caption: "Home Screen"
            },
            {
                url: "./assets/images/xtry-tryon.webp",
                caption: "AR Try-On Experience"
            },
            {
                url: "./assets/images/xtry-products.webp",
                caption: "Product Categories"
            },
            {
                url: "./assets/images/xtry-profile.webp",
                caption: "User Profile"
            }
        ],
        links: {
            sourceCode: "https://github.com/AsifxAsif/XTry-Visual-TryOn",
            liveDemo: null,
            documentation: "./assets/document/xtry-capstone-documentation.pdf"
        },
        details: {
            overview: "XTry is a visual try-on application that uses Augmented Reality to enhance the online shopping experience for fashion accessories. It combines native Android capabilities with WebAR technology to provide real-time virtual try-on for glasses, jewelry, watches, and rings.",
            problem: "Online shoppers face high return rates (~30%) due to inability to physically try accessories before purchase. Existing solutions either lack interactivity (static overlays) or require separate app downloads.",
            solution: "A hybrid AR solution that provides real-time, interactive virtual try-on directly within the shopping flow, using three-layer architecture for optimal performance and user experience.",
            team: [
                "Anika Nawal (2021-3-60-161)",
                "Md. Asifuzzaman (2021-3-60-167)",
                "Sudipta Roy (2021-2-60-009)",
                "Md Rayhan Al Islam (2019-1-60-265)"
            ],
            supervisor: "Md Al-Imran, Senior Lecturer, Department of Computer Science & Engineering, East West University",
            technologies: {
                native: ["Android Studio", "Java", "Firebase Authentication", "SharedPreferences"],
                web: ["HTML5", "CSS3", "JavaScript", "WebAR Studio", "WebXR Device API"],
                architecture: ["Three-layer hybrid architecture", "WebView configuration", "JavaScriptInterface bridge"]
            },
            architecture: {
                nativeContainer: "Manages Android lifecycle, runtime permissions (CAMERA, STORAGE), WebView configuration, hardware acceleration",
                bridgeLayer: "Bidirectional communication between native and web layers, permission status propagation, security validation",
                webLayer: "SPA implementation, UI management, product catalog, WebAR integration via iframe"
            },
            performance: {
                highEnd: "App Launch: 1.2s, AR Load: 2.1s, Memory: 142MB, Frame Rate: 58fps",
                midRange: "App Launch: 1.8s, AR Load: 3.2s, Memory: 156MB, Frame Rate: 42fps",
                entryLevel: "App Launch: 3.1s, AR Load: 6.8s, Memory: 175MB, Frame Rate: 24fps",
                successRate: "98% on high-end, 92% on mid-range, 76% on entry-level devices"
            },
            features: {
                authentication: "Firebase email/password authentication with email verification and Remember Me functionality",
                arIntegration: "WebAR via WebView with contextual camera permission requests",
                productCategories: ["Glasses", "Jewelry (necklaces, rings, earrings)", "Watches"],
                navigation: "Bottom navigation tabs, side drawer menu, category-based filtering",
                ui: "Consistent theming, responsive layouts, vector icons, touch-optimized targets"
            },
            security: {
                measures: [
                    "Input validation on all forms",
                    "Firebase security rules for data access",
                    "Secure SharedPreferences storage",
                    "Origin validation for bridge communications",
                    "HTTPS enforcement for external resources"
                ],
                permissions: "Contextual camera permission requests with clear user rationale"
            },
            limitations: [
                "AR quality dependent on device capabilities",
                "Internet connection required for try-on feature",
                "No real payment integration",
                "Limited product categories (4)",
                "No wishlist/favorites functionality",
                "No multi-product try-on"
            ],
            futureWork: [
                "Implement native AR using ARCore/ARKit for better performance",
                "Face/ear measurement for accurate sizing",
                "Multi-product try-on (necklace + earrings together)",
                "Integration with e-commerce APIs",
                "Social media sharing of try-on results",
                "Video recording of AR sessions",
                "Product reviews and user photos"
            ],
            achievements: [
                "Seamless AR integration without app interruption",
                "Contextual permission management with 92% user approval",
                "Scalable architecture supporting new product categories",
                "98% successful AR completion rate on high-end devices",
                "Enhanced user confidence in online purchase decisions"
            ]
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectsData };
}

// ==================== BACKGROUND ANIMATION ====================
(function initBackgroundAnimation() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let particleCount;

    class Particle {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.5 + 1;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }
        draw() {
            ctx.fillStyle = 'rgba(0,0,0,1)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particleCount = window.innerWidth < 768 ? 30 : 100;
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    let resizeTimeout;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function () {
            requestAnimationFrame(resizeCanvas);
        }, 100);
    });

    window.addEventListener('orientationchange', function () {
        setTimeout(function () {
            requestAnimationFrame(resizeCanvas);
        }, 150);
    });

    resizeCanvas();

    function connect() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);
                if (dist < 100) {
                    ctx.strokeStyle = `rgba(0,0,0,${1 - dist / 300})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        connect();
        requestAnimationFrame(animate);
    }
    animate();

    setTimeout(function () {
        requestAnimationFrame(resizeCanvas);
    }, 500);

    setInterval(function () {
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            requestAnimationFrame(resizeCanvas);
        }
    }, 2000);
})();

// ==================== NAVIGATION MENU ====================
(function initNavigation() {
    window.toggleMenu = function () {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger-menu');
        if (navLinks && hamburger) {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
    };

    document.addEventListener('click', function (e) {
        const navLinks = document.querySelector('.nav-links');
        const hamburger = document.querySelector('.hamburger-menu');
        if (navLinks && hamburger) {
            if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger-menu')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
})();

// ==================== PAGE-SPECIFIC FUNCTIONS ====================

// Determine current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

// ==================== INDEX.HTML FUNCTIONS ====================
if (currentPage === 'index.html' || currentPage === '') {
    document.addEventListener('DOMContentLoaded', function () {
        // Matrix Text Effect
        const titleElement = document.getElementById('dynamicTitle');
        if (titleElement) {
            const phrases = ['SOFTWARE ENGINEER', 'CYBERSECURITY ENTHUSIAST'];
            let currentPhraseIndex = 0;
            const matrixChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';

            function getRandomChar() {
                return matrixChars[Math.floor(Math.random() * matrixChars.length)];
            }

            function matrixTextChange(targetText) {
                if (!titleElement) return;

                const originalText = titleElement.textContent;
                const targetLength = targetText.length;
                const currentLength = originalText.length;
                const maxLength = Math.max(currentLength, targetLength);

                let steps = 0;
                const totalSteps = 15;

                const padText = (text, length) => {
                    return text.padEnd(length, ' ');
                };

                let paddedOriginal = padText(originalText, maxLength);
                let paddedTarget = padText(targetText, maxLength);

                const interval = setInterval(() => {
                    steps++;

                    let result = '';
                    for (let i = 0; i < maxLength; i++) {
                        const revealThreshold = Math.floor((steps / totalSteps) * maxLength);

                        if (i <= revealThreshold && steps > totalSteps / 2) {
                            result += paddedTarget[i];
                        } else if (i > revealThreshold && steps < totalSteps * 0.7) {
                            result += getRandomChar();
                        } else {
                            if (Math.random() > steps / totalSteps) {
                                result += getRandomChar();
                            } else {
                                result += paddedTarget[i];
                            }
                        }
                    }

                    titleElement.textContent = result;

                    if (steps >= totalSteps) {
                        clearInterval(interval);
                        titleElement.textContent = targetText;
                    }
                }, 60);
            }

            function rotatePhrase() {
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                matrixTextChange(phrases[currentPhraseIndex]);
            }

            setInterval(rotatePhrase, 3000);
        }

        // Scrolling numbers
        function initScrollingNumbers() {
            const numbersContainer = document.getElementById('scrollingNumbers');
            if (!numbersContainer) return;

            const numbers = [
                '45.21.99.01',
                '88.21.45.22',
                '10.00.59.99',
                '72.34.18.66',
                '29.88.11.77'
            ];

            numbersContainer.innerHTML = '';
            const track = document.createElement('div');
            track.className = 'scrolling-numbers-track';

            const allNumbers = [...numbers, ...numbers, ...numbers];
            allNumbers.forEach(num => {
                const span = document.createElement('span');
                span.textContent = num;
                span.style.display = 'block';
                span.style.marginBottom = '15px';
                span.style.opacity = '0.8';
                track.appendChild(span);
            });

            numbersContainer.appendChild(track);
        }

        // Update real-time date
        function updateCurrentDate() {
            const dateElement = document.getElementById('currentDate');
            if (!dateElement) return;

            const now = new Date();
            const day = now.getDate();
            const month = now.getMonth() + 1;
            const year = String(now.getFullYear()).slice(-2);

            dateElement.textContent = `${day}/${month}/${year}`;
        }

        setInterval(updateCurrentDate, 60000);

        // System status toggle
        let isSystemActive = true;
        window.toggleSystemStatus = function () {
            const statusText = document.querySelector('.red-box-label small');
            const statusDot = document.querySelector('.status-dot');
            isSystemActive = !isSystemActive;

            if (isSystemActive) {
                statusText.textContent = 'SYSTEM ACTIVE';
                statusText.style.color = '';
                statusDot.style.animation = 'blink 0.8s infinite';
            } else {
                statusText.textContent = 'SYSTEM STANDBY';
                statusText.style.color = '#888';
                statusDot.style.animation = 'none';
                statusDot.style.opacity = '0.3';
            }

            const box = document.querySelector('.red-box-label');
            box.style.transform = 'scale(0.95)';
            setTimeout(() => {
                box.style.transform = 'scale(1)';
            }, 150);
        };

        // Initialize
        initScrollingNumbers();
        updateCurrentDate();

        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'translateY(20px)';
            heroContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            setTimeout(() => {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'translateY(0)';
            }, 300);
        }

        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.opacity = '0';
            heroImage.style.transform = 'translateY(20px)';
            heroImage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

            setTimeout(() => {
                heroImage.style.opacity = '1';
                heroImage.style.transform = 'translateY(0)';
            }, 300);
        }
    });
}

// ==================== PROJECTS.HTML FUNCTIONS ====================
if (currentPage === 'projects.html') {
    document.addEventListener('DOMContentLoaded', function () {
        let allProjects = [];

        // Create count badge element
        function createCountBadge() {
            const filterSection = document.querySelector('.filter-section');
            if (filterSection && !document.getElementById('projectCountBadge')) {
                const badge = document.createElement('div');
                badge.id = 'projectCountBadge';
                badge.className = 'project-count-badge';
                badge.innerHTML = 'Showing <span id="visibleCount">0</span> of <span id="totalCount">0</span> projects';
                filterSection.appendChild(badge);
            }
        }

        // Update count badge
        function updateCountBadge(visible, total) {
            const visibleSpan = document.getElementById('visibleCount');
            const totalSpan = document.getElementById('totalCount');
            const badge = document.getElementById('projectCountBadge');

            if (visibleSpan) visibleSpan.textContent = visible;
            if (totalSpan) totalSpan.textContent = total;

            if (badge) {
                if (visible === 0) {
                    badge.innerHTML = 'No projects match your filter <span>😕</span>';
                    badge.classList.add('no-results');
                } else {
                    badge.classList.remove('no-results');
                }
            }
        }

        function filterProjects(category) {
            const filters = document.querySelectorAll('.category-filter');
            filters.forEach(filter => {
                filter.classList.remove('active');
                if (filter.dataset.category === category) {
                    filter.classList.add('active');
                }
            });

            const container = document.getElementById('projectsContainer');
            const scrollPosition = window.scrollY;

            container.innerHTML = '';

            const filteredProjects = category === 'all'
                ? allProjects
                : allProjects.filter(project => project.categories.includes(category));

            if (filteredProjects.length === 0) {
                const noProjectsMessage = document.createElement('div');
                noProjectsMessage.className = 'no-projects-message';
                noProjectsMessage.innerHTML = '<p>No projects found in this category</p>';
                container.appendChild(noProjectsMessage);
            } else {
                filteredProjects.forEach(project => {
                    const projectCard = createProjectCard(project);
                    container.appendChild(projectCard);
                });
            }

            // Update count badge
            updateCountBadge(filteredProjects.length, allProjects.length);

            window.scrollTo(0, scrollPosition);
        }

        function loadProjects() {
            const container = document.getElementById('projectsContainer');
            allProjects = projectsData;

            container.innerHTML = '';

            allProjects.forEach(project => {
                const projectCard = createProjectCard(project);
                container.appendChild(projectCard);
            });

            const filterButtons = document.querySelectorAll('.category-filter');
            filterButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const category = e.target.dataset.category;
                    filterProjects(category);
                });
            });

            // Create and update count badge
            createCountBadge();
            updateCountBadge(allProjects.length, allProjects.length);
        }

        function createProjectCard(project) {
            const card = document.createElement('div');
            card.className = 'project-card-detailed';

            const categoryColors = {
                'web': 'var(--accent-red)',
                'mobile': '#00a86b',
                'ai': '#8e2de2',
                'system': '#f46b45',
                'network': '#4a00e0',
                'testing': '#000428'
            };

            const categoryColor = categoryColors[project.categories[0]] || 'black';

            const statKeys = Object.keys(project.stats || {});

            function getStatValue(index) {
                if (!project.stats || !statKeys[index]) return '';
                const key = statKeys[index];
                return project.stats[key] || '';
            }

            function getStatLabel(index) {
                if (!statKeys[index]) return '';
                return statKeys[index]
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/[0-9]/g, '')
                    .trim()
                    .toUpperCase() || statKeys[index].toUpperCase();
            }

            function getCodeSampleLink(project) {
                const codeLinks = {
                    1: "https://github.com/AsifxAsif/Nexus_backend",
                    2: "https://github.com/Nayma-Amin/Lost-and-Found",
                    3: "https://github.com/AsifxAsif/Hog_plum_disease",
                    4: "https://github.com/AsifxAsif/Smart-Energy-Monitoring",
                    5: "https://github.com/AsifxAsif/Campus-Network-Design",
                    6: "https://github.com/yourusername/restaurant-management",
                    7: "https://github.com/AsifxAsif/CSE412_Group2",
                    8: "https://github.com/yourusername/edmond-karp-algorithm",
                    9: "https://github.com/AsifxAsif/XTry-Visual-TryOn"
                };

                return codeLinks[project.id] || "https://github.com/yourusername";
            }

            card.innerHTML = `
                <div class="project-header">
                    <span class="project-category" style="background: ${categoryColor};">${project.category}</span>
                    <h3>${project.title}</h3>
                    <div class="project-meta">
                        <span><i class="fa-solid fa-calendar"></i> ${project.date}</span>
                        <span><i class="fa-solid fa-code"></i> ${project.tech[0]}</span>
                        <span><i class="fa-solid fa-users"></i> ${project.team}</span>
                    </div>
                </div>
                <div class="project-content">
                    <p class="project-description">${project.description}</p>
                    
                    <div class="tech-stack">
                        ${project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                    </div>

                    <div class="project-features">
                        <div class="features-title">Key Features</div>
                        <ul class="features-list">
                            ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="project-links">
                        <a href="project-details.html?id=${project.id}" class="project-link primary">View Details</a>
                        <a href="${getCodeSampleLink(project)}" class="project-link secondary" target="_blank" rel="noopener noreferrer">Code Samples</a>
                    </div>
                </div>
                <div class="project-stats">
                    <div class="project-stat">
                        <span class="number">${getStatValue(0)}</span>
                        <span>${getStatLabel(0)}</span>
                    </div>
                    <div class="project-stat">
                        <span class="number">${getStatValue(1)}</span>
                        <span>${getStatLabel(1)}</span>
                    </div>
                    <div class="project-stat">
                        <span class="number">${getStatValue(2)}</span>
                        <span>${getStatLabel(2)}</span>
                    </div>
                </div>
            `;

            return card;
        }

        loadProjects();
    });
}

// ==================== PROJECT-DETAILS.HTML FUNCTIONS ====================
if (currentPage === 'project-details.html') {
    document.addEventListener('DOMContentLoaded', function () {
        let currentImages = [];
        let currentImageIndex = 0;

        window.openLightbox = function (images, index) {
            const modal = document.getElementById('lightboxModal');
            const lightboxImg = document.getElementById('lightboxImage');
            const lightboxCaption = document.getElementById('lightboxCaption');
            const imageCounter = document.getElementById('imageCounter');

            modal.style.display = 'block';
            currentImageIndex = index;
            currentImages = images;

            updateLightboxImage();
        };

        function updateLightboxImage() {
            const lightboxImg = document.getElementById('lightboxImage');
            const lightboxCaption = document.getElementById('lightboxCaption');
            const imageCounter = document.getElementById('imageCounter');

            if (currentImages && currentImages[currentImageIndex]) {
                lightboxImg.src = currentImages[currentImageIndex].url;
                lightboxCaption.textContent = currentImages[currentImageIndex].caption;
                imageCounter.textContent = `${currentImageIndex + 1} / ${currentImages.length}`;
            }
        }

        window.closeLightbox = function () {
            document.getElementById('lightboxModal').style.display = 'none';
        };

        window.navigateLightbox = function (direction) {
            if (!currentImages) return;

            currentImageIndex += direction;

            if (currentImageIndex < 0) {
                currentImageIndex = currentImages.length - 1;
            } else if (currentImageIndex >= currentImages.length) {
                currentImageIndex = 0;
            }

            updateLightboxImage();
        };

        function getProjectIdFromURL() {
            const urlParams = new URLSearchParams(window.location.search);
            return parseInt(urlParams.get('id'));
        }

        function findProjectById(projectId) {
            return projectsData.find(project => project.id === projectId);
        }

        function renderProjectDetails(project) {
            if (!project) {
                return '<div class="loading-container"><div class="loading-spinner"></div><p>Project not found</p></div>';
            }

            const categoryColors = {
                'web': 'var(--accent-red)',
                'mobile': '#00a86b',
                'ai': '#8e2de2',
                'system': '#f46b45',
                'network': '#4a00e0',
                'testing': '#000428',
                'algorithms': '#4a90e2'
            };

            const categoryColor = categoryColors[project.categories[0]] || 'black';

            let teamMembersHTML = '';
            if (project.details && project.details.team) {
                const team = project.details.team;
                if (typeof team === 'object') {
                    Object.keys(team).forEach(role => {
                        teamMembersHTML += `
                            <div class="team-member">
                                <div class="member-avatar">${role.charAt(0)}</div>
                                <div class="member-info">
                                    <h4>${team[role]}</h4>
                                    <p>${role}</p>
                                </div>
                            </div>
                        `;
                    });
                } else if (typeof team === 'string') {
                    const teamArray = team.split(', ');
                    teamArray.forEach(member => {
                        const initials = member.split(' ').map(n => n.charAt(0)).join('');
                        teamMembersHTML += `
                            <div class="team-member">
                                <div class="member-avatar">${initials}</div>
                                <div class="member-info">
                                    <h4>${member}</h4>
                                    <p>Team Member</p>
                                </div>
                            </div>
                        `;
                    });
                }
            }

            let featuresHTML = '';
            if (project.features && Array.isArray(project.features)) {
                project.features.forEach(feature => {
                    featuresHTML += `<li>${feature}</li>`;
                });
            }

            let technologiesHTML = '';
            if (project.tech && Array.isArray(project.tech)) {
                project.tech.forEach(tech => {
                    technologiesHTML += `<span class="tech-tag-detailed">${tech}</span>`;
                });
            }

            let statsHTML = '';
            if (project.stats) {
                Object.keys(project.stats).forEach((key, index) => {
                    if (index < 3) {
                        statsHTML += `
                            <div class="project-detail-stat-card">
                                <div class="number">${project.stats[key]}</div>
                                <div class="label">${key.replace(/([A-Z])/g, ' $1').toUpperCase()}</div>
                            </div>
                        `;
                    }
                });
            }

            let imagesHTML = '';
            if (project.images && project.images.length > 0) {
                imagesHTML = `
                    <div class="project-section">
                        <h2>PROJECT GALLERY</h2>
                        <div class="project-images-section">
                            <div class="image-gallery">
                `;

                project.images.forEach((image, index) => {
                    if (image.url) {
                        imagesHTML += `
                            <div class="gallery-item" onclick='openLightbox(${JSON.stringify(project.images).replace(/'/g, "\\'")}, ${index})'>
                                <div class="image-container">
                                    <img src="${image.url}" alt="${image.caption}" loading="lazy">
                                </div>
                                <div class="image-caption">${image.caption}</div>
                            </div>
                        `;
                    } else {
                        imagesHTML += `
                            <div class="gallery-item">
                                <div class="image-container">
                                    <div class="image-placeholder">
                                        <i class="fa-solid fa-image"></i>
                                        <span>${image.caption || 'Image'}</span>
                                    </div>
                                </div>
                                <div class="image-caption">${image.caption || 'Image'}</div>
                            </div>
                        `;
                    }
                });

                imagesHTML += `
                            </div>
                        </div>
                    </div>
                `;
            }

            let detailsSections = '';
            if (project.details) {
                Object.keys(project.details).forEach(sectionKey => {
                    if (sectionKey !== 'team' && sectionKey !== 'id') {
                        let sectionContent = '';
                        const sectionData = project.details[sectionKey];

                        if (typeof sectionData === 'string') {
                            sectionContent = `<p>${sectionData}</p>`;
                        } else if (Array.isArray(sectionData)) {
                            sectionContent = '<ul class="detail-list">';
                            sectionData.forEach(item => {
                                if (typeof item === 'string') {
                                    sectionContent += `<li>${item}</li>`;
                                } else if (typeof item === 'object') {
                                    sectionContent += `<li><strong>${Object.keys(item)[0]}:</strong> ${Object.values(item)[0]}</li>`;
                                }
                            });
                            sectionContent += '</ul>';
                        } else if (typeof sectionData === 'object') {
                            sectionContent = '<ul class="detail-list">';
                            Object.keys(sectionData).forEach(subKey => {
                                sectionContent += `<li><strong>${subKey.replace(/_/g, ' ').toUpperCase()}:</strong> ${sectionData[subKey]}</li>`;
                            });
                            sectionContent += '</ul>';
                        }

                        if (sectionContent) {
                            detailsSections += `
                                <div class="project-section">
                                    <h2>${sectionKey.replace(/([A-Z])/g, ' $1').toUpperCase()}</h2>
                                    <div class="section-content">
                                        ${sectionContent}
                                    </div>
                                </div>
                            `;
                        }
                    }
                });
            }

            const sourceCodeLink = project.links?.sourceCode || '#';
            const liveDemoLink = project.links?.liveDemo;
            const documentationLink = project.links?.documentation || '#';

            let liveDemoButton = '';
            if (liveDemoLink) {
                liveDemoButton = `
                    <a href="${liveDemoLink}" class="project-link-btn secondary" target="_blank" rel="noopener noreferrer">
                        <i class="fa-solid fa-external-link-alt"></i>
                        <span>Live Demo</span>
                    </a>
                `;
            }

            return `
                <div class="project-header-section">
                    <span class="project-category-tag" style="background: ${categoryColor};">${project.category}</span>
                    <h1>${project.title}</h1>
                    
                    <div class="project-meta-info">
                        <div class="meta-item">
                            <i class="fa-solid fa-calendar"></i>
                            <span>${project.date}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fa-solid fa-users"></i>
                            <span>Team: ${project.team}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fa-solid fa-code"></i>
                            <span>${project.tech.length} Technologies</span>
                        </div>
                    </div>
                    
                    <p class="project-overview">${project.description}</p>
                    
                    <div class="tech-stack-details">
                        ${technologiesHTML}
                    </div>
                </div>
                
                <div class="project-content-grid">
                    <div class="main-content">
                        ${detailsSections || `
                            <div class="project-section">
                                <h2>PROJECT OVERVIEW</h2>
                                <div class="section-content">
                                    <p>${project.description}</p>
                                </div>
                            </div>
                            
                            <div class="project-section">
                                <h2>KEY FEATURES</h2>
                                <div class="section-content">
                                    <ul class="feature-list">
                                        ${featuresHTML}
                                    </ul>
                                </div>
                            </div>
                        `}
                        
                        ${statsHTML ? `
                            <div class="project-section">
                                <h2>PROJECT STATISTICS</h2>
                                <div class="section-content">
                                    <div class="stats-grid">
                                        ${statsHTML}
                                    </div>
                                </div>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div class="sidebar-content">
                        <div class="project-section">
                            <h2>PROJECT LINKS</h2>
                            <div class="project-links-section">
                                <a href="${sourceCodeLink}" class="project-link-btn primary" ${sourceCodeLink !== '#' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                                    <i class="fa-brands fa-github"></i>
                                    <span>View Source Code</span>
                                </a>
                                ${liveDemoButton}
                                <a href="${documentationLink}" class="project-link-btn secondary" ${documentationLink !== '#' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                                    <i class="fa-solid fa-file-pdf"></i>
                                    <span>Documentation</span>
                                </a>
                            </div>
                        </div>
                        
                        ${teamMembersHTML ? `
                            <div class="project-section">
                                <h2>PROJECT TEAM</h2>
                                <div class="project-team-section">
                                    ${teamMembersHTML}
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="project-section">
                            <h2>PROJECT INFO</h2>
                            <div class="section-content">
                                <div class="meta-item">
                                    <i class="fa-solid fa-layer-group"></i>
                                    <span>Category: ${project.category}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fa-solid fa-tags"></i>
                                    <span>Tags: ${project.categories.join(', ')}</span>
                                </div>
                                <div class="meta-item">
                                    <i class="fa-solid fa-calendar-check"></i>
                                    <span>Completed: ${project.date}</span>
                                </div>
                            </div>
                        </div>
                        
                        ${imagesHTML}
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 40px;">
                    <a href="projects.html" class="back-to-projects">
                        <i class="fa-solid fa-arrow-left"></i>
                        Back to All Projects
                    </a>
                </div>

                <div id="lightboxModal" class="lightbox-modal">
                    <span class="lightbox-close" onclick="closeLightbox()">&times;</span>
                    <button class="lightbox-nav prev" onclick="navigateLightbox(-1)">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="lightbox-nav next" onclick="navigateLightbox(1)">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                    <div class="lightbox-content">
                        <div class="lightbox-image-container">
                            <img id="lightboxImage" src="" alt="">
                            <div id="lightboxCaption" class="lightbox-caption"></div>
                        </div>
                    </div>
                    <div id="imageCounter" class="image-counter"></div>
                </div>
            `;
        }

        const projectId = getProjectIdFromURL();
        const project = findProjectById(projectId);
        const container = document.getElementById('projectDetailsContainer');

        container.innerHTML = '<div class="loading-container"><div class="loading-spinner"></div><p>Loading project details...</p></div>';

        setTimeout(() => {
            container.innerHTML = renderProjectDetails(project);
            if (project) {
                document.title = `${project.title} - Project Details | Md. Asifuzzaman`;
                updateProjectMetaTags(project);
            }
        }, 500);

        document.addEventListener('keydown', (e) => {
            if (document.getElementById('lightboxModal') && document.getElementById('lightboxModal').style.display === 'block') {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    navigateLightbox(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateLightbox(1);
                }
            }
        });
    });
}

// ==================== CERTIFICATES.HTML FUNCTIONS ====================
if (currentPage === 'certificates.html') {
    document.addEventListener('DOMContentLoaded', function () {
        const certificates = [
            { id: 'phoenix-ctf-2025', image: './assets/certificates/Phoenix CTF 2025.webp', title: 'Phoenix Summit CTF 2025', subtitle: 'Team Rank #7 | 18/24 Challenges Solved | 720 Points' },
            { id: 'vishwactf-2025', image: './assets/certificates/VishwaCTF.webp', title: 'VishwaCTF 2025 Participation', subtitle: '3-5 March 2025 | VIIT University & HackerOne' },
            { id: 'bcs-ict-fest-2025', image: './assets/certificates/BCS ICT FEST.webp', title: 'BCS ICT FEST 2025 - CTF Category', subtitle: 'Participation Certificate | Bangladesh Computer Society' },
            { id: 'nahamcon-2025', image: './assets/certificates/NahamCon 2025.webp', title: 'NahamCon 2025 CTF Competition', subtitle: 'Rank 88/2968 Teams | 34/55 Challenges Solved' },
            { id: 'smp-ctf-2024', image: './assets/certificates/SMP CTF.webp', title: 'SMP CTF 2024 - Selection Round', subtitle: 'SMP Cyber Security | 30 December 2024' },
            { id: 'ai-academy-2024', image: './assets/certificates/Ai Academy.webp', title: 'AI For Bangladesh Summit 2024', subtitle: 'AI Academy of Bangladesh | Business & Innovation' },
            { id: 'web-dev-bootcamp-2024', image: './assets/certificates/Web Development.webp', title: '21 Days of Code - Web Development', subtitle: 'Bootcamp Completion | Programming Hero' },
            { id: 'problem-solving-bootcamp-2024', image: './assets/certificates/Problem Solving.webp', title: '21 Days of Code - Problem Solving', subtitle: 'Bootcamp Completion | Programming Hero' },
            { id: 'beginner-ctf-training-2024', image: './assets/certificates/Beginner CTF Training.webp', title: 'Beginner CTF Training - East West University', subtitle: 'Training Completion | Cyber Bangla Collaboration' },
            { id: 'htb-certificate-2024', image: './assets/certificates/HTB Certificate.webp', title: 'HackTheBox Team Ranking', subtitle: 'Team Rank 525th | 40/77 Challenges Solved' }
        ];

        let currentImageIndex = 0;

        window.openLightbox = function (certId) {
            const index = certificates.findIndex(cert => cert.id === certId);
            if (index !== -1) {
                currentImageIndex = index;
                updateLightboxImage();
                document.getElementById('lightboxModal').style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        };

        function updateLightboxImage() {
            const cert = certificates[currentImageIndex];
            if (cert) {
                document.getElementById('lightboxImage').src = cert.image;
                document.getElementById('lightboxImage').alt = cert.title;
                document.getElementById('lightboxCaption').innerHTML = `<strong>${cert.title}</strong><br>${cert.subtitle}`;
                document.getElementById('imageCounter').textContent = `${currentImageIndex + 1} / ${certificates.length}`;
            }
        }

        window.closeLightbox = function () {
            document.getElementById('lightboxModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        };

        window.navigateLightbox = function (direction) {
            currentImageIndex += direction;
            if (currentImageIndex < 0) {
                currentImageIndex = certificates.length - 1;
            } else if (currentImageIndex >= certificates.length) {
                currentImageIndex = 0;
            }
            updateLightboxImage();
        };

        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('lightboxModal');
            if (modal.style.display === 'block') {
                if (e.key === 'Escape') {
                    closeLightbox();
                } else if (e.key === 'ArrowLeft') {
                    navigateLightbox(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateLightbox(1);
                }
            }
        });

        const filterButtons = document.querySelectorAll('.filter-btn');
        const certificateItems = document.querySelectorAll('.certificate-item');
        const filterCount = document.getElementById('filterCount');

        certificateItems.forEach(item => {
            const categorySpan = item.querySelector('.certificate-category');
            if (categorySpan) {
                const category = categorySpan.textContent.toLowerCase();
                if (category.includes('ctf') || category.includes('competition') ||
                    category.includes('international') || category.includes('platform')) {
                    item.dataset.category = 'ctf';
                } else if (category.includes('training') || category.includes('bootcamp') ||
                    category.includes('development') || category.includes('technical') ||
                    category.includes('conference') || category.includes('ai')) {
                    item.dataset.category = 'development';
                } else {
                    item.dataset.category = 'other';
                }
            }
        });

        function countCertificates() {
            const ctfCount = document.querySelectorAll('.certificate-item[data-category="ctf"]').length;
            const devCount = document.querySelectorAll('.certificate-item[data-category="development"]').length;
            const otherCount = document.querySelectorAll('.certificate-item[data-category="other"]').length;
            return { ctfCount, devCount, otherCount, total: ctfCount + devCount + otherCount };
        }

        function updateSummaryCounts() {
            const counts = countCertificates();
            document.getElementById('totalCertificates').textContent = counts.total;
            document.getElementById('ctfCertificates').textContent = counts.ctfCount;
            document.getElementById('devCertificates').textContent = counts.devCount;
        }

        function filterCertificates(category) {
            const counts = countCertificates();
            certificateItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'grid';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
            if (category === 'all') {
                filterCount.textContent = `Showing all ${counts.total} certificates`;
            } else if (category === 'ctf') {
                filterCount.textContent = `Showing ${counts.ctfCount} CTF competition certificates`;
            } else if (category === 'development') {
                filterCount.textContent = `Showing ${counts.devCount} development & training certificates`;
            }
        }

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                filterCertificates(this.dataset.filter);
            });
        });

        updateSummaryCounts();
        const counts = countCertificates();
        filterCount.textContent = `Showing all ${counts.total} certificates`;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        certificateItems.forEach((item, index) => {
            item.style.opacity = '0.2';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            item.style.transitionDelay = `${index * 0.01}s`;
            observer.observe(item);
        });
    });
}

// ==================== PROFILE.HTML FUNCTIONS ====================
if (currentPage === 'profile.html') {
    document.addEventListener('DOMContentLoaded', function () {
        const revealLayer = document.querySelector('.reveal-container');
        const revealWrapper = document.querySelector('.reveal-wrapper');
        let isActive = false;

        revealWrapper.addEventListener('mouseenter', () => {
            isActive = true;
            revealLayer.classList.add('active');
        });

        revealWrapper.addEventListener('mouseleave', () => {
            isActive = false;
            revealLayer.classList.remove('active');
        });

        // Check if jQuery and GSAP are loaded
        if (typeof $ !== 'undefined' && typeof gsap !== 'undefined') {
            $(document).mousemove((e) => {
                if (!isActive) return;

                const wrapperRect = revealWrapper.getBoundingClientRect();
                const x = e.clientX - wrapperRect.left;
                const y = e.clientY - wrapperRect.top;

                if (x >= 0 && x <= wrapperRect.width && y >= 0 && y <= wrapperRect.height) {
                    gsap.to(revealLayer, {
                        '--x': `${x}px`,
                        '--y': `${y}px`,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            });
        }
    });
}

// ==================== RESUME.HTML FUNCTIONS ====================
if (currentPage === 'resume.html') {
    document.addEventListener('DOMContentLoaded', () => {
        const skillBars = document.querySelectorAll('.cv-skill-progress');
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.transition = 'width 1s ease-in-out';
                bar.style.width = width;
            }, 500);
        });
    });
}

// ==================== TECH.HTML FUNCTIONS ====================
if (currentPage === 'tech.html') {
    document.addEventListener('DOMContentLoaded', function () {
        const techItems = document.querySelectorAll('.tech-item');
        techItems.forEach(item => {
            item.addEventListener('click', () => {
                const techName = item.querySelector('h4').textContent;
                console.log(`Selected: ${techName}`);
            });
        });
    });
}

// ==================== BACK TO TOP BUTTON ====================
(function initBackToTop() {
    // Create button if it doesn't exist (as fallback)
    if (!document.getElementById('backToTop')) {
        const btn = document.createElement('button');
        btn.id = 'backToTop';
        btn.className = 'back-to-top';
        btn.setAttribute('aria-label', 'Back to top');
        btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
        document.body.appendChild(btn);
    }

    const backToTop = document.getElementById('backToTop');

    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
})();